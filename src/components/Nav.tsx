import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-2 max-w-11/12 mx-auto cursor-pointer sticky top-0">
        <img src={Logo} alt="" />
        <ul className="flex justify-between gap-3 text-xl font-semibold">
          <li className="brand-gradient bg-clip-text text-transparent">Home</li>
          <li>Technologies</li>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          <button className="text-sm font-semibold bg-gray-100 rounded-2xl px-4 py-2 cursor-pointer">
            Sign in
          </button>
          <button className="brand-gradient text-white rounded-2xl px-4 py-2  text-sm font-semibold cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
