"use client";

import React, { useState } from "react";
import DashboardPage from "@/src/dashboard/dashvoard.page";
import DashboardItemsPage from "@/src/dashboard/dashvoard.items.page";

export default function Dashboard() {
  const [chkTypePage, setChkTypePage] = useState<boolean>(true);
  return (
    <div className="flex flex-row justify-center bg-black">
      {chkTypePage?<DashboardPage typePageDashboard={()=>setChkTypePage(false)} />:<DashboardItemsPage/>}
    </div>
  );
}
