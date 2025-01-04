# Backend

This folder contains the backend code for the Product Listing API project.

## Structure

- `app.js`: The main application file.
- `routes/index.js`: Defines the routes for the API.
- `views/`: Contains the Jade templates for rendering HTML.
- `public/`: Contains static files like stylesheets and images.
- `package.json`: Lists the dependencies and scripts for the backend.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the server:

   ```bash
   npm start
   ```

3. The server will run on `http://localhost:3000`.

## API Endpoints

- `GET /products`: Returns a list of all products.
- `GET /products/:id`: Returns details of a specific product by ID.
- `GET /products/view`: Renders the product list page.
- `GET /products/:id/view`: Renders the product details page.

## Screenshots

### API

![Product List](./docs/assets/express-backend-listing.png)

### Product List

![Product List](./docs/assets/jade-products-list.png)

### Product Details

![Product Details](./docs/assets/jade-product-details.png)

## Dependencies

- Express: Web framework for Node.js.
- Jade: Template engine for rendering HTML.
- Morgan: HTTP request logger middleware.
- Cookie-parser: Middleware for parsing cookies.
- Debug: Debugging utility.
- Http-errors: Create HTTP errors for Express.
