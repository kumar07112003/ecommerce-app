package E_com.WebsiteProject.User.Service;

import E_com.WebsiteProject.User.Repository.phone_repo;
import E_com.WebsiteProject.User.entity.Phone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Phone_service{
    @Autowired
    private phone_repo phoneRepo;

    public Phone save(Phone phone){
        return phoneRepo.save(phone);
    }

    public List<Phone> saveAll(List<Phone> phone){
        return phoneRepo.saveAll(phone);
    }

    public List<Phone> findAll()
    {
        return phoneRepo.findAll();
    }
}
