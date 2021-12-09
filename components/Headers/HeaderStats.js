import useSWR from 'swr'
import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

const data = {
  data: [
    {
      classtype: "소프트 1",
      grade: "1",
      class: "1",
      stuno: "20",
    },
    {
      classtype: "소프트 2",
      grade: "1",
      class: "2",
      stuno: "20",
    },
    {
      classtype: "사물 3",
      grade: "1",
      class: "3",
      stuno: "20",
    },
    {
      classtype: "게임 4",
      grade: "1",
      class: "4",
      stuno: "20",
    },
  ]
}

export default function HeaderStats() {
  // const { data, error } = useSWR('강현이가 애들 리스트 불러오는 api만들꺼임 ㅇㅇ');
  // if (!data) return <div>로딩 페이지 너가 만들어</div>
  // if (error) return <div>오류 페이지 너가 만들어</div>

  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-1 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              {
                data.data.map((v, i) => (
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4" key={i}>
                    <CardStats
                      statClasstype={v.classtype}
                      statGrade={v.grade}
                      statClass={v.class}
                      statStuno={v.stuno}
                    />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
