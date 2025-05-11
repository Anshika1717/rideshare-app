import React from 'react';

const faqData = [
  {
    question: "How do I book a ride?",
    answer: "You can book a ride by navigating to the 'Request Ride' page, selecting your pickup and destination locations, and confirming your booking."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept credit/debit cards, digital wallets, and cash payments depending on your location."
  },
  {
    question: "How can I contact my driver?",
    answer: "Once your ride is confirmed, you can contact your driver through the app's driver tracking page."
  },
  {
    question: "What should I do in case of an emergency?",
    answer: "Use the emergency button available in the app to alert emergency contacts and authorities immediately."
  },
  {
    question: "Can I cancel a ride?",
    answer: "Yes, you can cancel a ride before the driver arrives without any charges."
  }
];

function FAQ() {
  return (
    <section className="faq-page" style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div key={index} style={{ marginBottom: '1rem' }}>
          <h3 style={{ color: '#2979FF' }}>{item.question}</h3>
          <p style={{ color: '#444', fontSize: '1rem' }}>{item.answer}</p>
        </div>
      ))}
    </section>
  );
}

export default FAQ;
