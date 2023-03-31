import { doRequestGetHotels } from '../../../redux/hotel/action/actionReducer'
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { HiOutlineSwitchHorizontal } from 'react-icons/hi'
import { MdAddBox } from 'react-icons/md'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Hotels = () => {
  let { hotels, message, refresh } = useSelector(
    (state: any) => state.hotelsReducers
  )
  console.log(hotels)

  // const renderStars = (rating: any) => {
  //   const stars = []
  //   for (let i = 1; i <= 5; i++) {
  //     if (i <= rating) {
  //       stars.push(<FaStar className='text-yellow-500' key={i} />)
  //     } else {
  //       stars.push(<FaRegStar key={i} />)
  //     }
  //   }
  //   return stars
  // }
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const halfStar = rating - fullStars >= 0.5 ? true : false

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar className='text-amber-400' key={i} />)
      } else if (halfStar && i === fullStars + 1) {
        stars.push(<FaStarHalfAlt className='text-amber-400' key={i} />)
      } else {
        stars.push(<FaRegStar className='text-amber-400' key={i} />)
      }
    }

    return stars
  }

  const dispatch = useDispatch()
  const columns = [
    { name: 'ID' },
    { name: 'Hotel Name' },
    { name: 'Rating Star' },
    { name: 'Phone Number' },
    { name: 'Modified Date' },
  ]

  useEffect(() => {
    dispatch(doRequestGetHotels())
  }, [refresh])

  return (
    <div>
      <table className='min-w-full table-fixed'>
        <thead>
          <tr className='border-t border-gray-300 '>
            {(columns || []).map((col) => (
              <th
                key={col.name}
                className=' pr-6 px-9 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                <span className='lg:pl-2'>{col.name}</span>
              </th>
            ))}
            <th className=' pr-6 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'></th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-slate-500 '>
          {(hotels || []).map((dt: any, index: number) => (
            <tr className='hover:bg-[#5D5145] hover:bg-opacity-20 ' key={dt.id}>
              <td className='px-12 py-3 text-sm font-semibold text-black'>
                {index + 1}
              </td>
              <td className='px-12 py-3 text-sm font-semibold text-black'>
                {dt.hotel_name}
              </td>
              <td className='px-12 py-3 text-sm font-semibold display flex'>
                {renderStars(dt.hotel_rating_star)}
              </td>
              <td className='px-12 py-3 text-sm font-semibold text-black'>
                {dt.hotel_phonenumber}
              </td>
              <td className='px-12 py-3 text-sm font-semibold text-black'>
                {new Date(dt.hotel_modified_date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </td>
              <td className='px-6 py-3 text-sm text-gray-900 text-right'>
                <Menu as='div' className='relative inline-block text-left'>
                  <div>
                    <Menu.Button className='inline-flex w-full justify-center rounded-md bg-none px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                      <BsThreeDotsVertical
                        className='ml-2 -mr-1 h-5 w-5 text-gray-700 hover:text-violet-700'
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
                                  ? 'bg-[#5D5145] text-white'
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
                                  ? 'bg-[#5D5145] text-white'
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
                                  ? 'bg-[#5D5145] text-white'
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
                                  ? 'bg-[#5D5145] text-white'
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
    </div>
  )
}

export default Hotels
