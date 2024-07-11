import './Home.css'
import heroimages from "../../assets/Images/newheroimage.webp"

import ship from '../../assets/Images/ship.svg'
import point from '../../assets/Images/point.svg'
import sampl from '../../assets/Images/sampl.webp'
import perc from '../../assets/Images/perc.svg'
import face from '../../assets/Images/face.webp'
import makeup from '../../assets/Images/makeup.jpg'
import body from '../../assets/Images/body.webp'
import sun from '../../assets/Images/sun.jpg'
import gcard from '../../assets/Images/gcard.webp'
import club from '../../assets/Images/club.webp'
import subs from '../../assets/Images/subs.webp'
import licon from '../../assets/Images/licon.webp'
import cryo from '../../assets/Images/cryo.webp'
import { FaStar } from "react-icons/fa6";
import ser from '../../assets/Images/ser.webp'


function Home(){
  return (
    <>

    <div className="body">

    <div className="hero-section">
        <a href="#"><img src={heroimages} alt="" />
        <div className="box">
            
            <div className="new-p">
                <p className="nw">NEW</p>
            </div>
            
            <center><p className='htt'>Body Fit Active <br />
            Skin Smoothing <br /> Expert <br /></p></center>

            <center><p className='minfo'>
            Visibly lifts, tightens + tones.<br /> <div className="dsc"> DISCOVER </div>
            </p></center>
            
        </div>

        </a>
    </div>




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
    
    


    <div className="prod-parts">
        <h1><center>Your skin. Our expertise.</center></h1>
        <h4><center>DISCOVER OUR PLANT-POWERED FORMULAS</center></h4>
    </div>


    <div className="skinexp-container">

        <div className="form1">
            <img src={face} alt="" />
            <img src={makeup} alt="" />
            <img src={body} alt="" />
            <img src={sun} alt="" />
        </div>


        
        

    </div>






    <div className="bmh">
        <center><p className="t1">Beauty must-haves</p></center>
        <center><p className="t2">DISCOVER OUR ICONIC PRODUCTS</p></center>
    </div>




    <div className="hist">
        <p className='hist-txt'>
            Proven Results. <br /> Responsible Beauty.
        </p>

        <div className="line"></div>

        <p className="ino">70 YEARS OF INNOVATION</p>

        <img src={ser} alt="" />
    </div>




            <div className="cryofix2">
                <div className="cryo">
        <div className="box">
            <img src={cryo} alt="" />

            <div className="cryo-info">
                <p>CRYO-FLASH MASK</p>
                <div className="stars">
                    <FaStar color='#B40024' size='25px'/>
                    <FaStar color='#B40024' size='25px'/>
                    <FaStar color='#B40024' size='25px'/>
                    <FaStar color='#B40024' size='25px'/>
                    <FaStar color='#B40024' size='25px'/>
                </div>
                <p className="rev">1,500+ 5-star reviews</p>
                <p className="beu"><center>A 10-minute, icy-cold, gel-cream face mask that provides pro-like results <br /> for an instant visible lift effect. Pores are visibly minimized and skin’s <br /> radiance is boosted.</center></p>
                <button>See for yourself</button>
            </div>
            
        </div>
                </div>
            </div>


    <div className="services">
        <center><div className="t11">Our exclusive services</div></center>
        <center><div className="t22">CREATED TO MAKE YOUR LIFE MORE BEAUTIFUL</div></center>
    </div>
    


       <div className="serv">
        
        <div className="box">
            <img src={gcard} alt="" />
            <p>Gift Cards <br /><br /> Take the guesswork out of <br /> gifting, and let them choose <br /> their favorites. <br /><br /> <div className="link">SHOP NOW</div></p>
        </div>

        <div className="box">
            <img src={club} alt="" />
            <p>Club Clarins <br /><br /> Earn 10 points per dollar and <br /> redeem for rewards. <br /><br /> <div className="link">LEARN MORE</div></p>
        </div>

        <div className="box">
            <img src={subs} alt="" />
            <p>Subscription Service <br /><br /> Enjoy 10% off, free shipping, <br /> and 3 free samples with <br /> recurring orders. <br /><br /> <div className="link">LEARN MORE</div></p>
        </div>

        <div className="box">
            <img src={licon} alt="" />
            <p>Live Consultation <br /><br /> Connect with a Beauty Coach <br /> for a complimentary <br /> consultation. <br /><br /> <div className="link">BOOK NOW</div></p>
        </div>
        
        </div> 
    
        </div>

    </>
  );
};

export default Home;