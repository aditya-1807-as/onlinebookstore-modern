package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bittercode.model.Book;
import com.bittercode.model.UserRole;
import com.bittercode.service.BookService;
import com.bittercode.service.impl.BookServiceImpl;
import com.bittercode.util.StoreUtil;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class ViewBookServlet extends HttpServlet {

    BookService bookService = new BookServiceImpl();
    Gson gson = new Gson();

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        PrintWriter pw = res.getWriter();
        res.setContentType("application/json");
        res.setCharacterEncoding("UTF-8");

        JsonObject responseJson = new JsonObject();

        // Public catalog access: allow guest visitors to preview books as well as logged in users
        
        try {
            List<Book> books = bookService.getAllBooks();
            responseJson.addProperty("success", true);
            responseJson.add("books", gson.toJsonTree(books));
        } catch (Exception e) {
            e.printStackTrace();
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "An error occurred fetching books");
        }
        
        pw.print(responseJson.toString());
        pw.flush();
    }
}
