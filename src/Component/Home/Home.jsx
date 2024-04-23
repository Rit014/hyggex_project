import React from 'react';
import hyggex_next from '../Image/hyggex2.png';

const Home = () => {
    return (
        <>
            <section>
                <div className=' w-100 h-screen mt-0'>
                    <h1 className='mt-9 ml-5  font-bold text-blue-700 text-2xl'>Relations and Function (Mathematics)</h1>
                    <div className='flex flex-col w-full justify-center mt-8 items-center'>
                        <div className='flex flex-col w-full  justify-center items-center'>
                            <ul className='flex flex-row w-6/12 justify-evenly'>
                                <li className='font-bold  text-blue-700 border-b-2 border-blue-700'>Study</li>
                                <li>Quiz</li>
                                <li>Test</li>
                                <li>Game</li>
                                <li>Others</li>
                            </ul>
                            <div className='flex flex-col w-5/12 h-full mt-6 justify-between items-center'>
                                <div className=" flex flex-col w-11/12 h-72  rounded-3xl justify-center items-center bg-gradient-to-r from-blue-800 to-indigo-900 ">
                                    {/* bg-gradient-to-r from-blue-800 to-indigo-900 */}
                                    <div className='flex flex-row mb-14 w-11/12 justify-between items-center'>
                                        <h1><i class="fa-regular fa-lightbulb  text-white text-xl"></i></h1>
                                        <h1><i class="fa-solid fa-volume-high text-white text-xl"></i></h1>
                                    </div>
                                    <div className='w-full mb-24 flex flex-row justify-center items-center '>
                                        <h1 className='font-bold text-white text-3xl'>9 + 6 + 7x - 2x - 3</h1>
                                    </div>
                                </div>
                                <div className='flex flex-row w-11/12 justify-between mt-4 items-center'>
                                    <i className="fa-solid fa-rotate-right text-xl text-blue-900" />
                                    <div className='flex flex-row w-5/12 justify-between items-center'>
                                        <i className="fa-solid fa-chevron-left rounded-full px-3 py-1 bg-blue-900 border-2 border-blue-900 text-xl text-white" />
                                        <h1 className='font-bold text-xl text-blue-900'>01/10</h1>
                                        <i className="fa-solid fa-chevron-right rounded-full px-3 py-1 bg-blue-900 border-2 border-blue-900 text-xl text-white" />
                                    </div>
                                    <i className="fa-solid fa-expand text-xl text-blue-900" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full mt-9 flex flex-row justify-between'>
                            <div classNmae='flex flex-col'>
                                <div className='flex flex-row  w-56 justify-between'>
                                    <div className='rounded-full flex flex-row mt-2 justify-center items-center circle-shadow-3xl-blue-800 bg-gradient-to-r from-blue-800 to-indigo-90 w-15 h-12'>
                                        <img src={hyggex_next} alt="" className='w-12 h-12 rounded-full' />
                                    </div>
                                    <div className="mr-20">
                                        <span classsName=" text-black" style={{ fontSize: '12px' }}>published by</span>
                                        <p className="font-bold text-blue-700 text-xl mb-20">Hygge<span className='text-2xl text-blue-800'>X</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row justify-center items-center mb-20 '>
                                <i className="fa-solid fa-circle-plus font-bold text-blue-800 mr-3 text-4xl" />
                                <span className='font-bold text-blue-800 text-2xl'>Create Flashcard</span>
                            </div>

                        </div>
                        <div className='flex flex-col w-full justify-items-start items-start mb-10'>
                            <h1 className='font-bold text-blue-700 text-4xl'>FAQ</h1>
                            <ul className='mt-9 w-full'>
                                <li className='px-30 py-3 w-8/12 border-2 rounded-2xl border-blue-500'><div className=' w-full ml-9 flex flex-row justify-between'><span>Can education flashcard be used for all age groups?</span><i className="fa-solid fa-chevron-down mr-12" ></i></div></li>
                                <li className='px-30 py-3 w-8/12 mt-6 border-2 rounded-2xl border-blue-500'><div className=' w-full ml-9 flex flex-row justify-between'><span>How do education flashcared work?</span><i className="fa-solid fa-chevron-down mr-12" ></i></div></li>
                                <li className='px-30 py-3 w-8/12 mt-6 border-2 rounded-2xl border-blue-500'><div className=' w-full ml-9 flex flex-row justify-between'><span>Can education flashcard be used for tezt preparation?</span><i className="fa-solid fa-chevron-down mr-12"></i></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;