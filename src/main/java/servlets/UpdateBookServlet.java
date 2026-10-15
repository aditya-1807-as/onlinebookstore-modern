package servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bittercode.constant.ResponseCode;
import com.bittercode.constant.db.BooksDBConstants;
import com.bittercode.model.Book;
import com.bittercode.model.UserRole;
import com.bittercode.service.BookService;
import com.bittercode.service.impl.BookServiceImpl;
import com.bittercode.util.StoreUtil;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class UpdateBookServlet extends HttpServlet {
    BookService bookService = new BookServiceImpl();
    Gson gson = new Gson();

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
            String bCode = req.getParameter(BooksDBConstants.COLUMN_BARCODE);
            String bAuthor = req.getParameter(BooksDBConstants.COLUMN_AUTHOR);
            double bPrice = Double.parseDouble(req.getParameter(BooksDBConstants.COLUMN_PRICE));
            int bQty = Integer.parseInt(req.getParameter(BooksDBConstants.COLUMN_QUANTITY));

            Book book = new Book(bCode, bName, bAuthor, bPrice, bQty);
            String message = bookService.updateBook(book);
            if (ResponseCode.SUCCESS.name().equalsIgnoreCase(message)) {
                responseJson.addProperty("success", true);
                responseJson.addProperty("message", "Book Updated Successfully");
            } else {
                responseJson.addProperty("success", false);
                responseJson.addProperty("message", "Failed to Update Book");
            }
        } catch (Exception e) {
            e.printStackTrace();
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "Failed to Update Book! Ensure inputs are correct.");
        }
        
        pw.print(responseJson.toString());
        pw.flush();
    }

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
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
            if (bookId != null) {
                Book book = bookService.getBookById(bookId);
                responseJson.addProperty("success", true);
                responseJson.add("book", gson.toJsonTree(book));
            } else {
                responseJson.addProperty("success", false);
                responseJson.addProperty("message", "Book ID is missing");
            }
        } catch (Exception e) {
            e.printStackTrace();
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "Failed to load book data");
        }
        pw.print(responseJson.toString());
        pw.flush();
    }
}
