import Footer from "@/components/Footer";
import React from "react";

function About() {
  return (
    <div>
    <div className="about">
      <img src="/img1.jpg" className="pic"/>
      <div className="text">
        <h2>About Us</h2>
        <h5>Front-end Developer & <span>Designer</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
        <div className="data">
        <a href="#" className="hire">Book Now</a>
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default About;


{/*
About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
*/}