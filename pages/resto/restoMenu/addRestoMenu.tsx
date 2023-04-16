/* eslint-disable react-hooks/rules-of-hooks */
import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { doAdd } from '../../../redux/restoSchema/action/actionReme'
import { useDispatch } from 'react-redux'
import { Switch } from '@headlessui/react'
import { ToastContainer, toast } from 'react-toastify'

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
      toast.success(`Berhasil menambahkan Menu ${data.reme_name}`)
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
                    <ToastContainer />
                    <form onSubmit={handleSubmit(handleSave, handleError)}>
                      <div className='relative z-0 w-full mb-6 group'>
                        <input
                          type='text'
                          id='name'
                          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                          placeholder=' '
                          {...register('reme_name', registerOptions.reme_name)}
                        />
                        {errors?.reme_name && (
                          <p className='text-red-500 text-xs italic'>
                            {errors.reme_name.message}
                          </p>
                        )}
                        <label
                          htmlFor='name'
                          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                          Nama
                        </label>
                      </div>
                      <div className='relative z-0 w-full mb-6 group'>
                        <textarea
                          id='description'
                          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                          placeholder=' '
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
                        <label
                          htmlFor='description'
                          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                          Deskripsi
                        </label>
                      </div>
                      <div className='relative z-0 w-full mb-6 group'>
                        <input
                          type='text'
                          id='faci'
                          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                          placeholder=' '
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
                        <label
                          htmlFor='faci'
                          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                        >
                          Facilities ID
                        </label>
                      </div>
                      <div className='grid md:grid-cols-2 md:gap-6'>
                        <div className='relative z-0 w-full mb-6 group'>
                          <input
                            type='text'
                            id='price'
                            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                            placeholder=' '
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
                          <label
                            htmlFor='price'
                            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                          >
                            Harga
                          </label>
                        </div>
                        <div className='relative z-0 w-full mb-6 group'>
                          <div className='flex items-center'>
                            <Switch
                              checked={status}
                              onChange={handleStatusChange}
                              className={`${
                                status ? 'bg-green-500' : 'bg-gray-300'
                              } relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
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
                                status ? 'text-green-500' : 'text-gray-500'
                              }`}
                            >
                              {status ? 'Available' : 'Empty'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className='flex justify-end space-x-4'>
                        <button
                          type='submit'
                          className='bg-primary hover:bg-primary text-white font-bold py-2 px-4 border-b-4 border-primary hover:border-primary rounded'
                        >
                          Submit
                        </button>
                        <button
                          className='bg-danger hover:bg-danger text-white font-bold py-2 px-4 border-b-4 border-danger hover:border-danger rounded'
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
