package E_com.WebsiteProject.User.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import E_com.WebsiteProject.User.Repository.Savecart_Repo;
import E_com.WebsiteProject.User.Repository.product_Repo;
import E_com.WebsiteProject.User.entity.Product;
import E_com.WebsiteProject.User.entity.Save_cart;

@Service
public class Savecart_Service {
	
	@Autowired
	private Savecart_Repo scr;
	
	@Autowired
	private product_Repo pr;
	
	
	public List<Save_cart> listSaveForLater()
	{
		return scr.findAll();
	}
	
	public Save_cart saveCartLater(Integer productId) {
		Product product= pr.findById(productId)
				 .orElseThrow(() -> new RuntimeException("Product not found"));
		          	Save_cart savedcart=new Save_cart();
		if(product!=null) {
		    
		    savedcart.setCategory(product.getCategory());
		    savedcart.setDescription(product.getDescription());
		    savedcart.setImageUrl(product.getImageUrl());
		    savedcart.setName(product.getName());
		    savedcart.setPrice(product.getPrice());
		    savedcart.setStock(product.getStock());
		    savedcart.setRating(product.getRating());
		    savedcart.setProductId(productId);
		    
		   
		}
		return scr.save(savedcart);
	}
		
		public Save_cart saveCartLaterGetById(Long id) {
			Optional<Save_cart> o=scr.findById(id);
			
			return o.isPresent()?o.get():null;
		}
		
		
		
		
	

	public String saveCartLaterDeleteByID(Long id) {
		Save_cart sc=scr.findById(id).orElse(null);
		
			if(sc!=null)
			{
				scr.deleteById(id);
				return "Data Deleted Successfully";
			}
			return "Data Not Found";
		}
		
		
	}

