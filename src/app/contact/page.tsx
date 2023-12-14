import React from 'react';
import Link from 'next/link';

import ContactForm from 'src/components/contact/contactForm';
import FbIcon from 'src/assets/images/fb-icon.svg';
import InstaIcon from 'src/assets/images/insta-icon.svg';
import LinkedinIcon from 'src/assets/images/linkedin-icon.svg';
import TiktokIcon from 'src/assets/images/tiktok-icon.svg';
import YoutubeIcon from 'src/assets/images/youtube-icon.svg';
import Image from 'next/image';

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="container contact-container">
        <h2 className="section-header">Contact</h2>
        <ContactForm />
        <div className="contact-email-phone">
          <div className="email">
            <Link href="mailto:info@neyron.ai">info@neyron.ai</Link>
          </div>
          <div className="phone">
            <Link href="tel:++994993564210">+994 99 356 42 10</Link>
          </div>
        </div>
        <div className="social-networks">
          <Link target="_blank" href="https://www.tiktok.com/@neyron.ai">
            <Image src={TiktokIcon} alt="Tiktok" />
          </Link>
          <Link target="_blank" href="https://www.facebook.com/profile.php?id=61554557969518">
            <Image src={FbIcon} alt="Facebook" />
          </Link>
          <Link target="_blank" href="https://www.instagram.com/neyron.ai">
            <Image src={InstaIcon} alt="Instagram" />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/company/neyron-ai/">
            <Image src={LinkedinIcon} alt="Linkedin" />
          </Link>
          <Link target="_blank" href="#">
            <Image src={YoutubeIcon} alt="Youtube" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
