import ContactInfo from "../../components/ContactInfo";

import { contactInfoData } from "../../data";

import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-text">
          <h2>Let's work together!</h2>
        </div>
        <div className="contact-info-container">
          {contactInfoData.map((data, index) => (
            <ContactInfo key={index} {...data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
