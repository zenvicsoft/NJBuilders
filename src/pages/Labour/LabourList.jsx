import CommonTable from "@/components/CommonTable";
import Table from "@/components/Table";
import React from "react";

const LabourList = () => {
  return (
    <div>
      <h1>LabourList</h1>
      <CommonTable
        title="Common Table"
        tableHeader={[
          { key: "id", label: "S.no" },
          { key: "name", label: "Name" },
          { key: "phonenumber", label: "Phonenumber" },
          { key: "active", label: "Action" },
        ]}
        tableData={[
          {
            id: 1,
            uuid: "1",
            name: "Mark",
            phonenumber: "6543656787",
            active: "Online",
          },
          {
            id: 2,
            uuid: "2",
            name: "Jacob",
            phonenumber: "8765443432",
            active: "Offline",
          },
        ]}
        enableView
        enableEdit
        enableDelete
        //enableDownload
        //enableInvoice
        baseURL="/user"
        onDelete={(row) => console.log(row)}
      />
    </div>
  );
};

export default LabourList;
