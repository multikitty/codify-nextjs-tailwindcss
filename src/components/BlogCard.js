import React from 'react'

const BlogCard = () => {
    return (
        <div>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

                    <div className="mb-10 md:mb-16">
                        <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Blog</h2>

                        <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                    </div>


                    <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-4 md:gap-6 xl:gap-8 items-center justify-center ">

                        <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                            <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                            </a>

                            <div className="flex flex-col flex-1 p-4 sm:p-6">
                                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                    <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">New trends in Tech</a>
                                </h2>

                                <p className="text-gray-500 mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>


                            </div>
                        </div>

                        <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                            <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                            </a>

                            <div className="flex flex-col flex-1 p-4 sm:p-6">
                                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                    <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">Working with legacy stacks</a>
                                </h2>

                                <p className="text-gray-500 mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>


                            </div>
                        </div>

                        <div className="flex flex-col bg-white border rounded-lg overflow-hidden">
                            <a href="#" className="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200" />
                            </a>

                            <div className="flex flex-col flex-1 p-4 sm:p-6">
                                <h2 className="text-gray-800 text-lg font-semibold mb-2">
                                    <a href="#" className="hover:text-indigo-500 active:text-indigo-600 transition duration-100">10 best smartphones for devs</a>
                                </h2>

                                <p className="text-gray-500 mb-8">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>


                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard