package E_com.WebsiteProject.User.Controller;

import org.springframework.web.bind.annotation.*;

import E_com.WebsiteProject.User.Service.Delivery_Service;
import E_com.WebsiteProject.User.entity.DeliveryAddress;

@RestController
@CrossOrigin("http://localhost:3000")
public class Delivery_Controller {

	private Delivery_Service delivery_Service;
	
	@PostMapping("/save_Address")
	public DeliveryAddress save(@RequestBody DeliveryAddress d) {
		return delivery_Service.save(d);
	}
	
	@DeleteMapping("/delete_Address")
	public DeliveryAddress delete(@PathVariable Integer id) {
		return delivery_Service.delete(id);
	}
}
