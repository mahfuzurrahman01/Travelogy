import React from 'react';
import { ImFacebook2, ImInstagram, ImTwitter, ImWhatsapp } from 'react-icons/im'
import image from '../assets/sean-oulashin-KMn4VEeEPR8-unsplash.jpg'
import image2 from '../assets/bg2.jpg'
import Navbar from '../Shared/Navbar';
const Home = () => {
    return (
        <div>
            <div className='flex'>
                <div className=' flex flex-col items-start justify-center p-5 border-4 m-3 gap-5 bg-gray-50 rounded-lg' style={{ width: "45%", backgroundImage: `url(${image2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                    <h1 className='text-7xl font-extrabold mb-7 uppercase gradient'>Travelogy</h1>
                    <p className='text-2xl font-semibold uppercase font-serif text-slate-100'>"Calculate the cost of your tour, <br /> travel smarter"</p>
                    <p className=''>"Welcome to Travology, your one-stop solution for hassle-free tour planning.Our user-friendly app helps you calculate your tour budget and per person expenses with ease. With Travology, you can focus on the excitement of your journey, not the stress of finances. So, why wait? Start planning your dream tour now!"</p>
                    <div className='flex flex-col justify-center items-center gap-4 mt-8 text-center'>
                        <ImFacebook2 className='text-sky-800 text-xl'></ImFacebook2>
                        <ImInstagram className='text-xl text-rose-500'></ImInstagram>
                        <ImTwitter className='text-sky-500 text-xl'></ImTwitter>
                        <ImWhatsapp className='text-green-600 text-xl'></ImWhatsapp>
                    </div>
                    <div className='w-full mt-10'>
                        <address>
                            <p className='text-xs text-center'>Developed by <span className='text-gray-700 font-bold'>Mafuzur Rahman</span></p>
                            <p className='text-xs text-center'>mafuzur.rahman032@gmail.com</p>
                        </address>
                    </div>
                </div>
                <div style={{ width: "55%", height: "100vh", backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>

                    <Navbar></Navbar>
                </div>
            </div>
        </div>
    );
};

export default Home;