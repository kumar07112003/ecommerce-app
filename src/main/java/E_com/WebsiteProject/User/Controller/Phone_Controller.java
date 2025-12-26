package E_com.WebsiteProject.User.Controller;

import E_com.WebsiteProject.User.Service.Phone_service;
import E_com.WebsiteProject.User.entity.Phone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class Phone_Controller{
    @Autowired
    private Phone_service phoneService;

    @PostMapping("/save/phone")
    public Phone save(@RequestBody  Phone phone)
    {
        return phoneService.save(phone);
    }
    // http://localhost:8080/saveAll/phone
    @PostMapping("/saveAll/phone")
    public List<Phone> saveAll(@RequestBody List<Phone> phone)
    {
        return phoneService.saveAll(phone);
    }

    @GetMapping("/findAll/Phone")
    public List<Phone> findAll()
    {
        return phoneService.findAll();
    }


}
