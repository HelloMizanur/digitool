import React from "react";

const WorkFlow = () => {
  return (
    <section className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-20 px-6 text-center   shadow-2xl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-lg md:text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="bg-white text-purple-700 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-all w-full sm:w-auto">
            Explore Products
          </button>
          <button className="bg-transparent text-white font-bold px-8 py-4 rounded-full text-lg border-2 border-white/50 hover:bg-white/10 transition-all w-full sm:w-auto">
            View Pricing
          </button>
        </div>

        <p className="text-sm md:text-base text-purple-200 font-medium">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default WorkFlow;
