import React from 'react';
import './reasons.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';


const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
        <div className="blur reasons-blur"></div>
        <div className="left-r">
            <img src={image1} alt="image1" />
            <img src={image2} alt="image2" />
            <img src={image3} alt="image3" />
            <img src={image4} alt="image4" />
        </div>
        <div className="right-r">
            <span>some reasons</span>
            <div>
                <span className='stroke-text'>why</span>
                <span> choose us?</span>
            </div>
            <div className='details-r'>
                <div>
                    <img src={tick} alt="tick" />
                    <span>OVER 140+ EXPERT COACHS</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
                </div>
                <div>
                    <img src={tick} alt="tick" />
                    <span>RELIABLE PARTNERS</span>
                </div>
            </div>
            <span>OUR PARTNERS</span>
            <div className="partners">
                <img src={nb} alt="new balance" />
                <img src={adidas} alt="adidas" />
                <img src={nike} alt="nike" />
            </div>
        </div>
    </div>
  )
}

export default Reasons