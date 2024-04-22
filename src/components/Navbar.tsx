const Navbar = () => {
  return (
    <nav className="bg-green-400 text-white">
      <div className="flex items-center justify-around top-0 z-30 w-full py-6 px-10">
        <h1 className="logo text-3xl">FitFusion</h1>
        <div className="flex items-center gap-6 ">
          <div>Home</div>
          <div>Benefits</div>
          <div>Our Classes</div>
          <div>Contact Us</div>
        </div>
        <div className="flex items-center gap-6">
          <div>Sign In</div>
          <button className="bg-white text-black py-1 px-3 rounded-[5px] cursor-pointer">
            Become a Member
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
