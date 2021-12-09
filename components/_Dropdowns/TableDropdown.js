import React from "react";
import { createPopper } from "@popperjs/core";

  const NotificationDropdown = ({ chgbtn }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  const setchgbtn = () => {
    chgbtn = chgbtn ? 0 : 1;
  };
  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
          
          // !chgbtn ? //변경 값 서버로 전송 
          // null : null;
        }}
      >
        변경
        {/* <i className="fas fa-ellipsis-v"></i> */}
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left list-none text-left rounded shadow-lg min-w-42" 
          + (!chgbtn === 1 ? "hidden" : "")
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-6 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => {e.preventDefault(); console.log(chgbtn)}}
        >
          url
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-6 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 border-t"
          }
          onClick={(e) => e.preventDefault()}
        >
          file
        </a>
      </div>
    </>
  );
};

export default NotificationDropdown;
