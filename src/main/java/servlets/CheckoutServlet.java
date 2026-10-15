package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bittercode.model.UserRole;
import com.bittercode.util.StoreUtil;
import com.google.gson.JsonObject;

public class CheckoutServlet extends HttpServlet {
    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        PrintWriter pw = res.getWriter();
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");
        JsonObject responseJson = new JsonObject();
        
        if (!StoreUtil.isLoggedIn(UserRole.CUSTOMER, req.getSession())) {
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "Please Login First to Continue!!");
            pw.print(responseJson.toString());
            pw.flush();
            return;
        }
        
        try {
            Double amountToPay = (Double) req.getSession().getAttribute("amountToPay");
            if (amountToPay == null) amountToPay = 0.0;
            
            responseJson.addProperty("success", true);
            responseJson.addProperty("amountToPay", amountToPay);
        } catch (Exception e) {
            e.printStackTrace();
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "An error occurred");
        }
        
        pw.print(responseJson.toString());
        pw.flush();
    }
}
