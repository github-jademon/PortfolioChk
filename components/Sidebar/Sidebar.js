import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// const data = {
//   data: [
//     {
//       grade: "1",
//       data: [
//         {class: "1", classtype: "소프트1", stuno:"20"},
//         {class: "2", classtype: "소프트2", stuno:"20"},
//         {class: "3", classtype: "사물인터넷3", stuno:"20"},
//         {class: "4", classtype: "게임4", stuno:"20"},
//       ]
//     },
//     {
//       grade: "2",
//       data: [
//         {class: "1", classtype: "소프트1", stuno:"20"},
//         {class: "2", classtype: "소프트2", stuno:"20"},
//         {class: "3", classtype: "사물인터넷3", stuno:"20"},
//         {class: "4", classtype: "게임4", stuno:"20"},
//       ]
//     },
//     {
//       grade: "3",
//       data: [
//         {class: "1", classtype: "소프트1", stuno:"20"},
//         {class: "2", classtype: "소프트2", stuno:"20"},
//         {class: "3", classtype: "사물인터넷3", stuno:"20"},
//         {class: "4", classtype: "게임4", stuno:"20"},
//       ]
//     },
//   ]
// }

export default function Sidebar({ data }) {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-1 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button className="md:hidden focus:outline-none leading-none" onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}>
            <i className="fas fa-bars"></i>
          </button>

          <Link href="/1/1">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              포트폴리오
            </a>
          </Link>

          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            <div className="md:min-w-full md:hidden block mb-2 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/1/1">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      포트폴리오
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button className="focus:outline-none" onClick={() => setCollapseShow("hidden")}>
                    <i className="fas fa-times p-4"></i>
                  </button>
                </div>
              </div>
            </div>

            <form className="">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-11 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {data.data.map((vv, ii) => (
              <div key={ii}>
                <hr className="my-4 md:min-w-full" />

                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                  {vv.grade + "학년"}
                </h6>

                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                  {vv.data.map((v, i) => (
                    <li className="items-center" key={i}>
                      <Link href={"/" + vv.grade + "/" + v.class}>
                        <a
                          href="#pablo"
                          className={
                            "text-xs uppercase py-3 font-bold block " +
                            (router.asPath === ("/" + vv.grade + "/" + v.class)
                              ? "text-indigo-500 hover:text-indigo-700"
                              : "text-blueGray-700 hover:text-blueGray-500")
                          }
                        >
                          <i
                            className={
                              "fas fa-table mr-2 text-sm " +
                              (router.asPath === ("/" + vv.grade + "/" + v.class)
                                ? "opacity-75"
                                : "text-blueGray-300")
                            }
                          ></i>{" "}
                          {v.class + "반"}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
