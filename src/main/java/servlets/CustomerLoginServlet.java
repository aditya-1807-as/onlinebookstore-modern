package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bittercode.constant.db.UsersDBConstants;
import com.bittercode.model.User;
import com.bittercode.model.UserRole;
import com.bittercode.service.UserService;
import com.bittercode.service.impl.UserServiceImpl;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class CustomerLoginServlet extends HttpServlet {

    UserService authService = new UserServiceImpl();
    Gson gson = new Gson();

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        PrintWriter pw = res.getWriter();
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");
        
        String uName = req.getParameter(UsersDBConstants.COLUMN_USERNAME);
        String pWord = req.getParameter(UsersDBConstants.COLUMN_PASSWORD);
        
        User user = authService.login(UserRole.CUSTOMER, uName, pWord, req.getSession());
        JsonObject responseJson = new JsonObject();

        try {
            if (user != null) {
                responseJson.addProperty("success", true);
                responseJson.addProperty("message", "Login successful");
                responseJson.add("user", gson.toJsonTree(user));
            } else {
                responseJson.addProperty("success", false);
                responseJson.addProperty("message", "Incorrect UserName or PassWord");
            }
        } catch (Exception e) {
            e.printStackTrace();
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "An error occurred");
        }
        
        pw.print(responseJson.toString());
        pw.flush();
    }
}