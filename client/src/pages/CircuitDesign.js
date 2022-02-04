import React from 'react'
import Header from '../components/Header'
import BottomCards from '../components/BottomCards';
import Footer from '../components/Footer';
import './CircuitDesign.css'
import img_src_value from '../img/UnderConstruction.PNG'

var header_title = "Circuit Design"

export default function CircuitDesign() {
    return (
        <section className='circuit-design'>
            <Header title={header_title} />
            <img src={img_src_value} alt="under construction" />


            <BottomCards />
            <Footer />
        </section>
    )
}
