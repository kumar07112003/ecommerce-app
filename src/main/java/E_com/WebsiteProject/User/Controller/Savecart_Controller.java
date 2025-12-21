package E_com.WebsiteProject.User.Controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import E_com.WebsiteProject.User.Service.Savecart_Service;
import E_com.WebsiteProject.User.entity.Save_cart;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Savecart_Controller {

	@Autowired
	private Savecart_Service scs;
	
	@GetMapping("/listSaveForLater")
	public List<Save_cart> listSaveForLater()
	{
		return scs.listSaveForLater();
	}
	
	// http://localhost:8080/saveCartLater
	@PostMapping("/saveCartLater")
	public Save_cart  saveCartLater(@RequestBody Map<String,Integer> body) {
		Integer productId=body.get("productId");
		return scs.saveCartLater(productId);
	}

	@DeleteMapping("/saveCartLaterDeleteByID/{id}")
	public String saveCartLaterDeleteByID(@PathVariable Long id) {
		return scs.saveCartLaterDeleteByID(id);
	}
	
	@GetMapping("/saveCartLaterGetById/{id}")
	public Save_cart saveCartLaterGetById(@PathVariable Long id) {
		return scs.saveCartLaterGetById(id);
	}
}
