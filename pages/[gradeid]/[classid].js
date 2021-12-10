import React from "react";
import PropTypes from "prop-types";

const data = {
  data: [
    {
      stuid: "1105",
      stuname: "김강현",
      stuurl: "https://portfolio-f2bd1a.webflow.io/",
    },
    {
      stuid: "1113",
      stuname: "윤서준",
      stuurl: "http://me.xn--ccka9s.xn--q9jyb4c/",
    },
    {
      stuid: "1117",
      stuname: "조수빈",
      stuurl: "https://marred-algebra-69b.notion.site/d5f8561a0536455d804d025786b8775c",
    },
  ]
}

export default function Table(props) {
  // const { data, error } = useSWR('강현이가 애들 리스트 불러오는 api만들꺼임 ㅇㅇ');
  // if (!data) return <div>로딩 페이지 너가 만들어</div>
  // if (error) return <div>오류 페이지 너가 만들어</div>

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (props.color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-md " +
                  (props.color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                {props.gradeid + "학년 " + props.classid + "반"}
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
                    (props.color === "light"
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
                    (props.color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  링크
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (props.color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
            {data.data.map((v, i) => (
              <tr key={i}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(props.color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                    { v.stuid + " " + v.stuname }
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 w-5/7 ">
                  <div className="hover:text-indigo-500">
                    <a href={ v.stuurl } className={"w-full p-2 "} target="_blank" rel="noreferrer">
                      { v.stuurl }
                    </a>
                  </div>
                  
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

Table.defaultProps = {
  color: "light",
};

Table.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
