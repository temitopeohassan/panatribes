import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';

const Warranty = () => (
  <PageShell title="Warranty Info" subtitle="Understanding product warranty coverage at Panatribes.">
    <p>
      Warranty coverage depends on the product category, brand, and whether the item is brand-new or
      UK-used. Details are shown on individual product pages where applicable.
    </p>

    <h2>Brand-new products</h2>
    <p>
      New devices typically include a manufacturer warranty ranging from 6 to 12 months. Keep your
      receipt and original packaging for warranty claims.
    </p>

    <h2>UK-used products</h2>
    <p>
      UK-used items are quality-checked before sale and may include a limited store warranty of
      7–30 days covering hardware faults not caused by misuse. Cosmetic wear is not covered.
    </p>

    <h2>Power & solar equipment</h2>
    <p>
      Portable power stations, inverters, and solar kits may carry separate manufacturer warranties.
      Battery capacity and performance warranties vary by brand — ask our team before purchase if
      you need specific coverage details.
    </p>

    <h2>What is not covered</h2>
    <ul>
      <li>Accidental damage, liquid damage, or unauthorised repairs</li>
      <li>Normal wear and tear, including scratches and dents on used devices</li>
      <li>Issues caused by incompatible chargers or accessories</li>
      <li>Loss or theft after delivery</li>
    </ul>

    <h2>Making a warranty claim</h2>
    <p>
      Email support with your order number, product details, and a description of the issue.
      Include photos or video where helpful. Our team will guide you through inspection, repair, or
      replacement options.
    </p>

    <p>
      <Link to="/contact">Contact support</Link> · <Link to="/returns">Returns Policy</Link>
    </p>
  </PageShell>
);

export default Warranty;
