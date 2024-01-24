import React, { useMemo } from "react";
import { useTable } from "react-table";
import asqar from "../assets/popPrduct/fiil-nano-featured-banner.jpg";

function ProductTable() {
  const data = useMemo(
    () => [
      {
        id: 1,
        image: { asqar },
        name: "محصول 1",
        category: "دسته 1",
      },
      {
        id: 3,
        image: "../assets/amazon-logo.svg",
        name: "محصول 3",
        category: "دسته 3",
      },
      {
        id: 4,
        image: "../assets/amazon-logo.svg",
        name: "محصول 4",
        category: "دسته 4",
      },
      {
        id: 5,
        image: "../assets/amazon-logo.svg",
        name: "محصول 5",
        category: "دسته 5",
      },
      {
        id: 6,
        image: "../assets/amazon-logo.svg",
        name: "محصول 6",
        category: "دسته 6",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "عکس",
        accessor: "image",
        Cell: ({ row }) => (
          <img
            src={row.original.image}
            alt=""
          />
        ),
      },
      {
        Header: "اسم کالا",
        accessor: "name",
      },
      {
        Header: "دسته بندی",
        accessor: "category",
      },
      {
        Header: "",
        accessor: "actions",
        Cell: ({ row }) => (
          <div className="flex justify-center items-center p-2 gap-2">
            <button
              className=" bg-green-400"
              onClick={() => handleEdit(row)}>
              ویرایش
            </button>
            <button
              className="bg-red-400 "
              onClick={() => handleDelete(row)}>
              حذف
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const handleEdit = (row) => {
    console.log(`editd${row.original.id}`);
  };

  const handleDelete = (row) => {
    console.log(`deleted${row.original.id}`);
  };

  return (
    <div>
      <div className="w-4/5 mx-auto flex justify-between items-center ">
        <h1>مدیریت کالا ها </h1>
        <button className="bg-green-400 text-white outline-none">
          افزودن کالا
        </button>
      </div>
      <div className="w-4/5 mx-auto pt-9">
        <table
          {...getTableProps()}
          className="w-full pt-7 border ">
          <thead className="pt-5">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="w-1/4 py-2 bg-gray-100 border border-gray-102">
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="border border-gray-200">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
