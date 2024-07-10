import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { LogoNeyronDark } from 'src/assets/images';
import { LayoutContext } from '../../layoutContainer';
import SelectLanguage from './SelectLanguage';
import ThemeSwitch from './ThemeSwitch';
import UserProfile from './UserProfile';
import { useFullpageApi } from 'src/contexts';


const Header: React.FC = () => {
    const { selectedLanguage } = React.useContext(LayoutContext);
    const fullpageApiRef = useFullpageApi();
    const pathName = usePathname();
    const router = useRouter();
    const { pathname } = router;
    const t = useTranslations('navbar');
    const navLinks = [
        {
            title: t('about'),
            path: `/${selectedLanguage}/about`
        },
        {
            title: t('courses'),
            path: `/${selectedLanguage}/#courses`
        },
        {
            title: t('community'),
            path: `/${selectedLanguage}/community`
        },
        {
            title: t('faq'),
            path: `/${selectedLanguage}/faq`
        },
        {
            title: t('contact'),
            path: `/${selectedLanguage}/contact`
        }
    ];

    const moveToSection = (sectionNumber: number) => {
        // if (fullpageApiRef && fullpageApiRef.current) {
        //     fullpageApiRef.current.moveTo(2);
        // }
        router.push('#courses');

        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            // if (fullpageApiRef && fullpageApiRef.current) {
            //     fullpageApiRef.current.moveTo(2);
            // }
        }

        // window.history.replaceState(null, '/#courses', ' ');
        // setTimeout(() => router.replace('#courses', {route:}))
    };


    React.useEffect(() => {
        // Check if URL contains a hash (#) and scroll to the target element
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            // if (fullpageApiRef && fullpageApiRef.current) {
            //     fullpageApiRef.current.moveTo(2);
            // }
        }
    }, [window.location.hash]);


    return (
        <header className='header'>
            <div className='container'>
                <div className='header__content'>
                    <Link href={`/${selectedLanguage}`} className='header__logo'>
                        <Image src={LogoNeyronDark} alt='logo' />
                    </Link>
                    <div className='header__content__group'>
                        <nav className='header__menu'>
                            <ul className='header__menu__list'>
                                {navLinks.map((link) => (
                                    <li key={link.title}>
                                        <a
                                            // href='/#courses'
                                            className={pathName === link.path ? 'active' : ' '}
                                            onClick={() => moveToSection(2)}
                                        >
                                            {link.title}
                                        </a>

                                        {/*<Link href={`#courses`} className={pathName === link.path ? 'active' : ' '}>*/}
                                        {/*    {link.title}*/}
                                        {/*</Link>*/}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <SelectLanguage />
                        <ThemeSwitch />
                        <UserProfile />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
