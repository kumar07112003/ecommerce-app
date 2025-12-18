package E_com.WebsiteProject.User.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Cart {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private Integer productId;
	private String name;
	private String  description;
	private double rating;
	private double price;
	private int stock;
	private String category;
	private String imageUrl;

}
