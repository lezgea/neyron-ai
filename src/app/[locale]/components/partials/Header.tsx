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

interface NavLink {
    title: string;
    path: string;
}

const Header: React.FC = () => {
    const { selectedLanguage } = React.useContext(LayoutContext);
    const fullpageApiRef = useFullpageApi();
    const pathName = usePathname();
    const router = useRouter();
    const t = useTranslations('navbar');

    const navLinks: NavLink[] = [
        {
            title: t('about'),
            path: `/${selectedLanguage}/about`
        },
        {
            title: t('courses'),
            path: ''
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
        if (fullpageApiRef.current) {
            fullpageApiRef.current.moveTo(sectionNumber);
        }
    };

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
                                        {
                                            link.path
                                                ?
                                                <Link
                                                    className={pathName === link.path ? 'active' : ''}
                                                    href={link.path}
                                                >
                                                    {link.title}
                                                </Link>
                                                :
                                                <Link
                                                    className={pathName === '/' ? 'active' : ''}
                                                    href='/'
                                                    onClick={() => moveToSection(2)}
                                                >
                                                    {link.title}
                                                </Link>
                                        }
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
