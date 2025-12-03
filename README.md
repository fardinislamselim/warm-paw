# 🐾 WarmPaws – Pet Care in Winter

## 🌟 Project Overview

**WarmPaws** is a warm, modern, and fully-responsive Single-Page Application (SPA) designed as an all-in-one hub for pet owners. It focuses on providing essential resources and services to ensure their furry friends are safe and comfortable during the cold winter months.

The design philosophy centers on **minimalism**, **warm visuals**, and **approachability**, guaranteeing a delightful and informative user experience across all devices.

-----

## 🌍 Live Demo

Experience the coziness\!

🔗 **Visit Website:** [https://paws-comfort.netlify.app/](https://paws-comfort.netlify.app/)

-----

## ✨ Key Features & Functionality

Your pet's perfect winter care, all in one place.

### 🏠 Core Content Pages

  * **Home Page:** Features a winter-themed hero slider built with **Swiper.js**, dynamically loaded Popular Winter Care Services, and extra informative sections for tips, expert vets, and clothing collections.
  * **Services Details (🔒 Protected Route):** Accessible only to logged-in users. Displays comprehensive service information and includes a straightforward "Book Service" form with success toast notifications.
  * **About Us Page (✨ NEW):** Dedicated page to share the project's vision and team.
  * **Contact Us Page (✨ NEW):** Provides users with easy methods to get in touch.

### 🔐 Robust User Authentication

Powered by **Firebase Authentication** for secure and versatile login options.

  * **Login & Signup:** Supports Email/Password and Google Sign-in/Sign-up.
      * **Password Validation:** Enforces strong passwords (1 Uppercase, 1 Lowercase, Min. 6 characters).
  * **Forgot Password:** Allows users to easily reset their password with an email redirection after the request.
  * **My Profile:** Displays logged-in user details and allows for profile updates (Name, Photo URL) using Firebase's `updateProfile()`.
  * **Protected Routes:** Ensures sensitive areas like **Service Details** and **My Profile** are only accessible after successful login.

### 🎨 Design & Interactivity

  * **Dark Mode (✨ NEW):** Seamlessly toggles between light and dark themes for improved accessibility and user preference, implemented using **DaisyUI** themes.
  * **Smooth Animations:** Uses **AOS** (Animate On Scroll) and **Animate.css** for engaging and polished visual transitions.
  * **Notifications:** Implements **react-hot-toast** for non-intrusive and timely user feedback (success, error, loading).
  * **Responsive Design:** Fully optimized with **Tailwind CSS** to look great on mobile, tablet, and desktop.

-----

## 🛠️ Technologies Used

| Category | Tools / Technologies | Description |
| :--- | :--- | :--- |
| **Frontend** | React.js (Vite) | Fast and modern framework for the SPA. |
| **Styling** | Tailwind CSS, DaisyUI | Utility-first CSS framework for rapid, customizable styling. |
| **Routing** | React Router DOM | Handles client-side navigation and protected routes. |
| **Authentication** | Firebase Auth | Secure, scalable user authentication (Email/Pass, Google OAuth). |
| **State** | React Context API | Global state management for user authentication status. |
| **Features** | Swiper.js, AOS, Animate.css | Slider component and smooth, engaging animations. |
| **Feedback** | React Hot Toast | User-friendly toast notifications. |
| **Deployment** | Netlify | Continuous deployment and hosting solution. |
| **Version Control** | Git & GitHub | Source code management and collaboration. |

-----

## 📂 Screens & Routes

| Route | Page Name | Access Level | Description |
| :--- | :--- | :--- | :--- |
| `/` | Home | Public | Landing page with services and information. |
| `/services/:id` | Service Details | Public | View details and book a service. |
| `/about` | About Us | Public | Information about the project. |
| `/contact` | Contact Us | Public | Contact information and form. |
| `/login` | Login | Public | User sign-in page. |
| `/register` | Signup | Public | New user registration. |
| `/profile` | My Profile | **🔒 Protected** | User profile viewing and update. |
| `/forgot-password` | Forgot Password | Public | Password reset request. |

-----

## 🚀 Getting Started (For Developers)

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/fardinislamselim/paws-comfort]
    cd warmpaws-pet-care
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add your Firebase configuration:

    ```
    VITE_APIKEY="Your_Firebase_API_Key"
    VITE_AUTHDOMAIN="Your_Auth_Domain"
    VITE_PROJECTID="Your_Project_ID"
    # ... and so on for all Firebase config variables
    ```

4.  **Run the project:**

    ```bash
    npm run dev
    ```

The application will now be running on `http://localhost:5173` (or the port specified by Vite).