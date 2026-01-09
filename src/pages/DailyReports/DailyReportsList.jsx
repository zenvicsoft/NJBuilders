import CommonTable from "@/components/CommonTable";
import React from "react";

const DailyReportsList = () => {
  return (
    <div>
      <h2>Daily Report</h2>
      <CommonTable
        tableHeader={[
          { key: "uuid", label: "ID" },
          { key: "date", label: "Date" },
          { key: "site", label: "Site" },
          { key: "labor", label: "Labour Count" },
          { key: "shift", label: "Shifting" },
          { key: "tools", label: "Tools" },
        ]}
        tableData={[
          {"uuid":1, "date":"01-01-2026", "site":"ABCD Site", "labor": "12", "shift":"YEs", "tools":"NO"},
          {"uuid":2, "date":"01-01-2026", "site":"ABCD Site", "labor": "12", "shift":"YEs", "tools":"NO"},
          {"uuid":3, "date":"01-01-2026", "site":"ABCD Site", "labor": "12", "shift":"YEs", "tools":"NO"},
          {"uuid":4, "date":"01-01-2026", "site":"ABCD Site", "labor": "12", "shift":"YEs", "tools":"NO"},
          {"uuid":5, "date":"01-01-2026", "site":"ABCD Site", "labor": "12", "shift":"YEs", "tools":"NO"},
          {"uuid":6, "date":"01-01-2026", "site":"ABCD Site", "labor": "12", "shift":"YEs", "tools":"NO"}
        ]}
        title="Daily Reports"
        enableEdit
        enableView
        enableDelete
        baseURL="/daily-report"
      />
    </div>
  );
};

export default DailyReportsList;
