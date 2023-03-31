import {
  MdDashboard,
  MdOutlineHotel,
  MdRestaurant,
  MdPayment,
} from 'react-icons/md'
import { RiShoppingCartFill } from 'react-icons/ri'
import { FaUser, FaUsers } from 'react-icons/fa'
import { BsClipboardDataFill } from 'react-icons/bs'

const listMenu = [
  {
    to: '/dashboard',
    path: '/dashboard',
    icon: MdDashboard,
    name: 'Dashboard',
  },
  {
    to: '',
    path: '',
    icon: MdOutlineHotel,
    name: 'Hotel',
    submenu: [
      {
        to: 'hotel/hotels',
        path: 'hotels',
        title: 'Hotels',
      },
      {
        to: 'hotel/facilities-support',
        path: '/facilities-support',
        title: 'Facilities Support',
      },
      {
        to: 'hotel-reviews',
        path: 'hotel-reviews',
        title: 'Hotel Reviews',
      },
    ],
  },
  {
    to: '',
    path: '',
    icon: MdRestaurant,
    name: 'Resto',
    submenu: [
      {
        to: '',
        path: '',
        title: 'Resto Menu',
      },
    ],
  },
  {
    to: '#',
    path: '#',
    icon: RiShoppingCartFill,
    name: 'Purchasing',
    submenu: [
      {
        to: '',
        path: '',
        title: 'Vendor',
      },
      {
        to: '',
        path: '',
        title: 'Stock',
      },
      {
        to: '',
        path: '',
        title: 'Purchasing Order',
      },
    ],
  },
  {
    to: '',
    path: '',
    icon: MdPayment,
    name: 'Payment',
    submenu: [
      {
        to: '',
        path: '',
        title: 'Bank',
      },
      {
        to: '',
        path: '',
        title: 'Fintech',
      },
      {
        to: '',
        path: '',
        title: 'Top Up',
      },
      {
        to: '',
        path: '',
        title: 'Account',
      },
      {
        to: '',
        path: '',
        title: 'Transaction',
      },
    ],
  },
  {
    to: '',
    path: '#',
    icon: FaUsers,
    name: 'Human Resources',
    submenu: [
      {
        to: '/hr/department',
        path: '/hr/department',
        title: 'Department',
      },
      {
        to: '/hr/employee',
        path: '/hr/employee',
        title: 'Employee',
      },
      {
        to: '/hr/workorder',
        path: '/hr/workorder',
        title: 'Work Order',
      },
    ],
  },
  {
    to: '',
    path: '',
    icon: BsClipboardDataFill,
    name: 'Master',
    submenu: [
      {
        to: '',
        path: '',
        title: 'Location',
      },
      {
        to: '',
        path: '',
        title: 'Policy',
      },
      {
        to: '',
        path: '',
        title: 'Category',
      },
      {
        to: '',
        path: '',
        title: 'Price',
      },
      {
        to: '',
        path: '',
        title: 'Service',
      },
    ],
  },
  {
    to: '',
    path: '',
    icon: FaUser,
    name: 'User',
    submenu: [
      {
        to: '',
        path: '',
        title: 'Profil',
      },
      {
        to: '',
        path: '',
        title: 'Booking',
      },
      {
        to: '',
        path: '',
        title: 'Accaount',
      },
    ],
  },
]

export default listMenu
