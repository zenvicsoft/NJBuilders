import CommonTable from "@/components/CommonTable";
import Table from "@/components/Table";
import React from "react";

const AccountList = () => {
  return (
    <div>
      <h1>AccountList</h1>

      <CommonTable
        title="Account table"
        tableHeader={[
          { key: "id", label: "S.no" },
          { key: "date", label: "Date" },
          { key: "staffname", label: "StaffName" },
          { key: "site", label: "Site" },
          { key: "recived", label: "Recived" },
          { key: "balance", label: "Balance" },
          { key: "payment", label: "Payment" },
        ]}
        tableData={[
          {
            id: 1,
            uuid: "1",
            date: "20-01-2026",
            staffname: "Ram",
            site: "A",
            recived: "100",
            balance: "100",
            payment: "2000",
          },
          {
            id: 2,
            uuid: "2",
            date: "10-01-2026",
            staffname: "Arun",
            site: "B",
            recived: "100",
            balance: "300",
            payment: "2000",
          },
        ]}
        enableView
        enableEdit
        enableDelete
        //enableDownload
        //enableInvoice
        baseURL="/account"
        onDelete={(row) => console.log(row)}
      />
    </div>
  );
};

export default AccountList;
