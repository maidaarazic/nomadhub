package ratings_and_reviews;
import java.util.List;


public class PlaceRatingReview {
    private double rating;
    private List<String> reviews;
    private List<PlaceRatingReview> ratingsAndReviews;

    
    public double getRating() {
        return rating;
    }

    public List<String> getReviews() {
        return reviews;
    }

   
    public void setRating(double rating) {
        this.rating = rating;
    }

    public void setReviews(List<String> reviews) {
        this.reviews = reviews;
    }
}
