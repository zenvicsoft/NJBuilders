import CommonTable from "@/components/CommonTable";
import React from "react";

const StaffList = () => {
  return (
    <div>
      <h1>StaffList</h1>

      <CommonTable
        title="Common Table"
        tableHeader={[
          { key: "id", label: "S.no" },
          { key: "name", label: "Name" },
          { key: "username", label: "Username" },
          { key: "phonenumber", label: "Phonenumber" },
          { key: "active", label: "Active" },
        ]}
        tableData={[
          {
            id: 1,
            uuid: "1",
            name: "Mark",
            username: "Antony",
            phonenumber: "765342143",
            active: "Offline",
          },
          {
            id: 2,
            uuid: "2",
            name: "Jacob",
            username: "Dass",
            phonenumber: "9887654321",
            active: "Online",
          },
        ]}
        enableView
        enableEdit
        enableDelete
        // enableDownload
        //  enableInvoice
        baseURL="/staff"
        onDelete={(row) => console.log(row)}
      />
    </div>
  );
};

export default StaffList;
