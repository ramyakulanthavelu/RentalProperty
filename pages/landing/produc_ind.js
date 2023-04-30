import React from 'react'
import SideNavBar from '../../components/sidenavbar';
import Footer from '@/components/Footer';
import Products from '../products/index'
function produc_ind() {
  return (
    <div className='flex flex-row'>
      <SideNavBar />
      <div className='min-h-screen w-screen flex justify-center'>
        <div className=' flex justify-center'>
          <div>



          </div>
        </div>
      </div>
    </div>
  )
}
export default produc_ind;
{
  produc_ind.getLayout = function PageLayout(page) {
    return (
      <>
        {page}
        <Footer />
      </>
    );
  };
}