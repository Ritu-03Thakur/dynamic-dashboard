"use client";
import React, { useEffect ,  useState } from "react";
import { Button } from "./ui/button";
import { UserData } from "@/app/dashboard/page";
import UserTable from "./UserTable";
import { Input } from "./ui/input";


const SearchAndFilter = ({ allData }: { allData: UserData[] }) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(allData);


  useEffect(() => {
    const filterData = allData.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.body.toLowerCase().includes(search.toLowerCase()) ||
        item.userId === Number(search) ||
        item.id === Number(search)
    );
    setFilteredData(filterData);
  }, [search, allData]);  

  return (
    <>
    <div className="flex flex-col gap-3 items-center">
      <div className="flex gap-1">
        <Input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button 
        onClick={()=> setSearch(search)}
        className="button-primary"
        >Search</Button>
      </div>
      <UserTable allData={filteredData}/>
    </div>
    </>
  );
};




export default SearchAndFilter;
