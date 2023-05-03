import React from 'react'
import SideNavBar from '../../components/sidenavbar';
import Footer from '@/components/Footer';
import PropertyReg from '../landing/property_reg';
function index() {
  return (
    <div className='flex flex-row'>
      <SideNavBar />
      <div className="h-full w-64"></div>
      <div className='min-h-screen'>
       
      </div>

    </div>
  )
}
export default index;
{
  index.getLayout = function PageLayout(page) {
    return (
      <>
        {page}
        <Footer />
      </>
    );
  };
}