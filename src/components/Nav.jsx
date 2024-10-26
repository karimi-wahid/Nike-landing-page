import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants/index'
import { useState } from 'react'
const Nav = () => {
    const [navOpen, setNavOpen] = useState(false)

    const handleNav = () => {
        setNavOpen(!navOpen)
    }

    return (
        <header className='padding-x py-8 absolute z-30 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/" >
                    <img src={headerLogo} alt="Logo"
                        width={130}
                        height={29} />
                </a>
                <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                    {
                        navLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}
                                    className='font-montserrat leading-normal text-lg text-slate-gray '
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className='hidden max-lg:block cursor-pointer' onClick={() => handleNav()}>
                    <img src={hamburger} alt="Hamburger"
                        width={25}
                        height={25}
                    />
                </div>
            </nav>
            {navOpen && (
                <div className='hidden max-lg:flex flex-col justify-center items-center w-full h-[400px] z-20 bg-slate-100 mt-3 rounded-lg'>
                    <ul className='flex flex-1 flex-col justify-center items-center gap-4'>
                        {
                            navLinks.map((item, index) => (
                                <li key={index} className='px-5 py-2 rounded-lg border-b text-black border-slate-400 hover:bg-coral-red hover:text-white'>
                                    <a href={item.href}
                                        className='font-montserrat leading-normal text-2xl'
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Nav