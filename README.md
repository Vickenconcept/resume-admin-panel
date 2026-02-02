# Admin Dashboard - Resume Builder

A Next.js admin dashboard for managing users, payments, and system configuration for the Resume Builder Chrome Extension.

## Features

- **Landing Page**: Marketing page for the extension
- **Admin Login**: Secure authentication for admin users
- **Admin Dashboard**: User management, statistics, and system overview
- **Payment Success Page**: Redirect page after successful Paystack payment

## Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Access the Application**:
   - Landing Page: http://localhost:3002
   - Admin Login: http://localhost:3002/admin/login
   - Admin Dashboard: http://localhost:3002/admin/dashboard
   - Payment Success: http://localhost:3002/payment/success

## Admin Access

To create an admin user:

1. Register a user through the extension or API
2. Update the user's role in the database:
   ```sql
   UPDATE users SET role = 'admin' WHERE email = 'your-email@example.com';
   ```
3. Or use the admin dashboard to change a user's role (if you already have admin access)

## API Endpoints

The dashboard uses the following admin API endpoints:

- `POST /api/admin/login` - Admin login
- `GET /api/admin/stats` - Dashboard statistics
- `GET /api/admin/users` - Get all users (paginated)
- `GET /api/admin/users/:id` - Get user details
- `PUT /api/admin/users/:id` - Update user (credits, role, etc.)
- `GET /api/admin/payment-plans` - Get payment plans
- `PUT /api/admin/payment-plans` - Update payment plans

## Payment Success Flow

1. User completes payment on Paystack
2. Extension polls for payment verification
3. Backend verifies payment and returns `successPageUrl`
4. Extension opens success page in new tab
5. Success page verifies payment and displays confirmation

## Production Deployment

1. Set `NEXT_PUBLIC_API_URL` to your production API URL
2. Build the application:
   ```bash
   npm run build
   ```
3. Start the production server:
   ```bash
   npm start
   ```

## Notes

- The admin dashboard requires users with `role = 'admin'` in the database
- All admin routes are protected and require authentication
- Payment success page can be accessed directly with a reference parameter
