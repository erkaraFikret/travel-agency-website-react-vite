import React from 'react'
import { NavLink } from 'react-router-dom'

const PopupMenu = ({ navlinks, popUp }) => {
    return (
        <>
            <nav className={`
        fixed top-14 right-14 bg-white bg-opacity-70 opacity-100 z-50 backdrop-filter backdrop-blur-md rounded-lg w-44 h-auto py-5 px-6 
        hidden lg:flex items-center justify-center transition-transform duration-300 ${popUp ? 'lg:showpopup' : 'lg:noshowpopup'}
    `}>
                <ul className='flex flex-col items-start gap-3'>
                    {navlinks?.map((links, i) => (
                        <li key={i}>
                            <NavLink to={`#`}>{links.link}</NavLink>
                        </li>
                    ))}
                    <li><button type='button' className='button-light sm:w-auto shadow-slate-300 rounded-lg '>Join Us</button></li>
                </ul>
            </nav>
        </>
    )
}

export default PopupMenu