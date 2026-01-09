import CommonTable from "@/components/CommonTable";
import Table from "@/components/Table";
import React from "react";

const SupplierList = () => {
  return (
    <div>
      <h1>Supplier List</h1>
     
      <CommonTable
        title="Supplier Table"
        tableHeader={[
              {key: "id", label: "S.No"},
          { key: "Date", label: "Date" },
          { key: "Bill", label: "Bill" ,},
          { key: "Site", label: "Site" ,},
          { key: "Material", label: "Material" ,},
          { key: "Quantity", label: "Quantity" ,},
        ]}
        tableData={[
          { id: 1, uuid: "1",  Date: "01-01-2024", Bill: "B001", Site: "Site A", Material: "Cement", Quantity: "100" },
          { id: 2, uuid: "2",  Date: "02-01-2024", Bill: "B002", Site: "Site B", Material: "Bricks", Quantity: "200" },
        ]}
        enableView
        enableEdit
        enableDelete
        
        baseURL="/Supplier"
        onDelete={(row) => console.log(row)}
      />
    </div>
  );
};

export default SupplierList;
