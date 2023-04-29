import React from 'react'
import SideNavBar from '../../components/sidenavbar';
import Footer from '@/components/Footer';
import PropertyReg from './property_reg';
function index() {
  return (
    <div className='flex flex-row'>
      <SideNavBar />
      <div className="h-full w-64"></div>
      <div className='min-h-screen w-screen flex justify-center'>
        <div className=' flex justify-center'>
          <PropertyReg />
        </div>
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