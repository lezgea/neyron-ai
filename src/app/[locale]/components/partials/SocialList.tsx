import React, { FC } from 'react';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TikTokIcon, YouTubeIcon } from 'src/assets/icons';
import { getClassName } from 'src/utils';

type SocialListProps = {
  isDark?: boolean;
};

const SocialList: FC<SocialListProps> = ({ isDark = false }) => {
  return (
    <ul className={'ai-socials' + (isDark ? ' ai-socials--dark' : '')}>
      <li>
        <a href="https://www.tiktok.com/@neyron.ai" target="_blank">
          <TikTokIcon />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/profile.php?id=61554557969518" target="_blank">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/neyron.ai" target="_blank">
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/neyron-ai/" target="_blank">
          <LinkedinIcon />
        </a>
      </li>
      <li>
        <a href="#" target="_blank">
          <YouTubeIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialList;
