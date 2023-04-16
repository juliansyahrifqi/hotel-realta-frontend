import { doUpdateEmployee } from "@/redux/human_resources/action/employeeActionReducer";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export default function UpdateDepartment(props: any) {
  type FormValues = {
    emp_national_id: number;
    emp_birth_date: Date;
    emp_marital_status: string;
    emp_gender: string;
    emp_hire_date: Date;
    emp_salaried_flag: string;
    emp_vacation_hours: number;
    emp_sickleave_hours: number;
    emp_current_flag: number;
    emp_photo: string;
    emp_user_id: string;
    emp_emp_id: string;
    emp_joro_id: number;
    ephi_rate_change_date: string; //
    ephi_rate_salary: string;
    ephi_pay_frequence: number;
    edhi_start_date: Date;
    edhi_end_date: Date;
    edhi_dept_id: number;
    edhi_shift_id: number;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  let { employees, refresh } = useSelector((state: any) => state.empReducers);
  const [employee, setEmployee] = useState({});
  const dispatch = useDispatch();

  const handleError = (errors: any) => [];

  const handleEdit = async (data: any) => {
    const dataAll = {
      emp_national_id: data.emp_national_id,
      user_full_name: data.user_full_name,
      emp_photo: data.emp_photo,
      emp_birth_date: data.emp_birth_date,
      emp_hire_date: data.emp_hire_date,
      emp_marital_status: data.emp_marital_status,
      emp_gender: data.emp_gender,
      emp_salaried_flag: data.emp_salaried_flag,
      emp_current_flag: data.emp_current_flag,
      emp_vacation_hours: data.emp_vacation_hours,
      emp_sickleave_hours: data.emp_sickleave_hours,
      joro_name: data.joro_name,
      ephi_rate_salary: data.ephi_rate_salary,
      ephi_pay_frequence: data.ephi_pay_frequence,
      dept_name: data.dept_name,
      edhi_start_date: data.edhi_start_date,
      edhi_end_date: data.edhi_end_date,
      shift_name: data.shift_name,
      shift_start_time: data.shift_start_time,
      shift_end_time: data.shift_end_time,
    };
    dispatch(doUpdateEmployee(props.isEdit.woro_id, dataAll));
    props.closeModal();
  };

  useEffect(() => {
    setEmployee(employees);
  }, [employees]);

  const registerOptions = {};

  return (
    <div>
      <Transition appear show={props.isEdit.status} as={Fragment}>
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
                    Create Department
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(handleEdit, handleError)}>
                    <div className="grid gap-4 sm:grid-cols-1 sm:gap-6 p-8 m-3" style={{ border: "3px solid #000", borderRadius: "10px" }}>
                      <div className="sm:col-span-2">
                        <label htmlFor="FullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="user_full_name"
                          id="user_full_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Full Name"
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="NationalID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          National ID
                        </label>
                        <input
                          type="text"
                          name="emp_national_id"
                          id="emp_national_id"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="National ID"
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="BirthDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Birth Date
                        </label>
                        <input
                          type="date"
                          name="emp_birth_date"
                          id="emp_birth_date"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Birth Date"
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Upload Photo
                        </label>
                        <input
                          type="file"
                          name="emp_photo"
                          id="emp_photo"
                          accept="image/*"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="HireDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Hire Date
                        </label>
                        <input
                          type="date"
                          name="emp_hire_date"
                          id="emp_hire_date"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Hire Date"
                        />
                      </div>

                      <div>
                        <label htmlFor="MartialStatus" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Marital Status
                        </label>
                        <select
                          id="emp_marital_status"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                          <option value="">Marital Status</option>
                          <option value="M">Marired</option>
                          <option value="S">Single</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="Gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Gender
                        </label>
                        <select
                          id="emp_gender"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                          <option value="">Gender</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="SalaryFlag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Salary Flag
                        </label>
                        <select
                          id="emp_salaried_flag"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                          <option value="">Salary Flag</option>
                          <option value="0">Hourly</option>
                          <option value="1">Monthly</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="CurentFlag" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Current Flag
                        </label>
                        <select
                          id="emp_current_flag"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                          <option value="">Current Flag</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="VacationHours" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          VacationHours
                        </label>
                        <input
                          type="number"
                          name="emp_vacation_hours"
                          id="emp_vacation_hours"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="00"
                        />
                      </div>

                      <div>
                        <label htmlFor="SickLeaveHours" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          SickLeaveHours
                        </label>
                        <input
                          type="number"
                          name="emp_sickleave_hours"
                          id="emp_sickleave_hours"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="00"
                        />
                      </div>

                      <div>
                        <label htmlFor="JobRole" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Job Role
                        </label>
                        <select
                          id="joro_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                          <option value="">Job Role</option>
                          <option value="0">InActive</option>
                          <option value="1">Active</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 p-4 m-3" style={{ border: "3px solid #000", borderRadius: "10px" }}>
                      <div>
                        <label htmlFor="SalaryRate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Salary Rate
                        </label>
                        <input
                          type="number"
                          name="ephi_rate_salary"
                          id="ephi_rate_salary"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="00"
                        />
                      </div>

                      <div>
                        <label htmlFor="Frequency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Frequency
                        </label>
                        <select
                          id="ephi_pay_frequence"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                          <option value="">Frequency</option>
                          <option value="0">Hourly</option>
                          <option value="1">Monthly</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 p-4 m-3" style={{ border: "3px solid #000", borderRadius: "10px" }}>
                      <div>
                        <label htmlFor="Department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Department
                        </label>
                        <select
                          id="dept_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                          <option value="">Department</option>
                        </select>
                      </div>

                      <div className="w-full">
                        <label htmlFor="StartDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Start Date
                        </label>
                        <input
                          type="date"
                          name="edhi_start_date"
                          id="edhi_start_date"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Start Date"
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="EndDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          End Date
                        </label>
                        <input
                          type="date"
                          name="edhi_end_date"
                          id="edhi_end_date"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="End Date"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 p-4 m-3" style={{ border: "3px solid #000", borderRadius: "10px" }}>
                      <div>
                        <label htmlFor="Shift" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Shift
                        </label>
                        <select
                          id="shift_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                          <option value="">Shift</option>
                        </select>
                      </div>

                      <div className="w-full">
                        <label htmlFor="Start Time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Start Time
                        </label>
                        <input
                          type="time"
                          name="shift_start_time"
                          id="shift_start_time"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Start Time"
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="End Time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          End Time
                        </label>
                        <input
                          type="time"
                          name="shift_end_time"
                          id="shift_end_time"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="End Time"
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
  );
}
