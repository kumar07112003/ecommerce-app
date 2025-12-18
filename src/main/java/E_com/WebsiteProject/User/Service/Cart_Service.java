package E_com.WebsiteProject.User.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import E_com.WebsiteProject.User.Repository.cart_repo;
import E_com.WebsiteProject.User.Repository.product_Repo;
import E_com.WebsiteProject.User.entity.Cart;
import E_com.WebsiteProject.User.entity.Product;

@Service
public class Cart_Service {
	
	@Autowired
	private cart_repo cr;
	
	@Autowired
	private product_Repo pr;
	
	//CartSave
	public Cart save(Integer productId) {
		
		Product product= pr.findById(productId).orElse(null);
		Cart cs=new Cart();
		if(product!=null) {
			cs.setProductId(productId);
			cs.setCategory(product.getCategory());
			cs.setDescription(product.getDescription());
			cs.setImageUrl(product.getImageUrl());
			cs.setName(product.getName());
			cs.setPrice(product.getPrice());
			cs.setRating(product.getRating());
			cs.setStock(product.getStock());
		}
		
		return cr.save(cs);
	}
	
	//cartRemove
	public String deleteCart(Integer id) {
		Cart c=cr.findById(id).orElse(null);
		if(c!=null) {
			cr.delete(c);
			return "Data Deleted Successfully";
		}
		 return "Data Not Found";
	}
	//
	public List<Cart> findAll(){
		return cr.findAll();
	}
	
	public Cart cartGetById(Integer id) {
		Optional<Cart>c=cr.findById(id);
		return c.isPresent() ? c.get()  :null;
		
		
	}

}
