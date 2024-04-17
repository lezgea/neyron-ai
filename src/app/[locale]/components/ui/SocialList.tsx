import React, { FC } from 'react';
import Image from 'next/image';
import FacebookIcon from 'src/assets/images/facebook.svg';
import FacebookIconDark from 'src/assets/images/facebook-dark.svg';
import InstagramIcon from 'src/assets/images/instagram.svg';
import InstagramIconDark from 'src/assets/images/instagram-dark.svg';
import LinkedinIcon from 'src/assets/images/linkedin.svg';
import LinkedinIconDark from 'src/assets/images/linkedin-dark.svg';
import TiktokIcon from 'src/assets/images/tiktok.svg';
import TiktokIconDark from 'src/assets/images/tiktok-dark.svg';
import YouTubeIcon from 'src/assets/images/youtube.svg';
import YouTubeIconDark from 'src/assets/images/youtube-dark.svg';

type SocialListProps = {
  isDark?: boolean;
};

const SocialList: FC<SocialListProps> = ({ isDark = false }) => {
  return (
    <ul className="ai-socials">
      <li>
        <a href="https://www.tiktok.com/@neyron.ai" target="_blank">
          <Image src={isDark ? TiktokIconDark : TiktokIcon} alt="tik-tok" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/profile.php?id=61554557969518" target="_blank">
          <Image src={isDark ? FacebookIconDark : FacebookIcon} alt="facebook" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/neyron.ai" target="_blank">
          <Image src={isDark ? InstagramIconDark : InstagramIcon} alt="instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/neyron-ai/" target="_blank">
          <Image src={isDark ? LinkedinIconDark : LinkedinIcon} alt="linkedin" />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <Image src={isDark ? YouTubeIconDark : YouTubeIcon} alt="youtube" />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
