import { doGetFacilitiesResponse, doRequestGetFacilities } from "@/redux/hotel/action/actionReducer";
import facilitiesReducers from "@/redux/hotel/reducer/facilitiesReducer";
import { doUpdateStock, doUpdateStockDetail } from "@/redux/purchasing/action/stockActionReducer";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export default function EditStockDet(props: any) {
  let { facilities, refresh } = useSelector((state: any) => state.facilitiesReducers);

  type FormValues = {
    stod_status: string;
    stod_faci_id: string;
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
        stod_status: data.stod_status,
        stod_faci_id: data.stod_faci_id,
      };
      dispatch(doUpdateStockDetail(props.isEdit.id, data));
      props.closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const registerOptions = {
    stod_status: { required: "Status is required" },
    stod_faci_id: { required: "Used In is required" },
  };

  //   Memanggil room
  useEffect(() => {
    dispatch(doRequestGetFacilities());
  }, [refresh, facilities]);

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
                  <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">Switch Status</Dialog.Title>
                  <div className="mt-4">
                    <form onSubmit={handleSubmit(handleSave, handleError)}>
                      <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="stod_status">
                          Status
                        </label>
                        <div className="relative">
                          <select
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            id="stod_status"
                            {...register("stod_status", {
                              ...registerOptions.stod_status,
                              setValueAs: (value) => {
                                switch (value) {
                                  case "Stocked":
                                    return 1;
                                  case "Expired":
                                    return 2;
                                  case "Broken":
                                    return 3;
                                  case "Used":
                                    return 4;
                                  default:
                                    return null;
                                }
                              },
                              shouldUnregister: true,
                            })}>
                            <option value="">Choose status</option>
                            <option value="Stocked">Stocked</option>
                            <option value="Expired">Expired</option>
                            <option value="Broken">Broken</option>
                            <option value="Used">Used</option>
                          </select>

                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        {errors?.stod_status && <p className="text-red-500 text-xs italic">{errors.stod_status.message}</p>}
                      </div>

                      <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="vendor_active">
                          Used In
                        </label>
                        <div className="relative">
                          <select
                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                            id="stod_faci_id"
                            {...register("stod_faci_id", {
                              ...registerOptions.stod_faci_id,
                            })}>
                            <option selected>Choose Product</option>
                            {facilities.map((data: any) => (
                              <option value={data.faci_id} key={data.faci_id}>
                                {data.faci_name}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        {errors?.stod_faci_id && <p className="text-red-500 text-xs italic">{errors.stod_faci_id.message}</p>}
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
