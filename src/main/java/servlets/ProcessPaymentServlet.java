package servlets;

import java.io.IOException;
import java.io.PrintWriter;
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
import com.google.gson.JsonObject;
import com.google.gson.JsonArray;
import com.google.gson.Gson;

public class ProcessPaymentServlet extends HttpServlet {

    BookService bookService = new BookServiceImpl();
    Gson gson = new Gson();

    @SuppressWarnings("unchecked")
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
            HttpSession session = req.getSession();
            List<Cart> cartItems = (List<Cart>) session.getAttribute("cartItems");
            
            if (cartItems == null || cartItems.isEmpty()) {
                responseJson.addProperty("success", false);
                responseJson.addProperty("message", "Cart is empty");
                pw.print(responseJson.toString());
                pw.flush();
                return;
            }

            JsonArray orderedBooks = new JsonArray();
            for (Cart cart : cartItems) {
                Book book = cart.getBook();
                String bCode = book.getBarcode();
                int availableQty = book.getQuantity();
                int qtToBuy = cart.getQuantity();
                availableQty = availableQty - qtToBuy;
                
                bookService.updateBookQtyById(bCode, availableQty);
                
                JsonObject orderedBook = new JsonObject();
                orderedBook.addProperty("orderId", "ORD" + bCode + "TM");
                orderedBook.addProperty("name", book.getName());
                orderedBook.addProperty("author", book.getAuthor());
                orderedBook.addProperty("amountPaid", book.getPrice() * qtToBuy);
                orderedBooks.add(orderedBook);
                
                session.removeAttribute("qty_" + bCode);
            }
            
            session.removeAttribute("amountToPay");
            session.removeAttribute("cartItems");
            session.removeAttribute("items");
            session.removeAttribute("selectedBookId");

            responseJson.addProperty("success", true);
            responseJson.addProperty("message", "Payment Processed and Order Placed Successfully");
            responseJson.add("orders", orderedBooks);
            
        } catch (Exception e) {
            e.printStackTrace();
            responseJson.addProperty("success", false);
            responseJson.addProperty("message", "An error occurred processing payment");
        }
        
        pw.print(responseJson.toString());
        pw.flush();
    }
}
