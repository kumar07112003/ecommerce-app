package E_com.WebsiteProject.User.Service;

import E_com.WebsiteProject.User.Repository.Allproducts_repo;
import E_com.WebsiteProject.User.entity.AllProducts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Allproducts_Service {

    @Autowired
    private Allproducts_repo allproductsRepo;

    public AllProducts save(AllProducts allProducts)
    {
        return allproductsRepo.save(allProducts);
    }

    public List<AllProducts> saveALl(List<AllProducts> allProducts)
    {
        return allproductsRepo.saveAll(allProducts);
    }
    public List <AllProducts> findAll()
    {
        return allproductsRepo.findAll();
    }

}
