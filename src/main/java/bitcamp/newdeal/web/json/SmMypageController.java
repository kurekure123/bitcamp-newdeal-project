package bitcamp.newdeal.web.json;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.newdeal.domain.Card;
import bitcamp.newdeal.domain.Member;

@RestController
@RequestMapping("/html")
public class SmMypageController {
    
    @PostMapping("mypage")
    public Object user(HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();
        
        Member loginuser = (Member)session.getAttribute("loginUser");
        
       
        result.put("lname", loginuser.getName());
        
        return result;
    }
    
    @PostMapping("card")
    public Object cards(HttpSession session, Card card) {
        HashMap<String, Object> result = new HashMap<>();
        
        session.setAttribute("sCard", card);
        Card uCard = (Card)session.getAttribute("sCard");
        result.put("uCard", uCard);
        
        
        return result;
    }
    
    

}
