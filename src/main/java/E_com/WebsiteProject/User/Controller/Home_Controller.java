package E_com.WebsiteProject.User.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import E_com.WebsiteProject.User.Service.Home_Service;
import E_com.WebsiteProject.User.entity.Home;
@RestController
@CrossOrigin("http://localhost:5174")
public class Home_Controller {

	@Autowired
	private Home_Service home_Service;
	
	//"http://localhost:8080/getHomeProduct"
	@GetMapping("/getHomeProduct")
	public List<Home> getHomeProduct(){
		return home_Service.getHomeProduct();
	}
	//"http://localhost:8080/saveHomeProduct"
	@PostMapping("/saveHomeProduct")
	public List<Home> saveHomeProduct(@RequestBody List<Home> home) {
		return home_Service.saveHomeProduct(home);
	}
}
