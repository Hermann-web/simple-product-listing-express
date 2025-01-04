# Frontend

This folder contains the frontend code for the Product Listing API project.

## Structure

- `index.html`: The main page that lists all products.
- `product.html?id={product_id}`: The page that displays details of a single product.
- `styles.css`: The stylesheet for the frontend.
- `script.js`: The main JavaScript file that handles fetching and displaying products.
- `config.js`: Configuration file for API endpoints.

## Setup

1. Ensure you have a web server to serve the HTML files.
2. Open `index.html` in your browser to view the product list.
3. Click on a product to view its details on `product.html`.

## Usage

- The product list is fetched from the backend API and displayed on `index.html`.
- Each product card includes a "View Details" button that links to `product.html?id={product_id}` with the product ID as a query parameter.
- The `product.html` page fetches and displays detailed information about the selected product.

## Dependencies

- Bootstrap 4.3.1 for styling.
