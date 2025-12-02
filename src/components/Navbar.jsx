import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import defaultAvatar from "../assets/image.png";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => toast.success("Logout successful!"))
      .catch((error) => toast.error(error.message));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="font-medium text-white hover:text-white/80">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className="font-medium text-white hover:text-white/80"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className="font-medium text-white hover:text-white/80"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact-us"
          className="font-medium text-white hover:text-white/80"
        >
          Contact Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/my-profile"
              className="font-medium text-white hover:text-white/80"
            >
              My Profile
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <nav className="sticky bg-primary shadow-lg">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="navbar container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-white lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-primary rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                {navLinks}
                {!user && (
                  <li>
                    <Link
                      to="/login"
                      className="font-medium text-white hover:text-white/80"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <Link to="/" className="cursor-pointer flex items-center">
              <img className="h-10 sm:h-12" src={logo} alt="Logo" />
              <h3 className="text-xl sm:text-2xl font-bold text-white ml-1 hidden sm:block">
                Warm - Paws
              </h3>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
          </div>

          <div className="navbar-end space-x-3">
            {user ? (
              <>
                <div
                  className="tooltip tooltip-bottom hidden md:block"
                  data-tip={user.displayName || "User"}
                >
                  <img
                    src={user.photoURL || defaultAvatar}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                  />
                </div>

                <button
                  onClick={handleLogout}
                  className="btn btn-warning text-primary font-semibold rounded-full px-5 hover:text-white"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="btn btn-warning text-primary font-heading text-lg rounded-full px-6 shadow hover:scale-105 transition-all"
              >
                Login
              </NavLink>
            )}
            {!user && (
              <div className="hidden lg:block">
                <Link
                  to="/signup"
                  className="btn btn-outline text-white border-white hover:bg-white hover:text-primary font-heading text-lg rounded-full px-6 transition-all"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
