package E_com.WebsiteProject.User.Controller;

import E_com.WebsiteProject.User.Service.Allproducts_Service;
import E_com.WebsiteProject.User.entity.AllProducts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.origin.Origin;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class Allproducts_Controller {

    @Autowired
    private Allproducts_Service allproductsService;

    // http://localhost:8080/allProductsSave
    @PostMapping("/allProductsSave")
    public AllProducts allProductsSave(@RequestBody AllProducts allProducts){
        return allproductsService.save(allProducts);
    }
    //http://localhost:8080/allProductsSaveAll
    @PostMapping("allProductsSaveAll")
    public List<AllProducts> allProductsSaveAll(@RequestBody List<AllProducts> allProducts)
    {
        return allproductsService.saveALl(allProducts);
    }
    //http://localhost:8080/findAllCategoryProducts
    @GetMapping("/findAllCategoryProducts")
    public  List<AllProducts> findAllCategoryProducts()
    {
        return allproductsService.findAll();
    }
}
