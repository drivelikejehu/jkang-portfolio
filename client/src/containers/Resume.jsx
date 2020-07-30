import React from "react";
// import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <>
      <section className="hero is-primary is-fullheight-with-navbar has-text-light">
        <div className="hero-body">
          <div className="container">
            <div className="row">
              <div className="columns">
                <div className="column"></div>
                <div className="column is-two-thirds has-text-centered">
                  <div className="title is-2">Resume</div>
                  <div className="subtitle is-5">Forever a work in progress</div>
                  <a
                    href="https://docs.google.com/document/d/1aOl0OwNl-t7u9c6vaVp8fgHrSofBXTo3wTYHEODdIpQ/edit?usp=sharing"
                    className="button is-link is-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <i className="fas fa-file-alt"></i>
                    </span>
                    <span>My Resume</span>
                  </a>
                </div>
                <div className="column"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
