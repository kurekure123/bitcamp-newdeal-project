package bitcamp.newdeal.web.json;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.newdeal.domain.Member;
import bitcamp.newdeal.service.MemberService;

@RestController
@RequestMapping("/member")
public class SmMemberController {

    @Autowired
    MemberService memberService;

    @PostMapping("signUp")
    public Object signUp(Member member) {

        HashMap<String, Object> result = new HashMap<>();
        try {
            memberService.add(member);
            result.put("status", "success");
        } catch (Exception e) {
            result.put("status", "fail");
            result.put("message", e.getMessage());
        }

        return result;
    }

    // 로그인 기능 구현 by 이성민
    @PostMapping("signIn")
    public Object signIn(String email, String password, HttpSession session) {

        HashMap<String, Object> result = new HashMap<>();
        try {
            Member loginUser = memberService.getMember(email, password);
            if (loginUser == null)
                throw new Exception("로그인 실패!");

            session.setAttribute("loginUser", loginUser);
            /*
             * Member member = (Member) session.getAttribute("loginUser");
             * System.out.println(member);
             */

            result.put("loginUser", loginUser);
            result.put("status", "success");

        } catch (Exception e) {
            result.put("status", "fail");
            result.put("message", e.getMessage());
        }
        return result;
    }

    @PostMapping("logout")
    public Object logout(HttpServletRequest request, HttpSession session) throws Exception {

        System.out.println("로그아웃!");
        session.invalidate();
        return "success";
    }

}
