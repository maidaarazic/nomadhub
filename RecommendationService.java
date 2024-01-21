package recommendation;

import jakarta.faces.bean.ManagedBean;
import jakarta.faces.bean.RequestScoped;
@Service
public class RecommendationService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PlaceRepository placeRepository;
    public List<Place> recommend(Integer userId) {
        
        User user = userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException("User not found"));
        List<Rating> ratings = user.getRatings();
       
        Map<Integer, Double> similarities = new HashMap<>();
        for (User otherUser : userRepository.findAll()) {
            if (otherUser.getId().equals(userId)) continue;
            List<Rating> otherRatings = otherUser.getRatings();
            double similarity = calculateSimilarity(ratings, otherRatings);
            similarities.put(otherUser.getId(), similarity);
        }
       
        List<Recommendation> recommendations = new ArrayList<>();
        for (Map.Entry<Integer, Double> entry : similarities.entrySet()) {
            User otherUser = userRepository.findById(entry.getKey()).orElseThrow(() -> new EntityNotFoundException("User not found"));
            double similarity = entry.getValue();
            for (Rating otherRating : otherUser.getRatings()) {
                Place place = otherRating.getPlace();
                if (ratings.stream().noneMatch(r -> r.getPlace().equals(place))) {
                    double predictedRating = calculatePredictedRating(user, place, similarity, otherRating.getRating());
                    recommendations.add(new Recommendation(place, predictedRating));
                }
            }
        }
       
        recommendations.sort(Comparator.comparingDouble(Recommendation::getPredictedRating).reversed());
        
        List<Place> places = placeRepository.findAllById(recommendations.stream().map(Recommendation::getPlace).collect(Collectors.toList()));
        return places;
    }
    private double calculateSimilarity(List<Rating> ratings1, List<Rating> ratings2) {
       
        int n = ratings1.size() + ratings2.size();
        if (n == 0) return 0;
        double sum1 = ratings1.stream().mapToDouble(Rating::getRating).sum();
        double sum2 = ratings2.stream().mapToDouble(Rating::getRating).sum();
        double sum1Sq = ratings1.stream().mapToDouble(r -> Math.pow(r.getRating(), 2)).sum();
        double sum2Sq = ratings2.stream().mapToDouble(r -> Math.pow(r.getRating(), 2)).sum();
        double pSum = ratings1.stream()
                .filter(r -> ratings2.contains(r))
                .mapToDouble(r -> r.getRating() * ratings2.get(ratings1.indexOf(r)).getRating())
                .sum();
        double num = pSum - (sum1 * sum2 / n);
        double den = Math.sqrt((sum1Sq - Math.pow(sum1, 2) / n) * (sum2Sq - Math.pow(sum2, 2) / n));
        if (den == 0) return 0;
        return num
