import React from "react";
import { useRouter } from 'next/router'

import AdminNavbar from "components/Navbars/Navbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import Table from "pages/[gradeid]/[classid].js";
import Table2 from "components/Table/Table2.js";

const Index = () => {
// export default function Index() {
  const router = useRouter();
  const { classid } = router.query;
  let userid = "1113";
  let username = "윤서준";
  return (
    <>
      <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-100">
          <AdminNavbar userid={userid} username={username} />
          {/* Header */}
          <HeaderStats />
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap mt-7">
              <div className="w-full mb-12 px-4">
                <Table2 userid={userid} />
              </div>
              <div className="w-full mb-12 px-4">
                <Table userid={userid} classid={classid} />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Index;