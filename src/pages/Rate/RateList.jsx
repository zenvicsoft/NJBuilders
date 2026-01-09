import CommonTable from "@/components/CommonTable";
import Table from "@/components/Table";
import React from "react";
import { Rate } from "rsuite";

const RateList = () => {
  return (
    <div>
      <h1>Rate List</h1>

      <CommonTable
        title="Rate Table"
        tableHeader={[
                {key: "id", label: "S.No"},
          { key: "Date", label: "Date" },
          { key: "Material", label: "Material" },
          { key: "Rate", label: "Rate" },
        ]}
        tableData={[
          { id: 1, uuid: "1", Date: "21-01-2024", Material: "Steel", Rate: 50 },
                    { id: 2, uuid: "2", Date: "09-01-2024", Material: "Concrete", Rate: 100 },
                    ]}
        enableView
        enableEdit
        enableDelete
       
        baseURL="/user"
        onDelete={(row) => console.log(row)}
      />
    </div>
  );
};

export default RateList;
