import CommonTable from "@/components/CommonTable";
import React from "react";

const PurchaseList = () => {
  return (
    <div>
      <h1>Purchase List</h1>

      <CommonTable
        title="Purchase Table"
        tableHeader={[
            {key: "id", label: "S.No"},
          { key: "Date", label: "Date" },
          { key: "Name", label: "Name" },
          { key: "Material", label: "Material" },
          { key: "Amount", label: "Amount" },
          { key: "store", label: "store"},
        ]}
        tableData={[
          { id: 1, uuid: "1", Date: "01-01-2024", Name: "Mark", Material: "Cement", Amount: "100", store: "Store A" },
          { id: 2, uuid: "2", Date: "02-01-2024", Name: "Jacob", Material: "Bricks", Amount: "200", store: "Store B" },

        ]}
        enableView
        enableEdit
        enableDelete
       
        baseURL="/purchase"
        onDelete={(row) => console.log(row)}
      />
    </div>
  );  
};

export default PurchaseList;
