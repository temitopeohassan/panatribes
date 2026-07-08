import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';

const Terms = () => (
  <PageShell title="Terms of Service" subtitle="Terms governing use of the Panatribes website and services.">
    <p><strong>Last updated:</strong> {new Date().getFullYear()}</p>

    <h2>Agreement</h2>
    <p>
      By accessing panatribes.com or placing an order, you agree to these Terms of Service. If you do
      not agree, please do not use our site.
    </p>

    <h2>Products & pricing</h2>
    <p>
      All prices are listed in Nigerian Naira (₦) unless stated otherwise. We reserve the right to
      correct pricing errors and to limit quantities. Product images are for illustration; actual
      items may vary slightly for UK-used stock.
    </p>

    <h2>Orders & payment</h2>
    <p>
      An order is confirmed once payment is successfully processed. We may cancel orders affected by
      stock issues, pricing errors, or suspected fraud, with a full refund where payment was taken.
    </p>

    <h2>Delivery</h2>
    <p>
      Estimated delivery times are provided at checkout but are not guaranteed. Risk of loss passes
      to you upon delivery to the address you provide.
    </p>

    <h2>Returns & warranty</h2>
    <p>
      Returns and warranty claims are handled according to our{' '}
      <Link to="/returns">Returns Policy</Link> and <Link to="/warranty">Warranty Info</Link>.
    </p>

    <h2>Limitation of liability</h2>
    <p>
      To the fullest extent permitted by law, Panatribes Global Company Limited is not liable for
      indirect or consequential losses arising from use of our products or website.
    </p>

    <h2>Governing law</h2>
    <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>

    <h2>Contact</h2>
    <p>
      Questions about these terms? <Link to="/contact">Contact us</Link>.
    </p>
  </PageShell>
);

export default Terms;
