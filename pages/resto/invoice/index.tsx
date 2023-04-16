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

const invoice = () => {
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
    toast.success('Verified')
  }
  console.log(handleNext)
  // INI SEND PASSCODE

  return (
    <section className='bg-gray-100 py-20'>
      <div className='max-w-2xl mx-auto py-0 md:py-16'>
        <article className='shadow-none md:shadow-md md:rounded-md overflow-hidden'>
          <div className='md:rounded-b-md  bg-white'>
            <div className='p-9 border-b border-gray-200'>
              <div className='space-y-6'>
                <div className='flex justify-between items-top'>
                  <div className='space-y-4'>
                    <div>
                      <span className='text-3xl font-bold tracking-wider text-primary'>
                        <span className='text-danger'>R</span>ealta{' '}
                        <span className='text-danger'>H</span>otel
                      </span>

                      <p className='font-bold text-lg'> Invoice </p>
                    </div>
                    <div>
                      <p className='font-medium text-sm text-gray-400'>
                        {' '}
                        Billed To{' '}
                      </p>
                      <p> Bosani </p>
                      <p> bosani@gmail.com </p>
                      <p> +6281392827844 </p>
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <div>
                      <p className='font-medium text-sm text-gray-400'>
                        {' '}
                        Invoice Number{' '}
                      </p>
                      <p> INV-MJ0001 </p>
                    </div>
                    <div>
                      <p className='font-medium text-sm text-gray-400'>
                        {' '}
                        Invoice Date{' '}
                      </p>
                      <p> 16 April 2023 </p>
                    </div>
                    <div>
                      <p className='font-medium text-sm text-gray-400'>
                        {' '}
                        Order Number{' '}
                      </p>
                      <p> MENUS#20230415-0016 </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='p-9 border-b border-gray-200'>
              <p className='font-medium text-sm text-gray-400'> Note </p>
              <p className='text-sm'> Thank you for your order. </p>
            </div> */}
            <table className='w-full divide-y divide-gray-200 text-sm'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-9 py-4 text-left font-semibold text-gray-400'
                  >
                    {' '}
                    Item{' '}
                  </th>
                  <th
                    scope='col'
                    className='py-3 text-left font-semibold text-gray-400'
                  ></th>
                  <th
                    scope='col'
                    className='py-3 text-left font-semibold text-gray-400'
                  >
                    {' '}
                    Quantity{' '}
                  </th>
                  <th
                    scope='col'
                    className='py-3 text-left font-semibold text-gray-400'
                  >
                    {' '}
                    Price{' '}
                  </th>
                  <th
                    scope='col'
                    className='py-3 text-left font-semibold text-gray-400'
                  />
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                <tr>
                  <td className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'>
                    <div>
                      {/* <p> Jericho III (YA-4) </p> */}
                      <p className='text-sm text-gray-400'> Sate Ayam </p>
                    </div>
                  </td>
                  <td className='whitespace-nowrap text-gray-600 truncate' />
                  <td className='whitespace-nowrap text-gray-600 truncate'>
                    {' '}
                    1{' '}
                  </td>
                  <td className='whitespace-nowrap text-gray-600 truncate'>
                    {' '}
                    Rp 20.000{' '}
                  </td>
                </tr>
                <tr>
                  <td className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'>
                    <div>
                      {/* <p> Jericho III (YA-4) </p> */}
                      <p className='text-sm text-gray-400'> Mie Goreng </p>
                    </div>
                  </td>
                  <td className='whitespace-nowrap text-gray-600 truncate' />
                  <td className='whitespace-nowrap text-gray-600 truncate'>
                    {' '}
                    1{' '}
                  </td>
                  <td className='whitespace-nowrap text-gray-600 truncate'>
                    {' '}
                    Rp 20.000{' '}
                  </td>
                </tr>
                <tr>
                  <td className='px-9 py-5 whitespace-nowrap space-x-1 flex items-center'>
                    <div>
                      {/* <p> Pym Particles (Pack of 10,000) </p> */}
                      <p className='text-sm text-gray-400'> Rawon </p>
                    </div>
                  </td>
                  <td className='whitespace-nowrap text-gray-600 truncate' />
                  <td className='whitespace-nowrap text-gray-600 truncate'>
                    {' '}
                    1{' '}
                  </td>
                  <td className='whitespace-nowrap text-gray-600 truncate'>
                    {' '}
                    Rp 35.000{' '}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='p-9 border-b border-gray-200'>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <div>
                    <p className='text-gray-500 text-sm'> Subtotal </p>
                  </div>
                  <p className='text-gray-500 text-sm'> Rp 75.000 </p>
                </div>
                <div className='flex justify-between'>
                  <div>
                    <p className='text-gray-500 text-sm'> Tax </p>
                  </div>
                  <p className='text-gray-500 text-sm'> Rp 3.750 </p>
                </div>
                <div className='flex justify-between'>
                  <div>
                    <p className='text-gray-500 text-sm'> Total </p>
                  </div>
                  <p className='text-gray-500 text-sm'> Rp 71.250 </p>
                </div>
              </div>
            </div>
            <div className='p-9 border-b border-gray-200'>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <div>
                    <p className='font-bold text-black text-lg'> Amount Due </p>
                  </div>
                  <p className='font-bold text-black text-lg'> $360.00 </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
export default invoice
