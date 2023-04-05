import {
  doRequestGetFacilities,
  doRequestGetHotels,
} from '../../../redux/hotel/action/actionReducer'
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { MdAddBox } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

const Facilities = () => {
  let { facilities, message, refresh } = useSelector(
    (state: any) => state.facilitiesReducers
  )
  console.log(facilities)

  const dispatch = useDispatch()
  const columns = [
    { name: 'NO' },
    { name: 'Hotel Name' },
    { name: 'Rating Star' },
    { name: 'Phone Number' },
    { name: 'Modified Date' },
  ]

  useEffect(() => {
    dispatch(doRequestGetFacilities())
  }, [refresh])

  // console.log(hotels)
  return (
    <div
      className='relative overflow-x-auto shadow-md sm:rounded-lg h-screen'
      title='Hotels'
    >
      <div className='bg-white text-black py-2 px-6 flex  font-bold border-2 items-center justify-between'>
        Hotels
      </div>
      {/* <Header> */}
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-medium text-white uppercase bg-primary dark:bg-black dark:text-black'>
          <tr>
            {(columns || []).map((col) => (
              <th key={col.name} style={{ whiteSpace: 'nowrap' }}>
                <span className='px-6 py-3'>{col.name}</span>
              </th>
            ))}
            <th>
              <span className='px-6 py-3'>
                <button
                  className='flex items-center'
                  // onClick={() => setIsOpen(true)}
                >
                  <MdAddBox className='mr-1' />
                  <span>Add New Hotel</span>
                </button>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {(facilities || []).map((dt: any, index: number) => (
            <tr
              key={dt.faci_id}
              className='bg-white border-b hover:bg-primary hover:bg-opacity-20'
            >
              <td className='px-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {index + 1}
              </td>
              <td className='px-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {dt.faci_name}
              </td>
              <td className='px-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white display flex'>
                {dt.faci_room_number}
              </td>
              <td className='px-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {dt.faci_max_number}
              </td>
              <td className='px-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                {dt.faci_low_price}
              </td>
              <td className='px-12 py-3 text-sm text-gray-900 text-right'>
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
                                  ? 'bg-secondary text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              // onClick={() => editOpen(dt.hotel_id)}
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
                            // <Link href={`/hotel/facilities/${dt.hotel_id}`}>
                            <button
                              className={`${
                                active
                                  ? 'bg-secondary text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              {active ? (
                                <MdAddBox
                                  className='mr-2 h-5 w-5'
                                  aria-hidden='true'
                                />
                              ) : (
                                <MdAddBox
                                  className='mr-2 h-5 w-5'
                                  aria-hidden='true'
                                />
                              )}
                              Add Facilities
                            </button>
                            // </Link>
                          )}
                        </Menu.Item>
                      </div>

                      <div className='px-1 py-1 '>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-secondary text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              // onClick={() => editOpen(dt.id_user)}
                            >
                              {active ? (
                                <MdAddBox
                                  className='mr-2 h-5 w-5'
                                  aria-hidden='true'
                                />
                              ) : (
                                <MdAddBox
                                  className='mr-2 h-5 w-5'
                                  aria-hidden='true'
                                />
                              )}
                              Add Facility Support
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className='px-1 py-1'>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-secondary text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              // onClick={() => switchOpen(dt.hotel_id)}
                            >
                              {active ? (
                                <HiOutlineSwitchHorizontal
                                  className='mr-2 h-5 w-5'
                                  aria-hidden='true'
                                />
                              ) : (
                                <HiOutlineSwitchHorizontal
                                  className='mr-2 h-5 w-5'
                                  aria-hidden='true'
                                />
                              )}
                              Swict Status
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
    </div>
  )
}

export default Facilities
