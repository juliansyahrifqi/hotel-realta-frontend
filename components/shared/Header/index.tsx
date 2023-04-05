import Button from '@/components/Button/button'
import InputText from '@/components/Input/InputText'
import Search from '@/components/Search'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Header = ({ title, children, ...others }: any) => {
  // const { title, children, ...others } = props

  return (
    <>
      <nav className='flex' aria-label='Breadcrumb'>
        <ol className='inline-flex items-center space-x-1 md:space-x-3'>
          <li className='inline-flex items-center'>
            <a
              href='#'
              className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white'
            >
              <svg
                aria-hidden='true'
                className='w-4 h-4 mr-2'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z'></path>
              </svg>
              Home
            </a>
          </li>
          <li>
            <div className='flex items-center'>
              <svg
                aria-hidden='true'
                className='w-6 h-6 text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <a
                href='#'
                className='ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'
              >
                Projects
              </a>
            </div>
          </li>
          <li aria-current='page'>
            <div className='flex items-center'>
              <svg
                aria-hidden='true'
                className='w-6 h-6 text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <span className='ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400'>
                Flowbite
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <br />
      <Search />
      <div className='mt-8 sm:block relative'>
        <div className='align-middle inline-block min-w-full border-b border-gray-200'>
          {children}
        </div>
      </div>
    </>

    // <>
    //   <div className='grid col-1 relative bg-white border-t-2 border-l-2 border-r-2 border-black shadow-sm px-4 py-2'>
    //     <h1 className='text-2lg font-bold leading-6 test-gray-900 sm:truncate uppercase'>
    //       Hotels
    //     </h1>
    //   </div>
    //   {/* <div className='grid col-1 relative bg-white shadow-sm border-2 border-black px-4 py-4 text-center grid-cols-3 gap-4'>
    //     <h1 className='text-sm font-semibold leading-6 text-gray-900 sm:truncate col-span-2'>
    //       Search Hotel
    //       <input
    //         className='outline-none border border-spacing-2 border-black inline-block px-3 mt-2 ml-2 active:border-gray-700 focus:border-gray-700 active:bg-gray-200 focus:bg-gray-200 rounded'
    //         type='text'
    //         style={{ marginLeft: '10px', borderRadius: '12px' }}
    //       />
    //       <button className='outline-none border border-spacing-2 border-black inline-block px-3 mt-2 ml-2 active:border-gray-700 focus:border-gray-700 active:bg-white focus:bg-gray-200 rounded bg-gray-100 hover:bg-gray-200'>
    //         Search
    //       </button>
    //     </h1>
    //   </div> */}
    //   <div className='grid col-1 relative bg-white shadow-sm border-2 border-black px-4 py-4 text-center grid-cols-3 gap-4'>
    //     <h1 className='text-sm font-semibold leading-6 text-gray-900 sm:truncate col-span-2'>
    //       Search Hotel
    //       <span className='relative'>
    //         <input
    //           className='outline-none border border-spacing-2 border-black inline-block pl-10 pr-3 active:border-gray-700 focus:border-gray-700 active:bg-gray-200 focus:bg-gray-200 rounded'
    //           type='text'
    //           placeholder='Search'
    //           style={{ marginLeft: '10px', borderRadius: '12px' }}
    //         />
    //         <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
    //           <BsSearch
    //             aria-hidden='true'
    //             className='w-5 h-5 text-gray-500 ml-2 dark:text-gray-400'
    //             fill='currentColor'
    //             viewBox='0 0 20 20'
    //           />
    //         </div>
    //       </span>
    //       <button className='outline-none border border-spacing-2 border-black inline-block px-3 mt-2 ml-2 active:border-gray-700 focus:border-gray-700 active:bg-white focus:bg-gray-200 rounded bg-gray-100 hover:bg-gray-200'>
    //         Search
    //       </button>
    //     </h1>
    //   </div>

    // <div className='mt-8 sm:block relative'>
    //   <div className='align-middle inline-block min-w-full border-b border-gray-200'>
    //     {children}
    //   </div>
    // </div>
    // </>
  )
}

export default Header
