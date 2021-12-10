import React from "react";

export default function Navbar({ username }) {
  const login = () => {
    fetch("https://portfolio.gbsw.hs.kr:25565/login").then((response) =>
      response.json().then(x=> window.location = x.url)
    );
  };
  
  const logout = () => {
    fetch("https://portfolio.gbsw.hs.kr:25565/logout").then((response) =>
      console.log("현아 사랑해♡")
    );
  };

  const userid="";

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            포트폴리오
          </a>
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex text-white text-sm">
            <div onClick={(e) => {userid ? logout() : login();}}>
              { userid ? userid + " " + username : "로그인"}
            </div>
            
          </ul>
        </div>
      </nav>
    </>
  );
}
