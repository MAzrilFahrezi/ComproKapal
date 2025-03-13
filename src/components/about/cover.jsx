import React from 'react';

const Cover = () => {
    return (
        <section className="relative mb-16">
            <img 
                src="https://img.freepik.com/premium-photo/cargo-ship-ocean-with-containers_951562-15636.jpg" 
                alt="Kapal Kargo" 
                className="w-full h-64 object-cover rounded-none"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-center p-8 bg-black bg-opacity-50">
                <h2 className="text-5xl font-bold text-white mb-4">About</h2>
                <p className="text-lg text-white">
                    Take the complexity out of customs Freight Solutions with customs brokerage services
                </p>
            </div>
        </section>
    );
};

export default Cover;
