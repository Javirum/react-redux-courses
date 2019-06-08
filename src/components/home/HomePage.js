import React from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => (
  <div className="jumbotron">
    <h1>PluralSight Admin</h1>
    <p>React, redux and react router ultra responsive web apps.</p>
    <Link to='about' className='btn btn-primary btn-lg'>
      Learn More</Link>
  </div>
);

export default HomePage;