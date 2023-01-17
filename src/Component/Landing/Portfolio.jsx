import React from "react";
import github from "../../assets/image/github_card.png";
import vector from "../../assets/image/Vector.png";
import sabujcha from "../../assets/image/sabujcha.png";
import zshop from "../../assets/image/zshop.png";
import crypto from "../../assets/image/crypto.png";
import csz from "../../assets/image/casaSanchez.png";




export const Portfolio = () => {
  return (
    <div className=" portafolio-img">

      <h1>Portfolio</h1>

      <div className=" portafolio-colort">

    <div className="portafolio-card">
      
      <div className="card">
        <img src={sabujcha} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Sabuja</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-body">
          <a href="https://mariasuescumg.github.io/sabujcha/" className="card-link">
            <img src={vector} alt="" />
          </a>
          <a href="https://github.com/mariasuescumg/sabujcha.git" className="card-link">
            <img src={github} alt="" />
          </a>
        </div>
      </div>
      <div className="card">
        <img src={zshop} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Zshop</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-body">
          <a href="https://mariasuescumg.github.io/z.shop/" className="card-link">
            <img src={vector} alt="" />
          </a>
          <a href="https://github.com/mariasuescumg/z.shop.git" className="card-link">
            <img src={github} alt="" />
          </a>
        </div>
      </div>

      <div className="card">
        <img src={crypto} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Crypto Stadistics</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-body">
          <a href="https://criptos-maria-app.netlify.app/" className="card-link">
            <img src={vector} alt="" />
          </a>
          <a href="https://github.com/mariasuescumg/criptomonedas.git" className="card-link">
            <img src={github} alt="" />
          </a>
        </div>
      </div>

      <div className="card">
        <img src={csz} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Casa Sanchez</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div className="card-body">
          <a href="https://casasanchez-cl.netlify.app/" className="card-link">
            <img src={vector} alt="" />
          </a>
          <a href="https://github.com/mariasuescumg/CasaSanchez.git" className="card-link">
            <img src={github} alt="" />
          </a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
