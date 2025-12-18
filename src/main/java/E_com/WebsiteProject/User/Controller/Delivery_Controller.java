package E_com.WebsiteProject.User.Controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import E_com.WebsiteProject.User.Service.Delivery_Service;
import E_com.WebsiteProject.User.entity.DeliveryAddress;

@RestController
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
