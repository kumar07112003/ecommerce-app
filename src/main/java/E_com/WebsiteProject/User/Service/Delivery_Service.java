package E_com.WebsiteProject.User.Service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import E_com.WebsiteProject.User.Repository.Delivery_repo;
import E_com.WebsiteProject.User.entity.DeliveryAddress;

@Service
public class Delivery_Service {
	 @Autowired
      private Delivery_repo delivery_repo;
	 
	 public DeliveryAddress save(DeliveryAddress d)
	 {
		 return delivery_repo.save(d);
	 }
	 
	 public DeliveryAddress delete(Integer id) {
		 
		 Optional<DeliveryAddress> o =delivery_repo.findById(id);
		 
		 return o.isPresent()?o.get():null;
	 }

}
