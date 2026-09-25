import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className='flex justify-between p-11 items-center gap-2  bg-emerald-200'>
                <div className='flex-1  hover:cursor-pointer'>
                    <span>Logo image</span>
                    <h1>
                        Dr. Mohamed Yasser
                    </h1>
                </div>
                <ul className=' self-center flex-2 flex justify-between items-center gap-1 list-none  bg-emerald-500 py-4 px-6 rounded-2xl'>
                    {/* <li className=' duration-300 hover:text-white
                             
                              
                             '>Home</li> */}

                            <li 
                                    className='relative  transition-colors duration-300  hover:text-white
                                    after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0  after:bg-amber-400 after:origin-center
                                                after:scale-x-0  hover:after:scale-x-100  after:transition-transform after:duration-300 after:ease-in-out 
                                                hover:cursor-pointer
                                    '
                            
                            >

                                Home
                            </li>
                    <li className='relative py-2  transition-colors duration-300 hover:text-white
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                             after:origin-center after:scale-x-0 after:bg-amber-400 
                             after:transition-transform after:duration-300 after:ease-in-out
                            hover:after:scale-x-100 hover:cursor-pointer'>About </li>
                    <li className='relative py-2  transition-colors duration-300 hover:text-white
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                             after:origin-center after:scale-x-0 after:bg-amber-400 
                             after:transition-transform after:duration-300 after:ease-in-out
                            hover:after:scale-x-100 hover:cursor-pointer'>Services </li>
                    <li className='relative py-2  transition-colors duration-300 hover:text-white
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                             after:origin-center after:scale-x-0 after:bg-amber-400 
                             after:transition-transform after:duration-300 after:ease-in-out
                            hover:after:scale-x-100 hover:cursor-pointer'>Contacts</li>
                    <li className='relative py-2  transition-colors duration-300 hover:text-white
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                             after:origin-center after:scale-x-0 after:bg-amber-400 
                             after:transition-transform after:duration-300 after:ease-in-out
                            hover:after:scale-x-100 hover:cursor-pointer'>Locations </li>
                    {/* <li className='relative py-2  transition-colors duration-300 hover:text-white
                            after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                             after:origin-center after:scale-x-0 after:bg-amber-400 
                             after:transition-transform after:duration-300 after:ease-in-out
                            hover:after:scale-x-100 hover:cursor-pointer'>Blogs </li> */}
                </ul>
                {/* <div className='flex-1'>
                <span>Switch Lang</span>
            </div> */}
                <div className='flex-1 '>
                    <button className='bg-green-200 mx-auto rounded-b-lg text-center p-4 block hover:cursor-pointer  hover:bg-emerald-500 hover:text-white hover:text-xl transition-all duration-400 ease-in-out'>Book an appointemt</button>
                </div>
            </nav>
        </>
    )
}
