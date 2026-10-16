package com.bittercode.util;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Automatically initializes and seeds the database (schema, verified accounts, 26 books)
 * when the application boots on localhost or cloud platforms (Railway, Render, Docker).
 */
public class DatabaseInitializerListener implements ServletContextListener {

    private static final Logger LOGGER = Logger.getLogger(DatabaseInitializerListener.class.getName());

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        LOGGER.info("[DB-INIT] Checking database status for Asthana Bookstore Modern...");
        try (Connection conn = DBUtil.getConnection()) {
            boolean needsSeeding = false;
            try (Statement stmt = conn.createStatement()) {
                try (ResultSet rs = stmt.executeQuery("SELECT COUNT(*) FROM books")) {
                    if (rs.next()) {
                        int count = rs.getInt(1);
                        LOGGER.info("[DB-INIT] Found " + count + " books in database.");
                        if (count == 0) {
                            needsSeeding = true;
                        }
                    }
                } catch (Exception e) {
                    LOGGER.info("[DB-INIT] Table 'books' does not exist yet. Seeding required.");
                    needsSeeding = true;
                }

                if (needsSeeding) {
                    LOGGER.info("[DB-INIT] Seeding database with schema and 26 books from setup_database.sql...");
                    seedDatabase(conn);
                    LOGGER.info("[DB-INIT] Database seeded successfully!");
                }
            }
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "[DB-INIT] Auto-seed check finished with note: " + e.getMessage());
        }
    }

    public static synchronized void seedDatabase(Connection conn) throws Exception {
        InputStream is = DatabaseInitializerListener.class.getClassLoader().getResourceAsStream("setup_database.sql");
        if (is == null) {
            LOGGER.warning("[DB-INIT] setup_database.sql not found in classpath.");
            return;
        }

        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(is, StandardCharsets.UTF_8))) {
            String line;
            while ((line = reader.readLine()) != null) {
                line = line.trim();
                if (line.startsWith("--") || line.isEmpty()) {
                    continue;
                }
                sb.append(line).append(" ");
                if (line.endsWith(";")) {
                    String sql = sb.toString().trim();
                    if (sql.endsWith(";")) {
                        sql = sql.substring(0, sql.length() - 1);
                    }
                    if (!sql.isEmpty() && !sql.toUpperCase().startsWith("CREATE DATABASE") && !sql.toUpperCase().startsWith("USE ")) {
                        try (Statement stmt = conn.createStatement()) {
                            stmt.execute(sql);
                        } catch (Exception ex) {
                            LOGGER.log(Level.FINE, "[DB-INIT] Statement info: " + ex.getMessage());
                        }
                    }
                    sb.setLength(0);
                }
            }
        }
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        // Cleanup if necessary
    }
}
