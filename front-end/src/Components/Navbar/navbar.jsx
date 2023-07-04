import  {useState} from "react";
import "./Navbar.css";
import { menuIcon, closeIcon } from "../../assets";

const navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">Vibe</span>
        </a>

        <ul>
          <li>
            <a href="#topics">Course Details</a>
          </li>

          <li>
            <a href="#info">About</a>
          </li>

          <li>
            <a href="#blog">Blog</a>
          </li>

          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>

        <div onClick={() => setIsActive(true)} className="menu-icon">
          <img src={menuIcon} alt="" />
        </div>
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
        <div onClick={() => setIsActive(false)} className="close-icon">
          <img src={closeIcon} alt="" />
        </div>

        <ul className="menu-items">
          <li>
            <a href="#topics" onClick={() => setIsActive(false)}>
              Course Details
            </a>
          </li>

          <li>
            <a href="#info" onClick={() => setIsActive(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#blog" onClick={() => setIsActive(false)}>
              Blog
            </a>
          </li>

          <li>
            <a href="#testimonials" onClick={() => setIsActive(false)}>
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default navbar;