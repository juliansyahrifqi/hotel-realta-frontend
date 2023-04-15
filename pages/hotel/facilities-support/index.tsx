import {
  doDeleteFacilitiesSupport,
  doRequestGetFacilitiesSupport,
} from '../../../redux/hotel/action/actionReducer'
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'
import { MdAddBox, MdDelete, MdEdit } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import AddSupport from './addSupport'
import EditSupport from './editSupport'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AiOutlinePlus } from 'react-icons/ai'

const FacilitiesSupport = () => {
  let { fasupp, message, refresh } = useSelector(
    (state: any) => state.facilitiesSupportReducers
  )
  const dispatch = useDispatch()
  const columns = [
    { name: 'NO' },
    { name: 'Facilities Support Name' },
    { name: 'Description' },
  ]
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState({
    status: false,
    fs_id: 0,
  })
  const editOpen = (fs_id: number) => {
    setIsEdit((prev) => {
      return { ...prev, status: true, fs_id: fs_id }
    })
    toast.success(`Berhasil Dirubah`)
  }
  const deleteOpen = async (fs_id: number) => {
    const confirmed = window.confirm(`هل أنت متأكد أنك تريد حذف ؟ `)
    if (confirmed) {
      dispatch(doDeleteFacilitiesSupport(fs_id))
      toast.success(`Berhasil Dihapus`)
    }
  }

  useEffect(() => {
    dispatch(doRequestGetFacilitiesSupport())
  }, [refresh])

  return (
    <div className='relative overflow-x-auto shadow-md mt-5 rounded-xl bg-white p-4'>
      <div className='flex items-center gap-4'>
        <div className='text-base font-bold ml-6'>{`Facilities Support`}</div>
        <button
          className='bg-primary hover:bg-primary-hover transition-colors ease-in duration-100 p-2 rounded text-white flex items-center gap-2 border border-primary ml-auto mb-4'
          onClick={() => setIsOpen(true)}
        >
          <AiOutlinePlus className='text-xl' />
          Add
        </button>
      </div>
      <table className='w-full text-sm text-left text-gray-500'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
          <tr className=''>
            {(columns || []).map((col) => (
              <th key={col.name}>
                <span className='px-8'>{col.name}</span>
              </th>
            ))}
            <th scope='col' className='px-6 py-3'></th>
          </tr>
        </thead>
        <tbody>
          {(fasupp || []).map((dt: any, index: number) => (
            <tr className='bg-white border-b border-gray-200' key={dt.fs_id}>
              <td className='px-6 py-4'>{index + 1}</td>
              <td className='flex px-6 py-4 font-medium text-xs text-gray-900 whitespace-nowrap dark:text-white text-center'>
                <Image
                  src={dt.fs_icon_url}
                  alt={dt.fs_icon}
                  width={50}
                  height={50}
                />
                <span className='mt-4 ml-3'>{dt.fs_name}</span>
              </td>
              <td className='px-6 py-4'>{dt.fs_description}</td>
              <td className='px-6 py-4 flex gap-2'>
                <button
                  className='border-2 border-primary hover:bg-primary hover:text-white transition-colors ease-in duration-100 p-2 rounded text-primary'
                  onClick={() => editOpen(dt.fs_id)}
                >
                  <MdEdit className='text-xl' />
                </button>

                <button
                  className='border-2 border-danger-secondary hover:bg-danger-secondary hover:text-white transition-colors ease-in duration-100 p-2 rounded text-danger-secondary'
                  onClick={() => deleteOpen(dt.fs_id)}
                >
                  <MdDelete className='text-xl' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav
        className='flex items-center justify-between pt-4'
        aria-label='Table navigation'
      >
        <span className='text-sm font-normal text-gray-500'>
          Showing <span className='font-semibold text-gray-900'>1-10</span> of{' '}
          <span className='font-semibold text-gray-900'>1000</span>
        </span>
        <ul className='inline-flex items-center -space-x-px'>
          <li>
            <a
              href='#'
              className='block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l hover:bg-gray-100 hover:text-gray-700 '
            >
              <span className='sr-only'>Previous</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href='#'
              className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'
            >
              1
            </a>
          </li>
          <li>
            <a
              href='#'
              className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              2
            </a>
          </li>

          <li>
            <a
              href='#'
              className='block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700'
            >
              <span className='sr-only'>Next</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <ToastContainer autoClose={5000} />
      {isOpen ? (
        <AddSupport isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      ) : null}
      {isEdit.status ? (
        <EditSupport
          isEdit={isEdit}
          closeModal={() =>
            setIsEdit((prev) => {
              return { ...prev, status: false }
            })
          }
        />
      ) : null}
    </div>
    // <div className='relative overflow-x-auto shadow-md sm:rounded-lg h-screen'>
    //   {/* Columns */}
    //   <div className='relative overflow-x-auto shadow-md sm:rounded-lg h-screen'>
    //     <table className='w-full tex-xs text-left text-gray-500 dark:text-gray-400'>
    //       <thead className='text-sm text-white uppercase bg-primary dark:bg-black dark:text-black '>

    //           <th className='px- py-3 '>
    //             <button
    //               className='flex items-center'
    //               onClick={() => setIsOpen(true)}
    //             >
    //               <MdAddBox className='mr-1' />
    //               <span className='mr-2 whitespace-nowrap hover:text-secondary'>
    //                 Add Facility Support
    //               </span>
    //             </button>
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {(fasupp || []).map((dt: any, index: number) => (
    //           <tr
    //             key={dt.fs_id}
    //             className='bg-white border-b hover:bg-primary/5'
    //           >
    //             <td className='px-8 py-4 font-medium text-xs text-gray-900 whitespace-nowrap dark:text-white'>
    //               {index + 1}
    //             </td>
    //             <td className='flex px-8 py-4 font-medium text-xs text-gray-900 whitespace-nowrap dark:text-white text-center'>
    //               <Image
    //                 src={dt.fs_icon_url}
    //                 alt={dt.fs_icon}
    //                 width={50}
    //                 height={50}
    //               />
    //               <span className='mt-4 ml-3'>{dt.fs_name}</span>
    //             </td>
    //             <td className='px-8 py-4 font-medium text-xs text-gray-900 whitespace-nowrap dark:text-white items-center'>
    //
    //             </td>
    //             <td className='px-8 py-4 text-sm text-gray-900 '>
    //               <Menu as='div' className='relative inline-block text-left'>
    //                 <div>
    //                   <Menu.Button className='inline-flex w-full justify-center rounded-md bg-none px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
    //                     <BsThreeDotsVertical
    //                       className='ml-2 -mr-1 h-5 w-5 text-primary'
    //                       aria-hidden='true'
    //                     />
    //                   </Menu.Button>
    //                 </div>
    //                 <Transition
    //                   as={Fragment}
    //                   enter='transition ease-out duration-100'
    //                   enterFrom='transform opacity-0 scale-95'
    //                   enterTo='transform opacity-100 scale-100'
    //                   leave='transition ease-in duration-75'
    //                   leaveFrom='transform opacity-100 scale-100'
    //                   leaveTo='transform opacity-0 scale-95'
    //                 >
    //                   <Menu.Items className='absolute right-0 mt-2 z-50 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
    //                     <div className='px-1 py-1 '>
    //                       <Menu.Item>
    //                         {({ active }) => (
    //                           <button
    //                             className={`${
    //                               active
    //                                 ? 'bg-secondary/75 text-white'
    //                                 : 'text-gray-900'
    //                             } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //                             onClick={() => editOpen(dt.fs_id)}
    //                           >
    //                             {active ? (
    //                               <FaRegEdit
    //                                 className='mr-2 h-5 w-5'
    //                                 aria-hidden='true'
    //                               />
    //                             ) : (
    //                               <FaRegEdit
    //                                 className='mr-2 h-5 w-5'
    //                                 aria-hidden='true'
    //                               />
    //                             )}
    //                             Edit
    //                           </button>
    //                         )}
    //                       </Menu.Item>
    //                     </div>
    //                     <div className='px-1 py-1 '>
    //                       <Menu.Item>
    //                         {({ active }) => (
    //                           <button
    //                             className={`${
    //                               active
    //                                 ? 'bg-danger/75 text-white'
    //                                 : 'text-gray-900'
    //                             } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
    //                             onClick={() => deleteOpen(dt.fs_id)}
    //                           >
    //                             {active ? (
    //                               <FaTrashAlt
    //                                 className='mr-2 h-5 w-5'
    //                                 aria-hidden='true'
    //                               />
    //                             ) : (
    //                               <FaTrashAlt
    //                                 className='mr-2 h-5 w-5'
    //                                 aria-hidden='true'
    //                               />
    //                             )}
    //                             Delete
    //                           </button>
    //                         )}
    //                       </Menu.Item>
    //                     </div>
    //                   </Menu.Items>
    //                 </Transition>
    //               </Menu>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //     {/* <Pagination
    //       pagination={{ totalPage: hotels?.totalPage, page: hotels?.page }}
    //       setPage={setPageNumber}
    //     /> */}
    //   </div>

    // </div>
  )
}

export default FacilitiesSupport
