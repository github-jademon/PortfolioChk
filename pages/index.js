import React from "react";

import Table from "components/Table/Table.js";
import Table2 from "components/Table/Table2.js";

import Admin from "layouts/Admin.js";

export default function Tables({ userid, classname }) {
  return (
    <>
      <div className="flex flex-wrap mt-7">
        <div className="w-full mb-12 px-4">
          <Table2 userid={userid} />
        </div>
        <div className="w-full mb-12 px-4">
          <Table userid={userid} classname={classname} />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;