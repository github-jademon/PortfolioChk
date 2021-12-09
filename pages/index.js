import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import CardTable2 from "components/Cards/CardTable2.js";

// layout for page

import Admin from "layouts/Admin.js";

// export default function userid() {
//   userid = layout.render(userid)
// }

export default function Tables({ userid }) {
  return (
    <>
      <div className="flex flex-wrap mt-7">
        <div className="w-full mb-12 px-4">
          <CardTable2 userid={userid} />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable userid={userid} />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

Tables.layout = Admin;