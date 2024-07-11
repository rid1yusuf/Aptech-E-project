import './Skincare.css'
import skinimage from '../../assets/Images/skinimage.webp'
import multi from '../../assets/Images/multi.jpg'
import cleanser from '../../assets/Images/cleanser.webp'
import detox from '../../assets/Images/detox.jpg'
import ship from '../../assets/Images/ship.svg'
import point from '../../assets/Images/point.svg'
import sampl from '../../assets/Images/sampl.webp'
import perc from '../../assets/Images/perc.svg'
import bfa from '../../assets/Images/bfa.webp'
import fbacr from '../../assets/Images/fbacr.webp'
import cryo from '../../assets/Images/cryo.webp'
import { FaStar } from "react-icons/fa6";
import moist from '../../assets/Images/moist.webp'
import serum from '../../assets/Images/serum.webp'
import skinq from '../../assets/Images/skinq.jpg'
import subs from '../../assets/Images/subs.webp'


function Skincare() {
  return (
    <>

    <div className="hero-skin">
        <img src={skinimage} alt="" /> 

        <p className='skn'>Skincare</p>
        
        <p className="skn2">From daily rituals to targeted anti-aging care, discover the best in plant-based skincare, powered by <br />
        nature's most effective ingredients.</p>


    <div className="parts">

        <button className='pt'>Face</button>
        <button className='pt'>Body</button>
        <button className='pt'>Sun</button>
        <button className='pt'>Men</button>
        <button className='pt'>View All</button>

    </div>

    </div>


      <div className="skin-lv">

        <p className="p1">Skincare we love</p>
        <p className="p2">DISCOVER OUR PLANT-POWERED FORMULAS</p>

      </div>



      <div className="skincare-images">

          <div className="box">
            
            <img src={multi} alt="" />

            <div className="new-skn">
              <p className="nw-skn">NEW</p>
            </div>

            <center className='top'>
            <p className="snk-p1">Multi-Active</p> <br />
            <p className="snk-p">Skin. De-stressed.</p>
            </center>

            <center><div className="exp"><button>Discover</button></div></center>

          </div>


          <div className="box">

            <img src={cleanser} alt="" />

            <div className="new-skn">
              <p className="nw-skn">NEW</p>
            </div>

            <center className='top'>
            <p className="snk-p1">Clarins Cleansers</p> <br />
            <p className="snk-p">Plant-powered formulas for clean, radiant <br /> skin.</p>
            </center>  

            <center><div className="exp"><button>Discover</button></div></center>            

          </div>


          <div className="box">

            <img src={detox} alt="" />

            <div className="new-cla">
              <p className="nw-cla">MY CLARINS</p>
            </div>

            <center className='top'>
            <p className="snk-p1">Detox and nourish your skin</p> <br />
            <p className="snk-p">Plant-powered formulas for clean, radiant <br /> skin.</p>
            </center> 

            <center><div className="exp"><button>Discover</button></div></center>

          </div>

      </div>


      <div className="dealfix2">
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


      <div className="body-fit-active">
        
        <div className="box">

          <div className="imgg1">
            <img src={bfa} alt="" />
          </div>

          <div className="imgg2">
            <img src={fbacr} alt="" />
          </div>

        </div>

      </div>


    <div className="fixcryo">
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
            <img src={moist} alt="" />
            <p>Moisturizer Finder <br /> <br />Take the 30 second quiz and meet the expert moisturizer for you. <br /> <br /> <div className="link">TAKE THE QUIZ</div></p>
        </div>

        <div className="box">
            <img src={serum} alt="" />
            <p>Serum Finder<br /><br /> Discover age-defying and <br /> problem-solving serums—skin solutions for any concern. <br /><br /> <div className="link">TAKE THE QUIZ</div></p>
        </div>

        <div className="box">
            <img src={skinq} alt="" />
            <p>Skin Quiz<br /><br />We offer personalized skincare routines powered by the best of plants and science. <br /><br /><div className="link">TAKE THE QUIZ</div></p>
        </div>

        <div className="box">
            <img src={subs} alt="" />
            <p>Subscription Service <br /><br /> Enjoy 10% off, free shipping, <br /> and 3 free samples with <br /> recurring orders. <br /><br /> <div className="link">LEARN MORE</div></p>
        </div>
        
    </div> 


    <div className="container">
        <div className="line-container">
            <div className="lineee"></div>
            <h2 className="title">SIGN UP FOR CLARINS EMAILS</h2>
            <div className="lineee"></div>
        </div>
    </div>
    


    <p className="adj2">Sign up and well keep you in the loop for special offers, exclusive news and more!</p>


    <div className="signinfo">
      
        <input type="text" placeholder='Email Address*'/>
        <input type="text" placeholder='First Name'/>
        <input type="text" placeholder='Last Name'/>
        <input type="date" placeholder='Date of Birth' className=''/>
      
    </div>


    <div className="subscribe"><button>Subscribe</button></div>


    <p className="rest-skn">

    Reveal your Natural Beauty with Plant-Powered Skincare <br />
    Clarins founding belief was that beauty is directly linked to her wellbeing and  happiness. It was a radical thought at the time, but this philosophy <br />
    continues to underpin Clarins approach to skincare — bringing you the purity of plant-based products as part of a simple skincare routine that reveals <br /> 
    every womans beauty. <br /> <br />

    Build skin science and plant power into your skincare routine <br /> <br />
    Each Clarins product is designed not only to address your skin concerns, but to deliver potent plant-based ingredients that weave a sense of care and <br /> 
    wellbeing into every beauty routine. Join us as we explore how to start a simple skincare routine with products that benefit your skin. <br /> <br />

    Step #1: Gentle face cleansers and toners <br /> <br />
    When you use a face cleanser, you benefit your skin in three ways: by cleaning away dead surface cells, makeup, excess oil, bacteria, and pore-clogging <br />
    debris; giving your skin’s circulation a helping hand; and prepping it to receive the full benefits of the products to follow. <br />
    Clarins face cleansers for dry skin gently cleanse and soften the appearance of dry skin. Our Soothing Gentle Foaming Cleanser is formulated with <br /> 
    nourishing Shea butter, and transforms into a silky foam that gently lifts away makeup and impurities – the perfect face cleanser for dry or sensitive skin. <br /> 
    Try our   Velvet Cleansing Milk to remove makeup before cleansing dry skin. If you have normal to dry skin, consider our Hydrating Gentle Foaming <br /> 
    Cleanser .
    Our Purifying Gentle Foaming Cleanser is our best face cleanser for oily skin. Mattifying Organic Meadowsweet extract and pore-cleansing blue granules <br /> 
    – made with salicylic acid – leave skin feeling refreshed, shine-free, and pristine-clean. Always avoid using a harsh face cleanser on acne-prone skin and <br /> 
    instead opt for a gentle cleanser — this is key to maintaining a healthy-looking, radiant complexion. Follow with our best toner for oily skin:   Purifying <br /> 
    Toning Lotion. <br />

    If your beauty routine includes a face toner, make sure it is non-irritating and alcohol-free to remove every last trace of cleanser without stripping your <br /> 
    skin, leaving your skin visibly soft, comfortable, and refreshed. <br /> <br />

    Step #2: Expert eye care <br /><br />
    Dark circles, puffiness, and fine lines can give even the freshest face a tired appearance,  but these common eye woes should never keep you from <br /> 
    putting your best face forward. Choosing the best eye care product for your particular concern can help minimize the appearance of dark circles, puffy <br /> 
    eyes, and fine lines.

    Whether you’ve just hit the Big 3-0, you’re powering through your Still Flawless 40s, or you’re a 50-plus Classic Beauty, Clarins has an eye care product <br /> 
    that’s just right for you. <br /><br />

    Step #3: Targeted serums <br /><br />
    Face serums deliver a concentration of ingredients to the skin that amplify the benefits of your moisturizer. Clarins face serums use a range of botanicals <br /> 
    sourced from around the world. Some of these ingredients are seasoned stand-bys, while others are at the forefront of skincare innovation. Finding the <br /> 
    best face serum for your skin begins with your personal skin goals. Clarins has a targeted serum for every concern, including aging skin, fine lines and <br /> 
    wrinkles, firming, hydration, dark spots and brightening, contouring, and mattifying. Just a few drops are all it takes to power up your beauty routine. <br />

    When adding serums to your regimen, you'll need to learn how to layer skincare to optimize the effectiveness of each product, while avoiding piling. The <br /> 
    general rule is to start with the product with the thinnest consistency for easy absorption and finish with the product that has the thickest consistency. <br /> 
    The same applies to layering serums. <br /><br />

    Step #4: Marvelous moisturizers <br /><br />
    Everyone needs to use a moisturizer, not only dry skin types. The best skincare regimens for oily skin never skimp on moisturizer. Clarins oily and <br /> 
    combination skincare products are formulated to deliver the right levels of moisture to ensure skin looks and feels healthy and comfortable. Without <br /> 
    enough moisture, oil glands work overtime to keep skin from drying out, which can lead to blemishes and clogged pores. <br />

    All Clarins face moisturizers use plant extracts — each carefully selected for its effectiveness and delivered in optimal concentrations to reveal the natural <br /> 
    beauty of your skin. All ingredients are sourced with the utmost care for the environment to protect our planet’s biodiversity. <br />

    Did you know that essential oils are one of the most deliciously aromatic and effective ways to treat skin concerns? Clarins Face Treatment Oils are made <br /> 
    from 100 percent plant extracts. Ingredients like Blue Orchid, Hazelnut, Patchouli, Lavender and Sandalwood help to visibly revitalize and tone, and leave <br /> 
    skin feeling supple and satin soft. <br />

    Whe n building your skincare routine, keep in mind that your skin has different needs during the day than it does when you sleep, so have one moisturizer <br /> 
    on hand for the morning, and use another before bed . <br /><br />

    Extra skincare TLC <br /><br />
    Now that you’ve built your plant-powered 4-step skincare routine, why stop there? If your regimen tends to stop at your jawline, start including the neck <br /> 
    and décolleté in your daily routine. Caring for the skin on your neck and décolleté with adequate moisture is important for all skin types but is an <br /> 
    especially important part of skincare for dry skin. Keep in mind that taking care of this area should start before the first signs of aging appear in your 30s <br /> 
    and 40s — not just on your neck and décolleté, but also on your face. <br /><br />

    We recommend including a face mask in your beauty routine. Regular use of exfoliators and face masks is a particularly important part of skincare for <br /> 
    acne — helping to prevent build-up of pore-clogging debris to visibly brighten and balance acne-prone skin. <br />

    All Clarins exfoliators use plant-based formulas that will never damage your skin or strip it of its natural oils. Clarins face masks are an effective aid in <br /> 
    achieving visibly soft and comfortable skin, helping to minimize the appearance of fine lines for a smooth youthful look. They’re also the ultimate pick- <br />
    me-up for tired, stressed skin. <br />

    My Clarins has everything young skin needs to visibly maintain its youth and radiance, while the rest of our products take care of your skin through your <br /> 
    30s and into the golden years. <br /><br />

    Never leave home without protection <br /><br />
    UV protectors are a summer essential, but they’re equally important all year round. UV rays are just as harmful during the winter as they are in the <br /> 
    summer. UVA rays can penetrate window glass and they’re especially harmful on snowy days since the rays are multiplied by the reflective nature of the <br /> 
    snow. UV protectors are important for everyone, no matter the shade of your skin — so make sure you’re giving your skin the beautiful future it deserves <br /> 
    by finishing off your skincare routine with the Clarins sun protection product that’s best suited to your skin. <br />
    Explore our Beauty FAQs, for the best advice on achieving radiant, healthy-looking skin.
    </p>


    <div className="rest-skn2">
      <p>*Double Serum range – Clarins internal sales data Jan-Dec 2023.</p>
    </div>











    
    </>
  );
};

export default Skincare;