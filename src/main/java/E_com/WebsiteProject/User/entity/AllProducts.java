package E_com.WebsiteProject.User.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class AllProducts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer apid;

    private String imageUrl;
    private  String category;
    private Double price;

}
