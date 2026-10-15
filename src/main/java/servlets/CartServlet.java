package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bittercode.model.Book;
import com.bittercode.model.Cart;
import com.bittercode.model.UserRole;
import com.bittercode.service.BookService;
import com.bittercode.service.impl.BookServiceImpl;
import com.bittercode.util.StoreUtil;
import com.google.gson.Gson;
import com.google.gson.JsonObject;

public class CartServlet extends HttpServlet {

    BookService bookService = new BookServiceImpl();
    Gson gson = new Gson();

    public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
        doGet(req, res);
    }

    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
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
            StoreUtil.updateCartItems(req);

            HttpSession session = req.getSession();
            String bookIds = "";
            if (session.getAttribute("items") != null)
                bookIds = (String) session.getAttribute("items");

            List<Book> books = bookService.getBooksByCommaSeperatedBookIds(bookIds);
            List<Cart> cartItems = new ArrayList<Cart>();
            
            double amountToPay = 0;
            if (books != null) {
                for (Book book : books) {
                    Integer sessionQty = (Integer) session.getAttribute("qty_" + book.getBarcode());
                    int qty = (sessionQty != null) ? sessionQty : 1;
                    Cart cart = new Cart(book, qty);
                    cartItems.add(cart);
                    amountToPay += (qty * book.getPrice());
                }
            }

            session.setAttribute("cartItems", cartItems);
            session.setAttribute("amountToPay", amountToPay);

            responseJson.addProperty("success", true);
            responseJson.add("cartItems", gson.toJsonTree(cartItems));
            responseJson.addProperty("amountToPay", amountToPay);
            
        } catch (Exception e) {
            e.printStackTrace();
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "An error occurred fetching cart");
        }
        
        pw.print(responseJson.toString());
        pw.flush();
    }
}
