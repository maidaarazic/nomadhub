public class PlaceForm {
    private String name;
    private String location;
    private String category;
    private boolean hasWifi;
    private boolean hasPowerOutlets;

    
    public String getName() {
        return name;
    }

    public String getLocation() {
        return location;
    }

    public String getCategory() {
        return category;
    }

    public boolean isHasWifi() {
        return hasWifi;
    }

    public boolean isHasPowerOutlets() {
        return hasPowerOutlets;
    }

  
    public void setName(String name) {
        this.name = name;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setHasWifi(boolean hasWifi) {
        this.hasWifi = hasWifi;
    }

    public void setHasPowerOutlets(boolean hasPowerOutlets) {
        this.hasPowerOutlets = hasPowerOutlets;
    }
}
