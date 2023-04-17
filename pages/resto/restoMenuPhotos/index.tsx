/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, Fragment, useCallback } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  doDelete,
  doRequestGetReme,
} from '../../../redux/restoSchema/action/actionReme'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'
import { Menu, Transition } from '@headlessui/react'
import EditRestoMenu from '../restoMenu/editRestoMenu'
import { doRequestGetRepho } from '@/redux/restoSchema/action/actionRepho'
// ini adalah carousel
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {
  AiFillCloseCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from 'react-icons/ai'
import { doAddOrdet } from '@/redux/restoSchema/action/actionOrdet'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import HeaderNavbar from '@/components/ComponentsYudha/header-navbar'
import { doAddOrme } from '@/redux/restoSchema/action/actionOrme'
// ini adalah carousel

const restoPhoto = () => {
  // REDUCER
  const { restoMenus = [], refresh } = useSelector(
    (state: any) => state.remeReducers
  )

  const router = useRouter()
  // REDUCER

  const [searchTerm, setSearchTerm] = useState('')
  const [sort, setSort] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(8)

  const dispatch = useDispatch()

  // SEARCH BY NAME
  const handleSearchChange = (e: any): void => {
    setSearchTerm(e.target.value)
    setCurrentPage(1) // reset currentPage only when search term changes
    handleGetData() // call handleGetData to fetch data again
  }
  // SEARCH BY NAME

  // AMBIL DATA DARI RESTO_MENUS
  const handleGetData = () => {
    dispatch(doRequestGetReme(searchTerm, currentPage, limit, sort))
  }

  useEffect(() => {
    handleGetData()
  }, [refresh, currentPage, limit, sort, searchTerm])
  // AMBIL DATA DARI RESTO_MENUS

  // PAGINATION
  const totalPages = Math.ceil(restoMenus.length / limit)

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }
  // PAGINATION

  // SORT
  const handleSortChange = (e: any): void => {
    setSort(e.target.value)
    setCurrentPage(1) // reset currentPage only when search term changes
    handleGetData() // call handleGetData to fetch data again
  }
  // SORT

  // CART CARD

  const [cartItems, setCartItems] = useState<
    {
      discount: any
      id: any
      name: string
      price: number
      quantity: number
    }[]
  >([])

  const handleAddToCart = (restoMenu: any) => {
    const existingCartItem = cartItems.find(
      (item) => item.name === restoMenu.reme_name
    )

    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      }

      setCartItems(
        cartItems.map((item) =>
          item.name === existingCartItem.name ? updatedCartItem : item
        )
      )
    } else {
      setCartItems([
        ...cartItems,
        {
          id: restoMenu.reme_id,
          name: restoMenu.reme_name,
          price: restoMenu.reme_price,
          discount: restoMenu.discount,
          quantity: 1,
        },
      ])
    }
  }

  // CART CARD

  // CART CARD REMOVE
  const handleDecreaseQuantity = (index: number) => {
    const existingCartItem = cartItems[index]
    if (existingCartItem.quantity === 1) {
      handleRemoveFromCart(index)
      return
    }
    const updatedCartItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity - 1,
    }

    setCartItems(
      cartItems.map((item, i) => (i === index ? updatedCartItem : item))
    )
  }

  const handleIncreaseQuantity = (index: number) => {
    const updatedCartItem = {
      ...cartItems[index],
      quantity: cartItems[index].quantity + 1,
    }
    setCartItems(
      cartItems.map((item, i) => (i === index ? updatedCartItem : item))
    )
  }

  const handleRemoveFromCart = (index: number) => {
    setCartItems(cartItems.filter((item, i) => i !== index))
  }

  const router = useRouter()
  const handleCheckOut = async () => {
    try {
      const orderItems = cartItems.map((item) => ({
        orme_price: item.price,
        orme_qty: item.quantity,
        orme_subtotal: item.price * item.quantity - item.quantity,
        orme_discount:
          item.quantity > 10 ? item.price * item.quantity * 0.1 : 0,
        omde_reme_id: item.id,
        omde_orme_id: '1',
      }))

      const subtotal = orderItems.reduce(
        (sum, item) => sum + item.orme_subtotal,
        0
      )
      if (subtotal === 0) {
        toast.error('Belum memilih menu')
        return
      }

      dispatch(doAddOrdet(orderItems))

      // Clear cart after successful checkout
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      // ...
      toast.success('Berhasil Membuat Order')
      router.push('/resto/orderMenu')
    } catch (error) {
      console.error(error)
      // Handle error here
      // ...
    }
  }

  // HANDLE CHECKOUT

  const onFrameButtonClick = useCallback(() => {
    router.push('/booking/list-booking-final')
  }, [router])

  const onFrameButtonClickRestaurant = useCallback(() => {
    router.push('/resto/restoMenuPhotos')
  }, [router])

  useEffect(() => {
    const data = localStorage.getItem('cartItems')
    if (data) {
      setCartItems(JSON.parse(data))
    }
  }, [])

  return (
    <div className=' bg-gray-100 '>
      <HeaderNavbar
        vector='/vector17.svg'
        vector1='/vector18.svg'
        vector2='/vector19.svg'
        vector3='/vector20.svg'
        vector4='/vector21.svg'
        vector5='/vector22.svg'
        vector6='/vector23.svg'
        vector7='/vector24.svg'
        vector8='/vector25.svg'
        vector9='/vector26.svg'
        onFrameButtonClickRestaurant={onFrameButtonClickRestaurant}
        onFrameButtonClick={onFrameButtonClick}
      />
      {/* Title */}
      <div className='pt-8  bg-white'>
        <h1 className='text-center text-2xl font-bold text-gray-800'>
          Order Menu
        </h1>
      </div>
      {/* Tab Menu */}
      <div className='flex flex-wrap items-center overflow-x-auto overflow-y-hidden py-10 justify-center bg-white text-gray-800'>
        {/* SEARCH */}
        <div className='pt-2 relative mx-auto text-gray-600 flex'>
          <div className='relative mb-3 xl:w-96' data-te-input-wrapper-init=''>
            <input
              type='search'
              className='peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0'
              id='exampleSearch2'
              placeholder='Type query'
              onChange={handleSearchChange}
            />
            <label
              htmlFor='exampleSearch2'
              className='pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200'
            >
              Search
            </label>
          </div>
        </div>
        {/* SEARCH */}

        {/* SELECT */}
        <div className='pt-2 relative mx-auto text-gray-600 flex ml-4'>
          <select
            id='categories'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            // value={sort}
            onChange={handleSortChange}
          >
            <option value='' className='text-center'>
              FILTER
            </option>
            <option value='low-to-high'>Price Low To High</option>
            <option value='high-to-low'>Price High To Low</option>
          </select>
        </div>
        {/* SELECT */}
      </div>

      {/* Product List */}
      <div className='mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
        <section className='py-10 bg-gray-100'>
          <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'>
            {((restoMenus && restoMenus.data) || []).map((restoMenu: any) => (
              <article
                key={restoMenu.reme_id}
                className='rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 '
              >
                {/* <a href='#'> */}
                <Carousel showThumbs={true} autoPlay={true} infiniteLoop={true}>
                  {restoMenu.resto_menu_photos.map((photo: any) => (
                    <div key={photo.remp_reme_id}>
                      <Image
                        key={photo.remp_id}
                        src={photo.remp_url}
                        alt={photo.remp_photo_filename}
                        width={500}
                        height={500}
                      />
                    </div>
                  ))}
                </Carousel>

                <h2 className='text-slate-700'>{restoMenu.reme_name}</h2>
                <p className='text-lg font-bold text-blue-500 text-left'>
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  }).format(parseInt(restoMenu.reme_price.replace(/\D/g, '')))}
                </p>
                <div className='mt-3 flex items-end justify-between '>
                  <button
                    className={`flex items-center justify-center space-x-1.5 rounded-lg px-4 py-1.5 text-white duration-100 ${
                      restoMenu.reme_status === 'empty'
                        ? 'bg-danger cursor-not-allowed'
                        : 'bg-primary hover:bg-blue-600'
                    }`}
                    onClick={() => handleAddToCart(restoMenu)}
                    disabled={restoMenu.reme_status === 'empty'}
                  >
                    {restoMenu.reme_status === 'empty'
                      ? 'Out of stock'
                      : 'Add to cart'}
                    {restoMenu.reme_status === 'empty' ? null : (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-5 w-5'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fillRule='evenodd'
                          d='M16.456 6.658c-.296-.076-.606.098-.683.395l-.699 2.727h-9.98l-.698-2.727c-.077-.297-.386-.47-.683-.395-.297.077-.47.386-.395.683l1.2 4.666c.07.272.316.471.599.471h8.3c.282 0 .53-.199.599-.471l1.2-4.666c.076-.297-.098-.606-.395-.683zm-10.37 8.06c-.408 0-.737.329-.737.736 0 .407.329.736.737.736.407 0 .736-.329.736-.736 0-.407-.329-.736-.736-.736zm6.182 0c-.407 0-.736.329-.736.736 0 .407.329.736.736.736.408 0 .737-.329.737-.736 0-.407-.33-.736-.737-.736z'
                          clipRule='evenodd'
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className='mt-1 p-2'>
                  <p className='mt-1 text-sm text-slate-400'>
                    {restoMenu.reme_description}
                  </p>
                </div>
                <div>
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
                    <span className='relative'>{restoMenu.reme_status}</span>
                  </span>
                </div>
                {/* </a> */}
              </article>
            ))}
          </div>
        </section>
        {/* cart card */}
        <div className='mt-6 h-full rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-md md:mt-0 md:w-1/3'>
          <ToastContainer />
          {cartItems.map((item, index) => (
            <div key={item.name} className='flex justify-between items-center'>
              <p className='text-gray-700'>{item.name}</p>
              <div className='flex space-x-2 items-center'>
                <button
                  className='border rounded-md px-2 py-1 hover:bg-gray-100'
                  onClick={() => handleDecreaseQuantity(index)}
                  disabled={item.quantity === 1}
                >
                  <AiOutlineMinusCircle />
                </button>
                <p className='text-gray-700'>{item.quantity}</p>
                <button
                  className='border rounded-md px-2 py-1 hover:bg-gray-100'
                  onClick={() => handleIncreaseQuantity(index)}
                >
                  <AiOutlinePlusCircle />
                </button>
                <p className='text-gray-700'>
                  {new Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    minimumFractionDigits: 0,
                  }).format(item.price)}
                </p>
                <button
                  className='border rounded-md px-2 py-1 hover:bg-gray-100'
                  onClick={() => handleRemoveFromCart(index)}
                >
                  <AiFillCloseCircle />
                </button>
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
                {`Rp ${cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toLocaleString('id-ID')}`}
              </p>
            </div>
          </div>
          <button
            className='mt-4 bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded w-full'
            onClick={handleCheckOut}
          >
            Check Out
          </button>
        </div>
      </div>
      {/* cart card */}

      {/* PAGINATION */}

      <div className='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between'>
        <span className='text-xs xs:text-sm text-gray-900'>
          Showing Page{' '}
          <input
            type='number'
            value={currentPage}
            onChange={(event) => setCurrentPage(event.target.valueAsNumber)}
            min={1}
            max={totalPages}
          />{' '}
        </span>

        <div className='inline-flex mt-2 xs:mt-0'>
          <button
            className='bg-primary hover:bg-primary text-white font-bold py-2 px-4 border-b-4 border-primary hover:border-primary rounded'
            hidden={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
          &nbsp; &nbsp;
          {currentPage !== totalPages && (
            <button
              className='bg-primary hover:bg-primary text-white font-bold py-2 px-4 border-b-4 border-primary hover:border-primary0 rounded'
              hidden={currentPage === totalPages}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
      {/* PAGINATION */}

      {/* Footer */}
      <footer className='py-6 bg-primary text-white'>
        <div className='container px-6 mx-auto space-y-6 divide-y divide-primary md:space-y-12 divide-opacity-50'>
          <div className='grid justify-center lg:justify-between'>
            <div className='flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6'>
              <span>Copy right © 2023 Hotel Realta </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default restoPhoto
