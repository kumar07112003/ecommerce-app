package E_com.WebsiteProject.User.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import E_com.WebsiteProject.User.entity.Cart;

public interface cart_repo  extends JpaRepository<Cart, Integer>{
}