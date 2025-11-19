import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import CoffeeCard from '../components/coffeeCard';
import { FiX, FiMenu } from 'react-icons/fi';
import { IoIosStar, IoIosStarOutline } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import coffeeImg from "/assets/coof.jpg";

const HomePage = () => {
    const [navOpen, setNavOpen] = useState(false);
    const toggleMenu = () => setNavOpen(!navOpen);
    const closeMenu = () => setNavOpen(false);

    const coffeeData = [
        { id: 1, name: 'Lugano Coffee', price: 'RS129', img: '/assets/lugano.jpg', title: "An espresso coffee drink, topped with a small layer of foam" },
        { id: 2, name: 'Dalgna Coffee', price: 'RS159', img: '/assets/dalgna.jpg', title: "Whipped coffee made using instant coffee" },
        { id: 3, name: 'Iced Coffee', price: 'RS149', img: '/assets/iced coffee.jpg', title: "Iced coffee is a coffee beverage served cold" },
        { id: 4, name: 'Cold Coffee', price: 'RS129', img: '/assets/filtercoffee.jpg', title: "75% coffee and 25% chicory freshly roasted" },
    ];

    const dessertData = [
        { id: 1, name: 'Gulab jamun', price: 'RS199', img: '/assets/gulab.jpg', title: "Made with milk solids, sugar, rose water & card" },
        { id: 2, name: 'Chocolate Tiramisu', price: 'RS250', img: '/assets/chocolate.jpg', title: "Made with layer of mascarpone cream, chocolate" },
        { id: 3, name: 'Churro', price: 'RS149', img: '/assets/churro.jpg', title: "Hot chocolate made with bittersweet chocolate" },
        { id: 4, name: 'Australian Lamingtons', price: 'RS129', img: '/assets/aus.jpg', title: "Made with delicious sponge cake" },
    ];

    return (
        <>

            <nav className="w-full p-5 absolute top-0 left-0 z-10">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase bg-gradient-to-r from-yellow-600 to-orange-700 text-transparent bg-clip-text tracking-wide drop-shadow-lg text-center">
                        COFFEEHOUSE
                        <span className="block h-1 w-12 sm:w-16 md:w-20 bg-amber-900 mt-2 mx-auto rounded-full"></span>
                    </h1>


                    <div className="hidden md:flex items-center gap-8">
                        {['Home', 'Coffee', 'Bakery', 'Shop', 'About', 'Login'].map((link) => (
                            <Link key={link} to="/" className="text-lg text-white uppercase hover:text-gray-300">{link}</Link>
                        ))}
                    </div>


                    <div className="hidden md:flex text-white text-2xl">
                        <CiSearch />
                    </div>


                    <div className="md:hidden text-2xl cursor-pointer text-white" onClick={toggleMenu}>
                        {navOpen ? <FiX /> : <FiMenu />}
                    </div>
                </div>

                {navOpen && (
                    <div className="md:hidden bg-white shadow-lg py-4 px-6 space-y-4" onClick={closeMenu}>
                        <div className="flex flex-col space-y-4">
                            {['Home', 'Coffee', 'Bakery', 'Shop', 'About', 'Login'].map((link) => (
                                <Link key={link} to="/" className="block text-lg text-black uppercase hover:text-gray-600">{link}</Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>


            <section
                className="w-full min-h-screen flex items-center bg-cover bg-center px-5 sm:px-10 md:px-20"
                style={{ backgroundImage: `url(${coffeeImg})` }}
            >
                <div className="text-white max-w-lg">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">Welcome!</h1>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug mb-5 drop-shadow-xl">
                        We serve the richest coffee <br /> in the city!
                    </h2>
                    <button className="py-3 px-6 rounded-xl bg-white text-black font-semibold hover:bg-gray-300 transition-all">
                        Order Now
                    </button>
                </div>
            </section>

            <section className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mb-10 px-4 max-w-7xl mx-auto">
                {[
                    { img: "/assets/hot.png", label: "Hot Coffee" },
                    { img: "/assets/cold.png", label: "Cold Coffee" },
                    { img: "/assets/cup.png", label: "Cup Coffee" },
                    { img: "/assets/dessert.png", label: "Dessert" }
                ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center justify-center">
                        <img
                            src={item.img}
                            alt={item.label}
                            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                        />
                        <h1 className="mt-2 text-gray-700 sm:text-white font-medium">
                            {item.label}
                        </h1>
                    </div>
                ))}
            </section>


            {/* Special Coffee */}
            <section className="flex flex-col items-center py-10 px-4 max-w-7xl mx-auto">
                <h1 className="text-2xl text-center font-bold mb-6 text-black">OUR SPECIAL COFFEE</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
                    {coffeeData.map((item) => (
                        <CoffeeCard key={item.id} {...item} />
                    ))}
                </div>
            </section>

            {/* Special Dessert */}
            <section className="flex flex-col items-center py-10 px-4 max-w-7xl mx-auto">
                <h1 className="text-2xl text-center font-bold mb-6 text-black">OUR SPECIAL DESSERT</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
                    {dessertData.map((item) => (
                        <CoffeeCard key={item.id} {...item} />
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="flex flex-col items-center justify-center py-10 text-center bg-[#958267]">
                <div className="w-full px-4 max-w-md">
                    <h1 className="text-5xl font-semibold mb-5">Check out our best <br /> coffee beans</h1>
                    <button className="py-3 px-6 rounded-4xl bg-amber-900 text-white cursor-pointer">
                        Explore our products
                    </button>
                </div>
            </section>

            {/* Happy Customers */}
            <section className="flex flex-col items-center py-10 bg-[#fff8f0]">
                <h5 className="italic font-medium mb-2 text-center text-gray-700">Come and join us</h5>
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-black">OUR HAPPY CUSTOMERS</h1>
                <div className="flex flex-wrap justify-center gap-6 w-full px-4 max-w-7xl mx-auto">
                    {["Janet Adams", "John Doe", "Mary Smith"].map((name, idx) => (
                        <div key={idx} className="max-w-md w-full bg-[#f6e7d0] p-5 rounded-xl shadow-md flex flex-col">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                                    <img src="/assets/asian.jpeg" alt={name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-lg font-semibold">{name}</h1>
                                    <span className="text-gray-700 text-sm">Freelance</span>
                                </div>
                                <div className="flex ml-auto">
                                    <IoIosStar className="text-yellow-500" />
                                    <IoIosStar className="text-yellow-500" />
                                    <IoIosStar className="text-yellow-500" />
                                    <IoIosStar className="text-yellow-500" />
                                    <IoIosStarOutline className="text-yellow-500" />
                                </div>
                            </div>
                            <p className="text-gray-800 text-sm leading-relaxed">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
                                soluta dolor accusantium dignissimos impedit eaque aliquid voluptatibus
                                ad suscipit porro deleniti blanditiis aspernatur maxime nihil
                                doloremque dolorum distinctio delectus!
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter */}
            <section className="flex flex-col items-center justify-center py-10 text-center bg-[#958267]">
                <div className="w-full px-4 max-w-md">
                    <h1 className="text-3xl font-semibold mb-2 text-black">Join in and get 15% off!</h1>
                    <p className="text-gray-200 text-sm mb-6">Subscribe to our newsletter and get a 15% discount code</p>
                    <div className="flex gap-2 justify-center">
                        <div className="relative flex-1">
                            <input
                                type="email"
                                className="w-full bg-white rounded-2xl border-none outline-none py-2 pl-10 pr-3"
                                placeholder="Enter your email"
                            />
                            <MdEmail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                        <button className="bg-amber-900 text-white font-semibold py-2 px-5 rounded-2xl hover:bg-amber-800 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#6F4E37] text-white py-12">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-2xl font-bold">CoffeeHouse</h1>
                        <p className="text-gray-200 text-sm">Serving the richest coffee in the city. Join our community of coffee lovers!</p>
                        <div className="flex space-x-3 mt-2">
                            <a href="#" className="hover:text-amber-400"><FaFacebookF /></a>
                            <a href="#" className="hover:text-amber-400"><FaTwitter /></a>
                            <a href="#" className="hover:text-amber-400"><FaInstagram /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
                        {['Home', 'Products', 'About Us', 'Contact'].map((link) => (
                            <a key={link} href="#" className="hover:text-amber-400 text-sm">{link}</a>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col space-y-2">
                        <h3 className="font-semibold text-lg mb-2">Contact</h3>
                        <p className="text-sm text-gray-200">123 Coffee St, Coffee City</p>
                        <p className="text-sm text-gray-200">+123 456 7890</p>
                        <p className="text-sm text-gray-200">info@coffeehouse.com</p>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col space-y-3">
                        <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
                        <p className="text-sm text-gray-200">Get 15% off your first order!</p>
                        <div className="flex">
                            <input type="email" placeholder="Enter your email" className="w-full rounded-l-2xl py-2 px-3 text-black outline-none" />
                            <button className="bg-amber-900 px-4 rounded-r-2xl font-semibold hover:bg-amber-800 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-500 pt-4 text-center text-sm text-gray-300">
                    &copy; {new Date().getFullYear()} CoffeeHouse. All rights reserved.
                </div>
            </footer>
        </>
    );
};

export default HomePage;
