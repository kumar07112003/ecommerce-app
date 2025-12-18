package E_com.WebsiteProject.User.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import E_com.WebsiteProject.User.Repository.sign_Repo;
import E_com.WebsiteProject.User.entity.Signup;

@CrossOrigin(origins = "http://localhost:5174")
@RestController
public class Controller {
	
	@Autowired
	private sign_Repo signrepo;
	 private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	    public Controller(sign_Repo signrepo){
	        this.signrepo = signrepo;
	    }
	// http://localhost:8080/signup
    @PostMapping("/signup")
	public String signupsubmit(@RequestBody	Signup signup)
	{
		if (signrepo.findByEmail(signup.getEmail())!=null){
			return "User already exsist";
		}
		signup.setPassword(encoder.encode(signup.getPassword()));
		signrepo.save(signup);
		
		return "SignupSuccessfully";
	}
    //http://localhost:8080/login
    @PostMapping("/login")
    public String loginsubmit(@RequestBody Signup signup) {
    	 
    	        Signup exUser=signrepo.findByEmail(signup.getEmail());
    	        
    	        if(exUser == null) {
    	        	   return "User Not Found"; 
    	        }
    	        if(encoder.matches(signup.getPassword(), exUser.getPassword())) {
    	        	return "Login Successfully";
    	        }
				return "Invalid  Password";
    }
	
	

}
