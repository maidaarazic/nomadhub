import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;




@Controller
public class PlaceController {
    @GetMapping("/form")
    public String showForm(Model model) {
        model.addAttribute("placeForm", new PlaceForm());
        model.addAttribute("categories", List.of("coffee shop", "restaurant", "coworking space"));
        return "place_form";
    }

    @PostMapping("/submit")
    public String submitForm(@ModelAttribute PlaceForm placeForm) {
    
        System.out.println(placeForm); 
        return "redirect:/success"; 
    }
}
