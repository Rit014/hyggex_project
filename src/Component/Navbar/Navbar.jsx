import React from 'react';
import hyggex_next from '../Image/hyggex2.png';

const NavBar = () => {
    return (
        <>
            <header>
                <nav className="flex flex-row w-full align-content-center items-center  justify- p-4 text-black">
                    <div className='flex flex-start w-6/12 justify-start items-center'>
                        <img src={hyggex_next} alt="" className='w-10 h-8'/>
                        <p className="font-bold text-blue-800 text-xl ">Hygge<span className='text-2xl text-blue-800'>X</span></p>
                    </div>
                    <ul className='flex flex-row w-6/12 justify-between'>
                        <li>Home</li>
                        <li>Flashcard</li>
                        <li>Contact</li>
                        <li>FAQ</li>
                        <li className='px-6 py-1 rounded-full text-white bg-gradient-to-r from-blue-800 to-indigo-900'>Login</li>
                    </ul>
                </nav>
                <div className='flex flex-row ml-2 mt-6 font-thin text-sm'>
                    <div className="ml-3">
                        <i class="fa-solid fa-house" />
                    </div>
                    <div className="ml-3">
                        <i class="fa-sharp fa-light fa-greater-than" />
                    </div>
                    <p className="ml-2">Flashcard</p>
                    <div className="ml-2">
                        <i class="fa-sharp fa-light fa-greater-than" />
                    </div>
                    <p className="ml-2 text-blue-700 font-bold">Relation and Function</p>
                </div>
            </header>
        </>
    )
}

export default NavBar;