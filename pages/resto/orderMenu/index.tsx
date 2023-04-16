/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, Fragment } from 'react'
import {
  BsFillPencilFill,
  BsThreeDotsVertical,
  BsTrashFill,
  BsFillCloudUploadFill,
  BsFillCheckCircleFill,
} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { doRequestGetOrme } from '../../../redux/restoSchema/action/actionOrme'
import 'react-toastify/dist/ReactToastify.css'
import { Menu, Transition } from '@headlessui/react'
import {
  AiFillCloseCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineSend,
} from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/router'

const orderMenu = () => {
  // State to hold orderItems data
  const [orderItems, setOrderItems] = useState([])

  // REDUCER
  // const { orderMenus = [], refresh } = useSelector(
  //   (state: any) => state.ormeReducers
  // )
  // REDUCER

  // Load orderItems from localStorage
  useEffect(() => {
    const savedOrderItems = localStorage.getItem('orderItems')
    if (savedOrderItems) {
      setOrderItems(JSON.parse(savedOrderItems))
    }
  }, [])

  // render logic ...
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(doRequestGetOrme())
  // }, [refresh])

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const data = localStorage.getItem('cartItems')
    if (data) {
      setCartItems(JSON.parse(data))
    }
  }, [])

  // INI SEND PASSCODE
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    mobileNumber: '',
  })

  const handleInputChange = (event: any) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleNext = () => {
    const storedData = localStorage.getItem('loginData')
    console.log(storedData)
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      if (
        parsedData.user_full_name === formData.fullname &&
        parsedData.user_email === formData.email &&
        parsedData.user_phone_number === formData.mobileNumber
      ) {
      }
    }
    toast.success('Terkirim')
  }
  console.log(handleNext)
  // INI SEND PASSCODE
  const handleValidate = () => {
    const storedData = localStorage.getItem('loginData')
    console.log(storedData)
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      if (
        parsedData.user_full_name === formData.fullname &&
        parsedData.user_email === formData.email &&
        parsedData.user_phone_number === formData.mobileNumber
      ) {
      }
    }
    toast.success('PAID')
  }

  const router = useRouter()
  const handleBayar = () => {
    const storedData = localStorage.getItem('loginData')
    console.log(storedData)
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      if (
        parsedData.user_full_name === formData.fullname &&
        parsedData.user_email === formData.email &&
        parsedData.user_phone_number === formData.mobileNumber
      ) {
      }
    }
    toast.success('PAID')
    router.push('/resto/invoice')
  }

  const handleBack = () => {
    const storedData = localStorage.getItem('loginData')
    console.log(storedData)
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      if (
        parsedData.user_full_name === formData.fullname &&
        parsedData.user_email === formData.email &&
        parsedData.user_phone_number === formData.mobileNumber
      ) {
      }
    }
    router.push('/resto/restoMenuPhotos')
  }

  return (
    <div
      className='bg-white'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Component Start */}
      <ToastContainer />
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-screen-lg'>
        <div className='lg:col-span-2'>
          {/* Title */}
          <div>
            <button
              type='button'
              className='text-primary border border-primary hover:bg-primary hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-primary dark:text-primary dark:hover:text-white dark:focus:ring-primary dark:hover:bg-primary'
              onClick={handleBack}
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9h11.586a1 1 0 010 2H4.414l4.293 4.293a1 1 0 11-1.414 1.414z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Icon description</span>
            </button>
          </div>
          <div className='bg-white rounded mt-4 shadow-lg'>
            <div className='flex items-center px-8 py-5 bg-slate-200'>
              <label className='text-sm font-medium ml-4'>
                1. Enter Your Detail
              </label>
            </div>
            <div className='border-t'>
              <div className='flex items-center px-8 py-5'>
                <label className='text-sm font-medium ml-4'>
                  We will use these details to share your booking information
                </label>
              </div>
              <div className='grid grid-cols-2 gap-4 px-8 pb-8'>
                <div className=''>
                  <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Fullname
                  </label>
                  <input
                    className='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
                    type='text'
                    placeholder='Enter Your Name'
                    name='fullname'
                    value={formData.fullname}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className=''>
                  <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Email
                  </label>
                  <input
                    className='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
                    type='text'
                    placeholder='Enter Your Email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className=''>
                  <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Mobile Number
                  </label>
                  <div className='flex'>
                    <select
                      className='block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mr-2'
                      id='grid-state'
                      name='mobileNumber'
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                    >
                      <option value={+62}>+62</option>
                    </select>
                    <input
                      className='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
                      type='text'
                      placeholder='Enter your number'
                    />
                  </div>
                </div>
                <div className=''>
                  <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Send Passcode
                  </label>
                  <button
                    className='flex items-center justify-center w-full h-10 px-4 mt-1 text-sm font-medium text-white transition-colors duration-150 bg-primary border border-transparent rounded-md shadow-md hover:bg-secondary focus:outline-none focus:shadow-outline-blue active:bg-primary'
                    onClick={handleNext}
                  >
                    <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CARD CHECKOUT */}

        <div className='mt-16 h-full rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-md md:mt-0 md:w-3/3'>
          {cartItems.map((item, index) => (
            <div key={item.name} className='flex justify-between items-center'>
              <p className='text-gray-700'>{item.name}</p>
              <div className='flex space-x-2 items-center'>
                <p className='text-gray-700'>{item.quantity}</p>

                <p className='text-gray-700'>
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                  }).format(item.price)}
                </p>
              </div>
            </div>
          ))}
          <hr className='my-4' />
          <div className='mb-2 flex justify-between'>
            <p className='text-gray-700'>Subtotal</p>
            <p className='text-gray-700'>
              {new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'IDR',
                minimumFractionDigits: 0,
              }).format(
                cartItems.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )
              )}
            </p>
          </div>
          <div className='mb-2 flex justify-between'>
            <p className='text-gray-700'>Tax 5%</p>
            <p className='text-gray-700'>Rp 3.750</p>
          </div>
          {cartItems.some((item) => item.quantity > 10) && (
            <div className='mb-2 flex justify-between'>
              <p className='text-gray-700'>Discount (10%)</p>
              <p className='text-gray-700'>
                -
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                }).format(
                  cartItems.reduce((acc, item) => {
                    if (item.quantity > 10) {
                      return acc + item.price * item.quantity * 0.1
                    }
                    return acc
                  }, 0)
                )}
              </p>
            </div>
          )}
          <div className='flex justify-between'>
            <p className='text-lg font-bold'>Total</p>
            <div className=''>
              <p className='mb-1 text-lg font-bold'>
                {new Intl.NumberFormat('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  minimumFractionDigits: 0,
                }).format(
                  cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  ) + 3750
                )}
              </p>
            </div>
          </div>

          <button
            className='mt-4 bg-gray-500 hover:bg-primary text-white font-bold py-2 px-4 rounded w-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
            // onClick={handleCheckOut}
          >
            Get Coupon Discount %
          </button>
          <button
            className='mt-4 bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded w-full'
            onClick={handleBayar}
          >
            Check Out
          </button>
        </div>
        {/* CARD CHECKOUT */}
        <div className='lg:col-span-2'>
          <div className='bg-white rounded mt-4 shadow-lg'>
            <div className='flex items-center px-8 py-5 bg-slate-200'>
              <label className='text-sm font-medium ml-4'>3. Payment</label>
            </div>
            <div className='border-t'>
              <div className='flex items-center px-8 py-5'>
                <label className='text-sm font-medium ml-4'>
                  We will use these details to share your booking information
                </label>
              </div>
              <div className='grid grid-cols-2 gap-4 px-8 pb-8'>
                <div className=''>
                  <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Pay Type
                  </label>
                  <select
                    className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-state'
                  >
                    <option>Debit</option>
                    <option>Goto</option>
                  </select>
                </div>
                <div className=''>
                  <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Account Number
                  </label>
                  <input
                    className='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
                    type='text'
                    placeholder='Enter your number'
                  />
                </div>
                <div className=''>
                  <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Pay Type
                  </label>
                  <select
                    className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    id='grid-state'
                  >
                    <option>Debit</option>
                    <option>Goto</option>
                  </select>
                </div>
                <div className=''>
                  <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Account Number Realta
                  </label>
                  <input
                    className='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
                    type='text'
                    placeholder='Enter your number'
                  />
                </div>
                <div className=''>
                  {/* <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Validate
                  </label>
                  <button
                    className='flex items-center justify-center w-full h-10 px-4 mt-1 text-sm font-medium text-white transition-colors duration-150 bg-primary border border-transparent rounded-md shadow-md hover:bg-secondary focus:outline-none focus:shadow-outline-blue active:bg-primary'
                    onClick={handleValidate}
                  >
                    <BsFillCheckCircleFill />
                  </button> */}
                </div>
                <div className=''>
                  <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Validate
                  </label>
                  <button
                    className='flex items-center justify-center w-full h-10 px-4 mt-1 text-sm font-medium text-white transition-colors duration-150 bg-primary border border-transparent rounded-md shadow-md hover:bg-secondary focus:outline-none focus:shadow-outline-blue active:bg-primary'
                    onClick={handleValidate}
                  >
                    <BsFillCheckCircleFill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CARD CHECKOUT */}
        {/* CARD CHECKOUT */}
      </div>
      {/* Component End  */}
    </div>
  )
}
export default orderMenu
