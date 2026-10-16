package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.bittercode.util.DBUtil;
import com.bittercode.util.DatabaseInitializerListener;

public class InitDatabaseServlet extends HttpServlet {

    private static final Logger LOGGER = Logger.getLogger(InitDatabaseServlet.class.getName());

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        PrintWriter out = resp.getWriter();

        try (Connection conn = DBUtil.getConnection()) {
            DatabaseInitializerListener.seedDatabase(conn);
            out.print("{\"success\": true, \"message\": \"Database successfully seeded with 26 books and verified accounts!\"}");
        } catch (Exception e) {
            LOGGER.severe("Error during manual /initdb trigger: " + e.getMessage());
            out.print("{\"success\": false, \"message\": \"" + e.getMessage().replace("\"", "\\\"") + "\"}");
        }
    }
}
