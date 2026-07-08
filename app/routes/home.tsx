import type { Route } from "./+types/home";
import Navbar from "../../components/Navbar";
import "../styles/Home.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Roomify | AI-First Design Environment" },
    {
      name: "description",
      content:
        "Roomify is an AI-first design environment that helps you visualize, render, and ship architectural projects faster than ever.",
    },
  ];
}

export default function Home() {
  return (
    <div className="home-body-wrapper">
      <Navbar />

      <main className="home-main">
        {/* Announcement Badge */}
        <div className="badge-announcement">
          <span className="badge-pulse-dot"></span>
          INTRODUCING ROOMIFY 2.0
        </div>

        {/* Main Headline */}
        <h1 className="main-headline">
          Build beautiful spaces at the speed of thought with Roomify_
        </h1>

        {/* Subtext */}
        <p className="subtext">
          ROOMIFY IS AN AI-FIRST DESIGN ENVIRONMENT THAT HELPS YOU VISUALIZE,
          <br className="hidden md:block" />
          RENDER, AND SHIP ARCHITECTURAL PROJECTS FASTER THAN EVER.
        </p>

        {/* CTAs */}
        <div className="cta-container">
          <button className="btn-transition btn-cta-primary">
            START BUILDING
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
          <button className="btn-transition btn-cta-secondary">
            WATCH DEMO
          </button>
        </div>

        {/* Upload Feature Card */}
        <section className="upload-section" data-purpose="upload-interface-container">
          <div className="upload-grid-container grid-pattern">
            {/* Upload Card Interface */}
            <div className="upload-card" data-purpose="upload-card">
              {/* Icon */}
              <div className="upload-icon-container">
                <svg
                  className="upload-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              <h2 className="upload-title">Upload your floor plan</h2>
              <p className="upload-subtitle">Supports JPG, PNG formats up to 10MB</p>

              {/* Drop Zone */}
              <div className="upload-dropzone group">
                <div className="upload-dropzone-icon-container">
                  <svg
                    className="upload-dropzone-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
                <p className="upload-dropzone-title">Click to upload or drag and drop</p>
                <p className="upload-dropzone-subtitle">Maximum file size 50 MB.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Footer Links */}
      <footer className="footer-container">
        <div className="footer-jump-btn">
          <svg
            className="footer-jump-icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
          </svg>
          <span className="footer-jump-text">Jump ahead</span>
        </div>
        <div className="footer-badge-container">
          <div className="footer-badge">{"{JS}"}</div>
        </div>
      </footer>
    </div>
  );
}
