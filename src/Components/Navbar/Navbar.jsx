import { useState } from "react";
import Linkss from "../Linkss/Linkss";
import { AiOutlineBars, AiTwotoneCloseSquare } from "react-icons/ai";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "Not Found" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-amber-400 p-8">
      {/* <h2>My nav</h2> */}
      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="text-3xl md"
      >
        {open === true ? (
          <AiTwotoneCloseSquare></AiTwotoneCloseSquare>
        ) : (
          <AiOutlineBars></AiOutlineBars>
        )}
      </div>

      <ul className={`md:flex gap-8 text-2xl absolute md:static bg-amber-600 duration-1000 
        ${open ? 'top-16': '-top-44'}`}>
        {routes.map((routeli) => {
          return <Linkss key={routeli.id} routeli={routeli}></Linkss>;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
