"use client"
import { useEffect, useState } from "react";
import DashboardPage from "@/components/DashboardPage" ; 
import axios from "axios";
import { useRouter } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBar from "@/components/SideBar";


export interface UserData {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const URL = "https://jsonplaceholder.typicode.com/posts";

 async function getAllData() {
  try {
    const response = await axios.get(URL);

    if(!response){
      throw new Error("Failed to fetch Data !");
    }
    return response.data ;    
    
  } catch (error) {
    console.error("Error While Fetching Data:", error);
    return [];
  }
}





const DashBoard = () => {
  const [allData, setAllData] = useState<UserData[]>([]);
  

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllData();
      setAllData(data);
    };
    fetchData();
  }, []);

  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

 
  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");

    if (!token) {
      router.push("/login");  
    } else {
      setIsAuthorized(true);  
    }
  }, [router]);

  if (!isAuthorized) {
    return <p>Redirecting...</p>;
  }

  return (
    <>
    {
      isAuthorized &&

      <SidebarProvider className="dark">
       <SideBar/>
       <main >
      <SidebarTrigger />
      <DashboardPage initialData={allData} />
       </main>
    </SidebarProvider>
    }
     
    </>
  );
};
export default DashBoard
