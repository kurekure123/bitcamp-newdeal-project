package bitcamp.newdeal.web.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.newdeal.domain.Card;
import bitcamp.newdeal.domain.Member;
import bitcamp.newdeal.service.CardService;

@RestController
@RequestMapping("/html")
public class SmMypageController {
    
    @Autowired
    CardService cardService;
    
    @PostMapping("mypage")
    public Object user(HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();
        
        Member loginuser = (Member)session.getAttribute("loginUser");
        
        result.put("lname", loginuser.getName());
        
        return result;
    }
    
    @PostMapping("addCard")
    public Object add(Card card,HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();
        Member loginuser = (Member)session.getAttribute("loginUser");
        card.setMemNo(loginuser.getNo());
        try {
            cardService.add(card);
            result.put("status", "success");
        }catch(Exception e) {
            result.put("status", "fail");
            result.put("message", e.getMessage());
        }
        return result;
    }
    
    @GetMapping("{no}")
   public Object myCard(@PathVariable int no, HttpSession session) {
    	Member loginUser = (Member) session.getAttribute("loginUser");
		System.out.println(loginUser);
		System.out.println(no);
		
		HashMap<String, Object> result = new HashMap<>();
		
		List<Card> selectCardInfo = cardService.myCard(no);
		result.put("data", selectCardInfo);
       
       return result;
   }
    
    @GetMapping("list")
	public Object list(HttpSession session) {
		Member loginUser = (Member) session.getAttribute("loginUser");
		System.out.println(loginUser);
		
		List<Card> list = cardService.list(loginUser.getNo());
		HashMap<String, Object> result = new HashMap<>();
		
		result.put("status", "success");
		result.put("list", list);
		return result;
	}
    
    
    
    
    

}
