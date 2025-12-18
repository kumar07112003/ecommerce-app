package E_com.WebsiteProject.User.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import E_com.WebsiteProject.User.Repository.Home_repo;
import E_com.WebsiteProject.User.entity.Home;

@Service
public class Home_Service {

	@Autowired
	private Home_repo home_repo;
	
	
	// getHomeProduct
	public List<Home> getHomeProduct() {
		return home_repo.findAll();
	}
	//saveHomeProduct
	public List<Home> saveHomeProduct(List<Home> home) {
		return home_repo.saveAll(home);
	}
}
