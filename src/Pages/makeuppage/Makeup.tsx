import './Makeup.css'
import makeuphero from '../../assets/Images/makeuphero.webp'
import ship from '../../assets/Images/ship.svg'
import point from '../../assets/Images/point.svg'
import sampl from '../../assets/Images/sampl.webp'
import perc from '../../assets/Images/perc.svg'
import lipoil from '../../assets/Images/lipoil.jpg'
import { FaStar } from "react-icons/fa6";

function Makeup() {
  return (
    <>
        <div className="makeup-herosection">
            <img src={makeuphero} alt="" />

            <p className='mkp'>Makeup</p>

            <p className="mkp2">At Clarins, we believe that nature reveals our true beauty. Shop our expert selection of beauty bestsellers <br />
            for face, eyes and lips, powered by plants.</p>

            <div className="mkp-parts">

            <button className='mkpt'>Face</button>
            <button className='mkpt'>Eyes</button>
            <button className='mkpt'>Lips</button>
            <button className='mkpt'>View All</button>

            </div>

        </div>



        <div className="makeup-lv">
            <p className="mk1">Makeup we love</p>
            <p className="mk2">DISCOVER OUR PLANT-POWERED FORMULAS</p>
        </div>




<div className="dealfix">

        <div className="deals">

<div className="box">
    <div className="deals-info">
        <div className="box">
            <img src={ship} alt="" />
            <p className='deal-txt'>Free shipping with any $50 <br /> order</p>
        </div>

        <div className="box">
            <img src={point} alt="" />
            <p className='deal-txt'>Earn 10 points per dollar <br /> and redeem for rewards</p>
        </div>

        <div className="box">
            <div className="fix"><img src={sampl} alt="" /></div>
            <p className='deal-txt'>Choose 3 free samples with <br /> any order</p>
        </div>

        <div className="box">
            <img src={perc} alt="" />
            <p className='deal-txt'>Subscribe for 10% off and <br /> free shipping</p>
        </div>
    </div>
</div>

</div>

</div>


<div className="cryofix">
    <div className="cryo">
        <div className="box">
            <img src={lipoil} alt="" />

            <div className="cryo-info">
                <p>LIP COMFORT OIL</p>
                <div className="stars">
                    <FaStar color='#B40024' size='25px'/>
                    <FaStar color='#B40024' size='25px'/>
                    <FaStar color='#B40024' size='25px'/>
                    <FaStar color='#B40024' size='25px'/>
                    <FaStar color='#B40024' size='25px'/>
                </div>
                <p className="rev">3,000+ 5-star reviews</p>
                <p className="beu2"><center>Nourishing lip oil enriched with a trio of plant oils to nourish, comfort, <br /> and visibly plump lips, while providing a protective shield of high-shining <br /> color.</center></p>
                <button className='sfy1'>See for yourself</button>
            </div>
            
        </div>
       </div>
</div>



        
    
    </>
  );
};

export default Makeup;