/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect, Fragment } from 'react'

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
// ini adalah carousel

const restoPhoto = () => {
  // REDUCER
  const { restoMenus = [], refresh } = useSelector(
    (state: any) => state.remeReducers
  )
  // REDUCER

  const [searchTerm, setSearchTerm] = useState('')
  const [sort, setSort] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(20)

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
  }, [refresh, currentPage, limit])

  useEffect(() => {
    handleGetData()
  }, [searchTerm])

  useEffect(() => {
    handleGetData()
  }, [sort])
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

  return (
    <div className='bg-white'>
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
          <input
            className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
            type='search'
            name='search'
            placeholder='Search'
          />
          <button type='submit' className='absolute right-0 top-0 mt-5 mr-4'>
            <svg
              className='text-gray-600 h-4 w-4 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              version='1.1'
              id='Capa_1'
              x='0px'
              y='0px'
              viewBox='0 0 56.966 56.966'
              xmlSpace='preserve'
              width='512px'
              height='512px'
            >
              <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
            </svg>
          </button>
        </div>
        {/* SEARCH */}

        {/* SELECT */}
        <div className='pt-2 relative mx-auto text-gray-600 flex ml-4'>
          <select
            id='categories'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          >
            <option value=''>Price Low To High</option>
            <option value=''>Price High To Low</option>
          </select>
        </div>
        {/* SELECT */}
      </div>

      {/* Product List */}
      <section className='py-10 bg-gray-100'>
        <div className='mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {((restoMenus && restoMenus.data) || []).map((restoMenu: any) => (
            <article
              key={restoMenu.reme_id}
              className='rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 '
            >
              {/* <a href='#'> */}
              <Carousel showThumbs={true}>
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
              <div className='mt-1 p-2'>
                <h2 className='text-slate-700'>{restoMenu.reme_name}</h2>
                <p className='mt-1 text-sm text-slate-400'>
                  {restoMenu.reme_description}
                </p>
                <p className='text-lg font-bold text-blue-500 text-right'>
                  Rp.
                  {restoMenu.reme_price}
                </p>
                <div className='mt-3 flex items-end justify-between '>
                  <div className='flex items-center justify-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600 w-full'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-4 w-4'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                      />
                    </svg>
                    <button className='text-sm'>Add To Cart</button>
                  </div>
                </div>
              </div>
              {/* </a> */}
            </article>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className='py-6  bg-gray-200 text-gray-900'>
        <div className='container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50'>
          <div className='grid justify-center  lg:justify-between'>
            <div className='flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6'>
              <span>Copy rgight © 2023 by codemix team </span>
              <a rel='noopener noreferrer' href='#'>
                <span>Privacy policy</span>
              </a>
              <a rel='noopener noreferrer' href='#'>
                <span>Terms of service</span>
              </a>
            </div>
            <div className='flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13'>
              <a
                rel='noopener noreferrer'
                href='#'
                title='Email'
                className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 duration-150 text-gray-50'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='w-5 h-5'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
              </a>
              <a
                rel='noopener noreferrer'
                href='#'
                title='Twitter'
                className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 duration-150 text-gray-50'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 50 50'
                  fill='currentColor'
                  className='w-5 h-5'
                >
                  <path d='M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z' />
                </svg>
              </a>
              <a
                rel='noopener noreferrer'
                href='#'
                title='GitHub'
                className='flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 duration-150 text-gray-50'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  className='w-5 h-5'
                >
                  <path d='M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default restoPhoto
