// import useSWR from 'swr'
import React from "react";
import PropTypes from "prop-types";

const userid = "1113";
const username = "윤서준";
let userurl = "http://me.xn--ccka9s.xn--q9jyb4c/";

export default function Table2({ color }) {
  
  // const { data, error } = useSWR('강현이가 애들 리스트 불러오는 api만들꺼임 ㅇㅇ');
  // if (!data) return <div>로딩 페이지 너가 만들어</div>
  // if (error) return <div>오류 페이지 너가 만들어</div>

  const setChgUrl = () => {
    const regex = /^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?/;
    userurl = document.querySelector('#urlchg').value;
    // if(!regUrlType(userurl)){
    if(!regex.test(userurl)){
      console.log(userurl);
      document.querySelector('#urlchg').focus();
      return 0;
    }
    else{
      // console.log(userurl);
      sendUrl();
      setUrl(false);
    }
  };

  const setChgFile = () => {
    const userfile = document.querySelector('[type=file]').value;
    // console.log(userfile);
    if(userfile !== "") {
      userurl = userfile;
      document.querySelector('#urlchg').value = "";
    }
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setChgUrl();
    }
  };

  const sendUrl = () => {
    console.log(userurl);
    setFile(false);
    alert("변경되었습니다.");
  };
  const [chgbtn, setchgbtn] = React.useState(0);

  const [showModal, setShowModal] = React.useState(false);

  const [url, setUrl] = React.useState(false);

  const [file, setFile] = React.useState(false);
  
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
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between px-5 py-3 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-lg font-semibold mt-1">
                      파일을 선택해주세요
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => { setShowModal(false); setFile(false); }}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <input type="file" id="file" />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end px-6 py-1 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-indigo-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => { setShowModal(false); setChgFile(); }}
                    >
                      확인
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
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
                  <div className="hover:text-indigo-500">
                    <a href={ userurl } download="" className={"w-full p-2 " + (url !== true ? "" : "hidden")} target="_blank" rel="noreferrer">
                      { userurl }
                    </a>
                  </div>
                  <input id="urlchg" type="url" className={"text-left w-full focus:outline-none focus:border-indigo-500 border-b border-gray-400 h-full p-2 " + (url === true ? "" : "hidden")} onKeyPress={(e) => {onKeyPress(e)}} defaultValue={ userurl } spellCheck={false} placeholder="주소를 입력해주세요" />
                
                </td>
                <td className={"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right "}>
                  {/* <TableDropdown chgbtn="1" /> */}
                  <div>
                    <a
                      className="text-blueGray-500 py-1 px-3"
                      href="#pablo"
                      onClick={(e) => {
                        e.preventDefault();
                        
                        url === true ? setChgUrl(true) : file === true ? sendUrl(true) : chgbtn === 0 ? setchgbtn(1) : console.log(userurl);
                        console.log(chgbtn);
                      }}
                    >
                      변경
                    </a>
                    <div
                      className={
                        "bg-white text-base z-50 float-left list-none text-left rounded shadow-lg min-w-42 absolute " 
                        + (chgbtn !== 1 ? "hidden" : "block")
                      }
                      style={{ top: "105px", right: "80px" }}
                    >
                      <a
                        href="#pablo"
                        className={
                          "text-sm py-2 px-6 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        }
                        onClick={(e) => {e.preventDefault(); setchgbtn(0); setUrl(true);}}
                      >
                        url
                      </a>
                      <a
                        href="#pablo"
                        className={
                          "text-sm py-2 px-6 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 border-t"
                        }
                        onClick={(e) => {e.preventDefault(); setchgbtn(0); setShowModal(true); setFile(true); }}
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

Table2.defaultProps = {
  color: "light",
};

Table2.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
