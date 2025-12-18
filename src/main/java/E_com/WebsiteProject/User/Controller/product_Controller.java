package E_com.WebsiteProject.User.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import E_com.WebsiteProject.User.Service.product_service;
import E_com.WebsiteProject.User.entity.Product;



@RestController
@CrossOrigin("http://localhost:5174")
public class product_Controller {
	
	@Autowired
	private product_service ps;
	
	@PostMapping("/save")
	public Product save(@RequestBody Product product) {
		return ps.save(product);
	}
	
	// 	
	@PostMapping("/saveAllProduct")
	public List<Product> saveALLProduct(@RequestBody	List<Product> product) {
			
		return ps.saveProduct(product);
	}
	
	// http://localhost:8080/id=1
	
	@GetMapping("/saveProductById")
	public Product getById(@RequestParam Integer id) {
		return ps.getById(id);
	}
	//@RequestParam int pageNo,@RequestParam int postPerPage
	//PageRequest.of(pageNo-1, postPerPage)
	@GetMapping("/findAllProduct")
	
	public List<Product> findAll(){
		return ps.findAll();
	}
	
	
	@DeleteMapping("/deleteProduct")
	public String deleteProduct(@RequestParam Integer id) {
		return ps.delete(id);
	}
	
	@PutMapping("/updateProduct")
	public String Update(@RequestParam Integer id,@RequestBody Product newProduct) {
		return ps.Update(id, newProduct);
	}
	
	
	
	

}
