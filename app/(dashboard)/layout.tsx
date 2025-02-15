"use client";
import { useEffect, useState } from "react";
import MobileSidebar from "./_components/mobile-sidebar";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import PopUp from "./_components/pop-up";
import { useAuth } from "@clerk/nextjs";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      const hasAcceptedTerms = localStorage.getItem(`acceptedTerms_${userId}`);
      if (!hasAcceptedTerms) {
        setShowPopUp(true);
      }
    }
  }, [userId]);

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="h-screen">
      <div className="h-[80px] fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-64 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="pt-[80px] h-full md:pl-64">{children}</main>
      {showPopUp && userId && (
        <PopUp onClose={handleClosePopUp} userId={userId} />
      )}
    </div>
  );
};

export default DashboardLayout;
