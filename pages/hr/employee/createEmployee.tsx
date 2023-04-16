import apiMethodShift from "@/api/human_resources/apiMethodShift";
import { doAddDepartment, doGetDepartment } from "@/redux/human_resources/action/departmentActionReducer";
import { doAddEmployee } from "@/redux/human_resources/action/employeeActionReducer";
import { doGetJobRole } from "@/redux/human_resources/action/jobRoleActionReducer";
import { doGetShift } from "@/redux/human_resources/action/shiftActionReducer";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ApiMethodEmployee from "@/api/human_resources/apiMethodEmployee";

export default function CreateEmployee(props: any) {
  let { departments, refreshDept } = useSelector((state: any) => state.deptReducers);
  let { jobroles, refreshJobRole } = useSelector((state: any) => state.jobRoleReducers);
  let { shifts, refreshShift } = useSelector((state: any) => state.shiftReducers);

  const dispatch = useDispatch();

  type FromValues = {
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
    ephi_rate_salary: string;
    ephi_pay_frequence: number;
    edhi_start_date: Date;
    edhi_end_date: Date;
    edhi_dept_id: number;
    edhi_shift_id: number;
  };

  const [departmentID, setDepartmentID] = useState(0);
  const [jobRoleID, setjobRoleID] = useState(0);
  const [shiftID, setShiftID] = useState(0);

  const [shift, setShift] = useState({
    shiftID: 0,
    shiftStartTime: "00:00",
    shiftEndTime: "00:00",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FromValues>();

  const handleRegistration = async (data: any) => {
    data.emp_photo = data.emp_photo[0];
    // console.log("tes", data);

    dispatch(doAddEmployee(data));
    props.closeModal();
  };
  const handleError = (errors: any) => [];

  const registerOptions = {
    dept_name: { required: "create department!" },
  };

  useEffect(() => {
    dispatch(doGetDepartment(""));
  }, [dispatch]);

  useEffect(() => {
    dispatch(doGetJobRole(""));
  }, [dispatch]);

  useEffect(() => {
    dispatch(doGetShift(""));
  }, [dispatch]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      const result: any = await ApiMethodEmployee.getAllUser();

      setUsers(result.data);
    };

    getUserData();
  }, []);

  console.log(users);

  const handleChangeShift = async (e: any) => {
    const result = await apiMethodShift.getById(e.target.value);

    // console.log(new Date(result.data.data.shift_start_time).toLocaleTimeString("en-US", { hour12: false, hour: "numeric", minute: "numeric" }));

    // console.log(new Date(result.data.data.shift_end_time).toLocaleTimeString("en-US", { hour12: false, hour: "numeric", minute: "numeric" }));
    setShift({
      shiftID: result.data.data.shift_id,
      shiftStartTime: new Date(result.data.data.shift_start_time).toLocaleTimeString("en-US", { hour12: false, hour: "numeric", minute: "numeric" }),
      shiftEndTime: new Date(result.data.data.shift_end_time).toLocaleTimeString("en-US", { hour12: false, hour: "numeric", minute: "numeric" }),
    });
  };

  return (
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
                    Create Department
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                    <div className="grid gap-4 sm:grid-cols-1 sm:gap-6 p-8 m-3" style={{ border: "3px solid #000", borderRadius: "10px" }}>
                      <div className="sm:col-span-2">
                        <label htmlFor="FullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Full Name
                        </label>
                        <select {...register("emp_user_id")}>
                          {users.map((user: any, index: number) => (
                            <option key={index} value={user.user_id}>
                              {user.user_full_name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="w-full">
                        <label htmlFor="NationalID" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          National ID
                        </label>
                        <input
                          type="text"
                          id="emp_national_id"
                          {...register("emp_national_id")}
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
                          id="emp_birth_date"
                          {...register("emp_birth_date")}
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
                          id="emp_photo"
                          accept="image/*"
                          {...register("emp_photo")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="HireDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Hire Date
                        </label>
                        <input
                          type="date"
                          id="emp_hire_date"
                          {...register("emp_hire_date")}
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
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          {...register("emp_marital_status")}>
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
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          {...register("emp_gender")}>
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
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          {...register("emp_salaried_flag")}>
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
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          {...register("emp_current_flag")}>
                          <option value="">Current Flag</option>
                          <option value="0">Active</option>
                          <option value="1">In Active</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="VacationHours" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          VacationHours
                        </label>
                        <input
                          type="number"
                          id="emp_vacation_hours"
                          {...register("emp_vacation_hours")}
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
                          id="emp_sickleave_hours"
                          {...register("emp_sickleave_hours")}
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
                        //   {...register("emp_joro_id")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e: any) => setjobRoleID(e.target.value)}>
                          <option value="">Job Role</option>
                          {jobroles?.data?.map((jobrole: any, index: number) => (
                            <option key={index} value={jobrole.joro_id}>
                              {jobrole.joro_name}
                            </option>
                          ))}
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
                          id="ephi_rate_salary"
                          {...register("ephi_rate_salary")}
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
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          {...register("ephi_pay_frequence")}>
                          <option value="">Frequency</option>
                          <option value="1">Hourly</option>
                          <option value="2">Monthly</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 p-4 m-3" style={{ border: "3px solid #000", borderRadius: "10px" }}>
                      <div>
                        <label htmlFor="Department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Department
                        </label>
                        <select
                          id="dept_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={(e: any) => setDepartmentID(e.target.value)}>
                          <option value="">Department</option>
                          {departments?.data?.map((department: any, index: number) => (
                            <option key={index} value={department.dept_id}>
                              {department.dept_name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="w-full">
                        <label htmlFor="StartDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Start Date
                        </label>
                        <input
                          type="date"
                          id="edhi_start_date"
                          {...register("edhi_start_date")}
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
                          id="edhi_end_date"
                          {...register("edhi_end_date")}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="End Date"
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 p-4 m-3" style={{ border: "3px solid #000", borderRadius: "10px" }}>
                      <div>
                        <label htmlFor="Shift" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Shift
                        </label>
                        <select
                          id="shift_name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          onChange={handleChangeShift}>
                          <option value="">Shift</option>
                          {shifts?.data?.map((shift: any, index: number) => (
                            <option key={index} value={shift.shift_id}>
                              {shift.shift_name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="w-full">
                        <label htmlFor="Start Time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Start Time
                        </label>
                        <input
                          type="text"
                          id="shift_start_time"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Start Time"
                          value={shift.shiftStartTime}
                        />
                      </div>

                      <div className="w-full">
                        <label htmlFor="End Time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          End Time
                        </label>
                        <input
                          type="text"
                          id="shift_end_time"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="End Time"
                          value={shift.shiftEndTime}
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

// <section class="bg-white dark:bg-gray-900">
//   <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
//       <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
//       <form action="#">
//           <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
//               <div class="sm:col-span-2">
//                   <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
//                   <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
//               </div>
//               <div class="w-full">
//                   <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
//                   <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="">
//               </div>
//               <div class="w-full">
//                   <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
//                   <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="">
//               </div>
//               <div>
//                   <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
//                   <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
//                       <option selected="">Select category</option>
//                       <option value="TV">TV/Monitors</option>
//                       <option value="PC">PC</option>
//                       <option value="GA">Gaming/Console</option>
//                       <option value="PH">Phones</option>
//                   </select>
//               </div>
//               <div>
//                   <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Weight (kg)</label>
//                   <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required="">
//               </div> 
//           </div>
//           <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
//               Add product
//           </button>
//       </form>
//   </div>
// </section>  <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
//       <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
//       <form action="#">
//           <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
//               <div class="sm:col-span-2">
//                   <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
//                   <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="">
//               </div>
//               <div class="w-full">
//                   <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
//                   <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required="">
//               </div>
//               <div class="w-full">
//                   <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
//                   <input type="number" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="">
//               </div>
//               <div>
//                   <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
//                   <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
//                       <option selected="">Select category</option>
//                       <option value="TV">TV/Monitors</option>
//                       <option value="PC">PC</option>
//                       <option value="GA">Gaming/Console</option>
//                       <option value="PH">Phones</option>
//                   </select>
//               </div>
//               <div>
//                   <label for="item-weight" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Weight (kg)</label>
//                   <input type="number" name="item-weight" id="item-weight" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required="">
//               </div> 
//               <div class="sm:col-span-2">
//                   <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
//                   <textarea id="description" rows="8" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
//               </div>
//           </div>
//           <button type="submit" class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
//               Add product
//           </button>
//       </form>
//   </div>
// </section>
// )