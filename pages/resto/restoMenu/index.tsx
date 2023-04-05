/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, Fragment } from 'react'
import {
  BsFillPencilFill,
  BsThreeDotsVertical,
  BsTrashFill,
  BsFillCloudUploadFill,
} from 'react-icons/bs'
import AddRestoMenu from './addRestoMenu'
import UploadPhotos from '../restoMenuPhotos/addUploadRestoMenuPhotos'
// import editReme from './editReme'
import { useDispatch, useSelector } from 'react-redux'
import {
  doDelete,
  doRequestGetReme,
} from '../../../redux/restoSchema/action/actionReme'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import EditRestoMenu from './editRestoMenu'

// import { SearchInput } from '../../../components/searchInput'

const restoMenu = () => {
  const { restoMenus = [], refresh } = useSelector(
    (state: any) => state.remeReducers
  )

  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(5)

  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState({
    status: false,
    id: 0,
    data: [{}],
  })
  const [isUpload, setIsUpload] = useState({
    status: false,
    id: 0,
    data: [{}],
  })
  const dispatch = useDispatch()

  const columns = [
    { name: 'Icon' },
    { name: 'ID' },
    { name: 'Menu Name' },
    { name: 'Price' },
    { name: 'Status' },
    { name: 'Action' },
  ]

  const handleSearchChange = (e: any): void => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // reset currentPage only when search term changes
    handleGetData() // call handleGetData to fetch data again
  }

  const editOpen = (id: number, data: any[]) => {
    setIsEdit((prev) => {
      return { ...prev, status: true, id: id, data: data }
    })
  }

  const uploadOpen = (id: number, data: any[]) => {
    setIsUpload((prev) => {
      return { ...prev, status: true, id: id, data: data }
    })
  }

  const deleteOpen = async (id: number) => {
    const confirmed = window.confirm(
      `Apakah anda Yakin akan menghapus Menu dengan ID - ${id} ?`
    )
    if (confirmed) {
      dispatch(doDelete(id))
    }
  }

  const handleGetData = () => {
    dispatch(doRequestGetReme(searchTerm, currentPage, limit))
  }

  useEffect(() => {
    handleGetData()
  }, [refresh, currentPage, limit])

  useEffect(() => {
    handleGetData()
  }, [searchTerm])

  // Calculate total pages
  const totalData = restoMenus ? restoMenus.length : 0

  const totalPages = Math.ceil(restoMenus.length / limit)

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className='bg-white'>
      <>
        {/* component */}
        <div className='bg-white p-8 rounded-md w-full'>
          <div className=' flex items-center justify-between pb-6'>
            <div>
              <h2 className='text-gray-600 font-semibold'>Resto Menu Tabel</h2>
              <span className='text-xs'>All products item</span>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex bg-gray-50 items-center p-2 rounded-md'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  />
                </svg>
                <input
                  className='bg-gray-50 outline-none ml-1 block '
                  type='text'
                  name=''
                  id=''
                  placeholder='search...'
                  // value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              {/* FILTER HIGH TO LOW AND LOW TO HIGH */}
              {/* component */}
              <div className='lg:ml-40 ml-10 space-x-8'>
                <div className='relative inline-flex self-center'>
                  <svg
                    className='text-white bg-blue-700 absolute top-0 right-0 m-2 pointer-events-none p-2 rounded'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    width='25px'
                    height='25px'
                    viewBox='0 0 38 22'
                    version='1.1'
                  >
                    <title>F09B337F-81F6-41AC-8924-EC55BA135736</title>
                    <g
                      id='ZahnhelferDE—Design'
                      stroke='none'
                      strokeWidth={1}
                      fill='none'
                      fillRule='evenodd'
                    >
                      <g
                        id='ZahnhelferDE–Icon&Asset-Download'
                        transform='translate(-539.000000, -199.000000)'
                        fill='#ffffff'
                        fillRule='nonzero'
                      >
                        <g
                          id='Icon-/-ArrowRight-Copy-2'
                          transform='translate(538.000000, 183.521208)'
                        >
                          <polygon
                            id='Path-Copy'
                            transform='translate(20.000000, 18.384776) rotate(135.000000) translate(-20.000000, -18.384776) '
                            points='33 5.38477631 33 31.3847763 29 31.3847763 28.999 9.38379168 7 9.38477631 7 5.38477631'
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                  <select className='text-2xl font-bold rounded border-2 border-blue-700 text-gray-600 h-10 w-60 pl-5 pr-5 bg-white hover:border-gray-400 focus:outline-none appearance-none'>
                    <option>Low-High</option>
                    <option>High-Low</option>
                  </select>
                </div>
              </div>
              {/* </> */}

              <div className='lg:ml-40 ml-10 space-x-8'>
                {/* <button className='bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer'>
                  New Report
                </button> */}
                <button
                  onClick={() => setIsOpen(true)}
                  type='button'
                  className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
              <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                <table className='min-w-full leading-normal'>
                  <thead>
                    <tr>
                      {((columns && columns) || []).map((col) => (
                        <th
                          key={col.name}
                          className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider'
                        >
                          <span className='lg:pl-2'>{col.name}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {((restoMenus && restoMenus.data) || []).map(
                      (restoMenu: any) => (
                        <>
                          <tr key={restoMenu.reme_id}>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                              <div className='flex items-center'>
                                <div className='flex-shrink-0 w-10 h-10'>
                                  <img
                                    src='https://media.istockphoto.com/id/1258873084/id/vektor/logo-abstrak-kafe-atau-restoran-sendok-dan-garpu-di-piring-desain-logo-makanan-ilustrasi.jpg?s=612x612&w=0&k=20&c=v3MkYEDgB09kn_NAJbekqA2M3zQ9SDjpqo6IbLeDwF0='
                                    alt='waw'
                                    width={1000}
                                    height={1000}
                                    className='w-full h-full rounded-full'
                                  />
                                </div>
                              </div>
                            </td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                              <p className='text-gray-900 whitespace-no-wrap'>
                                {restoMenu.reme_id}
                              </p>
                            </td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                              <p className='text-gray-900 whitespace-no-wrap'>
                                {restoMenu.reme_name}
                              </p>
                            </td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                              <p className='text-gray-900 whitespace-no-wrap'>
                                {new Intl.NumberFormat('id-ID', {
                                  style: 'currency',
                                  currency: 'IDR',
                                }).format(
                                  parseInt(
                                    restoMenu.reme_price.replace(/\D/g, '')
                                  )
                                )}
                              </p>
                            </td>
                            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                              <span
                                className={`absolute insert-0 ${
                                  restoMenu.reme_status === 'empty'
                                    ? 'relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight'
                                    : 'relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
                                }`}
                              >
                                <span
                                  className={`absolute inset-0 ${
                                    restoMenu.reme_status === 'empty'
                                      ? 'bg-red-200'
                                      : 'bg-green-200'
                                  } opacity-50 rounded-full`}
                                />
                                <span className='relative'>
                                  {restoMenu.reme_status}
                                </span>
                              </span>
                            </td>
                            <td className='px-6 py-3 text-sm text-gray-900'>
                              <Menu
                                as='div'
                                className='relative inline-block  text-left'
                              >
                                <div>
                                  <Menu.Button className='inline-flex  w-full justify-center rounded-md bg-none px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
                                    <BsThreeDotsVertical
                                      className='ml-2 -mr-1 h-5 w-5 text-blue-900 hover:text-violet-300'
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
                                  <Menu.Items className='absolute  right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
                                    {/* EDIT */}
                                    <div className='px-1 py-1 '>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            className={`${
                                              active
                                                ? 'bg-blue-500 text-white'
                                                : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            onClick={() =>
                                              editOpen(
                                                restoMenu.reme_id,
                                                restoMenu
                                              )
                                            }
                                          >
                                            {active ? (
                                              <BsFillPencilFill
                                                className='mr-2 h-5 w-5'
                                                aria-hidden='true'
                                              />
                                            ) : (
                                              <BsFillPencilFill
                                                className='mr-2 h-5 w-5'
                                                aria-hidden='true'
                                              />
                                            )}
                                            Edit
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                    {/* DELETE */}
                                    <div className='px-1 py-1'>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            className={`${
                                              active
                                                ? 'bg-blue-500 text-white'
                                                : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            onClick={() =>
                                              deleteOpen(restoMenu.reme_id)
                                            }
                                          >
                                            {active ? (
                                              <BsTrashFill
                                                className='mr-2 h-5 w-5 '
                                                aria-hidden='true'
                                              />
                                            ) : (
                                              <BsTrashFill
                                                className='mr-2 h-5 w-5 '
                                                aria-hidden='true'
                                              />
                                            )}
                                            Delete
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                    {/* UPLOAD PHOTO */}
                                    <div className='px-1 py-1'>
                                      <Menu.Item>
                                        {({ active }) => (
                                          <button
                                            className={`${
                                              active
                                                ? 'bg-blue-500 text-white'
                                                : 'text-gray-900'
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                            onClick={() =>
                                              uploadOpen(
                                                restoMenu.reme_id,
                                                restoMenu
                                              )
                                            }
                                          >
                                            {active ? (
                                              <BsFillCloudUploadFill
                                                className='mr-2 h-5 w-5 '
                                                aria-hidden='true'
                                              />
                                            ) : (
                                              <BsFillCloudUploadFill
                                                className='mr-2 h-5 w-5 '
                                                aria-hidden='true'
                                              />
                                            )}
                                            Upload Image
                                          </button>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </td>
                          </tr>
                        </>
                      )
                    )}
                  </tbody>
                </table>
                <div className='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between'>
                  <span className='text-xs xs:text-sm text-gray-900'>
                    Showing Page {currentPage}
                  </span>

                  <div className='inline-flex mt-2 xs:mt-0'>
                    <button
                      className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    {currentPage !== totalPages && (
                      <button
                        className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        Next
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <ToastContainer autoClose={5000} />
      {isOpen ? (
        <AddRestoMenu isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      ) : null}
      {isEdit.status ? (
        <EditRestoMenu
          dataResto={isEdit.data}
          isEdit={isEdit}
          closeModal={() =>
            setIsEdit((prev) => {
              return { ...prev, status: false }
            })
          }
        />
      ) : null}
      {isUpload.status ? (
        <UploadPhotos
          dataResto={isUpload.data}
          isUpload={isUpload}
          closeModal={() =>
            setIsUpload((prev) => {
              return { ...prev, status: false }
            })
          }
        />
      ) : null}
    </div>
  )
}
export default restoMenu
