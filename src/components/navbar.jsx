import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Beranda', href: '/', current: true },
    { name: 'Tentang Kami', href: '/about', current: false },
    { name: 'Layanan', href: '/services', current: false },
    { name: 'Galeri', href: '/gallery', current: false },
    { name: 'Kontak', href: '/contact', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    return (
        <>
            {/* Navbar Baru */}
            <div className="bg-red-600 text-white py-2">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between">
                    <a href="mailto:sales@orionindonesia.id">sales@orionindonesia.id</a>
                    <a href="tel:+627784090419">(+62) 7784090419</a>
                    <span>Batam City</span>
                    <span>Monday - Friday / 8AM - 11PM</span>
                </div>
            </div>

            <Disclosure as="nav" className="bg-white border-b shadow-sm sticky top-0 z-50">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <h1 className="text-blue-900 text-2xl font-bold tracking-tight hover:text-blue-700 transition-colors duration-200">Compro-Kapal</h1>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {navigation.map((item, index) => (
                                                <Fragment key={item.name}>
                                                    {index > 0 && (
                                                        <span className="text-gray-300">|</span>
                                                    )}
                                                    <a
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'text-blue-900 font-semibold border-b-2 border-blue-900'
                                                                : 'text-gray-600 hover:text-blue-900 hover:border-b-2 hover:border-blue-900',
                                                            'px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                </Fragment>
                                            ))}
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
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? 'text-blue-900 font-semibold'
                                                : 'text-gray-600 hover:text-blue-900',
                                            'block px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </>
    );
}
