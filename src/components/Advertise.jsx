import React from 'react'

const Advertise = ({ brands }) => {
    return (
        <>
            <div className='my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto flex items-center justify-between xl:gap-7 
            overflow-x-scroll scroll-smooth scroll-hidden'>
                {brands?.map((brand, i) => (
                    <img src={brand.iconSrc} alt='brands/img' key={i} className='w-44 h-auto object-fill xl:w-38 lg:w-32 
                    hover:scale-105 transiton-all duration-300 drop-shadow-md' />
                ))}
            </div>
        </>
    )
}

export default Advertise