import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/assets/user.png"
import NavLink from './NavLink';


const Navbar = () => {
    return (
        <div className='flex justify-between items-center gap-2.5 container mx-auto lg:max-w-[90%]'>
            <div></div>
            <ul className='flex gap-4 justify-between text-gray-700'>
                <NavLink href={"/"}><li>Home</li></NavLink>
                <NavLink href={"/about"}><li>About</li></NavLink>
                <NavLink href={"/career"}><li className={"text-green-500"}>Career</li></NavLink>
            </ul>
            <div className='flex gap-1.5'>
                <Image src={logo} width={30} height={30} alt='Logo'></Image>
                <Link href={"/signin"}><button className='btn bg-purple-500 text-white'>Log in</button></Link>
            </div>
        </div>
    );
};

export default Navbar;