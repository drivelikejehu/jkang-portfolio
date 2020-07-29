import React, { useState } from "react";

function Navbar() {
  const [isActive, setisActive] = useState(false);

  return (
    <>
      <nav
        className="navbar is-primary is-fixed-top has-text-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            onClick={() => {
              setisActive(!isActive);
            }}
            href="/#"
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <a className="navbar-item" href="/">
              <span className="icon">
                <i className="fas fa-info"></i>
              </span>
              <span>About</span>
            </a>
            <a className="navbar-item" href="/resume">
              <span className="icon">
                <i className="fas fa-file-alt"></i>
              </span>
              <span>Resume</span>
            </a>
            <a className="navbar-item" href="/portfolio">
              <span className="icon">
                <i className="fas fa-th-list"></i>
              </span>
              <span>Portfolio</span>
            </a>
            {/* <a className="navbar-item" href="/contact">
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              <span>Contact</span>
            </a> */}
          </div>
        </div>
      </nav>
      <section className="hero is-primary is-medium-with-navbar has-text-light">
        <div className="hero-body">
          <div className="container">
            <div className="title is-1">John Kang</div>
            <div className="subtitle is-3">Full Stack Web Developer</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
