import { useEffect, useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNavbarOpen(false);
      }
    };

    // Set the initial state
    handleResize();
    console.log(navbarOpen);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar flex flex-row justify-between items-center w-full px-8 sm:px-10 md:px-12 pt-[36px]">
      <div className="logo-tab relative z-10">
        <h2 className="text-[25px] md:text-[29px] font-popins font-bold text-left text-[#FBF9ED]">
          LOGO
        </h2>
      </div>
      <div className="options-tab flex flex-row gap-[34px] items-center">
        <div
          className={`navigations justify-center md:justify-normal items-center md:items-baseline ${
            navbarOpen
              ? "flex absolute left-0 top-0 bg-blue-500 w-full h-full flex-col"
              : "md:flex hidden flex-row"
          } gap-10`}
        >
          <p className="text-[14px] md:text-[15px] text-[#FFFFFF] font-inter cursor-pointer hover:opacity-60 transition-all">
            О Проекте
          </p>
          <p className="text-[14px] md:text-[15px] text-[#FFFFFF] font-inter cursor-pointer hover:opacity-60 transition-all">
            Наша команда
          </p>
          <button className="bg-[#fff] block sm:hidden rounded-[52px] font-inter py-[15px] px-[25px] text-[14px] md:text-[15px] text-[#6F0133] hover:text-[#fff] hover:bg-[#6F0133] transition-all font-[500]">
            Зарегестрироватся
          </button>
        </div>
        <div className="lkm relative">
          <p className="text-[14px] md:text-[15px] text-[#FFFFFF] font-inter cursor-pointer hover:opacity-60 transition-all">
            Войти
          </p>
          <div className="line absolute h-[1px] w-full bg-[#FFFFFF] hover:opacity-60 transition-all"></div>
        </div>
        <div className="bn hidden sm:block relative">
          <button className="bg-[#fff] rounded-[52px] font-inter py-[15px] px-[25px] text-[14px] md:text-[15px] text-[#6F0133] hover:text-[#fff] hover:bg-[#6F0133] transition-all font-[500]">
            Зарегестрироватся
          </button>
        </div>
        <div
          className="mneu block md:hidden cursor-pointer relative"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? (
            <IoMdClose className="text-[25px] text-[#fff]" />
          ) : (
            <IoIosMenu className="text-[25px] text-[#fff]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
