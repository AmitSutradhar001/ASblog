import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/dashbord/DashSidebar";
import DashProfile from "../components/dashbord/DashProfile";

const Dashbord = () => {
  const [tab, setTab] = useState("");
  const location = useLocation();
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col gap-5 md:flex-row">
      <div className="">
        <DashSidebar />
      </div>
      <div className="">{tab === "profile" && <DashProfile />}</div>
    </div>
  );
};

export default Dashbord;
