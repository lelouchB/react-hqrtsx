import React from "react";
import { Helmet } from "react-helmet";
import {  Link } from "react-router-dom";



const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h2>This is Home.</h2>
    <Link to="/about">About</Link>
  </div>
);


export default Home