import { doRequestGetFacilitiesSupport } from '../../../redux/hotel/action/actionReducer'
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { MdAddBox } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@/components/Button/button'
import Header from '@/components/shared/Header'

const FacilitiesSupport = () => {
  let { fasupp, message, refresh } = useSelector(
    (state: any) => state.facilitiesSupportReducers
  )
  const dispatch = useDispatch()
  const columns = [
    { name: 'ID' },
    { name: 'Facilities Support Name' },
    { name: 'Description' },
  ]

  useEffect(() => {
    dispatch(doRequestGetFacilitiesSupport())
  }, [refresh])
  return (
    <div>
      <Header>
        <table className='min-w-full table-fixed'>
          <thead>
            <tr className='border-2 border-black '>
              {(columns || []).map((col) => (
                <th
                  key={col.name}
                  className=' pr-6 px-9 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider'
                >
                  <span className='lg:pl-2 font-bold'>{col.name}</span>
                </th>
              ))}
              <th className=' pr-6 px-4 py-2 ml-6 border-black bg-gray-50 text-left text-xs font-medium text-black uppercase tracking-wider'>
                <span className='lg:pl-2 '>
                  <Button
                    variant='variant'
                    label='Add'
                    size='small'
                    type='secondary'
                    className='mb-4'
                  />
                </span>
              </th>
            </tr>
          </thead>
          <tbody className='bg-white border-2 border-black divide-y divide-black '>
            {(fasupp || []).map((dt: any, index: number) => (
              <tr
                className='hover:bg-[#4B5563] hover:bg-opacity-20 '
                key={dt.id}
              >
                <td className='px-12 py-3 text-sm font-semibold text-black'>
                  {index + 1}
                </td>
                <td className='px-12 py-3 text-sm font-semibold text-black'>
                  {dt.fs_name}
                </td>
                <td className='px-12 py-3 text-sm font-semibold display flex'>
                  {dt.fs_description}
                </td>

                <td className='px-12 py-3 text-sm text-gray-900 text-right'>
                  <Menu as='div' className='relative inline-block text-left'>
                    <div>
                      <Menu.Button className='inline-flex w-full justify-center rounded-md bg-none px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                        <BsThreeDotsVertical
                          className='ml-2 -mr-1 h-5 w-5 text-gray-700'
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
                                    ? 'bg-[#4B5563] text-white'
                                    : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                // onClick={() => editOpen(dt.id_user)}
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
                                    ? 'bg-[#4B5563] text-white'
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
                                Add Facilities
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
                                    ? 'bg-[#4B5563] text-white'
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
                                    ? 'bg-[#4B5563] text-white'
                                    : 'text-gray-900'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                // onClick={() => deleteOpen(dt.id_user)}
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
      </Header>
    </div>
  )
}

export default FacilitiesSupport
