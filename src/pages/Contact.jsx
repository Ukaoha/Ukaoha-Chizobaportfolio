import React from 'react';

export default function Connect() {
    return (
        <div className="bg-gray-50 py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                {/* Contact Button */}
                <div className="mb-12">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                        Contact
                    </button>
                </div>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-8">
                    Let's Connect & Innovate
                </h1>

                {/* Description Text */}
                <div className="max-w-2xl mx-auto mb-16">
                    <p className="text-gray-600 text-lg leading-relaxed">
                        I love to solve problems, and always eager to explore new challenges, and connect
                        with professionals who are passionate about technology and
                        innovation. If you're looking to elevate your projects with a
                        blend of creativity, collaboration, and technical excellence, feel
                        free to connect with me on{' '}
                        <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                            LinkedIn
                        </a>
                        {' '}or reach out at{' '}
                        <a href="mailto:ukaohachizoba6@gmail.com" className="text-blue-500 hover:text-blue-600 transition-colors">
                            ukaohachizoba6@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}