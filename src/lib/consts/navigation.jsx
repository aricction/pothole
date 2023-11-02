import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineUsers,
} from 'react-icons/hi'
import {PiWallet} from 'react-icons/pi'
import {TbDiscount2} from 'react-icons/tb'
import {MdOutlineLiveHelp} from 'react-icons/md'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/dash',
		icon: <HiOutlineViewGrid />
	},
	
	{
		key: 'process',
		label: 'Live Detection',
		path: '/process',
		icon: <HiOutlineCube />
	},
	/*{
		key: 'customers',
		label: 'Customers',
		path: '/',
		icon: <HiOutlineUsers />
	},
	{
		key: 'income',
		label: 'Income',
		path: '/',
		icon: <PiWallet />
	},
	{
		key: 'promote',
		label: 'Promote',
		path: '/',
		icon: <TbDiscount2 />
	},
	{
		key: 'help',
		label: 'Help',
		path: '/',
		icon: <MdOutlineLiveHelp />
	}*/
]
