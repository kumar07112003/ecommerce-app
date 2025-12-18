package E_com.WebsiteProject.User.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import E_com.WebsiteProject.User.entity.DeliveryAddress;

public interface Delivery_repo extends JpaRepository<DeliveryAddress, Integer> {

}
