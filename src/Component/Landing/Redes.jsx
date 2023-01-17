import React from 'react';
import IG from "../../assets/image/mdi_instagram.png";
import GH from "../../assets/image/mdi_github.png";
import LI from "../../assets/image/mdi_linkedin.png";
import WP from "../../assets/image/ic_baseline-whatsapp.png";



export const Redes = () => {
  return (
    <div className='Redes'>
      <img src={GH} alt="Github" />
      <img src={LI} alt="Linkedin" />
      <img src={WP} alt="WhatsApp" />
      <img src={IG} alt="instagram" />
      
    </div>
  )
}
