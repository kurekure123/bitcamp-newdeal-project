package bitcamp.newdeal.web.json.intercaptor;

import java.io.PrintWriter;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.HandlerInterceptor;

import com.fasterxml.jackson.databind.ObjectMapper;

import bitcamp.newdeal.domain.Member;

public class loginCheckInterceptor implements HandlerInterceptor{
    
    @CrossOrigin()
    @Override
    public boolean preHandle(HttpServletRequest request, 
            HttpServletResponse response,
            Object handler)throws Exception {
        
        HttpSession session = request.getSession();
        Member loginUser = (Member)session.getAttribute("loginUser");
        
        if(loginUser == null) {
            HashMap<String, Object> result = new HashMap<>();
            result.put("status", "login-fail");
            result.put("message", "사용 권한이 없습니다.");
            
            response.setContentType("application/json;charset=UTF-8");
            PrintWriter out = response.getWriter();
            ObjectMapper mapper = new ObjectMapper();
            out.print(mapper.writeValueAsString(result));
            return false;
                    }
        
        return true;
    }
    
    
}
