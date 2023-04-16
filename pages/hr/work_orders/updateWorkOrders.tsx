import { doUpdateWorkOrders } from "@/redux/human_resources/action/workordersActionReducer";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateWorkOrders(props: any) {
  type FormValues = {
    woro_start_date: Date;
    woro_status: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  let { workorders } = useSelector((state: any) => state.workOrdersReducers);
  const [workorder, setWorkorder] = useState({});
  const dispatch = useDispatch();

  const handleError = (errors: any) => [];

  const handleEdit = async (data: any) => {
    const dataAll = {
      woro_start_date: data.woro_start_date,
      woro_status: data.woro_status,
    };
    dispatch(doUpdateWorkOrders(props.isEdit.woro_id, dataAll));
    props.closeModal();
    console.log("cekcok", dataAll);
  };
  console.log("cekID2", props.isEdit.woro_id);

  useEffect(() => {
    setWorkorder(workorders);
  }, [workorders]);

  const registerOptions = {
    woro_start_date: { required: "update department!" },
    woro_status: { required: "OPEN, CLOSED, CANCELLED" },
  };
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
                  <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                    Edit Tanggal
                  </Dialog.Title>
                  <div className="mt-2">
                    <form onSubmit={handleSubmit(handleEdit, handleError)}>
                      <div className="flex justify-between items-center mb-2">
                        <label htmlFor="tanggal">Tanggal:</label>
                        <input className="w-[15rem]" type="date" {...register("woro_start_date", registerOptions.woro_start_date)} />
                        {errors.woro_start_date && <span>{errors.woro_start_date.message}</span>}
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <label>Status</label>
                        <input className="border-2" list="status-options" {...register("woro_status", registerOptions.woro_status)} />
                      </div>
                      <datalist id="status-options">
                        <option value="OPEN" />
                        <option value="CLOSED" />
                        <option value="CANCELLED" />
                      </datalist>
                      {errors.woro_status && <span>Status harus diisi dengan OPEN, CLOSED, atau CANCELLED.</span>}
                      <button type="submit" className="flex-row space-x-4 mt-4 text-rigt">
                        Tambahkan Tanggal
                      </button>

                      <button
                        className="inline-flex justify-center rounded-md border border-transparent bg-blug-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={props.closeModal}>
                        Cancel
                      </button>
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
