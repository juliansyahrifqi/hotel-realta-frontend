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

const orderMenu = () => {
  // State to hold orderItems data
  const [orderItems, setOrderItems] = useState([])

  // REDUCER
  const { orderMenus = [], refresh } = useSelector(
    (state: any) => state.ormeReducers
  )
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

  useEffect(() => {
    dispatch(doRequestGetOrme())
  }, [refresh])

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
      <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 w max-w-screen-lg'>
        <div className='lg:col-span-2'>
          <h2 className='text-sm font-medium'>Checkout Cart</h2>
          <div className='bg-white rounded mt-4 shadow-lg'>
            <div className='flex items-center px-8 py-5 bg-slate-200'>
              {/* <input
                    className='appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100'
                    type='radio'
                  /> */}
              <label className='text-sm font-medium ml-4'>
                1. Enter Your Detail
              </label>
            </div>
            <div className='border-t'>
              <div className='flex items-center px-8 py-5'>
                {/* <input
                      className='appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600'
                      type='radio'
                    /> */}
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
                  />
                </div>
                <div className=''>
                  <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Email
                  </label>
                  <input
                    className='flex items-center h-10 border mt-1 rounded px-4 w-full text-sm'
                    type='text'
                    placeholder='Enter your email'
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
                  <button className='flex items-center justify-center h-10 px-4 mt-1 text-sm font-medium text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
                    <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CARD CHECKOUT */}
        <div>
          <h1 className='text-sm font-medium'>CHECKOUT CART</h1>
          <div className='mt-14 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-3/3'>
            {/* <ToastContainer /> */}
            {/* {cartItems.map((item, index) => ( */}
            <div
              // key={item.name}
              className='flex justify-between items-center'
            >
              {/* <p className='text-gray-700'>{item.name}</p> */}
              <div className='flex space-x-2 items-center'>
                <button
                  className='border rounded-md px-2 py-1 hover:bg-gray-100'
                  // onClick={() => handleDecreaseQuantity(index)}
                  // disabled={item.quantity === 1}
                >
                  <AiOutlineMinusCircle
                    className='mr-2 h-5 w-5'
                    aria-hidden='true'
                  />
                </button>
                {/* <p className='text-gray-700'>{item.quantity}</p> */}
                <button
                  className='border rounded-md px-2 py-1 hover:bg-gray-100'
                  // onClick={() => handleIncreaseQuantity(index)}
                >
                  <AiOutlinePlusCircle
                    className='mr-2 h-5 w-5'
                    aria-hidden='true'
                  />
                </button>
                {/* <p className='text-gray-700'>
                    {new Intl.NumberFormat('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                      minimumFractionDigits: 0,
                    }).format(item.price)}
                  </p> */}
                <button
                  className='border rounded-md px-2 py-1 hover:bg-gray-100'
                  // onClick={() => handleRemoveFromCart(index)}
                >
                  <AiFillCloseCircle
                    className='mr-2 h-5 w-5'
                    aria-hidden='true'
                  />
                </button>
              </div>
            </div>
            {/* ))} */}
            <hr className='my-4' />
            <div className='mb-2 flex justify-between'>
              <p className='text-gray-700'>Subtotal</p>
              <p className='text-gray-700'></p>
            </div>
            <div className='flex justify-between'>
              <p className='text-lg font-bold'>Total</p>
              <div className=''>
                <p className='mb-1 text-lg font-bold'></p>
              </div>
            </div>
            <button className='mt-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full'>
              Get Coupon Discount
            </button>
            <button className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full'>
              Check Out
            </button>
          </div>
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
                    <option>Cash</option>
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
                    <option>Cash</option>
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
                  <label className='text-xs font-semibold' htmlFor='cardNumber'>
                    Validate
                  </label>
                  <button className='flex items-center justify-center h-10 px-4 mt-1 text-sm font-medium text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
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
