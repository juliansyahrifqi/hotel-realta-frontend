import {
  doDeleteFacilitiesSupport,
  doRequestGetFacilitiesSupport,
} from '../../../redux/hotel/action/actionReducer'
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaTrashAlt } from 'react-icons/fa'
import { MdAddBox } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import AddSupport from './addSupport'
import EditSupport from './editSupport'

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
  }
  const deleteOpen = async (fs_id: number) => {
    dispatch(doDeleteFacilitiesSupport(fs_id))
  }

  useEffect(() => {
    dispatch(doRequestGetFacilitiesSupport())
  }, [refresh])

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg h-screen'>
      {/* Columns */}
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg h-screen'>
        <table className='w-full tex-xs text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-sm text-white uppercase bg-primary dark:bg-black dark:text-black '>
            <tr className=''>
              {(columns || []).map((col) => (
                <th key={col.name}>
                  <span className='px-8'>{col.name}</span>
                </th>
              ))}

              <th className='px- py-3 '>
                <button
                  className='flex items-center'
                  onClick={() => setIsOpen(true)}
                >
                  <MdAddBox className='mr-1' />
                  <span className='mr-2 whitespace-nowrap hover:text-secondary'>
                    Add Facility Support
                  </span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {(fasupp || []).map((dt: any, index: number) => (
              <tr
                key={dt.fs_id}
                className='bg-white border-b hover:bg-primary/5'
              >
                <td className='px-8 py-4 font-medium text-xs text-gray-900 whitespace-nowrap dark:text-white'>
                  {index + 1}
                </td>
                <td className='flex px-8 py-4 font-medium text-xs text-gray-900 whitespace-nowrap dark:text-white text-center'>
                  <Image
                    src={dt.fs_icon_url}
                    alt={dt.fs_icon}
                    width={50}
                    height={50}
                  />
                  <span className='mt-4 ml-3'>{dt.fs_name}</span>
                </td>
                <td className='px-8 py-4 font-medium text-xs text-gray-900 whitespace-nowrap dark:text-white items-center'>
                  {dt.fs_description}
                </td>
                <td className='px-8 py-4 text-sm text-gray-900 '>
                  <Menu as='div' className='relative inline-block text-left'>
                    <div>
                      <Menu.Button className='inline-flex w-full justify-center rounded-md bg-none px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                        <BsThreeDotsVertical
                          className='ml-2 -mr-1 h-5 w-5 text-primary'
                          aria-hidden='true'
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 mt-2 z-50 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='px-1 py-1 '>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? 'bg-secondary/75 text-white'
                                    : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                onClick={() => editOpen(dt.fs_id)}
                              >
                                {active ? (
                                  <FaRegEdit
                                    className='mr-2 h-5 w-5'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <FaRegEdit
                                    className='mr-2 h-5 w-5'
                                    aria-hidden='true'
                                  />
                                )}
                                Edit
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                        <div className='px-1 py-1 '>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? 'bg-danger/75 text-white'
                                    : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                onClick={() => deleteOpen(dt.fs_id)}
                              >
                                {active ? (
                                  <FaTrashAlt
                                    className='mr-2 h-5 w-5'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <FaTrashAlt
                                    className='mr-2 h-5 w-5'
                                    aria-hidden='true'
                                  />
                                )}
                                Delete
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <Pagination
          pagination={{ totalPage: hotels?.totalPage, page: hotels?.page }}
          setPage={setPageNumber}
        /> */}
      </div>
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
  )
}

export default FacilitiesSupport
