import useSWR from 'swr'
import React from "react";
import PropTypes from "prop-types";
import { createPopper } from "@popperjs/core";

// components

// import TableDropdown from "components/_Dropdowns/TableDropdown.js";
// import { data } from "autoprefixer";

const data = {
  data: [
    {
      stuid: "1105",
      stuname: "김강현",
      stuurl: "https://marred-algebra-69b.notion.site/d5f8561a0536455d804d025786b8775c",
    },
    {
      stuid: "1113",
      stuname: "윤서준",
      stuurl: "https://marred-algebra-69b.notion.site/d5f8561a0536455d804d025786b8775c",
    },
  ]
}

export default function CardTable2({ color }) {
  const userid = "1113";
  const username = "윤서준";
  const userurl = "https://marred-algebra-69b.notion.site/d5f8561a0536455d804d025786b8775c";
  // const { data, error } = useSWR('강현이가 애들 리스트 불러오는 api만들꺼임 ㅇㅇ');
  // if (!data) return <div>로딩 페이지 너가 만들어</div>
  // if (error) return <div>오류 페이지 너가 만들어</div>

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
  const [chgbtn, setchgbtn] = React.useState(1);
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-md " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                포트폴리오
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  <span className={"ml-3"}>
                    이름
                  </span>
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  링크
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    { userid + " " + username }
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 w-4/6">
                  <a href={ userurl } className={"w-full p-2 " + (chgbtn === 1 ? "hidden" : "")} target="_blank">
                    { userurl }
                  </a>
                  <input className={"text-left w-full focus:outline-none focus:border-indigo-500 border-b border-gray-400 h-full p-2 " + (chgbtn === 0 ? "hidden" : "")} defaultValue={ userurl } spellCheck={false} placeholder="포트폴리오 주소를 입력해주세요" />
                
                </td>
                <td className={"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right "}>
                  {/* <TableDropdown chgbtn="1" /> */}
                  <div>
                    <a
                      className="text-blueGray-500 py-1 px-3"
                      href="#pablo"
                      ref={btnDropdownRef}
                      onClick={(e) => {
                        e.preventDefault();
                        dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                        chgbtn ? setchgbtn(0) : console.log("hello");
                        console.log(chgbtn);
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
                        "bg-white text-base z-50 float-left list-none text-left rounded shadow-lg min-w-42 " 
                        + (chgbtn == 1 ? "hidden" : "")
                      }
                    >
                      <a
                        href="#pablo"
                        className={
                          "text-sm py-2 px-6 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        }
                        onClick={(e) => {e.preventDefault(); console.log(chgbtn); setchgbtn(chgbtn?0:1)}}
                      >
                        url
                      </a>
                      <a
                        href="#pablo"
                        className={
                          "text-sm py-2 px-6 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 border-t"
                        }
                        onClick={(e) => {e.preventDefault(); console.log(chgbtn); setchgbtn(chgbtn?0:1)}}
                      >
                        file
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable2.defaultProps = {
  color: "light",
};

CardTable2.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
