import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';

const About = () => (
  <PageShell
    title="About Panatribes"
    subtitle="Quality electronics and power solutions for Nigerian homes and businesses."
  >
    <p>
      Panatribes Global Company Limited (RC 1226679) is a trusted Nigerian retailer specialising in
      smartphones, laptops, audio equipment, portable power stations, solar kits, and accessories.
    </p>
    <p>
      We source quality UK-used and brand-new devices, inspect every item before sale, and pair our
      electronics range with reliable backup power solutions built for everyday Nigerian needs.
    </p>
    <h2>What we stand for</h2>
    <ul>
      <li>Transparent pricing in Nigerian Naira</li>
      <li>Quality-checked products you can trust</li>
      <li>Fast delivery across Lagos and nationwide</li>
      <li>Helpful support before and after purchase</li>
    </ul>
    <p>
      Whether you are upgrading your phone, equipping a home office, or investing in solar and backup
      power, Panatribes is here to help you choose the right solution.
    </p>
    <p>
      <Link to="/shop" className="btn btn-primary">Browse our shop</Link>
      {' '}
      <Link to="/contact" className="btn btn-outline">Get in touch</Link>
    </p>
  </PageShell>
);

export default About;
