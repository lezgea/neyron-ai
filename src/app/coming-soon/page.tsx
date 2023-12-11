import Link from "next/link";
import React from "react";
import RightCircles from "../../components/RightCircles";
import Logo from "../../assets/images/logo.svg";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <div className="home-page">
      <div className="left">
        <div className="left-content">
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
          <h2>Lorem ipsum doloramet, conse adipiscing elit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.
          </p>
          <form>
            <div className="form-group">
              <label id="email">Lorem ipsum</label>
              <input type="email" id="email" placeholder="email@mail.com" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="right">
        <RightCircles />
        <h2>COMING SOON...</h2>
      </div>
    </div>
  );
};

export default ComingSoon;
