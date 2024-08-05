import { FaRegUserCircle } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const ResponsiveMenu = ({ showMenu }) => {
  return (
    <>
      <div
        className={`fixed top-0 z-50 ${
          showMenu ? "left-0 " : "-left-full "
        } h-screen w-[75%] bg-white dark:bg-slate-950 dark:text-white z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between md:hidden   `}
      >
        {/* navbar section  */}
        <div>
          <div>
            {/* user section */}
            <div>
              <FaRegUserCircle size={50} />
              <div>
                <h1 className="text-xl font-semibold">Imad johar</h1>
                <h1 className="text-sm text-slate-500">+212 656629707</h1>
              </div>
            </div>
            {/* menu section  */}
            <nav className="mt-12 mb-5">
              <ul className="space-y-6 text-lg font-semibold">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* navbar footer  section  */}
        <div>
          <p className="">@2024 All Right Reserved</p>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
