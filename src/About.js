import React from "react";
import { Helmet } from "react-helmet";
import {  Link } from "react-router-dom";



const About = () => (
  <div>
    <Helmet>
      <title>About</title>
    </Helmet>
    <h2>This is About.</h2>
    <Link to="/">Home</Link>
  </div>
);

export default About