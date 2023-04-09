import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import {
  doAddFacilities,
  doAddHotels,
  doRequestGetCategory,
  doRequestGetMembers,
} from '@/redux/hotel/action/actionReducer'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useRouter } from 'next/router'

export default function AddFacilities(props: any) {
  //==========Data Redux Saga================
  let { categoryFaci, messageCate, refreshCate } = useSelector(
    (state: any) => state.categoryFaciReducers
  )
  let { membersFaci, messageMemb, refreshMemb } = useSelector(
    (state: any) => state.membersFaciReducers
  )
  console.log('test:', categoryFaci)
  // console.log(membersFaci)

  //============Category Var==========

  //=========Registration============
  type FormValues = {
    faci_description: string
    faci_name: string
    faci_max_number: number //2
    faci_measure_unit: string //beds | people
    faci_room_number: string //101
    faci_startdate: string
    faci_enddate: string
    faci_low_price: string
    faci_high_price: string
    faci_rate_price: string
    faci_discount: number
    faci_tax_rate: number
    faci_cagro_id: number
    faci_hotel_id: number
    faci_memb_name: string
    faci_user_id: number
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const router = useRouter().query
  const handleRegistration = async (data: any) => {
    //===Start Date===
    const dayStart = new Date(startDate ? startDate : '').getDate()
    const monthStart = new Date(startDate ? startDate : '').getMonth()
    const yearStart = new Date(startDate ? startDate : '').getFullYear()
    const fullStartDate = yearStart + '/' + (monthStart + 1) + '/' + dayStart
    //===End Date===
    const dayEnd = new Date(endDate ? endDate : '').getDate()
    const monthEnd = new Date(endDate ? endDate : '').getMonth()
    const yearEnd = new Date(endDate ? endDate : '').getFullYear()
    const fullEndDate = yearEnd + '/' + (monthEnd + 1) + '/' + dayEnd
    // console.log('tes atau apa gitu', data)

    const roomNumber = Number(data.faci_max_number.split(' ')[0])
    const measureUnit = data.faci_max_number.split(' ')[1]

    const dataForm = {
      faci_name: data.faci_name,
      faci_description: 'ini Deskripsi',
      faci_max_number: roomNumber, //2
      faci_measure_unit: measureUnit, //beds | people
      faci_room_number: data.faci_room_number, //101
      faci_startdate: fullStartDate,
      faci_enddate: fullEndDate,
      faci_low_price: data.faci_low_price,
      faci_high_price: data.faci_high_price,
      faci_discount: data.faci_discount,
      faci_tax_rate: data.faci_tax_rate,
      faci_cagro_id: data.faci_cagro_id,
      faci_hotel_id: router.id,
      faci_memb_name: data.faci_memb_name,
      faci_user_id: '1',
    }
    // console.log('terserah', dataForm)

    dispatch(doAddFacilities(dataForm))
    props.closeModal()
  }
  const handleError = (errors: any) => {}

  const registerOptions = {
    faci_name: { required: 'Name is required' },
    faci_room_number: { required: 'Name is required' },
    faci_max_number: { required: 'Name is required' },
    faci_low_price: { required: 'Name is required' },
    faci_high_price: { required: 'Name is required' },
    faci_discount: { required: 'Name is required' },
    faci_tax_rate: { required: 'Name is required' },
    faci_startdate: { required: 'Name is required' },
    faci_enddate: { required: 'Name is required' },
    faci_cagro_id: { required: 'Name is required' },
    faci_memb_name: { required: 'Name is required' },
  }
  useEffect(() => {
    dispatch(doRequestGetMembers())
    dispatch(doRequestGetCategory())
  }, [dispatch, refreshCate, refreshMemb])

  return (
    <div>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-40' onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-primary'
                  >
                    ADD FACILITIES
                  </Dialog.Title>
                  <hr className='border-b border-t border-black h-1 my-4' />
                  <div className='mt-2'>
                    <form
                      onSubmit={handleSubmit(handleRegistration, handleError)}
                    >
                      <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className='relative z-0 w-full mb-6 group'>
                          <input
                            type='text'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            {...register(
                              'faci_name',
                              registerOptions.faci_name
                            )}
                          />
                          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Facilty Name
                          </label>
                        </div>
                        <div className='flex items-center mb-6 group space-x-4'>
                          <label className='peer-focus:font-medium text-sm text-gray-500 '>
                            Category
                          </label>
                          <select
                            className='w-full px-2 py-2 border rounded-md text-sm focus:outline-none focus:shadow-outline-primary'
                            {...register(
                              'faci_cagro_id',
                              registerOptions.faci_cagro_id
                            )}
                          >
                            <option selected> Isi Woii</option>
                            {categoryFaci.map((data: any) => (
                              <option value={data.cagro_id} key={data.cagro_id}>
                                {data.cagro_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className='grid md:grid-cols-2 md:gap-6'>
                          <div className='relative z-0 w-full mb-6 group'>
                            <input
                              type='text'
                              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                              {...register(
                                'faci_room_number',
                                registerOptions.faci_room_number
                              )}
                            />
                            <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                              Rooms
                            </label>
                          </div>
                          <div className='relative z-0 w-full mb-6 group'>
                            <input
                              type='text'
                              className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                              {...register(
                                'faci_max_number',
                                registerOptions.faci_max_number
                              )}
                            />
                            <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                              Max Vacant
                            </label>
                          </div>
                        </div>
                        <div className='flex items-center mb-6 group space-x-4'>
                          <label className='peer-focus:font-medium text-sm text-gray-500 '>
                            Members
                          </label>
                          <select
                            className='w-full px-2 py-2 border rounded-md text-sm focus:outline-none focus:shadow-outline-primary'
                            {...register(
                              'faci_memb_name',
                              registerOptions.faci_memb_name
                            )}
                          >
                            <option selected> Isi Woii</option>
                            {membersFaci.map((data: any) => (
                              <option
                                value={data.memb_name}
                                key={data.memb_name}
                              >
                                {data.memb_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className='relative z-0 w-full mb-6 group'>
                          <input
                            type='text'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            {...register(
                              'faci_low_price',
                              registerOptions.faci_low_price
                            )}
                          />
                          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Low Price
                          </label>
                        </div>
                        <div className='relative z-0 w-full mb-6 group'>
                          <input
                            type='text'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            {...register(
                              'faci_high_price',
                              registerOptions.faci_high_price
                            )}
                          />
                          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            High Price
                          </label>
                        </div>
                      </div>
                      <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className='relative z-0 w-full mb-6 group'>
                          <input
                            type='text'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            {...register(
                              'faci_discount',
                              registerOptions.faci_discount
                            )}
                          />
                          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Disc %
                          </label>
                        </div>
                        <div className='relative z-0 w-full mb-6 group'>
                          <input
                            type='text'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            {...register(
                              'faci_tax_rate',
                              registerOptions.faci_tax_rate
                            )}
                          />
                          <label className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                            Tax %
                          </label>
                        </div>
                      </div>
                      <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className='relative z-0 w-full mb-6 group'>
                          <label className='text-sm text-gray-500'>
                            Start Date
                          </label>
                          <DatePicker
                            selected={startDate}
                            onChange={(date: any) => setStartDate(date)}
                            dateFormat='dd/MM/yyyy'
                            className='block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                          />
                        </div>
                        <div className='relative z-0 w-full mb-6 group'>
                          <label className='text-sm text-gray-500'>
                            End Date
                          </label>
                          <DatePicker
                            selected={endDate}
                            onChange={(date: any) => setEndDate(date)}
                            dateFormat='dd/MM/yyyy'
                            className='block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                          />
                        </div>
                      </div>

                      <div className=' flex-row space-x-4 mt-4'>
                        <button className='text-white bg-secondary  hover:bg-emerald-600 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'>
                          Submit
                        </button>

                        <button
                          className='text-white bg-danger  hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800'
                          onClick={props.closeModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
