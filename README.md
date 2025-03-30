# ScholarWorldApp 🎓

**An E-commerce Platform Designed for Students**

ScholarWorldApp is a dedicated e-commerce application built to serve the unique needs of the student community. It provides a user-friendly online marketplace where students can discover, buy, and potentially sell educational materials, supplies, and other relevant products.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Navigating the world of academic resources can be challenging. ScholarWorldApp aims to simplify this by creating a centralized hub for student-centric commerce. Whether you're looking for textbooks, stationery, tech gadgets suited for study, or even used items from fellow students, ScholarWorldApp provides a secure and efficient platform to browse, purchase, and manage orders.

## Key Features

* **🔒 Secure User Authentication:** Robust registration and login system (e.g., using JWT or session-based auth).
* **📚 Product Catalog:** Browse a wide range of products, smartly categorized for educational needs (e.g., by subject, course, item type).
* **🔍 Advanced Search & Filtering:** Quickly find specific items using powerful search capabilities and filters (e.g., price range, condition, brand).
* **🛒 Shopping Cart:** Intuitive cart functionality to add, review, and manage items before purchase.
* **💳 Checkout Process:** Streamlined and secure checkout flow (details on payment integration can be added).
* **📈 Order Management:** Users can view their order history, track shipment status, and manage returns (if applicable).
* **👤 User Profile:** Manage personal information, addresses, preferences, and view past activity.
* **📱 Responsive Design:** Fully accessible and usable across desktops, tablets, and mobile devices.
* **(Optional) Peer-to-Peer Selling:** Allows students to list and sell their own used items.

## Tech Stack

* **Backend:**
    * Language: Java ( JDK 17 )
    * Framework: Spring Boot 3.4.1
    * **Build Tool: Maven**
    * API: RESTful APIs
* **Frontend:**
    * Language: TypeScript
    * Framework/Library: Angular 17
    * Styling: CSS , Material UI
    * Package Manager: npm
* **Database:**
    * **MySQL**  MySQL

## Prerequisites

Before you begin, ensure you have the following installed on your system:

* **Git:** For cloning the repository.
* **Java JDK:** **[Specify required version, e.g., >= 17]**
* **Maven:** **[Specify required version, e.g., >= 3.6.x]**
* **Node.js & npm:** **[Specify required Node version, e.g., >= 18.x]** (npm is included with Node.js).
* **Database:** An instance of **MySQL** running locally or accessible.

## Installation

Follow these steps to set up the development environment:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Rohan-vishnoi/ScholarWorldApp.git](https://github.com/Rohan-vishnoi/ScholarWorldApp.git)
    cd ScholarWorldApp
    ```

2.  **Backend Setup:**
    * Navigate to the backend directory:
        ```bash
        cd backend
        ```
    * *(Configuration might be needed here - see Environment Configuration below, especially for MySQL connection details)*
    * Build the project and download dependencies using Maven:
        ```bash
        # Cleans previous builds and installs the artifact to your local Maven repository
        mvn clean install
        # Or, if you only need to package it:
        # mvn clean package
        ```

3.  **Frontend Setup:**
    * Navigate to the frontend directory:
        ```bash
        cd ../frontend
        # Or use: cd ScholarWorldApp/frontend (from the root)
        ```
    * *(Configuration might be needed here - see Environment Configuration below)*
    * Install dependencies:
        ```bash
        npm install
        ```

## Environment Configuration

The application likely requires configuration for things like database connections, API keys, or JWT secrets.

* **Backend:** Look for configuration files like `backend/src/main/resources/application.properties` or `application.yml`. You may need to create a profile-specific file (e.g., `application-dev.properties`) or set environment variables to configure:
    * **MySQL Database URL, username, password** (e.g., `spring.datasource.url=jdbc:mysql://localhost:3306/scholarworld_db`, `spring.datasource.username=user`, `spring.datasource.password=pass`)
    * JWT secret key
    * Any external API keys
* **Frontend:** Check for `.env` or configuration files (e.g., `frontend/src/config.ts`). You might need to set:
    * The URL for the backend API (e.g., `REACT_APP_API_URL=http://localhost:8080/api`)

**Note:** Create a `.env.local` or similar file (if applicable for your frontend framework) and add it to your `.gitignore` to avoid committing sensitive credentials. Provide a `.env.example` file in the repository. Make sure your MySQL database (e.g., `scholarworld_db`) exists before running the backend.

## Running the Application

1.  **Start the Database:** Ensure your **MySQL** instance is running and accessible.
2.  **Database Schema:** Ensure the necessary database schema and tables are created. This might happen automatically via your ORM (like Hibernate with `spring.jpa.hibernate.ddl-auto=update` in Spring Boot) on first run, or you might need to run SQL scripts manually (check for scripts in `src/main/resources/db/migration` if using Flyway/Liquibase, or other SQL files).

3.  **Start the Backend Server:**
    * Navigate to the `backend` directory.
    * Run the application using the Maven Spring Boot plugin (if using Spring Boot):
        ```bash
        mvn spring-boot:run
        ```
        *(If not using the Spring Boot plugin, the command might differ, e.g., `mvn exec:java` based on your `pom.xml` configuration)*
    * The backend should now be running, typically on `http://localhost:8080`. Check the console output for the exact port and status.

4.  **Start the Frontend Development Server:**
    * Navigate to the `frontend` directory.
    * Start the development server:
        ```bash
        npm start
        ```
    * This will usually open the application automatically in your default web browser at `http://localhost:3000` (or another port specified by your frontend framework).

## Usage

1.  Access the application via your web browser (usually `http://localhost:3000`).
2.  **Register/Login:** Create a new student account or log in if you already have one.
3.  **Browse & Search:** Explore product categories or use the search bar to find specific items.
4.  **Add to Cart:** Select products and add them to your shopping cart.
5.  **Checkout:** Review your cart and proceed through the checkout process.
6.  **Manage Profile & Orders:** Access your user profile to update information or view your order history.

## Project Structure
