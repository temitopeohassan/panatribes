import React from 'react';
import PageShell from '../components/PageShell';

const sections = [
  {
    title: 'About Panatribes',
    items: [
      {
        q: 'What is Panatribes?',
        a: 'A curated retailer for phones, laptops, audio, power stations, solar kits, and accessories. We source, inspect, and ship every product we sell — not a marketplace with third-party sellers.',
      },
      {
        q: 'Where are you based?',
        a: 'Lagos, Nigeria. We deliver nationwide.',
      },
      {
        q: 'What does “quality checked” mean?',
        a: 'We choose what goes on the shelf, inspect devices before listing, and ship orders ourselves so you get reliable products and service.',
      },
    ],
  },
  {
    title: 'Ordering',
    items: [
      {
        q: 'Do I need an account?',
        a: 'No. Order as a guest with just phone, address, and email. An account makes re-orders faster.',
      },
      {
        q: 'Can I order on WhatsApp?',
        a: 'Yes. Message +234 806 607 0128 and we’ll quote, confirm, and ship. Some of our best customers never visit the website.',
      },
      {
        q: 'Can I pay on delivery?',
        a: 'Not yet. We accept card, bank transfer, and USSD — all confirmed before we pack your order.',
      },
    ],
  },
  {
    title: 'Payment',
    items: [
      {
        q: 'What do you accept?',
        a: 'Visa, Mastercard, Verve, bank transfer, USSD — all through Paystack (PCI-DSS Level 1 certified).',
      },
      {
        q: 'Is my payment info safe?',
        a: 'Yes. We never see or store your card details — everything runs through Paystack.',
      },
      {
        q: 'What currency?',
        a: 'Nigerian Naira (₦). Prices include VAT. Delivery is added at checkout.',
      },
    ],
  },
  {
    title: 'Products',
    items: [
      {
        q: 'Are products authentic?',
        a: 'Yes. Every product is sourced from trusted suppliers and inspected by us before it reaches the shelf.',
      },
      {
        q: 'Do products come with warranty?',
        a: 'Yes — standard manufacturer warranty (usually 6 to 12 months on electronics), listed on each product page. We help you make claims.',
      },
      {
        q: 'Used or refurbished?',
        a: 'We sell both quality UK-used and brand-new items. Product condition is clearly stated on each listing.',
      },
      {
        q: 'Why such a small catalog?',
        a: 'By choice. We’d rather sell products we’d buy ourselves than thousands we can’t stand behind. A focused catalog is the whole point of a curated retailer.',
      },
    ],
  },
];

export default function FAQ() {
  return (
    <PageShell
      title="Frequently Asked Questions"
      subtitle="Everything you need to know about how we work, pay, and ship."
    >
      {sections.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <div className="faq-list">
            {section.items.map((item) => (
              <details key={item.q} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 40 }}>
        <h2>Still have questions?</h2>
        <p>
          WhatsApp +234 816 917 8240. Monday to Sunday, 9am to 9pm. Real human, no chatbot.
        </p>
        <a
          href="https://wa.me/2348169178240"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ marginTop: 16, display: 'inline-flex' }}
        >
          Message on WhatsApp
        </a>
      </div>
    </PageShell>
  );
}
