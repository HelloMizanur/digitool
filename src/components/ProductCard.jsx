import React from "react";

const ProductCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-sm ">
      <div className="card-body">
        <div className=" flex justify-end">
          <span className="badge badge-xs badge-warning">Most Popular</span>
        </div>
        {/* <img src={} alt="Img" /> */}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold">AI Writing Pro</h2>
          <p className="text-start">
            Generate high-quality content, blogs, and marketing copy in seconds
            with advanced AI.
          </p>
        </div>
        <span className="text-xl text-start">
          <span>$29</span>/mo
        </span>
        <ul className="mt-6 flex flex-col gap-2 text-xs items-start">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>High-resolution image generation</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Customizable style templates</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Batch processing capabilities</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>AI-driven image enhancements</span>
          </li>
        </ul>
        <div className="mt-6">
          <button className="btn text-xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-2xl text-white border-none btn-block">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
