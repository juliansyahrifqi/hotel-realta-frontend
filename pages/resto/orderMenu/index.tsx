/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, Fragment } from 'react'
import {
  BsFillPencilFill,
  BsThreeDotsVertical,
  BsTrashFill,
  BsFillCloudUploadFill,
} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { doRequestGetOrme } from '../../../redux/restoSchema/action/actionOrme'
import 'react-toastify/dist/ReactToastify.css'
import { Menu, Transition } from '@headlessui/react'

const orderMenu = () => {
  // REDUCER
  const { orderMenus = [], refresh } = useSelector(
    (state: any) => state.ormeReducers
  )
  // REDUCER

  // render logic ...
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doRequestGetOrme())
  }, [refresh])

  return (
    <div className='bg-white'>
      <>
        {/* component */}
        <meta charSet='UTF-8' />
        <link
          href='https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css'
          rel='stylesheet'
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n        * {\n            margin: 0;\n            padding: 0;\n        }\n        fieldset label span {\n            min-width: 125px;\n        }\n        fieldset .select::after {\n            content: '';\n            position: absolute;\n            width: 9px;\n            height: 5px;\n            right: 20px;\n            top: 50%;\n            margin-top: -2px;\n            background-image: url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='9' height='5' viewBox='0 0 9 5'><title>Arrow</title><path d='M.552 0H8.45c.58 0 .723.359.324.795L5.228 4.672a.97.97 0 0 1-1.454 0L.228.795C-.174.355-.031 0 .552 0z' fill='%23CFD7DF' fill-rule='evenodd'/></svg>\");\n            pointer-events: none;\n        }\n    ",
          }}
        />
        {/* <header className='flex flex-wrap'>
          <nav className='flex w-screen justify-between bg-gray-50 text-gray-600'>
            <div className='w-full xl:px-12 py-6 px-5 flex space-x-12 items-center '>
              <a className='text-2xl font-bold' href='#'>
                Checkout
              </a>

              <div className='hidden xl:flex items-center text-gray-600 space-x-5 items-center'>
                <a className='flex items-center hover:text-gray-900' href='#'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                  <span className='absolute flex ml-4 -mt-5'>
                    <span className='h-3 w-3 animate-ping absolute inline-flex rounded-full bg-pink-500 opacity-75' />
                    <span className='h-3 w-3 relative inline-flex rounded-full bg-pink-600' />
                  </span>
                </a>
              </div>
            </div>
            <a
              className='flex xl:hidden items-center mr-6 hover:text-gray-900'
              href='#'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
              <span className='flex absolute -mt-5 ml-4'>
                <span className='h-3 w-3 absolute bg-pink-500 opacity-75 inline-flex rounded-full animate-ping' />
                <span className='h-3 w-3 relative inline-flex rounded-full bg-pink-600' />
              </span>
            </a>
            <a
              className='xl:hidden self-center mr-12 hover:text-gray-900'
              href='#'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </a>
          </nav>
        </header> */}
        <div className='h-screen grid grid-cols-3'>
          <div className='lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12'>
            {/* INI BACAAN PILIH ITEM */}
            <div className='mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-gray-200 shadow rounded-md'>
              <div className='flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0'>
                <div className='text-sm font-medium ml-3'>2. PILIH ITEM</div>
              </div>
            </div>
            {/* INI BACAAN PILIH ITEM */}
            <div className='rounded-md'>
              {/* KIRIM KE PAYMENT */}
              <form id='payment-form' method='POST' action=''>
                <section>
                  <h2 className=' tracking-wide text-lg font-semibold text-gray-700 my-2'>
                    Enter your details
                  </h2>
                  <div className='flex flex-wrap'>
                    <div className='w-full lg:w-6/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlfor='grid-password'
                        >
                          Full Name
                        </label>
                        <input
                          type='text'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          defaultValue='lucky.jesse'
                        />
                      </div>
                    </div>
                    <div className='w-full lg:w-6/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlfor='grid-password'
                        >
                          Email
                        </label>
                        <input
                          type='email'
                          className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                          defaultValue='jesse@example.com'
                        />
                      </div>
                    </div>
                    <div className='w-full lg:w-6/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlfor='grid-password'
                        >
                          Mobile Number
                        </label>
                        <div className='flex'>
                          <select
                            name='country-code'
                            id='country-code'
                            className='mr-2 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-32 ease-linear transition-all duration-150'
                          >
                            <option value={+62}>+62 (IDN)</option>
                            <option value={+81}>+81 (JP)</option>
                            {/* tambahkan pilihan negara lainnya sesuai kebutuhan */}
                          </select>
                          <input
                            type='text'
                            name='phone-number'
                            id='phone-number'
                            className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                            placeholder='Enter your phone number'
                          />
                        </div>
                      </div>
                    </div>
                    <div className='w-full lg:w-6/12 px-4'>
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                          htmlfor='grid-password'
                        >
                          Send Passcode
                        </label>
                        <button
                          type='button'
                          className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full'
                          // className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-pink-400 hover:to-purple-400 text-white font-semibold py-2 px-4 rounded-full"
                        >
                          Send Passcode
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </form>
            </div>
            <div className='mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-gray-200 shadow rounded-md'>
              <div className='flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0'>
                <div className='text-sm font-medium ml-3'>
                  3. PILIH Pembayaran
                </div>
              </div>
            </div>
            <div className='rounded-md'>
              <section>
                <h2 className='uppercase tracking-wide text-lg font-semibold text-gray-700 my-2'>
                  Payment
                </h2>
                <p className='mb-2'>Pilih Pembayaran Anda:</p>
                <div className='flex flex-wrap'>
                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                        htmlFor='grid-password'
                      >
                        Tipe Pembayaran
                      </label>
                      <select className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                        <option value='cash'>Cash</option>
                        <option value='debit'>Debit</option>
                        <option value='goto'>Goto</option>
                        <option value='creditcard'>Credit Card</option>
                      </select>
                    </div>
                  </div>

                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                        htmlFor='grid-password'
                      >
                        Account Number
                      </label>
                      <input
                        type='email'
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        // defaultValue='jesse@example.com'
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className='rounded-md'>
              <section>
                {/* <h2 className='uppercase tracking-wide text-lg font-semibold text-gray-700 my-2'>
                  Payment
                </h2> */}
                <p className='mb-2'>Rekening dan Akun Realta</p>
                <div className='flex flex-wrap'>
                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                        htmlFor='grid-password'
                      >
                        Tipe Pembayaran
                      </label>
                      <select className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'>
                        <option value='cash'>Cash</option>
                        <option value='debit'>Debit</option>
                        <option value='goto'>Goto</option>
                        <option value='creditcard'>Credit Card</option>
                      </select>
                    </div>
                  </div>

                  <div className='w-full lg:w-6/12 px-4'>
                    <div className='relative w-full mb-3'>
                      <label
                        className='block uppercase text-blueGray-600 text-xs font-bold mb-2'
                        htmlFor='grid-password'
                      >
                        Account Number
                      </label>
                      <input
                        type='email'
                        className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                        // defaultValue='jesse@example.com'
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* KIRIM KE PAYMENT */}
          {/* CARD DETAIL */}
          <div className='col-span-1 bg-white lg:block hidden'>
            <h1 className='py-6 border-b-2 text-xl text-gray-600 px-8'>
              Order Summary
            </h1>
            <ul className='py-6 border-b space-y-6 px-8'>
              <li className='grid grid-cols-6 gap-2 border-b-1'>
                <div className='col-span-1 self-center'>
                  <img
                    src='https://bit.ly/3oW8yej'
                    alt='Product'
                    className='rounded w-full'
                  />
                </div>
                <div className='flex flex-col col-span-3 pt-2'>
                  <span className='text-gray-600 text-md font-semi-bold'>
                    Studio 2 Headphone
                  </span>
                  <span className='text-gray-400 text-sm inline-block pt-2'>
                    Red Headphone
                  </span>
                </div>
                <div className='col-span-2 pt-3'>
                  <div className='flex items-center space-x-2 text-sm justify-between'>
                    <span className='text-gray-400'>2 x €30.99</span>
                    <span className='text-pink-400 font-semibold inline-block'>
                      €61.98
                    </span>
                  </div>
                </div>
              </li>
              <li className='grid grid-cols-6 gap-2 border-b-1'>
                <div className='col-span-1 self-center'>
                  <img
                    src='https://bit.ly/3lCyoSx'
                    alt='Product'
                    className='rounded w-full'
                  />
                </div>
                <div className='flex flex-col col-span-3 pt-2'>
                  <span className='text-gray-600 text-md font-semi-bold'>
                    Apple iPhone 13
                  </span>
                  <span className='text-gray-400 text-sm inline-block pt-2'>
                    Phone
                  </span>
                </div>
                <div className='col-span-2 pt-3'>
                  <div className='flex items-center space-x-2 text-sm justify-between'>
                    <span className='text-gray-400'>1 x €785</span>
                    <span className='text-pink-400 font-semibold inline-block'>
                      €785
                    </span>
                  </div>
                </div>
              </li>
            </ul>
            <div className='px-8 border-b'>
              <div className='flex justify-between py-4 text-gray-600'>
                <span>Subtotal</span>
                <span className='font-semibold text-pink-500'>€846.98</span>
              </div>
              <div className='flex justify-between py-4 text-gray-600'>
                <span>Shipping</span>
                <span className='font-semibold text-pink-500'>Free</span>
              </div>
            </div>
            <div className='font-semibold text-xl px-8 flex justify-between py-8 text-gray-600'>
              <span>Total</span>
              <span>€846.98</span>
            </div>
            <div className='font-semibold text-xl px-8 flex justify-between py-8 text-gray-600'>
              <button className='submit-button px-4 py-3 rounded-full bg-blue-400 text-white focus:ring focus:outline-none w-full text-xl font-semibold transition-colors'>
                Complete Your Order
              </button>
            </div>
          </div>
          {/* CARD DETAIL */}
        </div>
      </>
    </div>
  )
}
export default orderMenu
