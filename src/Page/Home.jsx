import React, { useState } from 'react';
import { ImFacebook2, ImInstagram, ImTwitter, ImWhatsapp } from 'react-icons/im'
import image from '../assets/sean-oulashin-KMn4VEeEPR8-unsplash.jpg'
import image2 from '../assets/bg2.jpg'
import Navbar from '../Shared/Navbar';
import { motion as m } from 'framer-motion'
const Home = () => {
    const [addNew, setAddNew] = useState(false)
    const [viewField, setViewField] = useState(false)
    const addNewClicked = () => {
        setAddNew(!addNew)
        setViewField(false)
    }
    const viewFieldClicked = () => {
        setViewField(!viewField)
        setAddNew(false)
    }
    return (
        <div>
            <div className='flex'>
                <div className=' flex flex-col items-start justify-center p-5 border-4 m-3 gap-5 bg-gray-50 rounded-lg' style={{ width: "45%", backgroundImage: `url(${image2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className='overflow-hidden p-0 m-0'>
                        <m.h1 initial={{ y: "150%" }} animate={{ y: "0" }} transition={{ duration: "0.8", delay: "0.8" }} className='text-7xl overflow-hidden font-extrabold mb-7 uppercase gradient'>Travelogy</m.h1>
                    </div>
                    <m.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: "0.5", delay: "1.5" }} className='text-2xl font-semibold uppercase font-serif text-slate-200'>"Calculate the cost of your tour, <br /> travel smarter"</m.p>
                    <p className=''>"Welcome to Travology, your one-stop solution for hassle-free tour planning.Our user-friendly app helps you calculate your tour budget and per person expenses with ease. With Travology, you can focus on the excitement of your journey, not the stress of finances. So, why wait? Start planning your dream tour now!"</p>
                    <div className='overflow-hidden'>
                        <m.div initial={{ x: "-150%" }} animate={{ x: "0" }} transition={{ duration: "0.8", delay: "0.8" }} className='flex flex-col justify-center items-center gap-4 mt-8 text-center'>
                            <ImFacebook2 className='text-sky-800 text-xl'></ImFacebook2>
                            <ImInstagram className='text-xl text-rose-500'></ImInstagram>
                            <ImTwitter className='text-sky-500 text-xl'></ImTwitter>
                            <ImWhatsapp className='text-green-600 text-xl'></ImWhatsapp>
                        </m.div>
                    </div>
                    <div className='w-full mt-10'>
                        <address>
                            <p className='text-xs text-center'>Developed by <span className='text-gray-700 font-bold'>Mafuzur Rahman</span></p>
                            <p className='text-xs text-center'>mafuzur.rahman032@gmail.com</p>
                        </address>
                    </div>
                </div>
                <div className='brightness-95' style={{ width: "55%", height: "100vh", backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <Navbar></Navbar>
                    <div className='flex justify-center items-center gap-5 h-32'>
                        <button onClick={addNewClicked} className='bg-teal-700 bg-opacity-50 text-lg hover:bg-orange-50 hover:text-gray-600 duration-300 hover:bg-opacity-50 py-1 px-2 rounded text-gray-100'>Add new trip slot</button>
                        <button onClick={viewFieldClicked} className='bg-teal-700 bg-opacity-50 text-lg hover:bg-orange-50 hover:text-gray-600 duration-300 hover:bg-opacity-50 py-1 px-2 rounded text-gray-100'>View your slot</button>
                    </div>
                    <div className='w-full flex justify-center gap-2'>
                        {
                            addNew === true && <div className='mt-5 w-96 h-60 bg-gray-200'>
                                <h1>ADD new</h1>
                            </div>
                        }
                        {
                            viewField === true && <div className='mt-5 w-96 h-60 bg-blue-200'>
                                <h1>View your slot</h1>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;