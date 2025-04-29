<!-- Design brief of the app -->

Project Design Brief: Glory Games - e-Commerce MERN
________________________________________

1. General Overview
Project Name: Glory Games
Project Type: Full-stack e-commerce web application
Technologies Used: MERN Stack (MongoDB, Express.js, React.js, Node.js)
Description:
Glory Games is an online store specialized in selling video games, consoles, and accessories. The site allows users to browse products, search for them, view details, add them to the cart, and place orders. Users can create an account, log in, manage their profile, and view their order history.
________________________________________

2. Functional Objectives
• User authentication (sign up / log in / log out)
• Product search (by name, category, brand)
• Product browsing with detailed view
• Shopping cart management
• Order placement
• User-specific order history
• User profile management
• Administrator role:
 o Add, edit, delete products
 o View the user list
 o View the order list and manage their status
________________________________________

3. Technical Objectives
• RESTful architecture between frontend and backend
• NoSQL database with MongoDB
• JWT-based authentication
• Route protection
• Use of React for a smooth SPA experience
• Secure backend with error handling and validation
________________________________________


4. Actors
• Visitor: Can browse the product catalog
• Registered User: Can purchase products, manage profile, and view orders
• Administrator: Can manage products, users, and orders
________________________________________

5. Data Models (MongoDB)
User
{
  fullName,
  username,
  email,
  password,
  address: { street, city, postalCode, country },
  phone,
  isAdmin,
  profilePicture,
  timestamps
}

Product
{
  name,
  description,
  price,
  oldPrice,
  isSale,
  category,
  subcategory,
  inStock,
  image,
  timestamps
}

Order
{
  user,
  products: [ { product, quantity, price } ],
  total,
  shippingAddress,
  paymentMethod,
  status,
  createdAt
}

Cart
{
  user,
  items: [ { product, quantity } ],
  total,
  createdAt
}
________________________________________


6. Frontend Pages
• / : Home (product catalog)
• /login : Login
• /register : Register
• /product/:id : Product details
• /category/:category/:subcategory : Product categories
• /cart : Shopping cart
• /profile : User profile
• /order/:id : Order details
• /myorders : User order list
• /admin/users : User management
• /admin/orders : Order management
• /* : Error page
________________________________________

7. Bonus
• Responsive design (mobile / tablet)
• Deployment on Netlify + backend on Render

