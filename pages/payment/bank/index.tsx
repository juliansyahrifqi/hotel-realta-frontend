import {
  doDeleteBank,
  doGetBank,
} from '@/redux/payment/action/bankActionReducer'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import {
  BsFillPencilFill,
  BsThreeDotsVertical,
  BsTrashFill,
} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import AddBank from './addBank'
import EditBank from './editBank'

export default function bank() {
  let { banks, message, refresh } = useSelector(
    (state: any) => state.bankReducers
  )
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(false)
  const [isEdit, setIsEdit] = useState({
    status: false,
    id: 0,
    data: [{}],
  })

  const columns = [
    { name: 'Bank Code' },
    { name: 'Bank Name' },
    { name: 'Action' },
  ]

  const editOpen = (id: number, data: any[]) => {
    setIsEdit((prev) => {
      return { ...prev, status: true, id: id, data: data }
    })
  }

  const handleSearchChange = (e: any): void => {
    setSearchTerm(e.target.value)
    // reset currentPage only when search term changes
    // handleGetData() // call handleGetData to fetch data again
  }

  const deleteOpen = async (id: number) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete the bank data with ID ${id} ?`
    )
    if (confirmed) {
      dispatch(doDeleteBank(id))
    }
  }

  // const handleGetData = () => {
  //   dispatch(doGetBank(searchTerm))
  // }

  useEffect(() => {
    dispatch(doGetBank(searchTerm))
  }, [refresh, searchTerm])

  return (
    <div className='bg-white'>
      <>
        {/* component */}
        <div className='bg-white p-8 rounded-md w-full'>
          <div className=' flex items-center justify-between pb-6'>
            <div>
              <h2
                style={{ fontSize: '1.5em' }}
                className='text-gray-600 font-semibold'
              >
                Bank
              </h2>
            </div>
            <div className='flex items-center justify-between'>
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
                className='bg-gray-50 outline-none ml-1 block rounded-2xl'
                type='text'
                name=''
                id=''
                placeholder='search...'
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <div className='lg:ml-40 ml-10 space-x-8'>
                {/* <button className='bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer'>
                  New Report
                </button> */}
                <button
                  onClick={() => setOpen(true)}
                  type='button'
                  className='order-0 inline-flex items-center px-4 py-2 border border-transparent rounded-md
                  bg-blue-900 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
            sm:order-1'
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4'>
              <div className='inline-block min-w-full shadow rounded-lg'>
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
                    {((banks && banks.data) || []).map((banks: any) => (
                      <>
                        <tr key={banks.bank_code}>
                          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <div className='flex items-center'>
                              <div className='flex-shrink-0 w-10 h-10'>
                                {banks.bank_code}
                              </div>
                            </div>
                          </td>
                          <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>
                              {banks.bank_name}
                            </p>
                          </td>

                          <td className='px-6 py-3 text-sm border-b border-gray-200 text-gray-900'>
                            <Menu
                              as='div'
                              className='relative inline-block text-left'
                            >
                              <div>
                                <Menu.Button className='inline-flex w-full justify-center rounded-md bg-none px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
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
                                <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
                                  {/* EDIT */}
                                  <div className='px-1 py-1 '>
                                    <Menu.Item>
                                      {({ active }) => (
                                        <button
                                          className={`${
                                            active
                                              ? 'bg-blue-900 text-white'
                                              : 'text-gray-900'
                                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                          onClick={() =>
                                            editOpen(
                                              banks.bank_entity_id,
                                              banks
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
                                              ? 'bg-red-600 text-white'
                                              : 'text-gray-900'
                                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                          onClick={() =>
                                            deleteOpen(banks.bank_entity_id)
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
                                </Menu.Items>
                              </Transition>
                            </Menu>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
                {/* <div className='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between'>
                  <span className='text-xs xs:text-sm text-gray-900'>
                    Showing Page {currentPage}
                  </span>

                  <div className='inline-flex mt-2 xs:mt-0'>
                    <button
                      className='text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l'
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Prev
                    </button>
                    &nbsp; &nbsp;
                    <button
                      className='text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r'
                      disabled={currentPage * limit >= restoMenus.length}
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
      {/* <ToastContainer autoClose={5000} /> */}
      {isOpen ? (
        <AddBank isOpen={isOpen} closeModal={() => setOpen(false)} />
      ) : null}
      {isEdit.status ? (
        <EditBank
          dataBank={isEdit.data}
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

// return(
//   <div className="bg-white">
// <section className="py-1 bg-blueGray-50">
//   {/* search */}
// <form className="flex items-center">
//     <label htmlFor="simple-search" className="sr-only">Search</label>
//     <div className="relative w-full">
//         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
//         </div>
//         <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
//     </div>
//     <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
//         <span className="sr-only">Search</span>
//     </button>
// </form>
// {/* searchend */}
// <div className="w-full px-4 mx-auto mt-8">
//   <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//     <div className="rounded-t mb-0 px-4 py-3 border-0">
//       <div className="flex flex-wrap items-center">
//         <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//           <h3 className="font-semibold text-base text-blueGray-700">BANK</h3>
//         </div>
//         <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//           <button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
//         </div>
//       </div>
//     </div>

//     <div className="block w-full overflow-x-auto">
//       <table className="items-center bg-transparent w-full border-collapse">
//         <thead>
//           <tr>
//             {(column || []).map((data, index) => (
//               <th key={index} className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                 {data.name}

//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {(banks.data || []).map((data: any, index:any) => (
//             <tr key={index}>
//               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.bank_code}</td>
//               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">{data.bank_name}</td>
//               <Menu as="div" className="w-full text-right">
//                                     <div>
//                                     <Menu.Button className="inline-flex w-full justify-center rounded-md bg-none bg-opacity-20
//                                     px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">

//                                         <BsThreeDotsVertical
//                                         className="ml-2 -mr-1 h-5 w-5 text-slate-900 hover:text-violet-100"
//                                         aria-hidden="true"
//                                         />
//                                     </Menu.Button>

//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// </div>

// {/* <ToastContainer autoClose={5000} /> */}
//       {/* {isOpen ? (
//         <addBank isOpen={isOpen} closeModal={() => setOpen(false)} />
//       ) : null} */}
//       {/* {isEdit.status ? (
//         <EditRestoMenu
//           dataResto={isEdit.data}
//           isEdit={isEdit}
//           closeModal={() =>
//             setIsEdit((prev) => {
//               return { ...prev, status: false }
//             })
//           }
//         />
//       ) : null} */}
// </section>
// </div>
// )
// }
