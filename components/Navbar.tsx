import React from "react";
import "../app/styles/Navbar.css";
import { useOutletContext } from "react-router";

const Navbar = () => {
  const { isSignedIn, username, signIn, signOut } =
    useOutletContext<AuthContext>();

  const handleAuthClick = async () => {
    if (isSignedIn) {
      try {
        await signOut();
      } catch (error) {
        console.error("Puter signing out failed:", error);
      }
    } else {
      try {
        await signIn();
      } catch (error) {
        console.error("Puter signing in failed:", error);
      }
    }
  };
  return (
    <header className="navbar-header" data-purpose="navigation-bar">
      <div className="navbar-left">
        {/* Logo */}
        <a className="navbar-logo" href="#">
          <svg
            className="navbar-logo-icon"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M12 22V12"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
            <path
              d="M21 7L12 12L3 7"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
          <span>Roomify</span>
        </a>
        {/* Desktop Nav Links */}
        <nav className="navbar-nav">
          <a className="navbar-link" href="#">
            Product
          </a>
          <a className="navbar-link" href="#">
            Pricing
          </a>
          <a className="navbar-link" href="#">
            Community
          </a>
          <a className="navbar-link" href="#">
            Enterprise
          </a>
        </nav>
      </div>

      <div className="actions">
        {isSignedIn ? (
          <>
            <span className="greeting">
              {username ? `Hi ${username}` : "Signed in"}
            </span>
            <button onClick={handleAuthClick} className="cta">
              Log out
            </button>
          </>
        ) : (
          <>
            <button onClick={handleAuthClick} className="login">
              Log in
            </button>
            <a href="#upload" className="cta">
              Get Started
            </a>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
