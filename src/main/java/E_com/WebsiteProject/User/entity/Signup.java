package E_com.WebsiteProject.User.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Data
public class Signup {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int sid;
	private String firstName;
	private String lastName;
	private String gender;
	private String email;
	private String password;
	private String resetPassword;

}
