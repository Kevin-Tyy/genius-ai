import { pricingPlans } from "@/app/utils/constants";
import Image from "next/image";
import React from "react";

function PriceCards() {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-8 justify-center">
      {pricingPlans.map((plan) => (
        <div
          className={`w-full h-auto rounded-3xl p-12 space-y-8 ${
            plan.title === "Professional" ? "gradient-cards text-black ring-0" : "gradient-card border-2 border-[#5c6a9e25]"
          }`}
          key={plan.title}>
          <h1 className="text-2xl font-bold mb-2">{plan.title}</h1>
          <p className={`text-[#F8F9FA] mb-4 ${plan.title === "Professional" && "!text-[#101010]"}`}>{plan.description}</p>
          <p className="">
            <span className="text-5xl font-bold">{plan.price}</span>/ {plan.time}
          </p>
          <button className="button-gradient-sm gradient-border p-4 w-full max-w-sm rounded-xl space-x-3 flex items-center justify-center">
            <p className="text-white font-semibold">Subscribe now</p>
          </button>
          <div className="mt-4">
            {plan.access.map((acc, index) => (
              <div key={index} className="space-y-3">
                {Object.values(acc).map((value, i) => (
                  <div className="flex items-center gap-2" key={i}>
                    {plan.title === "Professional" ? (
                      <div className="bg-black w-6 h-6 rounded-full mr-2 grid place-content-center">
                        <Image src="/verified.svg" alt="verified" width={16} height={16} />
                      </div>
                    ) : (
                      <div className="bg-white w-6 h-6 rounded-full border-2 border-white mr-2 grid place-content-center">
                        <Image src="/verified.png" alt="verified" width={16} height={16} />
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
