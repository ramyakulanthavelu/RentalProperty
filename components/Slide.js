import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Slide() {
  return (
    <div>
         <Carousel className='main-slide'>
                <div>
                    <img src="/a1.jpg" height="300px" width="200px" />
                </div>
                <div>
                    <img src="/a2.jpeg" height="300px" width="200px" />
                </div>
                <div>
                    <img src="/a3.jpg" height="300px" width="200px" />
                </div>
                <div>
                    <img src="/a4.jpg" height="300px" width="200px" />
                </div>
                <div>
                    <img src="/a5.jpg" height="300px" width="200px" />
                </div>
            </Carousel>
        </div>
    )
}
export default Slide;