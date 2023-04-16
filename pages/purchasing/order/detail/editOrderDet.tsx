import { doUpdateOrderList } from "@/redux/purchasing/action/orderActionReducer";
import { doGetStock, doUpdateStock } from "@/redux/purchasing/action/stockActionReducer";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export default function EditOrderDet(props: any) {
  let { orders, refresh } = useSelector((state: any) => state.orderReducers);

  type FormValues = {
    pode_stock_id: string;
    pode_order_qty: string;
    pode_received_qty: string;
    pode_rejected_qty: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useDispatch();
  const [data, setData] = useState<any>(props.dataStockDet);

  const handleError = (errors: any) => {};
  const handleSave = async (data: FormValues) => {
    try {
      const dataAll = {
        pode_stock_id: data.pode_stock_id,
        pode_order_qty: data.pode_order_qty,
        pode_received_qty: data.pode_received_qty,
        pode_rejected_qty: data.pode_rejected_qty,
      };
      dispatch(doUpdateOrderList(props.isEdit.id, data));
      props.closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const registerOptions = {
    pode_stock_id: { required: "Stock is required" },
    pode_order_qty: { required: "Order qty is required" },
    pode_received_qty: { required: "Received qty is required" },
    pode_rejected_qty: { required: "Rejected qty is required" },
  };
  console.log("Datavendor;", props.dataOrder);

  return (
    <div>
      <Transition appear show={props.isEdit.status} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">Edit Stock</Dialog.Title>
                  <div className="mt-4">
                    <form onSubmit={handleSubmit(handleSave, handleError)}>
                      <div className="mb-4">
                        <label className="text-gray-700 font-medium mr-4">Stock Description</label>
                        <div className="relative">
                          <select
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            id="pode_stock_id"
                            {...register("pode_stock_id", {
                              ...registerOptions.pode_stock_id,
                            })}>
                            <option selected>Choose Product</option>
                            {orders.purchase_order_detail.stock.map((data: any) => (
                              <option value={data.stock_id} key={data.stock_id}>
                                {data.stock_name}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        {errors?.pode_stock_id && <p className="text-red-500 text-xs italic">{errors.pode_stock_id.message}</p>}
                      </div>

                      <div className="mb-4">
                        <label className="text-gray-700 font-medium mr-4">Order Qty</label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pode_order_qty" type="number" defaultValue={data?.pode_order_qty ?? ""} {...register("pode_order_qty", registerOptions.pode_order_qty)} />
                        {errors?.pode_order_qty && <p className="text-redf-500 text-xs italic">{errors.pode_order_qty.message}</p>}
                      </div>

                      <div className="mb-4">
                        <label className="text-gray-700 font-medium mr-4">Received Qty</label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pode_received_qty" type="number" defaultValue={data?.pode_received_qty ?? ""} {...register("pode_received_qty", registerOptions.pode_received_qty)} />
                        {errors?.pode_received_qty && <p className="text-redf-500 text-xs italic">{errors.pode_received_qty.message}</p>}
                      </div>

                      <div className="mb-4">
                        <label className="text-gray-700 font-medium mr-4">Rejected Qty</label>
                        <input className="shadow appearance-none border rounded w-full py-3 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pode_rejected_qty" type="number" defaultValue={data?.pode_rejected_qty ?? ""} {...register("pode_rejected_qty", registerOptions.pode_rejected_qty)} />
                        {errors?.pode_rejected_qty && <p className="text-redf-500 text-xs italic">{errors.pode_rejected_qty.message}</p>}
                      </div>

                      <div className="flex justify-end">
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                          Submit
                        </button>

                        <button className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" onClick={props.closeModal}>
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
