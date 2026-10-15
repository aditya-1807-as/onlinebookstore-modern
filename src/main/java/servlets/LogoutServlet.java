package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bittercode.service.UserService;
import com.bittercode.service.impl.UserServiceImpl;
import com.google.gson.JsonObject;

public class LogoutServlet extends HttpServlet {

    UserService authService = new UserServiceImpl();

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        PrintWriter pw = res.getWriter();
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");
        JsonObject responseJson = new JsonObject();
        
        try {
            boolean logout = authService.logout(req.getSession());
            
            if (logout) {
                responseJson.addProperty("success", true);
                responseJson.addProperty("message", "Successfully logged out!");
            } else {
                responseJson.addProperty("success", false);
                responseJson.addProperty("message", "Failed to log out.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "An error occurred.");
        }
        
        pw.print(responseJson.toString());
        pw.flush();
    }
}