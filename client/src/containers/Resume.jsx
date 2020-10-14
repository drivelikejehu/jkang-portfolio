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
                  <div className="subtitle is-5">An exercise in progress</div>
                  <a
                    href="https://docs.google.com/document/d/e/2PACX-1vS-pq1GE6Rb8fUS43tQ2hrVCHt8mYjzwcPZ6t8ADS2l5JuFuCmeOwSbP2KlBCMCspx9oNlCLwY0SR4t/pub"
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
