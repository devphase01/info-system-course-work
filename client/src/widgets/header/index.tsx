import { FcIdea } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/');
  return (
    <div className="h-[80px] px-[120px] py-[20px] bg-anti-flash">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[40px]">
          <div className="flex items-end gap-[12px] relative select-none cursor-pointer" onClick={handleNavigate}>
            <FcIdea className="text-[52px] rotate-[30deg] absolute left-[-20px]" />
            <h2 className="text-[24px] font-roboto-500 relative px-[8px]">
              Solve your business problem
            </h2>
          </div>

          <nav className="flex items-center gap-[16px]">
            <a href="#pricing">Pricing</a>
            <a href="#about-us">About Us</a>
            <a href="#features">Features</a>
          </nav>
        </div>

        <div className="flex items-center gap-[12px]">
          <Link to="/sign-in" className="px-[16px] py-[8px] text-[16px] font-roboto-500 border border-stale-blue text-stale-blue rounded-[4px]">
            Sign In
          </Link>

          <button className="px-[16px] py-[8px] text-[16px] font-roboto-500 text-white bg-stale-blue rounded-[4px]">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;