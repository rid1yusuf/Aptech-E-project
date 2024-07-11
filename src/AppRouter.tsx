import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navigation from "./Components/nav/Navigation";
import Footer from './Components/footer/Footer'
import Home from './Pages/homepage/Home'
import Offers from "./Pages/offerpage/Offers";
import Skincare from "./Pages/skincarepage/Skincare";
import Makeup from "./Pages/makeuppage/Makeup";


const AppRouter = () => {
  return (
    <>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/">
                    <Route path="/" index element={<Home/>}/>
                    <Route path="/offers" element={<Offers/>}/>
                    <Route path="/skincare" element={<Skincare/>}/>
                    <Route path="/makeup" element={<Makeup/>}/>
                </Route>
            </Routes>
            <Footer/>
        </Router>  
    </>
  );
};

export default AppRouter;