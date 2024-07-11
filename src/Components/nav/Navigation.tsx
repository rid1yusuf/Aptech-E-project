import './Navigation.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom"
import Logo from "../../assets/Images/logo.svg"


function Navigation(){
  return (
    <>
      <nav>
    
        <div className="menu">

        <div className="hamb">
            <RxHamburgerMenu size="20px"/>
       </div>


       <div className="search">
            <input type="search" placeholder='Search' className='srch'/>

            <div className="box"><center className='space'><CiSearch size='25px'/></center></div>

       </div>


       <div className="logo">
            <img src={Logo} alt="" />
       </div>





       <div className="lhb">

         <center> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2C17.0538 2 17.9181 2.8164 17.9945 3.85081L18 4V20C18 21.0538 17.1836 21.9181 16.1492 21.9945L16 22H8C6.94618 22 6.08188 21.1836 6.00549 20.1492L6 20V4C6 2.94618 6.8164 2.08188 7.85081 2.00549L8 2H16ZM16 3H8C7.48743 3 7.06453 3.38715 7.00673 3.88362L7 4V20C7 20.5116 7.38629 20.9353 7.88343 20.9933L8 21H16C16.5126 21 16.9355 20.6129 16.9933 20.1164L17 20V4C17 3.48836 16.6137 3.06466 16.1166 3.00675L16 3ZM12 18C12.256 18 12.512 18.098 12.707 18.293C13.098 18.684 13.098 19.316 12.707 19.707C12.512 19.902 12.256 20 12 20C11.744 20 11.488 19.902 11.293 19.707C10.902 19.316 10.902 18.684 11.293 18.293C11.488 18.098 11.744 18 12 18ZM14.5 4C14.776 4 15 4.224 15 4.5C15 4.74533 14.823 4.94958 14.5898 4.99194L14.5 5H9.5C9.224 5 9 4.776 9 4.5C9 4.25467 9.17699 4.05042 9.41016 4.00806L9.5 4H14.5Z" fill="#333333" stroke="black" stroke-width="0"></path>
          </svg>  <p>HELP</p>
          </center>

          <div className="gap"></div>

        <div className="lgn">
          <center><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	        <path fill-rule="evenodd" clip-rule="evenodd" d="M17 7C17 9.757 14.757 12 12 12C9.243 12 7 9.757 7 7C7 4.243 9.243 2 12 2C14.757 2 17 4.243 17 7ZM16 7C16 4.794 14.206 3 12 3C9.794 3 8 4.794 8 7C8 9.206 9.794 11 12 11C14.206 11 16 9.206 16 7Z" fill="#333333" stroke="black" stroke-width="0"></path>
	        <path d="M4 22C4 16.701 7.29 13 12 13C16.71 13 20 16.701 20 22C20 22.276 19.776 22.5 19.5 22.5C19.224 22.5 19 22.276 19 22C19 17.29 16.121 14 12 14C7.879 14 5 17.29 5 22C5 22.276 4.776 22.5 4.5 22.5C4.224 22.5 4 22.276 4 22Z" fill="#333333" stroke="black" stroke-width="0"></path>
          </svg> 

          <p>LOG-IN</p>
        
        </center>

          </div>
          

          <div className="gap"></div>


          <center><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	        <path fill-rule="evenodd" clip-rule="evenodd" d="M19 20C19 20.551 18.552 21 18 21H6C5.448 21 5 20.551 5 20V8H8V9.5C8 9.776 8.224 10 8.5 10C8.776 10 9 9.776 9 9.5V8H15V9.5C15 9.776 15.224 10 15.5 10C15.776 10 16 9.776 16 9.5V8H19V20ZM9 6C9 4.065 10.065 3 12 3C13.935 3 15 4.065 15 6V7H9V6ZM19 7H16V6C16 3.532 14.468 2 12 2C9.532 2 8 3.532 8 6V7H5C4.447 7 4 7.447 4 8V20C4 21.104 4.896 22 6 22H18C19.104 22 20 21.104 20 20V8C20 7.447 19.553 7 19 7Z" fill="#333333" stroke="black" stroke-width="0"></path>
          </svg> 
          <p>BAG</p>
          </center>
          
          </div>

        </div>


        <div className="nav-links">
          <ul>    
                    <li>
                      <Link className='nav-info' to="/">
                        WHAT'S NEW
                      </Link>
                    </li>
                  
                  
                    <li>
                      <Link className='nav-info' to="/skincare">
                        SKINCARE
                      </Link>
                    </li>
                  
              
                    <li>
                      <Link className="nav-info" to="/makeup">
                        MAKEUP
                      </Link>
                    </li>
                  
                
                    <li>
                      <Link className="nav-info" to="/gifts">
                        GIFTS
                      </Link>
                    </li>
                  
                  
                    <li>
                      <Link className="nav-info" to="/offers">
                        OFFERS
                      </Link>
                    </li>
                
            
                    <div className="dem"></div>


                    <li>
                      <Link className="nav-info" to="/spaandservices">
                        SPA & SERVICES
                      </Link>
                    </li>
                  

                    <li>
                      <Link className="nav-info" to="/values">
                        OUR VALUES
                      </Link>
                    </li>
                  
          </ul>

        </div>
  
      </nav>
       
    </>
  );
};

export default Navigation;