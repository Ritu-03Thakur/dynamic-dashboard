"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { UserData } from "@/app/dashboard/page";



const UserTable = ({ allData }: { allData: UserData[] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedData, setPaginatedData] = useState(allData);

  const recordsPerPage = 10;

  

  
  useEffect(() => {
    paginateData(currentPage, allData);
  }, [currentPage, allData]);

 
  const paginateData = (page: number, data: UserData[]) => {
    const start = page * recordsPerPage;
    const end = start + recordsPerPage;
    const paginated = data.slice(start, end);
    setPaginatedData(paginated);
  };

  
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  
  const handleNext = () => {
    if ((currentPage + 1) * recordsPerPage < allData.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <>
    

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">User ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Body</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
          paginatedData.map((data) => (
            <TableRow key={data.id}>
              <TableCell className="font-medium">{data.userId}</TableCell>
              <TableCell>{data.title}</TableCell>
              <TableCell>{data.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center gap-2 mt-4">
        <Button onClick={handlePrevious} disabled={currentPage === 0}
        className="button-primary"
        >
          Previous
        </Button>
        <span 
        
        >
          Page {currentPage + 1} of {Math.ceil(allData.length / recordsPerPage)}
        </span>
        <Button
          onClick={handleNext}
          className="button-primary"
          disabled={(currentPage + 1) * recordsPerPage >= allData.length}
        >
          Next
        </Button>
      </div>
     
    
    </>
  );
};

export default UserTable;
