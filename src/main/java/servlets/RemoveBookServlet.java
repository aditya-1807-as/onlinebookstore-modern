package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bittercode.constant.ResponseCode;
import com.bittercode.model.UserRole;
import com.bittercode.service.BookService;
import com.bittercode.service.impl.BookServiceImpl;
import com.bittercode.util.StoreUtil;
import com.google.gson.JsonObject;

public class RemoveBookServlet extends HttpServlet {

    BookService bookService = new BookServiceImpl();

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        PrintWriter pw = res.getWriter();
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");
        JsonObject responseJson = new JsonObject();

        if (!StoreUtil.isLoggedIn(UserRole.SELLER, req.getSession())) {
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "Please Login First to Continue!!");
            pw.print(responseJson.toString());
            pw.flush();
            return;
        }

        try {
            String bookId = req.getParameter("bookId");
            if (bookId == null || bookId.isBlank()) {
                responseJson.addProperty("success", false);
                responseJson.addProperty("message", "Book ID is required");
                pw.print(responseJson.toString());
                pw.flush();
                return;
            }

            String responseCode = bookService.deleteBookById(bookId.trim());
            if (ResponseCode.SUCCESS.name().equalsIgnoreCase(responseCode)) {
                responseJson.addProperty("success", true);
                responseJson.addProperty("message", "Book Removed Successfully");
            } else {
                responseJson.addProperty("success", false);
                responseJson.addProperty("message", "Book Not Available In The Store");
            }
        } catch (Exception e) {
            e.printStackTrace();
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "Failed to Remove Book!");
        }
        pw.print(responseJson.toString());
        pw.flush();
    }
}
