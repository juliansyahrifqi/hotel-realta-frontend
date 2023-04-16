import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateOrderDetail(props: any) {
  type FormValues = {
    seta_name: string;
    user_full_name: string;
    wode_status: string;
    wode_notes: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  let { workorders, refresh } = useSelector((state: any) => state.workOrdersReducers);
  const [workorder, setWorkOrder] = useState({});
  const dispatch = useDispatch();

  const handleError = (errors: any) => [];

  const handleEdit = async (data: any) => {
    const dataAll = {
      seta_name: data.seta_name,
      user_full_name: data.user_full_name,
      wode_status: data.wode_status,
      wode_notes: data.wode_notes,
    };
  };

  useEffect(() => {
    setWorkOrder(workorders);
  }, [workorders]);

  const registerOptions = {
    seta_name: { required: "task name" },
    user_full_name: { required: "Full Name" },
    wode_status: { required: "INPROGRESS, COMPLETED, CANCELLED" },
    wode_notes: { required: "Description Task" },
  };

  return (
    <div>
      <div>
        <Transition appear show={props.isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black bg-opacity-30" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                  <Dialog.Panel
                    className="w-full max-w-2xl transform overflow-hidden rounded-2xl
               bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                      Create Task
                    </Dialog.Title>
                    <form onSubmit={handleSubmit(handleEdit, handleError)}>
                      {/*  */}
                      <div className="grid gap-4 sm:grid-cols-1 sm:gap-6 p-8 m-3" style={{ border: "3px solid #000", borderRadius: "10px" }}>
                        <div className="sm:col-span-2">
                          <label htmlFor="TaskName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Task Name
                          </label>
                          <input
                            type="text"
                            name="seta_name"
                            id="seta_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Task Name"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="FullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Assign Too
                          </label>
                          <input
                            type="text"
                            name="user_full_name"
                            id="user_full_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Full Name"
                          />
                        </div>

                        <div>
                          <label htmlFor="Gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Status
                          </label>
                          <select
                            id="wode_status"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option value="">Status</option>
                            <option value="INPROGRESS">INPROGRESS</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="CANCELLED">CANCELLED</option>
                          </select>
                        </div>

                        <div className="sm:col-span-2">
                          <label htmlFor="Notes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Notes
                          </label>
                          <input
                            type="textarea"
                            name="wode_notes"
                            id="wode_notes"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Notes"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blug-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                        Save
                      </button>

                      <button
                        className="inline-flex justify-center rounded-md border border-transparent bg-blug-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={props.closeModal}>
                        Cancel
                      </button>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </div>
  );
}
