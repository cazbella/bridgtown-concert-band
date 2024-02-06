import React from "react";
import Jumbotron from "../jumbotron/Jumbotron";
import Jumbotrontext from "../jumbotron/Jumbotrontext.jsx"
import BCSBlogo from "../../assets/images/logo.png"


function Home() {
  return (
    <div>
        <Jumbotron />
        <Jumbotrontext />
    </div>
  );
}

export default Home;