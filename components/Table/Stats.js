import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default function Stats({
  statClasstype,
  statGrade,
  statClass,
  statStuno,
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                {statClasstype}
              </h5>
              <span className="font-semibold text-xl text-blueGray-700">
              {statGrade + "학년 " + statClass + "반"}
              </span>
            </div>
            <div className="relative rounded-full w-auto ml-4 flex-initial text-indigo-500 hover:bg-indigo-500 hover:text-white">
              <Link href={"/" + statGrade + "/" + statClass}>
                <div
                  className={
                    "p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full focus:outline-none "
                  }
                >
                  <i className={"fas fa-angle-right"}></i>
                </div>
              </Link>
              
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4">
            <span className={"text-indigo-500 mr-2"}>
              {"학생 "}
              <i
                className={"fas fa-angle-right"}
              ></i>
            </span>
            <span className="whitespace-nowrap">{statStuno + "명"}</span>
          </p>
        </div>
      </div>
    </>
  );
}

Stats.defaultProps = {
  classtype: "소프트 1",
  grade: "1",
  class: "1",
  stuno: "20",
};

Stats.propTypes = {
  statClasstype: PropTypes.string,
  statGrade: PropTypes.string,
  statClass: PropTypes.string,
  statStuno: PropTypes.string,
};
