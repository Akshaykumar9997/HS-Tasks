import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="flex justify-between px-5 py-2 nav-colour text-white ">    
            <h1 className="font-bold " ><a href="/">EPIK GAMES</a></h1>
            <nav className="hidden md:block">
                <ul className="flex gap-6">
                    <li className=' hover:text-black font-bold'><a href="/">Home</a></li>
                    <li className=' hover:text-black font-bold'><a href="#about">Free games</a></li>
                    <li className=' hover:text-black font-bold'><a href="#skills">Premium</a></li>
                    <li className=' hover:text-black font-bold'><a href="#education">Contact</a></li>

                </ul>
            </nav>

            {toggleMenu && <nav className="block md:hidden ">
                <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>

                </ul>
            </nav>}
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-black h-6' /></button>
        </div>
    )
}