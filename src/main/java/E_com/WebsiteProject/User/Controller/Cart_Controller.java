package E_com.WebsiteProject.User.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import E_com.WebsiteProject.User.Service.Cart_Service;
import E_com.WebsiteProject.User.entity.Cart;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Cart_Controller {
	
	@Autowired
	private Cart_Service cart_ser;
	
	@GetMapping("/findAllCart")
	public List<Cart>findAllCart(){
		return cart_ser.findAll();
	}
	// http://localhost:8080/addToCart
	@PostMapping("/addToCart")
	public Cart saveCart (@RequestBody Map<String,Integer>body) {
		Integer productId=body.get("productId");
		return cart_ser.save(productId);
		
	}

	@DeleteMapping("/deleteCart/{id}")
	public String deleteCart(@PathVariable Integer  id) {
		return cart_ser.deleteCart(id);
	}
	// http://localhost:8080/cartGetById
	@GetMapping("/cartGetById/{id}")
	public Cart cartGetById(@PathVariable Integer id) {
		return cart_ser.cartGetById(id);
	}
}
