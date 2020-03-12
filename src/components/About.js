import React from "react";
import { useHistory } from "react-router-dom";



export default function About() {

  let history = useHistory();
  return (
    <div className="about-page">
      <header>
        <div className="index-header-wrap">
          <div className="homeNav" title="Back" onClick={ ()=> { history.goBack() }}>
              <i className="fas fa-long-arrow-alt-left"></i>
          </div>
          <div className="index-header-welcome" style={{ fontSize: "1.2rem" }}>
            About NairaTrack{" "}
          </div>
          <div className="index-menu" title="menu">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
      </header>
      <div style={{textAlign:'center', marginTop:'2rem'}}>
        <img
          style={{ width: "104px", height: "104px", borderRadius:'1rem' }}
          src="nairatrack-64.png"
          alt="logo"
        />
      </div>
      <section className="about-body">
        <div className="about-body-wrap">
          <p>
            NairaTrack is an expense and income tracker app with a simple user
            interface and experience. NairaTrack is exactly what you need to
            track your income and spendings.{" "}
          </p>
          <br />
          <p>
            All data is stored in your browser's local storage and not
            accessible by the developer. This app was built with ReactJs, using
            the ContextApi and it is a Progressive Web App (PWA). You can proceed
            to <strong> install on your home screen.</strong>{" "}
          </p>
          <br/>
          <p>Request a feature{" "}
          <a
            href="https://segunos.tk/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a></p>
          <br />
          <p>
            This app was developed by Segun Olanitori, a Front-End Developer
            passionate about creating useful solutions on the web. Find More
            about me <a href="https://segunos.tk">Here</a>
          </p>
          <br />
          <p>
            Note* This app is a work in progress and I want to transform it to a
            fullstack app and possibly a mobile app
          </p>
        </div>
      </section>
    </div>
  );
}
