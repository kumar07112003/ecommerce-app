package E_com.WebsiteProject.User.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Phone {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Integer pid;

    private String name;
    private String brand;
    private Double price;
    private Double rating;
    private  String stock;
    private String description;
    private String imageUrl;
    private String ram;
    private String rom;
    private String expandable;
    private String displayCm;
    private String displayInches;
    private String displayType;
    private String rearCamera;
    private String frontCamera;
    private String batteryMah;
    private String warrantyPeriod;

}
