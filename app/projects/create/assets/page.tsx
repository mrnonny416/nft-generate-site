"use client";

import React, { useState } from "react";
import InsertAssetPage from "@/src/insert-asset/insert.asset.page";
import InsertAssetItemsPage from "@/src/insert-asset/insert.asset.items.page";

export default function InsertAsset() {
  const [chkTypePage, setChkTypePage] = useState<boolean>(true);
  return (
    <div className="flex flex-row justify-center bg-black">
      {chkTypePage?<InsertAssetPage typePageInsertAsset={()=>setChkTypePage(false)} />:<InsertAssetItemsPage/>}
    </div>
  );
}
