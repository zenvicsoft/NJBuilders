import CommonTable from "@/components/CommonTable";
import Table from "@/components/Table";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Table />
      <CommonTable
        title="Common Table"
        tableHeader={[
          { key: "name", label: "User" },
          { key: "email", label: "Email" },
        ]}
        tableData={[
          { id: 1, uuid: "1", name: "Mark", email: "mark@example.com" },
          { id: 2, uuid: "2", name: "Jacob", email: "jacob@example.com" },
        ]}
        enableView
        enableEdit
        enableDelete
        enableDownload
        enableInvoice
        baseURL="/user"
        onDelete={(row) => console.log(row)}
      />
    </div>
  );
};

export default Dashboard;
