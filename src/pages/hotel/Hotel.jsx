import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { useState } from "react";

const Hotel = () => {
    const [slideNumber,setSlideNumber]=useState(0);
    const [open,setOpen]=useState(false);

    const photos = [
        {
            src:"https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
        },
        {
            src:"https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
        },
        {
            src:"https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
        },
        {
            src:"https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
        },
        {
            src:"https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
        },
        {
            src:"https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
        },
    ];

    const handleOpen =(i)=>{
        setSlideNumber(i);
        setOpen(true);
    };

    const handleMove =(direction) =>{
        let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
    }
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="hotelContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src} alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight} className="arrow"onClick={()=>handleMove("r")}/>
                </div>}
                <div className="hotelWrapper">
                    <button className="bookNow">Reserve or Book Now!</button>
                    <h1 className="hotelTitle">Grand Hotel</h1>
                    <div className="hotelAddress">
                    <FontAwesomeIcon icon={faLocationDot}/>
                        <span>Elton St York</span>
                    </div>
                    <span className="hotelDistance">
              Excellent location – 500m from center
            </span>
            
            <span className="hotelPriceHighlight">
              Book a stay over $114 at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
                {photos.map((photo,i)=>(
                    <div className="hotelImgWrapper">
                        <img onClick={()=>handleOpen(i)} src={photo.src} alt="" className="hotelImg" />
                    </div>
                ))}
                <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">Stay in heart of krawkow</h1>
                <p className="hotelDesc">
                Hotel & Spa is a family-friendly hotel that offers a wide range of accommodation types, from rooms to suites. All this in the peaceful surroundings of our beautiful gardens, will make your time at CN an unforgettable holiday.
                Esteemed guests are welcome to relax and unwind in a quiet and elegant setting in the popular resort of CN and enjoy a genuine experience of leisure, pleasure, gastronomy and wellness within the premises of the resort
                Hotel & Spa is a family-friendly hotel that offers a wide range of accommodation types, from rooms to suites. All this in the peaceful surroundings of our beautiful gardens, will make your time at CN an unforgettable holiday.
                Esteemed guests are welcome to relax and unwind in a quiet and elegant setting in the popular resort of CN and enjoy a genuine experience of leisure, pleasure, gastronomy and wellness within the premises of the resort
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$900</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
            </div>
            <MailList/>
            <Footer/>
                </div>
            </div>
        </div>
    )
}

export default Hotel