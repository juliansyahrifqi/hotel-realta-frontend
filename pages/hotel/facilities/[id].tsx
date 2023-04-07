import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdAddBox } from 'react-icons/md'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import AddFacilities from './addFacilities'
import EditFacilities from './editFacilities'

const Facilities = () => {
  let { hotels, refresh } = useSelector((state: any) => state.hotelsReducers)
  const [hotel, setHotels] = useState<any>({})
  // console.log(hotels)

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
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState({
    status: false,
    hotel_id: 0,
  })

  const editOpen = (faci_id: number) => {
    setIsEdit((prev) => {
      return { ...prev, status: true, faci_id: faci_id }
    })
  }
  const columns = [
    { name: 'NO' },
    { name: 'Facility Name' },
    { name: 'Room Number' },
    { name: 'Max Vacant' },
    { name: 'Start End Date' },
    { name: 'Range Price' },
    { name: 'Discount' },
    { name: 'Rate Price' },
    { name: 'Tax' },
  ]
  const dispatch = useDispatch()
  const router = useRouter().query
  useEffect(() => {
    const filter = hotels.data.filter((data: any) => {
      if (data.hotel_id === Number(router.id)) {
        return data
      }
    })[0]
    setHotels(filter)
  }, [refresh])

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg h-screen'>
      {/* breadcrumb */}
      <div className='bg-white text-black py-2 px-6 flex font-bold border-t-2 border-r-2 border-l-2 items-center justify-between'>
        <nav className='flex' aria-label='Breadcrumb'>
          <ol className='inline-flex items-center space-x-1 md:space-x-3'>
            <li className='inline-flex items-center'>
              <a
                href='/'
                className='inline-flex items-center font-bold text-black text-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
              >
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className='flex items-center'>
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-gray-400'
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
                <a
                  href='/hotel/hotels'
                  className='ml-1 text-sm text-black font-bold hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Hotels
                </a>
              </div>
            </li>
            <li>
              <div className='flex items-center'>
                <svg
                  aria-hidden='true'
                  className='w-6 h-6 text-gray-400'
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
                <a
                  href={`/hotel/facilities/${router.id}`}
                  className='ml-1 text-sm text-black font-bold hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
                >
                  Facilities
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      {/* Header */}
      <div className='bg-white text-black py-2 px-6 flex border-2 items-center justify-between'>
        <div className='mb-4 mt-4 ml-10'>
          <div className='text-xl font-bold'>{hotel.hotel_name}</div>
          <div className='text-xs font-semibold'>
            {` ${hotel.address && hotel.address.addr_line1}, ${
              hotel.address && hotel.address.addr_line2
            }`}
          </div>
        </div>

        <div className='mr-52'>
          <div className='mr-4'>{hotel.hotel_phonenumber}</div>
          <div className='display flex'>
            {renderStars(hotel.hotel_rating_star)}
          </div>
        </div>
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg h-screen'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-medium text-white uppercase bg-primary dark:bg-black dark:text-black'>
            <tr>
              {(columns || []).map((col) => (
                <th key={col.name} style={{ whiteSpace: 'nowrap' }}>
                  <span className='px-6 py-3'>{col.name}</span>
                </th>
              ))}
              <th className='px-6 py-3 '>
                <button
                  className='flex items-center'
                  onClick={() => setIsOpen(true)}
                >
                  <MdAddBox className='mr-1' />
                  <span className='mr-2' style={{ whiteSpace: 'nowrap' }}>
                    Add Facilities
                  </span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {(hotel.facilitiesHotels || []).map((dt: any, index: number) => (
              <tr
                key={dt.faci_id}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
              >
                <td className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {index + 1}
                </td>
                <td className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {dt.faci_name}
                  <br />
                  {dt.category_group.cagro_name}
                </td>
                <td className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center'>
                  {dt.faci_room_number.substring(4)}
                </td>
                <td className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center'>
                  {`${dt.faci_max_number} `}
                  {dt.faci_measure_unit}
                </td>
                <td className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {new Date(dt.faci_startdate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                  <br />
                  {new Date(dt.faci_enddate).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })}
                </td>
                <td className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(
                    Math.round(
                      parseFloat(dt.faci_low_price.replace(/[^\d.-]/g, ''))
                    )
                  )}
                  <br />
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(
                    Math.round(
                      parseFloat(dt.faci_high_price.replace(/[^\d.-]/g, ''))
                    )
                  )}
                </td>

                <td className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center'>
                  {(dt.faci_discount * 100).toFixed(0)}%
                </td>
                <td className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(
                    Math.round(
                      parseFloat(dt.faci_rate_price.replace(/[^\d.-]/g, ''))
                    )
                  )}
                </td>
                <td className='px-8 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  {(dt.faci_tax_rate * 100).toFixed(0)}%
                </td>
                <td className='px-10 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
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
                                onClick={() => editOpen(dt.faci_id)}
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
                                Upload Photos
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
                                Price History
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
      {isOpen ? (
        <AddFacilities isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      ) : null}
      {isEdit.status ? (
        <EditFacilities
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

export default Facilities
