import DashboardPage from "@/src/dashboard/dashvoard.page";
import DashboardItemsPage from "@/src/dashboard/dashvoard.items.page";

export default function Dashboard() {
  return (
    <div className="flex flex-row justify-center bg-black">
      {/* <DashboardPage /> */}
      <DashboardItemsPage />
    </div>
  );
}
