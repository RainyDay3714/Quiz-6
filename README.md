# TV & Home Entertainment Setup Platform

An all-in-one marketplace connecting homeowners with technical experts for specialized home entertainment services (mounting, calibration, wiring, and smart home integration). This project features a multi-merchant PayPal integration, a subscription-based AI chatbot, and a comprehensive admin management system.

---

## ## Core Features

* **Multi-Merchant Ecosystem:** Payments go directly to the Seller's PayPal account while being tracked via the platform's merchant dashboard.
* **Role-Based Access:** Managed levels for **Admin**, **Seller**, and **User**.
* **AI Chatbot Paywall:** Access to the expert AI bot is restricted by subscription tiers ($3, 5, or 10$ usages).
* **Seller Application Lifecycle:** Users can apply to become sellers, subject to Admin approval and Merchant ID assignment.
* **Service Management:** Sellers can perform CRUD operations on their specialized offerings.

---

## ## Tech Stack

**Frontend:**
* React.js (CRA)
* Redux (Thunk, Actions, Reducers, Constants)
* React Bootstrap & Bootswatch
* PayPal JavaScript SDK

**Backend:**
* Django & Django Rest Framework (DRF)
* PostgreSQL / SQLite
* JWT Authentication (SimpleJWT)
* Python-Decouple (Environment Management)

---

## ## Project Structure

### ### Backend Apps (`/backend`)
1.  **`users`**: Custom user model, JWT auth, and profile management.
2.  **`applications`**: Seller application processing (Approve/Decline).
3.  **`services`**: Service listings and seller-specific CRUD.
4.  **`orders`**: PayPal transaction logging and purchase history.
5.  **`chat`**: AI logic and usage tracking.
6.  **`subscriptions`**: Tier management and PayPal subscription integration.

### ### Frontend Screens (`/frontend`)
* `/` - **HomeScreen**: Service listings in card design.
* `/service/:id` - **DetailScreen**: Service specifics and PayPal checkout.
* `/signin` & `/signup` - **Auth**: Email-based credentials.
* `/apply-seller` - **ApplySeller**: Seller application form.
* `/admin/users` - **UserScreen**: Admin table for user management and application approval.
* `/dashboard/seller` - **SellerDashboard**: Service management for experts.
* `/profile` - **UserProfile**: Account info and order history.
* `/subscribe` - **SubscriptionScreen**: Tier selection.
* `/admin/subscriptions` - **SubscriptionList**: Admin view of all active subs.

---

## ## Setup Instructions

### ### Prerequisites
* Python 3.10+
* Node.js & npm
* PayPal Developer Account (Client ID & Secret)

### ### Backend Setup
1. Navigate to the backend folder: `cd backend`
2. Create a virtual environment: `python -m venv venv`
3. Activate:
   * Windows: `venv\Scripts\activate`
   * Mac/Linux: `source venv/bin/activate`
4. Install dependencies: `pip install -r requirements.txt`
5. Create a `.env` file based on `.env.sample`.
6. Run migrations:
   python manage.py makemigrations
   python manage.py migrate
7. Start server: `python manage.py runserver`

### ### Frontend Setup
1. Navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Create a `.env` file for your `REACT_APP_PAYPAL_CLIENT_ID`.
4. Start the application: `npm start`

---

## ## API Endpoints Reference
| Path | Description |
| :--- | :--- |
| `/api/v1/users/` | Auth, Register, and Profiles |
| `/api/v1/applications/` | Seller application management |
| `/api/v1/services/` | Public listings and Seller CRUD |
| `/api/v1/orders/` | Transaction logs |
| `/api/v1/chat/` | AI Chatbot (usage restricted) |