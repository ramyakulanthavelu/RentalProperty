import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import PrintIcon from '@mui/icons-material/Print';
import EmailIcon from '@mui/icons-material/Email';

export default function contact() {
  return (
    <div>
        <h1>Contact Us</h1>

        <PlaceIcon></PlaceIcon>
        <h2>Address</h2>
        <h3>No, 62, 1st Floor,
        6th Cross, 27th Main Road, Phase 3,
        1st Sector, HSR Layout.
        Bengaluru : 560102
        </h3>

        <PhoneIcon></PhoneIcon>
        <h2>Phone</h2>
        <h3>08899939993
        08899939993</h3>

        <PrintIcon></PrintIcon>
        <h2>Fax</h2>
        <h3>+91-0124-4866599</h3>

        <EmailIcon></EmailIcon>
        <h2>Email</h2>
        <h3>customer.service@swiperight.com</h3>

    </div>

  )
}
