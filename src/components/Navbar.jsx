import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import menu from '../images/menu.svg'
import PopupMenu from './PopupMenu'

const Navbar = ({ navlinks }) => {
    const [popUp, setPopUp] = useState(false)

    const onTriggerPopup = () => {
        setPopUp(!popUp)
    }

    
    return (
        <>
            <header className='flex justify-center items-center w-auto h-auto absolute top-7 left-0 right-0'>
                <nav className='flex items-center justify-between travigo-container'>
                    <NavLink to={`/`} className="flex iems-center">
                        <img src={logo} alt="logo/img" className='w-22 h-9 object-fill' />
                    </NavLink>
                    <ul className='flex items-center lg:hidden gap-7'>
                        {navlinks?.map((links, i) => (
                            <li key={i}><NavLink to={'#'} className="text-lg text-slate-900">{links.link}</NavLink></li>
                        ))}
                    </ul>
                    <ul className='flex items-center lg:hidden'>
                        <button type='button' className='button-emrald px-7 py-1 text-base'>Join Us</button>
                    </ul>
                    <ul className='hidden lg:flex items-center'>
                        <li>
                            <button onClick={onTriggerPopup} type='button' className='flex items-center justify-center transition-all duration-200 active:scale-90'>
                                <img src={menu} alt="menu/svg" className='object-cover shadow-sm filter' />
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
            <PopupMenu navlinks={navlinks} onTriggerPopup={onTriggerPopup} popUp={popUp}/>
        </>
    )
}

export default Navbar