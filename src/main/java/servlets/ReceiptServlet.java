package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.JsonObject;

public class ReceiptServlet extends HttpServlet {

    public void service(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        PrintWriter pw = res.getWriter();
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");
        JsonObject responseJson = new JsonObject();
        
        responseJson.addProperty("success", false);
        responseJson.addProperty("message", "Endpoint deprecated");
        
        pw.print(responseJson.toString());
        pw.flush();
    }
}
