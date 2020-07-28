import React from "react";

const Resume = () => {
  return (
    <>
      <section className="section" id="resume">
        <div className="section-heading">
          <div className="container">
            <div className="title is-2">Resume</div>
            <div className="subtitle is-5">More about my past</div>
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
        </div>
      </section>
    </>
  );
};

export default Resume;
