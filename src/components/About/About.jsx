import React from "react";
import CarPng from "../../assets/car1.png";


const About = () => {
    return( 
    <div className="dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px]sm:grid sm:place-items-center"> 
    
    <div className="container min-h-[500px]">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-20 place-items-center">
            <div 
            data-aos="slide-right"
            data-aos-duration="1500"
             >
                <img src={CarPng} alt=""
                className="sm:scale-105 sm:translate-x-11 max-h-[600px] drop-shadow-[] " />
            </div>
            <div >
                <div 
                className="space-y-5 sm:p-16 pb-6" >
                    <h1
                    data-aos="fade-up"
                    data-aos-duration="300" 
                    className="text-4xl md:text-3xl font-serif  font-bold ">About Us</h1>
                    <p data-aos="fade-up"
                    data-aos-duration="300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, unde officia.
                    </p>
                    <p data-aos="fade-up"
                    data-aos-duration="300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fuga modi reprehenderit alias aperiam! Facilis?</p>
                    <button data-aos="fade-up"
                    data-aos-duration="300"className="rounded-md border-2 border-roimary hover:bg-primary/80 hover:text-black duration-500 py-2 px-6 text-primary tracking-wider">Get Started</button>
                </div>
            </div>
        </div>

    </div>
    </div>

    )
};


export default About;