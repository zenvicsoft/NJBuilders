import CommonTable from "@/components/CommonTable";
import Table from "@/components/Table";
import React from "react";

const ToolList = () => {
  return (
    <div>
      <h1>Tool List</h1>
    
      <CommonTable
        title="Tool List Table"
        tableHeader={[
              {key: "id", label: "S.No"},
          { key: "name", label: "Name" },
          { key: "Store", label: "StoreName" },
          { key: "Count", label: "Count" },
          { key: "Site", label: "Site"}
        ]}
        tableData={[
          { id: 1, uuid: "1", name: "Mark", Store: "Store A", Count: 5, Site: "Site A" },
          { id: 2, uuid: "2", name: "Jacob", Store: "Store B", Count: 3, Site: "Site B" },
        ]}
        enableView
        enableEdit
        enableDelete
       
        baseURL="/tools"
        onDelete={(row) => console.log(row)}
      />
    </div>
  );
};

export default ToolList;
