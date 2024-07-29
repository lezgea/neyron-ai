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
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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
    const [open, setOpen] = React.useState(false);

    const toggleSidebar = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

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


    const SidebarMenu = (
        <Box sx={{ width: 250, padding: 2 }} role="presentation">
            <SelectLanguage />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 20, paddingBottom: 10 }}>
                <UserProfile />
                <ThemeSwitch />
            </div>
            <Divider />
            <List>
                {navLinks.map((link, index) => (
                    <ListItem key={link.title} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={link.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <header className='header'>
            <div className='header__content'>
                <Link href={`/${selectedLanguage}`} className='header__logo'>
                    <Image src={LogoNeyronDark} alt='logo' />
                </Link>
                <button
                    onClick={toggleSidebar(true)}
                    className="ai-btn ai-btn--tertiary mobile-sidebar-drawer"
                    style={{ height: 40 }}
                >
                    Menu
                </button>
                <Drawer open={open} onClose={toggleSidebar(false)}>
                    {SidebarMenu}
                </Drawer>
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
        </header>
    );
};

export default Header;
