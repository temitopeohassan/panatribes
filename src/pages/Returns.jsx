import React from 'react';
import PageShell from '../components/PageShell';

const processSteps = [
  'WhatsApp +234 806 607 0128 within 14 days with your order number and a photo.',
  'We book a pickup with the delivery partner who brought your order, usually next business day.',
  'Refund to your original payment method within 3–5 business days of us receiving the item.',
];

const notReturnable = [
  'Opened headphones, earbuds, in-ear audio',
  'Opened beauty and personal care items',
  'Intimate and personal-use items',
  'Digital products, software keys, activation codes once delivered',
  'Consumables (batteries, ink cartridges, filters) once used',
];

export default function Returns() {
  return (
    <PageShell
      title="Here's what to do if something's wrong"
      subtitle="14 days to change your mind. No hoops. Just WhatsApp us."
    >
      <p className="last-updated"><strong>14-day returns</strong></p>

      <h2>The promise</h2>
      <ul>
        <li>14 days from delivery to return any sealed, unopened item for a full refund.</li>
        <li>Damaged or faulty items can be returned anytime — no time limit on these.</li>
      </ul>

      <h2>What can be returned</h2>
      <h3>Returnable</h3>
      <ul>
        <li>Anything still in its original sealed packaging</li>
        <li>Anything that arrived damaged, defective, or different from what you ordered</li>
      </ul>

      <h3>Not returnable (hygiene, safety, licensing)</h3>
      <ul>
        {notReturnable.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Process</h2>
      <ol>
        {processSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <h2>Return shipping cost</h2>
      <ul>
        <li>Sealed unopened returns: ₦2,500 pickup, deducted from refund.</li>
        <li>Damaged, defective, wrong items: free — we pay the pickup.</li>
      </ul>

      <h2>&ldquo;No questions asked&rdquo; not exactly.</h2>
      <p>
        We ask one question: &ldquo;Can you tell us why&rdquo; — so we can pick better next time. We
        won&apos;t argue. We won&apos;t try to talk you out of it. The refund happens either way.
      </p>
    </PageShell>
  );
}
