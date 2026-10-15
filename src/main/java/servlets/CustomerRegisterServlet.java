package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bittercode.constant.ResponseCode;
import com.bittercode.constant.db.UsersDBConstants;
import com.bittercode.model.User;
import com.bittercode.model.UserRole;
import com.bittercode.service.UserService;
import com.bittercode.service.impl.UserServiceImpl;
import com.google.gson.JsonObject;

public class CustomerRegisterServlet extends HttpServlet {

    UserService userService = new UserServiceImpl();

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        PrintWriter pw = res.getWriter();
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");

        String pWord = req.getParameter(UsersDBConstants.COLUMN_PASSWORD);
        String fName = req.getParameter(UsersDBConstants.COLUMN_FIRSTNAME);
        String lName = req.getParameter(UsersDBConstants.COLUMN_LASTNAME);
        String addr = req.getParameter(UsersDBConstants.COLUMN_ADDRESS);
        String phNo = req.getParameter(UsersDBConstants.COLUMN_PHONE);
        String mailId = req.getParameter(UsersDBConstants.COLUMN_MAILID);
        
        User user = new User();
        user.setEmailId(mailId);
        user.setFirstName(fName);
        user.setLastName(lName);
        user.setPassword(pWord);
        
        JsonObject responseJson = new JsonObject();
        try {
            user.setPhone(Long.parseLong(phNo));
            user.setAddress(addr);
            
            String respCode = userService.register(UserRole.CUSTOMER, user);
            
            if (ResponseCode.SUCCESS.name().equalsIgnoreCase(respCode)) {
                responseJson.addProperty("success", true);
                responseJson.addProperty("message", "User Registered Successfully");
            } else {
                responseJson.addProperty("success", false);
                responseJson.addProperty("message", respCode);
            }
        } catch (NumberFormatException e) {
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "Invalid phone number");
        } catch (Exception e) {
            e.printStackTrace();
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "An error occurred");
        }
        
        pw.print(responseJson.toString());
        pw.flush();
    }
}