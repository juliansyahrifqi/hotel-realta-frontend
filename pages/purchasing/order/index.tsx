import { doDeleteVendor, doGetVendor, doGetVendorResponse } from "@/redux/purchasing/action/vendorActionReducer";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillPencilFill, BsThreeDotsVertical, BsTrashFill, BsFillCloudUploadFill, BsFillInfoCircleFill } from "react-icons/bs";
import { Menu, Transition } from "@headlessui/react";
import { doDeleteStock, doGetStock } from "@/redux/purchasing/action/stockActionReducer";
import Link from "next/link";
import { doDeleteOrderList, doGetOrderList } from "@/redux/purchasing/action/orderActionReducer";
import EditOrder from "./editOrder";
// import { toast, ToastContainer } from 'react-toastify';

export default function Index() {
  const { orders = [], refresh } = useSelector((state: any) => state.orderReducers);

  console.log("coba:", orders);

  const [vendorName, setSearchVendor] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const [isOpen, setIsOpen] = useState(false);
  const [isEdit, setIsEdit] = useState({
    status: false,
    id: 0,
    data: [{}],
  });
  const dispatch = useDispatch();

  const columns = [{ name: "Po Number" }, { name: "Po Date" }, { name: "Vendor Target" }, { name: "Line Items" }, { name: "Total Amount" }, { name: "Status" }, { name: "Action" }];

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value);
    setCurrentPage(1);
    handleGetData();
  };

  const editOpen = (id: number, data: any[]) => {
    setIsEdit((prev) => {
      return { ...prev, status: true, id: id, data: data };
    });
  };

  const deleteOpen = async (id: number) => {
    const confirmed = window.window.confirm(`Hapus data id ${id} ?`);
    if (confirmed) {
      dispatch(doDeleteOrderList(id));
    }
  };

  const handleGetData = () => {
    dispatch(doGetOrderList(search, currentPage, limit));
  };

  useEffect(() => {
    handleGetData();
  }, [refresh, vendorName, search, currentPage, limit]);

  // Calculate Total Pages
  const totalData = orders ? orders.length : 0;

  const totalPages = Math.ceil(orders.length / limit);

  // Untuk buat array ke display pagination button
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  console.log("stockkks:", orders);

  return (
    <div className="bg-white">
      <>
        {/* component */}
        <div className="bg-white p-8 rounded-md w-full">
          <div className=" flex items-center justify-between pb-6">
            <div>
              <h2 className="text-gray-600 font-semibold">List Order</h2>
              {/* <span className="text-xs">All Stock</span> */}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex bg-gray-50 items-center p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                <input
                  className="bg-gray-50 outline-none ml-1 block "
                  type="text"
                  name=""
                  id=""
                  placeholder="search..."
                  // value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="lg:ml-40 ml-10 space-x-8">
                {/* <button className='bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer'>
                  New Report
                </button> */}
              </div>
            </div>
          </div>
          <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      {((columns && columns) || []).map((col) => (
                        <th key={col.name} className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          <span className="lg:pl-2">{col.name}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {(orders || []).map((orderData: any) => (
                      <>
                        <tr>
                          {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <img src="https://media.istockphoto.com/id/1258873084/id/vektor/logo-abstrak-kafe-atau-restoran-sendok-dan-garpu-di-piring-desain-logo-makanan-ilustrasi.jpg?s=612x612&w=0&k=20&c=v3MkYEDgB09kn_NAJbekqA2M3zQ9SDjpqo6IbLeDwF0=" alt="waw" width={1000} height={1000} className="w-full h-full rounded-full" />
                              </div>
                            </div>
                          </td> */}
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{orderData.pohe_number}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {new Date(orderData.pohe_order_date).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              })}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{orderData.vendor.vendor_name}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{orderData.pohe_line_items}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                              }).format(parseInt(orderData.pohe_total_amount.replace(/\D/g, "")))}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {(() => {
                                let status = "";
                                switch (parseInt(orderData.pohe_status)) {
                                  case 1:
                                    status = "Pending";
                                    break;
                                  case 2:
                                    status = "Approve";
                                    break;
                                  case 3:
                                    status = "Rejected";
                                    break;
                                  case 4:
                                    status = "Received";
                                  case 5:
                                    status = "Completed";
                                    break;
                                  default:
                                    status = "";
                                }
                                return status;
                              })()}
                            </p>
                          </td>
                          {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {new Intl.NumberFormat("id-ID", {
                                style: "currency",
                                currency: "IDR",
                              }).format(parseInt(restoMenu.reme_price.replace(/\D/g, "")))}
                            </p>
                          </td> */}
                          {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className={`absolute insert-0 ${restoMenu.reme_status === "empty" ? "relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight" : "relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"}`}>
                              <span className={`absolute inset-0 ${restoMenu.reme_status === "empty" ? "bg-red-200" : "bg-green-200"} opacity-50 rounded-full`} />
                              <span className="relative">{restoMenu.reme_status}</span>
                            </span>
                          </td> */}
                          <td className="px-6 py-3 text-sm text-gray-900">
                            <Menu as="div" className="relative inline-block text-left">
                              <div>
                                <Menu.Button className="inline-flex w-full justify-center rounded-md bg-none px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                  <BsThreeDotsVertical className="ml-2 -mr-1 h-5 w-5 text-blue-900 hover:text-violet-300" aria-hidden="true" />
                                </Menu.Button>
                              </div>
                              <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
                                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                                  {/* EDIT */}
                                  <div className="px-1 py-1 ">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`} onClick={() => editOpen(orderData.pohe_id, orderData)}>
                                          {active ? <BsFillPencilFill className="mr-2 h-5 w-5" aria-hidden="true" /> : <BsFillPencilFill className="mr-2 h-5 w-5" aria-hidden="true" />}
                                          Switch Status
                                        </button>
                                      )}
                                    </Menu.Item>
                                  </div>
                                  {/* DELETE */}
                                  <div className="px-1 py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`} onClick={() => deleteOpen(orderData.pohe_id)}>
                                          {active ? <BsTrashFill className="mr-2 h-5 w-5 " aria-hidden="true" /> : <BsTrashFill className="mr-2 h-5 w-5 " aria-hidden="true" />}
                                          Delete
                                        </button>
                                      )}
                                    </Menu.Item>
                                  </div>
                                  {/* UPLOAD PHOTO */}

                                  {/* DETAIL STOCK */}
                                  <div className="px-1 py-1">
                                    <Menu.Item>
                                      {({ active }) => (
                                        <Link href={`/purchasing/order/detail/${orderData.pohe_id}`}>
                                          {/* <button className={`${active ? "bg-violet-500 text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                            {active ? <BsFillInfoCircleFill className="mr-2 h-5 w-5 " aria-hidden="true" /> : <BsFillInfoCircleFill className="mr-2 h-5 w-5 " aria-hidden="true" />}
                                            Detail
                                          </button> */}
                                        </Link>
                                      )}
                                    </Menu.Item>
                                  </div>
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
                <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
                  <span className="text-xs xs:text-sm text-gray-900">Showing Page {currentPage}</span>

                  <div className="inline-flex mt-2 xs:mt-0">
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r" onClick={() => setCurrentPage(currentPage + 1)} disabled={orders.length === 0}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      {/* {/* <ToastContainer autoClose={5000} /> */}
      {isEdit.status ? (
        <EditOrder
          dataOrder={isEdit.data}
          isEdit={isEdit}
          closeModal={() =>
            setIsEdit((prev) => {
              return { ...prev, status: false };
            })
          }
        />
      ) : null}
    </div>
  );
}
