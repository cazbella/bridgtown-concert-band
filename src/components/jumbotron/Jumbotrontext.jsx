import React from 'react';
import "./Jumbotrontext.css";

function Jumbotrontext() {
  return (
    <div className="container-fluid py-5 jumbotron-text">
      <div className="row">
        <div className="col-12 text-center">
          <h1 id="h1">Welcome!</h1>
          <p className="fs-4 body">Welcome to Bridgtown Concert Showband! We are thrilled to have you here. As a full showband based in Bridgtown, Cannock, our passion for music drives us to deliver an unforgettable experience. With a diverse repertoire, we bring to life concert band pieces that span the musical spectrum from the 1960s to the present day. <br /><br />

Our talented musicians are dedicated to creating a vibrant and engaging atmosphere, captivating audiences with the rich melodies and harmonies of classic and contemporary tunes. Whether you're a fan of timeless classics or modern hits, our performances are designed to transport you through the decades of musical excellence. <br /><br />

At Bridgtown Concert Showband, we take pride in our commitment to musical artistry and community involvement. Our goal is to share the joy of live music, fostering a sense of unity and connection among our audience members. Join us on a musical journey that transcends time, as we celebrate the power of music to bring people together. <br /><br />

Thank you for being a part of our musical community. We look forward to sharing our passion and talent with you at our upcoming performances. Stay tuned for exciting concerts, events, and musical adventures!</p>
          <a className="btn btn-primary btn-lg text-button" href="mailto:carolinelane@live.co.uk" role="button">Send E-mail</a>
        </div>
      </div>
    </div>
  );
}

export default Jumbotrontext;
