import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/dashbord/DashSidebar";
import DashProfile from "../components/dashbord/DashProfile";
import DashPosts from "../components/dashbord/DashPosts";
import DashUsers from "../components/dashbord/DashUsers";
import DashComments from "../components/DashComments";

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
      <div className="w-full md:w-64">
        <DashSidebar />
      </div>
      <div className="w-full">
        {tab === "profile" && <DashProfile />}
        {tab === "posts" && <DashPosts />}
        {tab === "users" && <DashUsers />}
        {tab === "comments" && <DashComments />}
      </div>
    </div>
  );
};

export default Dashbord;
