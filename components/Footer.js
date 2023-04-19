import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='footer'>
      <div className='SocialMedia'>
        <InstagramIcon/>
        <TwitterIcon/>
        <FacebookIcon/>
        <LinkedInIcon/>
        <EmailIcon/>
      </div>
      <p> &copy; 2023 Swipe Right</p>
    </div>
  )
}

export default Footer