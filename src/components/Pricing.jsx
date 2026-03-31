import React from "react";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started",
      price: "0",
      features: [
        "Access to 10 free tools",
        "Basic templates",
        "Community support",
        "1 project per month",
      ],
      buttonText: "Get Started Free",
      isPopular: false,
    },
    {
      name: "Pro",
      description: "Best for professionals",
      price: "29",
      features: [
        "Access to all premium tools",
        "Unlimited templates",
        "Priority support",
        "Unlimited projects",
        "Cloud sync",
        "Advanced analytics",
      ],
      buttonText: "Start Pro Trial",
      isPopular: true,
    },
    {
      name: "Enterprise",
      description: "For teams and businesses",
      price: "99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantee",
        "Custom branding",
      ],
      buttonText: "Contact Sales",
      isPopular: false,
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.isPopular
                  ? "bg-linear-to-b from-[#4f39f6] to-[#9514fa] text-white scale-105 shadow-2xl z-10 py-12"
                  : "bg-gray-50 text-gray-900 border border-gray-100 hover:shadow-lg"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`${plan.isPopular ? "text-purple-100" : "text-gray-500"}`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold">${plan.price}</span>
                <span
                  className={`${plan.isPopular ? "text-purple-100" : "text-gray-500"} ml-2`}
                >
                  /Month
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check
                      className={`w-5 h-5 ${plan.isPopular ? "text-white" : "text-green-500"}`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  plan.isPopular
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white hover:opacity-90"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
