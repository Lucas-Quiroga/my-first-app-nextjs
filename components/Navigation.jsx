"use client";
import React from "react";
import Link from "next/link";
import SigninButton from "./SigninButton";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container text-center justify-content-center d-flex">
        <Link className="navbar-brand text-center" href="/">
          Next App
        </Link>
        <SigninButton />
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">
                Services
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Navigation;
