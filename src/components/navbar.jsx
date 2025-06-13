import { Fragment, useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo2.png';
import { useLanguage } from '../context/LanguageContext';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { currentLanguage, toggleLanguage } = useLanguage();

    const navigation = [
        { name: currentLanguage === 'id' ? 'Beranda' : 'Home', href: '/', current: false },
        { name: currentLanguage === 'id' ? 'Tentang Kami' : 'About Us', href: '/about', current: false },
        { name: currentLanguage === 'id' ? 'Layanan' : 'Services', href: '/services', current: false },
        { name: currentLanguage === 'id' ? 'Galeri' : 'Gallery', href: '/gallery', current: false },
        { name: currentLanguage === 'id' ? 'Kontak' : 'Contact', href: '/contact', current: false },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const getNavItems = () => {
        return navigation.map(item => ({
            ...item,
            current: item.href === location.pathname
        }));
    };

    const handleLanguageChange = () => {
        toggleLanguage();
        setDropdownOpen(false);
    };

    return (
        <>
            {/* Top Info Bar - Remains at the top of the document */}
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-2">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2">
                        <a href="mailto:operation@orionindojayaocean.com" className="flex items-center text-sm hover:text-blue-200 transition-colors group">
                            <EnvelopeIcon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                            <span>operation@orionindojayaocean.com</span>
                        </a>
                        <a href="tel:+6281367307405" className="flex items-center text-sm hover:text-blue-200 transition-colors group">
                            <PhoneIcon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                            <span>(62) 813-6730-7405</span>
                        </a>
                        <div className="flex items-center text-sm">
                            <MapPinIcon className="h-4 w-4 mr-2" />
                            <span>Palembang City</span>
                        </div>
                        <div className="flex items-center text-sm">
                            <ClockIcon className="h-4 w-4 mr-2" />
                            <span>Monday - Friday / 8AM - 11PM</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Empty div to prevent content jump when navbar becomes fixed */}
            {scrolled && <div className="h-16"></div>}

            <Disclosure as="nav" className={classNames(
                scrolled
                    ? "fixed top-0 left-0 right-0 w-full py-2 shadow-md bg-white/95 backdrop-blur-sm transform-none transition-all duration-300 ease-in-out"
                    : "relative py-4 bg-white transition-all duration-300",
                "z-50"
            )}>
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href="/" className="flex items-center">
                                            <img
                                                src={logo}
                                                alt="Orionindo Logo"
                                                className="h-24 w-auto"
                                            />
                                        </a>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-center space-x-6">
                                            {getNavItems().map((item) => (
                                                <motion.a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'text-blue-900 font-semibold after:opacity-100 after:w-full'
                                                            : 'text-gray-600 hover:text-blue-900',
                                                        'px-1 py-1 text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-900 after:opacity-0 after:w-0 after:transition-all after:duration-300 hover:after:opacity-100 hover:after:w-full'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                    whileHover={{ scale: 1.05 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                >
                                                    {item.name}
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:flex">
                                    <motion.a
                                        href="/contact"
                                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {currentLanguage === 'id' ? 'Hubungi Kami' : 'Contact Us'}
                                    </motion.a>
                                    <div className="ml-4">
                                        <div className="relative">
                                            <button
                                                className="flex items-center text-gray-600 hover:text-blue-900 focus:outline-none"
                                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                            >
                                                <img
                                                    src={currentLanguage === 'id' ?
                                                        "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" :
                                                        "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"}
                                                    alt={currentLanguage === 'id' ? "Indonesia" : "English"}
                                                    className="h-5 w-5"
                                                />
                                            </button>
                                            {dropdownOpen && (
                                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                                    <button
                                                        className="flex items-center w-full px-4 py-2 text-gray-600 hover:bg-gray-100"
                                                        onClick={handleLanguageChange}
                                                    >
                                                        <img
                                                            src={currentLanguage === 'id' ?
                                                                "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" :
                                                                "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"}
                                                            alt={currentLanguage === 'id' ? "English" : "Indonesia"}
                                                            className="h-5 w-5"
                                                        />
                                                        <span className="ml-2">{currentLanguage === 'id' ? 'English' : 'Indonesia'}</span>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-blue-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 border-t border-gray-200 mt-2">
                                {getNavItems().map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'text-blue-900 font-semibold bg-blue-50'
                                                : 'text-gray-600 hover:text-blue-900 hover:bg-gray-50',
                                            'block px-3 py-2 text-base font-medium rounded-md transition-all duration-200'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                                <a
                                    href="/contact"
                                    className="block w-full text-center mt-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none transition-colors duration-200"
                                >
                                    {currentLanguage === 'id' ? 'Hubungi Kami' : 'Contact Us'}
                                </a>
                                {/* Language Switcher for Mobile */}
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <div className="flex items-center justify-between px-3">
                                        <span className="text-base font-medium text-gray-600">
                                            {currentLanguage === 'id' ? 'Ganti Bahasa:' : 'Switch Language:'}
                                        </span>
                                        <button
                                            className="flex items-center text-gray-600 hover:text-blue-900 focus:outline-none p-2 rounded-md hover:bg-gray-100"
                                            onClick={handleLanguageChange}
                                        >
                                            <img
                                                src={currentLanguage === 'id' ?
                                                    "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" :
                                                    "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg"}
                                                alt={currentLanguage === 'id' ? "English" : "Indonesia"}
                                                className="h-6 w-6"
                                            />
                                            <span className="ml-2 text-sm font-medium">{currentLanguage === 'id' ? 'English' : 'Indonesia'}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}
