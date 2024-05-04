import React from 'react'

const Hero = () => {
    return (
        <div>
            <div className="bg-[#f1f1f1]">
                <div className="relative flex flex-col md:flex-row justify-center p-8">
                    <div className="m-12 mt-16">
                        <h1 className="text-4xl md:text-7xl font-bold  md:px-8 py-2">
                            Building Your Vision with Our Expertise
                        </h1>
                        <p className="text-lg md:text-2xl px-4 md:px-8 md:py-4 pt-0 pb-2 md:max-w-3xl opacity-70 my-4">
                            Vision Interprises is a leading construction company that offers a wide range of services. We specialize in bringing your building projects to life with our expertise and commitment to quality.
                        </p>
                        <button className="bg-green-800 text-white py-4 px-12 md:mx-8 mx-4 my-4 rounded-lg hover:bg-green-900 font-semibold">
                            View All Services
                        </button>
                    </div>
                    <div className="m-12 mt-16">
                        <img className="rounded-lg" src="/assets/dp.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero