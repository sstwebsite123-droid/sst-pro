import React from 'react'
import Contactusbanner from '../Components/Pagecomponents/Contactusbanner'
import Contactusdata from '../Components/Pagecomponents/Contactusdata'
import ConatctusForm from '../Components/Pagecomponents/ConatctusForm'
import Faqs from '../Components/Pagecomponents/Faqs'
const faqData = [
  {
    question: "How can I reach your support team?",
    answer:
      "You can contact us via email at support@example.com or call us at +91‑XXXXXXXXXX between 9:00 AM and 6:00 PM (Mon–Fri)."
  },
  {
    question: "What is your response time?",
    answer:
      "We aim to respond to all queries within 24 hours on business days."
  },
  {
    question: "Do you have a physical office or address?",
    answer:
      "Yes — Our office is located at 123, Main Street, Chandigarh, India. You can also see the location on the map below."
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
      {/* <Contactusbanner/> */}
      <Contactusdata/>
      <ConatctusForm/>
      <Faqs faqData={faqData} />
    </div>
  )
}

export default page
