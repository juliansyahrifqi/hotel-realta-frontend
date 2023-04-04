/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { doAdd } from '../../../redux/restoSchema/action/actionReme'
import { useDispatch } from 'react-redux'
import { Switch } from '@headlessui/react'

export default function AddRestoMenu(props: any) {
  type FormValues = {
    reme_faci_id: number
    reme_name: string
    reme_description: string
    reme_price: number
    reme_status: string
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const dispatch = useDispatch()

  //* Tambahan saya menggunakan switch/toggle
  const [status, setStatus] = useState(false)
  const handleStatusChange = () => {
    setStatus(!status)
  }
  const handleError = (errors: any) => {}
  const handleSave = async (data: FormValues) => {
    try {
      const dataAll = {
        reme_faci_id: data.reme_faci_id,
        reme_name: data.reme_name,
        reme_description: data.reme_description,
        reme_price: data.reme_price,
        reme_status: (data.reme_status = status ? 'available' : 'empty'),
      }
      await dispatch(doAdd(dataAll))
      props.closeModal()
    } catch (error) {
      console.error(error)
    }
  }
  // !

  const registerOptions = {
    reme_faci_id: { required: 'Faci ID is required' },
    reme_name: { required: 'Name is required' },
    reme_description: { required: 'Description is required' },
    reme_price: { required: 'Price is required' },
    reme_status: { required: 'Status is required' },
  }

  return (
    <div>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={props.closeModal}>
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
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title className='text-lg font-medium leading-6 text-gray-900'>
                    Tambah Menu
                  </Dialog.Title>
                  <div className='mt-4'>
                    <form onSubmit={handleSubmit(handleSave, handleError)}>
                      <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>
                          Nama
                        </label>
                        <input
                          className='shadow appearance-none border rounded w-full py-3 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-green-500'
                          id='name'
                          type='text'
                          {...register('reme_name', registerOptions.reme_name)}
                        />
                        {errors?.reme_name && (
                          <p className='text-red-500 text-xs italic'>
                            {errors.reme_name.message}
                          </p>
                        )}
                      </div>

                      <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>
                          Deskripsi
                        </label>
                        <input
                          className='shadow appearance-none border rounded w-full py-3 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-green-500'
                          id='description'
                          type='text'
                          {...register(
                            'reme_description',
                            registerOptions.reme_description
                          )}
                        />
                        {errors?.reme_description && (
                          <p className='text-red-500 text-xs italic'>
                            {errors.reme_description.message}
                          </p>
                        )}
                      </div>

                      <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>
                          Faci ID
                        </label>
                        <input
                          className='shadow appearance-none border rounded w-full py-3 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-green-500'
                          id='description'
                          type='text'
                          {...register(
                            'reme_faci_id',
                            registerOptions.reme_faci_id
                          )}
                        />
                        {errors?.reme_faci_id && (
                          <p className='text-red-500 text-xs italic'>
                            {errors.reme_faci_id.message}
                          </p>
                        )}
                      </div>

                      <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>
                          Harga
                        </label>
                        <input
                          className='shadow appearance-none border rounded w-full py-3 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:bg-green-500'
                          id='price'
                          type='text'
                          {...register(
                            'reme_price',
                            registerOptions.reme_price
                          )}
                        />
                        {errors?.reme_price && (
                          <p className='text-red-500 text-xs italic'>
                            {errors.reme_price.message}
                          </p>
                        )}
                      </div>

                      {/* TOGGLE AVAILABLE */}
                      <div className='mb-4 flex items-center'>
                        <label className='block text-gray-700 font-bold mr-4'>
                          Status
                        </label>
                        <div className='flex items-center'>
                          <Switch
                            checked={status}
                            onChange={handleStatusChange}
                            className={`${status ? 'bg-teal-500' : 'bg-red-700'}
      relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                          >
                            <span className='sr-only'>Use setting</span>
                            <span
                              aria-hidden='true'
                              className={`${
                                status ? 'translate-x-9' : 'translate-x-0'
                              } pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                          </Switch>
                          <p
                            className={`text-lg ml-4 font-medium ${
                              status ? 'text-green-500' : 'text-red-500'
                            }`}
                          >
                            {status ? 'Available' : 'Empty'}
                          </p>
                        </div>
                      </div>

                      {/* TOGGLE AVAILABLE */}

                      <div className='flex justify-between'>
                        <button
                          type='submit'
                          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
                        >
                          Submit
                        </button>

                        <button
                          className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800'
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
