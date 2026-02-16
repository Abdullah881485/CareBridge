<!-- # BikeMart - Next.js Bike Marketplace

## Project Description

BikeMart is a simple, responsive bike marketplace built with **Next.js (App Router)** and **NextAuth.js** for authentication. Users can browse bikes, view details, and add/manage products after logging in. The app includes a polished UI with a responsive layout, search functionality, and protected routes.

---

## Features

- Public pages: Landing, Login/Register, Item List, Item Details
- Protected pages: Add Product, Manage Products (requires login)
- Authentication with email/password and Google (NextAuth.js)
- Responsive design for mobile, tablet, and desktop
- Product search and filter (UI only)
- Professional UI with cards, hover/focus effects, and clean forms

---

## Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS
- **Authentication:** NextAuth.js
- **Backend:** Express.js (simple API for products)
- **Database:** MongoDB

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/Abdulah881485/bikemart.git
cd bikemart



npm install
npm run dev
```

| Route                   | Description                              | Access    |
| ----------------------- | ---------------------------------------- | --------- |
| `/`                     | Landing page with hero, features, footer | Public    |
| `/login`                | Login/Register page with social login    | Public    |
| `/products`             | List of all bikes with search/filter     | Public    |
| `/products/[productId]` | Product details page                     | Public    |
| `/add-product`          | Form to add a bike                       | Protected |
| `/manage-products`      | Manage (view/delete) bikes               | Protected | -->
