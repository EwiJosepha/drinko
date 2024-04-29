"use client";

import React from "react";
import { useState, useEffect } from "react";
import {
    FaArrowAltCircleLeft,
    FaBars,
    FaLockOpen,
    FaRegUserCircle,
    FaTimes,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ModeToggle } from "../ui/toggle-mode";
import Logo from "./logo";
// import FooterLogo from "./footerLogo";

const Navbar: React.FC = () => {
    const router = useRouter();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAgentSign, setIsAgentSign] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen((prevIsMobileMenuOpen) => !prevIsMobileMenuOpen);
    };

    useEffect(() => {
        if (typeof localStorage !== "undefined") {
            const decoded = JSON.parse(localStorage.getItem("decoded") as string);
            if (decoded) {
                setIsAgentSign(true);
            }
        }
    }, []);

    // const handleLogOut = async () => {
    //     const res = await fetch(logOutUrl, {
    //         method: "GET",
    //         mode: "cors",
    //         headers: {
    //             "content-type": "application/Json",
    //         },
    //     });

    //     if (res.status !== 200) {
    //         return <div>Failed to logOut</div>;
    //     }

    //     if (res.status === 200) {
    //         router.push("/");

    //         localStorage.removeItem("decoded");
    //         Cookies.remove("token");
    //     }

    //     console.log(res);
    // };a
    return (
        <nav className="py-5 bg-neutral-800 ">

            <input
                type='search'
                placeholder='search drinks'
                // onChange={searchRooms2}
                className='border border-gray-400 px-6 py-2 float-right placeholder-orange-500 hover:text-gray-400 bg-neutral-600 pr-8' />

            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16 py-5">
                    {/* Logo */}
                    <div className="py-2">
                        <Logo />
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden lg:hidden">
                        <button
                            onClick={handleMobileMenuToggle}
                            className="text-white hover:text-gray-400"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-20">
                        <div className="relative">
                            <Link href="/about-me" className="text-white hover:text-gray-400">
                                About
                            </Link>
                        </div>
                        <div className="relative">
                            <Link href="/property" className="text-white hover:text-gray-400">
                                Drinks
                            </Link>
                        </div>
                        {isAgentSign && (
                            <div className="relative">
                                <Link
                                    href="/dashboard"
                                    className="text-white hover:text-gray-400"
                                >
                                    Dashboard
                                </Link>
                            </div>
                        )}
                        {!isAgentSign && (
                            <div className="relative group">
                                <button className="text-white hover:text-gray-400">
                                    Contact Us
                                </button>
                            </div>
                        )}

                        {isAgentSign && (
                            <div className="relative">
                                <button
                                    className="flex items-center py-6 text-white hover:text-gray-400"

                                >
                                    <FaLockOpen className="block mr-3 text-xl" />
                                    <span className="hidden md:inline">LogOut</span>
                                </button>
                            </div>
                        )}

                        {!isAgentSign && (
                            <Link href="/login">
                                <span className="relative text-white flex items-center justify-center hover:text-gray-400">
                                    <FaRegUserCircle className="mr-2 text-2xl" />
                                    <button className=" ">Log In</button>
                                </span>
                            </Link>
                        )}
                    </div>
                    <span className="relative text-white flex items-center justify-center hover:text-gray-400">
                        {/* <p><ModeToggle /></p> */}
                        </span>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-blue text-white w-[90%] h-fit p-6">

                </div>
            )}
        </nav>
    );
};

export default Navbar;
