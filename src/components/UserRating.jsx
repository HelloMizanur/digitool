const UserRating = () => {
  return (
    <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex flex-col md:flex-row justify-center items-center gap-20 py-10">
      <div className="flex flex-col">
        <span className="text-6xl font-bold text-white">50k+</span>
        <span className="text-gray-300 font-semibold text-xl">
          Active Users
        </span>
      </div>
      <div className="hidden md:block h-16 w-2 rounded-2xl bg-white"></div>
      <div className="flex flex-col">
        <span className="text-6xl font-bold text-white">500+</span>
        <span className="text-gray-300 font-semibold text-xl">
          Premium Tools
        </span>
      </div>
      <div className="hidden md:block h-16 w-2 rounded-2xl bg-white"></div>
      <div className="flex flex-col">
        <span className="text-6xl font-bold text-white">4.9</span>
        <span className="text-gray-300 font-semibold text-xl">Rating</span>
      </div>
    </div>
  );
};

export default UserRating;
