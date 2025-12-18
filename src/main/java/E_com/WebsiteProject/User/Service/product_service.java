package E_com.WebsiteProject.User.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import E_com.WebsiteProject.User.Repository.product_Repo;
import E_com.WebsiteProject.User.entity.Product;

@Service
public class product_service {
	
	@Autowired
	private product_Repo pr;
	
	//Save
	public Product save(Product product) {
		return pr.save(product);
	}
	
	//SaveListOfProduct
	public  List<Product> saveProduct(List<Product> product) {
		return pr.saveAll(product);
	}
	
	
	//GetById
	public Product getById(Integer id)
	{
		Optional<Product> p=pr.findById(id);
		
	     return p.isPresent() ?p.get() : null;
	}
	
	// FindAllProducts Pageable pageble (pageble).getContent
	public List<Product> findAll() {
		return pr.findAll();
	}
	
	public  String delete(Integer id) {
		Product p=pr.findById(id).orElse(null);
		
		if(p!=null) {
			
			pr.delete(p);
			return "Data Deleted Successfully";
			
		}
		return "Data  Not Found";
	}
	
	public List<Product> UpdateAll(List <Product> newproduct){
		return pr.saveAll(newproduct);
	}
	
	
	public String Update(Integer id,Product newProduct) {
		Product exProdcut= pr.findById(id).orElse(null);
		
		if(exProdcut!=null) {
			exProdcut.setName(newProduct.getName());
			exProdcut.setPrice(newProduct.getPrice());
			exProdcut.setStock(newProduct.getStock());
			exProdcut.setRating(newProduct.getRating());
			exProdcut.setImageUrl(newProduct.getImageUrl());
			exProdcut.setCategory(newProduct.getCategory());
			
			pr.save(exProdcut);
			return "Data Updated Successfully";
		}
		return "Data Not Found";
		
		}
	
	//getAllTheProduct
	public List<Product> getAllProduct(){
		return pr.findAll();
	}
	

}
