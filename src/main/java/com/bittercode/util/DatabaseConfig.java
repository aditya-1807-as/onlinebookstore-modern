package com.bittercode.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

class DatabaseConfig {

    static Properties prop = new Properties();
    static {

        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        InputStream input = classLoader.getResourceAsStream("application.properties");

        try {
            prop.load(input);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static String getEnvOrProp(String[] envVars, String propKey, String defaultValue) {
        for (String env : envVars) {
            String val = System.getenv(env);
            if (val != null && !val.trim().isEmpty()) {
                return val.trim();
            }
        }
        return prop.getProperty(propKey, defaultValue);
    }

    public final static String DRIVER_NAME = getEnvOrProp(new String[]{"DB_DRIVER"}, "db.driver", "com.mysql.cj.jdbc.Driver");
    
    // Supports Railway, Render, Docker, and local
    public final static String DB_HOST = getEnvOrProp(new String[]{"MYSQLHOST", "MYSQL_HOST", "DB_HOST"}, "db.host", "jdbc:mysql://localhost");
    public final static String DB_PORT = getEnvOrProp(new String[]{"MYSQLPORT", "MYSQL_PORT", "DB_PORT"}, "db.port", "3306");
    public final static String DB_NAME = getEnvOrProp(new String[]{"MYSQLDATABASE", "MYSQL_DATABASE", "DB_NAME"}, "db.name", "onlinebookstore");
    public final static String DB_USER_NAME = getEnvOrProp(new String[]{"MYSQLUSER", "MYSQL_USER", "DB_USER"}, "db.username", "root");
    public final static String DB_PASSWORD = getEnvOrProp(new String[]{"MYSQLPASSWORD", "MYSQL_PASSWORD", "DB_PASSWORD"}, "db.password", "adimsd");

    public final static String CONNECTION_STRING = getConnectionString();

    private static String getConnectionString() {
        String dbUrl = System.getenv("MYSQL_URL");
        if (dbUrl != null && !dbUrl.trim().isEmpty()) {
            return dbUrl.trim();
        }
        String host = DB_HOST;
        if (!host.startsWith("jdbc:mysql://")) {
            host = "jdbc:mysql://" + host;
        }
        String conn = host + ":" + DB_PORT + "/" + DB_NAME;
        if (!conn.contains("?")) {
            conn += "?allowPublicKeyRetrieval=true&useSSL=false";
        }
        return conn;
    }
}
