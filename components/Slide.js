import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slide() {
    return (
        <div>
            <Carousel
                showArrows={true}
                autoPlay={true}
                infiniteLoop={true}
                className='main-slide'>
                <div>
                    <img src="/a1.jpg" height="50px" width="100px" />
                    <label >Welcome to Swipe Right</label>
                </div>
                <div>
                    <img src="/a2.jpeg" height="50px" width="200px" />
                    <label>Looking for an Agent? </label>
                </div>
                <div>
                    <img src="/a3.jpg" height="50px" width="200px" />
                    <label>You Have Arrived At The Right Place.</label>
                </div>
                <div>
                    <img src="/a4.jpg" height="50px" width="200px" />
                    <label>We have 10+ years Experienced Real Estate Experts</label>
                </div>
                <div>
                    <img src="/a5.jpg" height="300px" width="200px" />
                    <label>Book an Appointment Now!</label>
                </div>
            </Carousel>
        </div>
    )
}
export default Slide;