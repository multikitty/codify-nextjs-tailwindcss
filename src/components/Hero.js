import React from 'react'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div>
            <main className='max-w-screen-xl mx-auto px-4' >
                <div className="">
                    <div className="flex justify-between">
                        <div className='lg:max-w-2xl text-center lg:text-left'>
                            <div className=" mb-8 md:flex justify-center lg:justify-start">
                                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-200/10 hover:ring-gray-200/20">
                                    <span className="text-white">
                                        Announcing our next round of funding.<br className="block sm:hidden" /> <Link to="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></Link>
                                    </span>
                                </div>
                            </div>
                            <div >
                                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">Data to enrich your online business</h1>
                                <p className="mt-6 text-sm sm:text-lg  text-gray-300 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, iusto alias reiciendis quaerat aliquid rem! Aspernatur velit id dolore. Obcaecati accusamus quaerat doloremque dignissimos aperiam suscipit temporibus impedit, tempora aliquid.</p>
                                <div className="mt-8 flex gap-x-4 justify-center lg:justify-start">
                                    <Link to="#" className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                                        Get started
                                        <span className="text-indigo-200" aria-hidden="true">&rarr;</span>
                                    </Link>
                                    <Link to="#" className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-gray-200/10 hover:ring-gray-200/20">
                                        Live demo
                                        <span className="text-white" aria-hidden="true">&rarr;</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img className=' hidden lg:block  h-[400px] rounded-lg shadow-md' src="https://img.freepik.com/free-psd/3d-illustration-man-flying-catch-golden-coin-business-graph-rendering_1150-53663.jpg?w=996&t=st=1674042834~exp=1674043434~hmac=dc2020c599c47a0e6183090f4a734e9986e0950826ad193b3d28d0e4deeae500" alt="" />
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Hero