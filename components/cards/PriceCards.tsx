import { pricingPlans } from '@/app/utils/constants';
import Image from 'next/image';
import React from 'react';

function PriceCards() {
    return (
        <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            {pricingPlans.map((plan) => (
                <div className={`w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto md:h-[73vh] rounded-3xl border-2 border-white p-4 space-y-8 ${plan.title === "Proffessional" ? "gradient-cards text-black" : "gradient-card"}`} key={plan.title}>
                    <h1 className="text-xl font-bold mb-2">{plan.title}</h1>
                    <p className="text-gray-500 mb-4">{plan.description}</p>
                    <p className="">
                        <span className='text-3xl font-bold'>{plan.price}</span>/ {plan.time}
                    </p>
                    <button className='gradient-border p-2 w-full  md:w-72 rounded-lg space-x-3 flex items-center justify-center'>
                        <p>Subscribe now</p>
                    </button>
                    <div className="mt-4">
                        {plan.access.map((acc, index) => (
                            <div key={index}>
                                {Object.values(acc).map((value, i) => (
                                    <div className="flex items-center mb-2" key={i}>

                                        {plan.title === "Proffessional" ? (
                                            <div className="bg-black w-6 h-6 rounded-full  mr-2">
                                                <Image src="/verified.svg" alt="verified" width={24} height={24} />
                                            </div>
                                        ) : (
                                            <div className="bg-white w-6 h-6 rounded-full border-2 border-white mr-2">
                                                <Image src="/verified.png" alt="verified" width={24} height={24} />
                                            </div>
                                        )}
                                        <div key={i} className="flex items-center mb-1">
                                            <span>{value}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PriceCards;
