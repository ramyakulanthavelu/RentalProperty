import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


const products = () => {
  return (
    <>
      <h1 className="text-center text-danger my-5">Book Your Property Now</h1>
      <div className="container">
        <div className='row'>
          <div className='col-md-3 h-100 m-3'>
            <div className="card">
              <img src="/img1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Mary House</h5>
                <p className="card-text">Blue Farm, Indiana, US</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          <div className='col-md-3  h-100 m-3'>
            <div className="card">
              <img src="/img2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Oswald's House</h5>
                <p className="card-text">Pogo LA, US</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          <div className='col-md-3  h-100 m-3'>
            <div className="card">
              <img src="/img3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Dora's House</h5>
                <p className="card-text">Boots Virginia, US</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          
        </div>
        
    
        <div className='row'>
          <div className='col-md-3  h-100 m-3'>
            <div className="card">
              <img src="/img4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Yoongi House</h5>
                <p className="card-text">Yongsan, Seoul, Korea</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          <div className='col-md-3  h-100 m-3'>
            <div className="card">
              <img src="/img5.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Time Square</h5>
                <p className="card-text">New York, US</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
          <div className='col-md-3  h-100 m-3'>
            <div className="card">
              <img src="/img6.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Hybe Labels</h5>
                <p className="card-text">Itaewon Road, Seoul, Korea</p>
                <a href="#" className="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default products;