import CommonTable from "@/components/CommonTable";
import Table from "@/components/Table";
import React from "react";

const SiteList = () => {
  return (
    <div>
      <h1>SiteList</h1>
      <CommonTable
        title="Common Table"
        tableHeader={[
          { key: "id", label: "S.no" },
          { key: "name", label: "Name" },
          { key: "amount", label: "Amount" },
          { key: "status", label: "Status" },
        ]}
        tableData={[
          { id: 1, uuid: "1", name: "Mark", amount: "1000", status: "pending" },
          {
            id: 2,
            uuid: "2",
            name: "Jacob",
            amount: "2000",
            status: "complete",
          },
        ]}
        enableView
        enableEdit
        enableDelete
       // enableDownload
       // enableInvoice
        baseURL="/user"
        onDelete={(row) => console.log(row)}
      />
    </div>
  );
};

export default SiteList;
