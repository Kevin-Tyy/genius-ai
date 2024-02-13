import { pricingPlans } from "@/app/utils/constants";
import Motion from "@/providers/Motion";
import Image from "next/image";
import React from "react";
interface Props {
  isChecked: boolean;
}
const PriceCards: React.FC<Props> = ({ isChecked }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 justify-center">
      {pricingPlans.map((plan, i) => (
        <Motion key={i} transition={{ duration: 0.5, delay: 0.1 * i }} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
          <div
            className={`w-full h-auto rounded-3xl px-10 py-12 space-y-8 max-w-[600px] ${
              plan.title === "Professional" ? "gradient-cards text-black ring-0" : "gradient-card border-2 border-[#5c6a9e25]"
            }`}>
            <h1 className="text-2xl font-bold mb-2">{plan.title}</h1>
            <p className={`text-[#F8F9FA] mb-4 ${plan.title === "Professional" && "!text-[#101010]"}`}>{plan.description}</p>
            <p className="">
              <span className="text-5xl font-bold">{!isChecked ? plan.priceMonthly : plan.priceYearly}</span>/ {!isChecked ? "Monthly" : "Yearly"}
            </p>
            <button
              className={`p-4 w-full max-w-sm rounded-xl space-x-3 flex items-center justify-center ${
                plan.title === "Professional" ? "border-gradient gradient-border" : "button-gradient-sm"
              }`}>
              <span className="text-white font-semibold">Subscribe now</span>
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
        </Motion>
      ))}
    </div>
  );
};

export default PriceCards;
