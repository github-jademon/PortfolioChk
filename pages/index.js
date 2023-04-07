import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import AdminNavbar from "components/Headers/Navbars/Navbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/Stats.js";
import Table from "pages/[gradeid]/[classid].js";
import Table2 from "components/Table/Table2.js";

const data = {
  data: [
    {
      grade: "1",
      data: [
        { class: "1", classtype: "소프트1", stuno: "20" },
        { class: "2", classtype: "소프트2", stuno: "20" },
        { class: "3", classtype: "인공지능3", stuno: "20" },
        { class: "4", classtype: "게임4", stuno: "20" },
      ],
    },
    {
      grade: "2",
      data: [
        { class: "1", classtype: "소프트1", stuno: "20" },
        { class: "2", classtype: "소프트2", stuno: "20" },
        { class: "3", classtype: "사물인터넷3", stuno: "20" },
        { class: "4", classtype: "게임4", stuno: "20" },
      ],
    },
    {
      grade: "3",
      data: [{ class: "1", classtype: "경영회계1", stuno: "20" }],
    },
  ],
};

const userid = "1113";
const username = "윤서준";

const Index = () => {
  const router = useRouter();
  const [check, setCheck] = useState(false);
  const [classid, setClassid] = useState(router.query.classid);
  const [gradeid, setGradeid] = useState(router.query.gradeid);

  useEffect(() => {
    if (!router.isReady) return;
    console.log(classid);

    if (
      classid !== "1" &&
      classid !== "2" &&
      classid !== "3" &&
      gradeid !== "1" &&
      gradeid !== "2" &&
      gradeid !== "3" &&
      gradeid !== "4"
    ) {
      setClassid("1");
      setGradeid("1");
    }
    setCheck(true);
  }, [router.query]);

  const gradechk1 = data.data[Object.keys(data.data)[0]].grade;
  const datachk1 = data.data[Object.keys(data.data)[0]].data;
  const gradechk2 = data.data[Object.keys(data.data)[1]].grade;
  const datachk2 = data.data[Object.keys(data.data)[1]].data;
  const datachk3 = data.data[Object.keys(data.data)[2]].data;
  return !check ? (
    <div></div>
  ) : (
    <>
      <Sidebar data={data} />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar userid={userid} username={username} />
        {/* Header */}
        <HeaderStats
          gradeid={gradeid}
          data={
            gradechk1 === gradeid
              ? datachk1
              : gradechk2 === gradeid
              ? datachk2
              : datachk3
          }
        />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap mt-7">
            <div className="w-full mb-12 px-4">
              <Table2 userid={userid} />
            </div>
            <div className="w-full mb-12 px-4">
              <Table userid={userid} classid={classid} gradeid={gradeid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
