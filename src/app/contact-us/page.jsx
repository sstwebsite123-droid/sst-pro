import React from 'react'
import Contactusbanner from '../Components/Pagecomponents/Contactusbanner'
import Contactusdata from '../Components/Pagecomponents/Contactusdata'
import MapSection from '../Components/Pagecomponents/MapSection'
import ConatctusForm from '../Components/Pagecomponents/ConatctusForm'
import Faqs from '../Components/Pagecomponents/Faqs'
const faqData = [
  {
    question: "How can I reach your support team?",
    answer:
      "You can contact us via email at info@sst.pro or call us at +44 (144) 707-8383 between 09:00–18:00 GMT (Mon–Fri)"
  },
  {
    question: "What is your response time?",
    answer:
      "We aim to respond to all queries within 24 hours on business days."
  },
  {
    question: "Do you have a physical office or address?",
    answer:
      "Yes — Our office is located at 131 Finsbury Pavement, London EC2A 1NT, UK. You can also see the location on the map above."
  },
  {
    question: "Can I submit a request outside working hours?",
    answer:
      "Yes — You can always send us a message via our contact form or email. We’ll get back to you at the earliest on the next business day."
  },
  {
    question: "Which issues can I reach out about?",
    answer:
      "You can contact us for support, complaints, feedback, partnership inquiries, or any general question."
  }
];

const page = () => {
  return (
    <div>
      {/* <Contactusbanner /> */}
      <Contactusdata />
      <MapSection />
      <ConatctusForm />
      <Faqs faqData={faqData} />
    </div>
  )
}

export default page
