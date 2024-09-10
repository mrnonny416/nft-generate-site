"use client";

import React, { useEffect, useState } from "react";
import DashboardPage from "@/src/dashboard/dashboard.page";
import DashboardItemsPage from "@/src/dashboard/dashboard.items.page";

export default function Dashboard(params: any) {
    const value = params.searchParams.item;
    const [chkTypePage, setChkTypePage] = useState<boolean>(true);

    console.log("value", value);

    useEffect(() => {
        if (value) {
            setChkTypePage(false);
        }
    }, [value]);

    return (
        <div className="flex flex-row justify-center bg-white">
            {chkTypePage ? <DashboardPage typePageDashboard={() => setChkTypePage(false)} /> : <DashboardItemsPage />}
        </div>
    );
}
