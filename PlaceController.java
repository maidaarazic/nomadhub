package com.example.demo;

import java.util.ArrayList;
import java.util.List;

import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/places")
public class PlaceController {
	
	@GetMapping("/getAll")
    public List<Place> getAllPlaces() {
        DatabaseReference ref = FirebaseDatabase.getInstance().getReference("places");
        List<Place> places = new ArrayList<>();

        ref.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(DataSnapshot dataSnapshot) {
                for (DataSnapshot placeSnapshot : dataSnapshot.getChildren()) {
                    Place place = placeSnapshot.getValue(Place.class);
                    places.add(place);
                }
            }

            @Override
            public void onCancelled(DatabaseError databaseError) {

            }
        });

        return places;
    }
	
	
	
    @PostMapping("/add")
    public Place addPlace(@RequestBody Place place) {
        DatabaseReference ref = FirebaseDatabase.getInstance().getReference("places");
        DatabaseReference newPlaceRef = ref.push();
        newPlaceRef.setValueAsync(place);

        return place;
    }
}
