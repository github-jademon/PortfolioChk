import useSWR from 'swr'
import React from "react";

import Stats from "components/Table/Stats.js";

// const data= [
//   {class: "1", classtype: "소프트1", stuno:"20"},
//   {class: "2", classtype: "소프트1", stuno:"20"},
//   {class: "3", classtype: "소프트1", stuno:"20"},
//   {class: "4", classtype: "소프트1", stuno:"20"},
// ]

export default function HeaderStats({ gradeid, data }) {
  // const { data, error } = useSWR('강현이가 애들 리스트 불러오는 api만들꺼임 ㅇㅇ');
  // if (!data) return <div>로딩 페이지 너가 만들어</div>
  // if (error) return <div>오류 페이지 너가 만들어</div>

  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-20 pb-1 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div>
              <div className="flex flex-wrap md:py-3">
                {data.map((v, i) => (
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <Stats key={i}
                      statClasstype={v.classtype}
                      statGrade={gradeid}
                      statClass={v.class}
                      statStuno={v.stuno}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
