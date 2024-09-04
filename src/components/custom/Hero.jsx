import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="flex flex-col items-center mx-57 gap-9">
  <h1 className="font-extrabold text-[50px] text-center mt-16">
    <span className='text-[#f56551]'>Unveil the World's Rich Heritage:</span> <br></br> Personalized Cultural Journeys Crafted Just for You
  </h1>
  <p className='text-xl text-gray-500 text-center'>
    Embark on a journey through time with custom itineraries that immerse you in the rich traditions, history, and culture of your destinations.
  </p>
  <Link to={'/create-trip'}>
    <Button>Start Your Cultural Adventure, It's Free.</Button>
  </Link>
  <img src='/landing.png' className='-mt-30 width-[120px] height-[120px]'/>
</div>

  )
}

export default Hero
