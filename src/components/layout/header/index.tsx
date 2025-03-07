"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CloseIcon, HamburgerIcon, Logo } from '@assets/icons';
import { Sidebar } from '../sidebar';
import { useLocale, useTranslations } from 'next-intl';
import { UserProfile } from '../user-profile';
import LanguageSwitcher from '../language-switch';



export const Header: React.FC = () => {
    const lng = useLocale();
    const t = useTranslations();
    const pathname = usePathname();
    const [isSidebarOpen, setSidebarOpen] = React.useState(false);

    const hideHeaderRoutes = React.useMemo(() => [`/${lng}/sign-in`, `/${lng}/sign-up`, `/${lng}/activation`, `/${lng}/forgot`, `/${lng}/reset`, `/${lng}/coming`], []);
    const shouldHideHeader = hideHeaderRoutes.includes(pathname);


    const NAV_ROUTES: { route: string; label: string }[] = [
        { route: '/about-us', label: t('navbar.about') },
        { route: '/courses', label: t('navbar.courses') },
        // { route: '/community', label: t('navbar.community') },
        { route: '/faq', label: t('navbar.faq') },
        { route: '/contact', label: t('navbar.contact') },
    ];

    const navLinks = React.useMemo(() => {
        return NAV_ROUTES.map((item, i) => (
            <li key={i} className="relative flex items-center space-x-3">
                {pathname === `/${lng}${item.route}` && (
                    <div className="absolute left-0 rounded-full font-regular text-xl text-primary" aria-hidden="true" >
                        /
                    </div>
                )}
                <Link href={`/${lng}${item.route}`} className={`z-10 text-dark hover:text-purple transition-all duration-200 ease-in-out ${pathname === `/${lng}${item.route}` ? 'font-medium text-purpleDark' : ''}`}>
                    {item.label}
                </Link>
            </li>
        ));
    }, [pathname]);

    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    if (shouldHideHeader) return null;

    return (
        <>
            <header className="backdrop-blur-xl w-full fixed z-30 h-[65px] select-none bg-white/50">
                <nav role="navigation" aria-label="Main navigation" className="container w-full mx-auto flex justify-between items-center px-3 py-0 h-full space-x-5 md:px-0">
                    <div className="flex items-center cursor-pointer lg:w-[15%] space-x-3 lg:space-x-0">
                        <div className="w-[30px] ml-3 flex lg:hidden">
                            {
                                isSidebarOpen
                                    ? <CloseIcon onClick={toggleSidebar} data-testid="close-icon" />
                                    : <HamburgerIcon onClick={toggleSidebar} data-testid="hamburger-icon" />
                            }
                        </div>
                        <Link href="/" passHref title='Logo'>
                            <Logo alt="Logo" className="-mb-5 w-[150px]" />
                        </Link>
                    </div>

                    <ul className="hidden lg:flex font-regmed lg:text-md space-x-10 items-center">
                        {navLinks}
                    </ul>

                    <div className="flex items-center justify-end h-full gap-3 xl:min-w-[20%]">
                        <UserProfile />
                        <LanguageSwitcher />
                    </div>
                </nav>
            </header>

            <div className="lg:hidden">
                <Sidebar
                    navLinks={navLinks}
                    visible={isSidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
            </div>
        </>
    );
};
