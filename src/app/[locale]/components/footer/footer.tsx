import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Grid } from '@mui/material';

import AilabLogo from 'src/assets/images/ailabLogo.svg';
import FacebookIcon from 'src/assets/images/facebook.svg';
import InstagramIcon from 'src/assets/images/instagram.svg';
import LinkedinIcon from 'src/assets/images/linkedin.svg';
import TiktokIcon from 'src/assets/images/tiktok.svg';
import WhiteLogo from 'src/assets/images/whiteLogo.svg';
import YouTubeIcon from 'src/assets/images/youtube.svg';

const Footer = () => {
  return (
    <footer>
      <Grid item xs={12} className="logo-container">
        <Image src={WhiteLogo} alt="logo" />
      </Grid>
      <Grid item xs={12}>
        <ul className="nav-list">
          <li>
            <Link href="/aboutUs">About us</Link>
          </li>
          <li>
            <Link href="/">Courses</Link>
          </li>
          <li>
            <Link href="/">Community</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
          <li>
            <Link href="/">Terms and conditions</Link>
          </li>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} className="bottom-line">
        <div className="social-media-icons">
          <Image src={TiktokIcon} alt="tik-tok" />
          <Image src={FacebookIcon} alt="facebook" />
          <Image src={InstagramIcon} alt="instagram" />
          <Image src={LinkedinIcon} alt="linkedin" />
          <Image src={YouTubeIcon} alt="youtube" />
        </div>
        <div className="rights-container">2023 | Neyron.ai | All rights reserved</div>
        <div className="produced-by">
          <span>Product of</span>
          <Image src={AilabLogo} alt="logo" />
        </div>
      </Grid>
    </footer>
  );
};

export default Footer;
