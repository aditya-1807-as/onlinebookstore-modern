package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bittercode.constant.db.BooksDBConstants;
import com.bittercode.model.Book;
import com.bittercode.model.UserRole;
import com.bittercode.service.BookService;
import com.bittercode.service.impl.BookServiceImpl;
import com.bittercode.util.StoreUtil;
import com.google.gson.JsonObject;

public class AddBookServlet extends HttpServlet {
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
            String bName = req.getParameter(BooksDBConstants.COLUMN_NAME);
            if (bName == null || bName.isBlank()) {
                responseJson.addProperty("success", false);
                responseJson.addProperty("message", "Book name is required");
                pw.print(responseJson.toString());
                pw.flush();
                return;
            }
            
            String bCode = req.getParameter(BooksDBConstants.COLUMN_BARCODE);
            if (bCode == null || bCode.trim().isEmpty()) {
                bCode = "BK-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase();
            } else {
                bCode = bCode.trim();
            }
            String bAuthor = req.getParameter(BooksDBConstants.COLUMN_AUTHOR);
            double bPrice = Double.parseDouble(req.getParameter(BooksDBConstants.COLUMN_PRICE));
            int bQty = Integer.parseInt(req.getParameter(BooksDBConstants.COLUMN_QUANTITY));

            Book book = new Book(bCode, bName, bAuthor, bPrice, bQty);
            String message = bookService.addBook(book);
            
            if ("SUCCESS".equalsIgnoreCase(message)) {
                responseJson.addProperty("success", true);
                responseJson.addProperty("message", "Book Added Successfully");
            } else {
                responseJson.addProperty("success", false);
                responseJson.addProperty("message", "Failed to Add Book");
            }
        } catch (Exception e) {
            e.printStackTrace();
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "Failed to Add Book! Ensure inputs are correct.");
        }
        pw.print(responseJson.toString());
        pw.flush();
    }
}
