import React from 'react';
import { Helmet } from 'react-helmet';

function Head(){
    return(
        <div>
        <Helmet>
          <title>KISS Analog</title>
          <meta name="description" content="Analog Electronics. Audio Electronics. Analog Circuit Design. Electronic Equipment Review. Amplifier Design. 
          Power Supply Design. Oscilloscope Review. Multimeter Review. Active Load Review. KISS U. Youtube Channel."></meta>
          <link rel="icon"  href="/favicon.ico"/>
        </Helmet>
      </div>
      )
}

export default Head;