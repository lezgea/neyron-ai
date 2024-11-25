"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { FooterTermsModal } from '@components/shared';
import { AiLabLogo } from '@assets/icons';

const InstagramIcon = dynamic(() => import('@assets/icons').then(mod => mod.InstagramIcon), { ssr: false });
const TwitterIcon = dynamic(() => import('@assets/icons').then(mod => mod.TwitterIcon), { ssr: false });
const YoutubeIcon = dynamic(() => import('@assets/icons').then(mod => mod.YoutubeIcon), { ssr: false });
const LinkedinIcon = dynamic(() => import('@assets/icons').then(mod => mod.LinkedinIcon), { ssr: false });
const LogoWhite = dynamic(() => import('@assets/icons').then(mod => mod.LogoWhite), { ssr: false });


export const Footer: React.FC = () => {
    const lng = useLocale();
    const t = useTranslations();
    const pathname = usePathname();
    const [termsModal, setTermsModal] = React.useState(false);

    const hideHeaderRoutes = React.useMemo(() => [`/${lng}/activation`, `/${lng}/forgot`, `/${lng}/reset-password`, `/${lng}/coming`], []);
    const shouldHideFooter = React.useMemo(() => hideHeaderRoutes.includes(pathname), [pathname]);


    const FOOTER_LINKS: { route: string, label: string }[] = [
        { route: `/${lng}/about-us`, label: t('footer.aboutUs') },
        { route: `/${lng}/courses`, label: t('footer.courses') },
        { route: `/${lng}/community`, label: t('footer.community') },
        { route: `/${lng}/faq`, label: t('footer.faq') },
        { route: `/${lng}/blog`, label: t('footer.blog') },
        { route: `/${lng}/contact`, label: t('footer.contactUs') },
        { route: `/${lng}/terms`, label: t('footer.terms') },
        { route: `/${lng}/privacy`, label: t('footer.privacy') },
    ]


    if (shouldHideFooter) return null;

    return (
        <footer className="bg-dark" role="contentinfo">
            <div className="container mx-auto w-full py-[50px] px-10 md:px-0 space-y-20">
                <section className="flex flex-col gap-10 text-white items-center justify-center text-center">
                    <LogoWhite aria-hidden="true" />
                    <ul className="flex text-md font-medium gap-5">
                        {
                            FOOTER_LINKS.map(({ route, label }, i) =>
                                <li key={i} className="flex items-center gap-5">
                                    {i !== 0 && <div className="h-[35px] w-[1px] bg-white"></div>}
                                    <a href={route} className="hover:text-primary">{label}</a>
                                </li>
                            )
                        }
                    </ul>
                </section>

                <section className="flex items-center gap-10 justify-between">
                    <div className="flex space-x-5">
                        <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <InstagramIcon />
                            <span className="sr-only" aria-label='Instagram page'>Instagram page</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <TwitterIcon />
                            <span className="sr-only" aria-label='Twitter page'>Twitter page</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <YoutubeIcon />
                            <span className="sr-only" aria-label='YouTube page'>YouTube page</span>
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                            <LinkedinIcon />
                            <span className="sr-only" aria-label='LinkedIn page'>LinkedIn page</span>
                        </Link>
                    </div>
                    <span className="text-gray-400">2023 | Neyron.ai | All rights reserved</span>
                    <Link href={'https://ailab.az'} target="_blank" className="flex items-center justify-center text-white gap-3">
                        <span>{t('footer.productOf')}</span>
                        <AiLabLogo />
                    </Link>
                </section>
            </div>

            <FooterTermsModal
                visible={termsModal}
                onConfirm={() => setTermsModal(false)}
                onClose={() => setTermsModal(false)}
            />
        </footer>
    );
};
