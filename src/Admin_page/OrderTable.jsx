
import React, { useEffect, useMemo } from "react";

import { useTable } from "react-table";

import { useState } from "react";
import axios from "axios";

import Table from "react-table";
const OrderTable = () => {
  const [records, setRecords] = useState();

  const [data, setData] = useState("");

  useEffect(() => {
    // console.log(data);
    axios
      .get("http://localhost:8000/api/orders")
      .then((res) => {
        setData(res.data.data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
    // console.log(data);
  }, []);
  console.log(data);

  // const columns = [
  //   {
  //     name: "نام کاربر",
  //     selector: (row) => row.name,
  //     sortable: true,
  //   },
  //   {
  //     name: "مجموع مبلغ",
  //     selector: (row) => row.totalAmount, // Replace with the actual key for total amount
  //     sortable: true,
  //   },
  //   {
  //     name: "زمان ثبت سفارش",
  //     selector: (row) => row.date, // Replace with the actual key for registration time
  //     sortable: true,
  //   },
  //   {
  //     name: "",
  //     cell: (row) => (
  //       <button onClick={() => handleButtonClick(row)}>بررسی سفارش</button>
  //     ),
  //     ignoreRowClick: true,
  //     allowOverflow: true,
  //     button: true,
  //   },
  // ];
  // const data = [
  //   { id: 1, name: "ممد", totalAmount: "23", date: 25 },
  //   { id: 2, name: "حسین", totalAmount: "44", date: 30 },
  //   { id: 3, name: "اصغر", totalAmount: "55", date: 40 },
  //   { id: 4, name: "اکبر", totalAmount: "11", date: 28 },
  //   { id: 5, name: "فلانی", totalAmount: "111", date: 28 },
  //   { id: 6, name: "اونیکی فلانی", totalAmount: "222", date: 28 },
  //   { id: 7, name: "داداش فلانی", totalAmount: "5555", date: 28 },
  //   { id: 8, name: "برادرزاده فلانی", totalAmount: "6666", date: 28 },
  //   { id: 9, name: "خواهر زاده فلانی", totalAmount: "54545", date: 28 },
  //   { id: 10, name: "عمه فلانی", totalAmount: "456456456", date: 28 },
  //   { id: 11, name: "بابی فلانی", totalAmount: "464564", date: 28 },
  // ];
  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLoweCase());
    });
    setRecords(newData);
  }
  return (
    <div>
      <div className="w-full flex justify-between items-center flex-row h-32 mx-auto">
        <div className="flex justify-start text-left pb-10">
          <h1>مدیریت سفارش ها</h1>
        </div>

        <div className="flex items-end pl-9 gap-10 pt-12  ">
          <div>
            <span>سفارشات تحویل شده </span>
            <input type="radio" />
          </div>
          <div>
            <span>سفارش های در حال انتظار</span> <input type="radio" />
          </div>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data}
        selectableRows
        fixedHeader
        pagination
        customStyles={customStyles}
        paginationPerPage={5}
        paginationComponentOptions={paginationOptions}
      />
    </div>
  );
};

export default OrderTable;
