<div align="center">

# 📚 Asthana Bookstore Modern
### *A Next-Generation Full-Stack Java E-Commerce Platform & Digital Bookstore*

[![Project Owner](https://img.shields.io/badge/Owner-Aditya%20Asthana-6366f1?style=for-the-badge&logo=github&logoColor=white)](https://github.com)
[![Java](https://img.shields.io/badge/Java-JDK_8%2B-f89820?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.oracle.com/java/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0_Relational_DB-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Tomcat](https://img.shields.io/badge/Embedded_Tomcat-8.0-E58325?style=for-the-badge&logo=apachetomcat&logoColor=white)](https://tomcat.apache.org/)
[![Maven](https://img.shields.io/badge/Apache_Maven-3.9-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)](https://maven.apache.org/)
[![UI Style](https://img.shields.io/badge/Design-Glassmorphic_Dark-8b5cf6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Build Status](https://img.shields.io/badge/Build-Passing-10b981?style=for-the-badge&logo=checkmarx&logoColor=white)](#quick-start)

---

[✨ Overview](#-overview) •
[🏛️ Architecture](#-system-architecture) •
[🎨 UI & Experience](#-visual-interface-overview) •
[📊 Database Schema](#-database-schema) •
[🚀 Quick Start](#-quick-start) •
[🔑 Demo Accounts](#-test-credentials) •
[📡 API Reference](#-restful-api-endpoints) •
[👤 Creator](#-project-ownership)

---

</div>

## 🌟 Overview

**Asthana Bookstore Modern** is an enterprise-grade digital bookstore and inventory platform built by **Aditya Asthana**. Designed to bridge classic enterprise Java stability with 2026 consumer web standards, it eliminates cumbersome frameworks in favor of high-throughput asynchronous Java Servlets, direct JDBC persistence, and a modern glassmorphic interface.

> [!TIP]
> **Zero Heavy Framework Bloat**: Starts in under 2 seconds with embedded Tomcat (`webapp-runner.jar`). No complex Spring Boot or node runtime required!

### ✨ Highlights at a Glance
- ⚡ **Asynchronous REST Servlets**: Blazing-fast JSON APIs powered by Google Gson.
- 🌓 **Theme Switcher (Dark & Light Mode)**: Fully responsive glassmorphic theme toggle with zero-flicker `localStorage` persistence.
- 🎨 **Crisp Vector SVG System**: 100% vector SVG icons across navigation, action buttons, status alerts, and high-res book covers.
- ❤️ **Customer Wishlist System**: Bookmarking engine with live counter badge and dedicated wishlist drawer.
- 🔍 **Instant Quick View Modal**: Interactive synopsis, verified ratings, publisher metadata, and direct add-to-cart.
- 🎟️ **Dynamic Promo Code Engine**: Automatic subtotal discount calculations with coupon validation (`ADITYA10`, `WELCOME20`, `FREESHIP`).
- 🎚️ **Interactive Price Range Slider**: Real-time catalog filtering by maximum price up to ₹1,500.
- 📜 **Persistent Order History**: Customer order tracking with printable tax receipts and saved purchase records.
- 🛒 **Slide-Over Cart Drawer**: Real-time session-synchronized bag with instantaneous subtotal and discount calculations.
- 🧾 **Official Tax Invoice Generator**: Generates print-ready itemized digital invoices upon checkout.
- 📊 **Real-Time Admin KPI Analytics**: Live metrics for Total Titles (26+), Total Units, Inventory Worth (₹), and Low Stock Alerts.
- 📥 **Admin CSV Inventory Export**: 1-click export of complete bookstore catalog to spreadsheet-ready `.csv` format.
- ⚡ **One-Click Restocking**: Instant `+5 Restock` capability directly from the inventory table.
- 🔍 **Real-Time Instant Search**: Fast client-side filtering by book title, author, and ISBN barcode.

---

## 🏛️ System Architecture

The project adheres to a clean **Model-View-Controller (MVC)** architectural blueprint with complete separation of concerns:

```mermaid
flowchart TD
    subgraph Client ["Client Browser Tier"]
        UI["Glassmorphic UI (HTML5 / Vanilla CSS)"]
        JS["Async Fetch Controller (ES6+ app.js)"]
        UI <--> JS
    end

    subgraph Server ["Application Server Tier (Java Servlets)"]
        Router{"Web Container / Routing (web.xml)"}
        Servlets["RESTful Servlets\n(ViewBook, Cart, ProcessPayment, StoreBook, etc.)"]
        Services["Business Service Layer\n(BookService, UserService)"]
        SessionStore[("HttpSession State\n(Cart, Auth Tokens)")]
        
        Router --> Servlets
        Servlets <--> SessionStore
        Servlets --> Services
    end

    subgraph DataTier ["Persistence Tier (Database)"]
        DBUtil["DBUtil / Connection Pool"]
        MySQL[("MySQL 8.0 Server\nDatabase: onlinebookstore")]
        
        Services --> DBUtil
        DBUtil <--> MySQL
    end

    JS -- "Async HTTP JSON" --> Router
```

---

## 🎨 Visual Interface Overview

```
+----------------------------------------------------------------------------------------------------------------+
|  [SVG] ASTHANA BOOKSTORE    [ Home ] [ Catalog ] [ About ] [ ❤️ Wishlist (2) ] [ 🛒 Cart (3) ] [ 🌓 Theme ]   |
+----------------------------------------------------------------------------------------------------------------+
|                                                                                                                |
|    ✨ Next-Gen Web Platform • Engineered by Aditya Asthana                                                     |
|    Curated Knowledge for the Next Generation of Builders.                                                      |
|                                                                                                                |
|    [ 26+ Titles ]          [ 100% ACID DB ]          [ < 100ms Latency ]          [ 4.9 ★ Rating ]             |
|                                                                                                                |
+----------------------------------------------------------------------------------------------------------------+
|  🔍 [ Search by title, author, or ISBN... ]   Max Price: [======o] ₹1200   [ All ] [ Java ] [ AI ] [ Cloud ]   |
+----------------------------------------------------------------------------------------------------------------+
|   +--------------------------+   +--------------------------+   +--------------------------+                   |
|   | [SVG Cover] AI & ML      |   | [SVG Cover] Cloud & K8s  |   | [SVG Cover] Systems      |                   |
|   | Designing ML Systems     |   | Kubernetes: Up & Running |   | The Rust Programming     |                   |
|   | Chip Huyen               |   | Brendan Burns et al.     |   | Steve Klabnik & Carol    |                   |
|   | ₹ 920    [18 in stock]   |   | ₹ 790    [15 in stock]   |   | ₹ 560    [12 in stock]   |                   |
|   | [Quick View] [❤️] [Add]   |   | [Quick View] [❤️] [Add]   |   | [Quick View] [❤️] [Add]   |                   |
|   +--------------------------+   +--------------------------+   +--------------------------+                   |
+----------------------------------------------------------------------------------------------------------------+
```

### 1. Storefront (`index.html`)
- Ambient dark/light mesh background with multi-tier blurred glass navigation bar.
- Vector SVG icon system across all controls with theme switcher.
- Live public catalog exploration with genre filters (Java, Systems, Cloud, AI, Architecture, Web, Database).
- Interactive **Quick View Modal** and **Wishlist Bookmarking** without login requirements.

### 2. Customer Lounge (`customer_dashboard.html`)
- Interactive book cards with vector genre-coded cover art and real-time stock status pills (`In Stock`, `Low Stock`, `Out of Stock`).
- Slide-over shopping bag drawer that supports item increments, decrements, removals, and **Promo Code Discounts** (`ADITYA10`, `WELCOME20`, `FREESHIP`).
- Multi-channel checkout simulation (Card, UPI / QR, and Net Banking).
- Printable Official Tax Invoice modal displaying order timestamp, invoice ID, and itemized totals with applied promo discounts.
- Dedicated **Order History Modal** to view and re-print previous receipts.

### 3. Administrator Console (`admin_dashboard.html`)
- Real-time KPI Metric tiles tracking catalog counts (26+ books), total units, valuation, and critical stock thresholds.
- Inventory search & status filter (`In Stock`, `Low Stock`, `Sold Out`).
- Built-in ISBN / Barcode Generator for seamless new book additions.
- Rapid `+5 Restock` shortcut and safe delete confirmation modals.
- **Export Inventory to CSV** utility for accounting and spreadsheet reporting.

---

## 📊 Database Schema

```mermaid
erDiagram
    USERS {
        VARCHAR(100) username PK "Primary key / Login handle"
        VARCHAR(100) password "User password"
        VARCHAR(100) firstname "First name"
        VARCHAR(100) lastname "Last name"
        TEXT address "Shipping destination"
        VARCHAR(100) phone "Contact phone number"
        VARCHAR(100) mailid "Email address"
        INT usertype "1 = Administrator, 2 = Customer"
    }

    BOOKS {
        VARCHAR(100) barcode PK "ISBN or unique code"
        VARCHAR(100) name "Title of the book"
        VARCHAR(100) author "Author name(s)"
        INT price "Unit price in INR (₹)"
        INT quantity "Current units in warehouse"
    }

    USERS ||--o{ ORDERS : places
    BOOKS ||--o{ ORDER_ITEMS : contains
```

---

## 🚀 Quick Start

### 📋 Prerequisites
- **Java Development Kit (JDK)**: 8 or higher (OpenJDK 8, 17, 21, or 26)
- **Apache Maven**: 3.8+
- **MySQL Server**: 8.0+

---

### Step 1: Database Initialization
You can initialize MySQL in 1 click using the included [`setup_database.sql`](file:///c:/Users/Aditya%20Asthana/Desktop/Aditya/onlinebookstore-modern/setup_database.sql) script:

```bash
mysql -u root -p < setup_database.sql
```

Or open MySQL Command Line / Workbench, log in as root, and execute:

```sql
CREATE DATABASE IF NOT EXISTS onlinebookstore;
USE onlinebookstore;

-- 1. Create Books Table
CREATE TABLE IF NOT EXISTS books (
    barcode VARCHAR(100) PRIMARY KEY,
    name VARCHAR(150),
    author VARCHAR(150),
    price INT,
    quantity INT
);

-- 2. Create Users Table
CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(100) PRIMARY KEY,
    password VARCHAR(100),
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    address TEXT,
    phone VARCHAR(100),
    mailid VARCHAR(100),
    usertype INT
);

-- 3. Populate Curated 26 Books Catalog
INSERT INTO books VALUES('9780131103627', 'The C Programming Language (ANSI C)', 'Brian W. Kernighan & Dennis M. Ritchie', 450, 25);
INSERT INTO books VALUES('9780132181273', 'Domain-Driven Design', 'Eric Evans', 560, 27);
INSERT INTO books VALUES('9780132350884', 'Clean Code: A Handbook of Agile Software Craftsmanship', 'Robert C Martin', 288, 12);
INSERT INTO books VALUES('9780132778046', 'Effective Java', 'Joshua Bloch', 368, 21);
INSERT INTO books VALUES('9780133053036', 'C++ Primer', 'Stanley Lippman, Josée Lajoie & Barbara Moo', 976, 13);
INSERT INTO books VALUES('9780134190563', 'The Go Programming Language', 'Alan A. A. Donovan & Brian W. Kernighan', 400, 18);
INSERT INTO books VALUES('9780134757599', 'Refactoring: Improving the Design of Existing Code', 'Martin Fowler', 940, 14);
INSERT INTO books VALUES('9780137314911', 'Modern Software Engineering', 'David Farley', 680, 17);
INSERT INTO books VALUES('9780262035613', 'Deep Learning', 'Ian Goodfellow, Yoshua Bengio & Aaron Courville', 1350, 15);
INSERT INTO books VALUES('9780316204552', 'The Soul of a New Machine', 'Tracy Kidder', 293, 30);
INSERT INTO books VALUES('9780596517748', 'JavaScript: The Good Parts', 'Douglas Crockford', 420, 22);
INSERT INTO books VALUES('9781098108489', 'Designing Machine Learning Systems', 'Chip Huyen', 920, 18);
INSERT INTO books VALUES('9781484255995', 'Practical Rust Projects', 'Shing Lyu', 257, 15);
INSERT INTO books VALUES('9781491903063', 'Designing Data-Intensive Applications', 'Martin Kleppmann', 1150, 24);
INSERT INTO books VALUES('9781491910740', 'Head First Java', 'Kathy Sierra, Bert Bates & Trisha Gee', 754, 23);
INSERT INTO books VALUES('9781491929124', 'Site Reliability Engineering', 'Betsy Beyer, Chris Jones & Niall Murphy', 1050, 12);
INSERT INTO books VALUES('9781491954249', 'Kubernetes: Up and Running', 'Brendan Burns, Joe Beda & Kelsey Hightower', 790, 15);
INSERT INTO books VALUES('9781492032649', 'Hands-On Machine Learning with Scikit-Learn & TensorFlow', 'Aurélien Géron', 1480, 20);
INSERT INTO books VALUES('9781492050780', 'Building Microservices: Designing Fine-Grained Systems', 'Sam Newman', 890, 16);
INSERT INTO books VALUES('9781492056300', 'Fluent Python', 'Luciano Ramalho', 1014, 15);
INSERT INTO books VALUES('9781492057611', 'Learning SQL: Generate, Manipulate, and Retrieve Data', 'Alan Beaulieu', 540, 19);
INSERT INTO books VALUES('9781617294297', 'Spring in Action, Sixth Edition', 'Craig Walls', 880, 21);
INSERT INTO books VALUES('9781718500457', 'The Rust Programming Language', 'Steve Klabnik & Carol Nichols', 560, 18);
INSERT INTO books VALUES('9781720043997', 'The Road to Learn React', 'Robin Wieruch', 239, 18);
INSERT INTO books VALUES('9781736049112', 'System Design Interview – An Insider\'s Guide', 'Alex Xu', 850, 30);
INSERT INTO books VALUES('9781951204006', 'A Programmer\'s Guide to Computer Science', 'William Springer', 188, 14);

-- 4. Create Default Verified Accounts
INSERT INTO users VALUES('aditya','password123','Aditya','Asthana','Tech Park Blvd, India','9876543210','aditya.asthana@example.com',2);
INSERT INTO users VALUES('Admin','Admin','Aditya','Admin','Asthana HQ, Suite 101','9584552224521','admin@asthana.com',1);
INSERT INTO users VALUES('demo','demo','Demo','Explorer','Innovation Hub, Silicon City','42502216225','demo@example.com',2);

COMMIT;
```

---

### Step 2: Configure Database Credentials
Verify or update `src/main/resources/application.properties`:

```properties
db.driver=com.mysql.cj.jdbc.Driver
db.host=jdbc:mysql://localhost
db.port=3306
db.name=onlinebookstore
db.username=root
db.password=YOUR_MYSQL_PASSWORD
```

---

### Step 3: Compile and Launch

Open PowerShell or Command Prompt in the project directory:

```powershell
# 1. Package WAR & copy embedded Tomcat runner
mvn clean package

# 2. Start the embedded server on port 8083
java -jar target/dependency/webapp-runner.jar --port 8083 target/onlinebookstore-modern.war
```

Access the application in your browser:  
🔗 **`http://localhost:8083/`**

---

## 🔑 Test Credentials

| Role | Username | Password | Access Capabilities |
| :--- | :--- | :--- | :--- |
| **👤 Customer (Owner)** | `aditya` | `password123` | Browse catalog, bag management, checkout, printable tax invoice |
| **👤 Customer (Demo)** | `demo` | `demo` | Guest & demo test account |
| **🛡️ Administrator** | `Admin` | `Admin` | Real-time KPI analytics, add/edit/delete books, quick restock |

> [!NOTE]
> On the sign-in page (`login.html`), you can use the **1-Click Quick Demo Fill** buttons to instantly fill and sign into either role!

---

## 📡 RESTful API Endpoints

All endpoints communicate via JSON using standard HTTP status codes:

| Endpoint | Method | Role | Description |
| :--- | :--- | :--- | :--- |
| `/viewbook` | `GET` | Public / Customer | Returns available books list with stock levels |
| `/storebooks` | `GET` | Administrator | Returns complete inventory data for management |
| `/cart` | `GET` | Customer | Fetches session cart items, quantities, and subtotal |
| `/cart` | `POST` | Customer | Adds, increments, or decrements items in the cart |
| `/pay` | `POST` | Customer | Finalizes payment, decrements warehouse stock, returns order receipt |
| `/addbook` | `POST` | Administrator | Adds a new book to the catalog |
| `/updatebook` | `POST` | Administrator | Updates existing book title, author, price, or stock |
| `/removebook` | `POST` | Administrator | Deletes a book from the inventory |
| `/userlog` | `POST` | Public | Customer session authentication |
| `/adminlog` | `POST` | Public | Administrator session authentication |
| `/userreg` | `POST` | Public | Registers a new customer account |
| `/logout` | `GET` | Authenticated | Terminates session and invalidates state |

---

## 📂 Project Directory Structure

```plaintext
onlinebookstore-modern/
├── WebContent/                         # Presentation Layer
│   ├── css/
│   │   └── styles.css                  # Modern Glassmorphic Design System
│   ├── js/
│   │   └── app.js                      # Toast Engine, Cart Drawer, Fetch Helpers
│   ├── WEB-INF/
│   │   └── web.xml                     # Servlet & Filter Deployment Descriptor
│   ├── index.html                      # Storefront & Catalog Landing Page
│   ├── login.html                      # Dual-Role Authentication
│   ├── register.html                   # Customer Registration
│   ├── customer_dashboard.html         # Customer Lounge & Interactive Checkout
│   ├── admin_dashboard.html            # Admin Analytics & Inventory Console
│   └── about.html                      # Project & Architecture Showcase
├── src/main/java/                      # Application Layer
│   ├── com/bittercode/
│   │   ├── constant/                   # System Constants & Error Enums
│   │   ├── model/                      # POJO Domain Entities (Book, User, Cart)
│   │   ├── service/                    # Business Logic Interfaces & Impls
│   │   └── util/                       # JDBC Connection & Session Helpers
│   └── servlets/                       # Asynchronous HTTP Servlets
├── src/main/resources/
│   └── application.properties          # Database Configuration
├── setup_database.sql                  # Automated 26-Book Database Seed Script
├── Dockerfile                          # Multi-Stage Docker Container Build
├── pom.xml                             # Maven POM & Tomcat Webapp-Runner Config
└── README.md                           # Documentation
```

---

## 👤 Project Ownership

- **Author & Architect**: **Aditya Asthana**
- **Repository**: [onlinebookstore-modern](file:///c:/Users/Aditya%20Asthana/Desktop/Aditya/onlinebookstore-modern)
- **Year**: 2026

*Crafted with precision, high visual fidelity, and clean code principles by **Aditya Asthana**.*
