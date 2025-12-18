package E_com.WebsiteProject.User.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import E_com.WebsiteProject.User.entity.Signup;

public interface sign_Repo extends JpaRepository<Signup, Integer> {
	
	public Signup findByEmail(String email);

}

