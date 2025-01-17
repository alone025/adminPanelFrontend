import { useEffect, useState } from 'react'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [type, setType] = useState('')
	const [textLogo, setTextLogo] = useState('')
	const [imag, setImage] = useState('')

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 775) {
				setNavbarOpen(false)
			}
		}
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	useEffect(() => {
		if (navbarOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}

		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [navbarOpen])

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		const options = {
			method: 'GET',
			headers: { 'User-Agent': 'insomnia/2023.5.8' },
		}

		fetch('https://e334514e7b754cb9.mokky.dev/navbar', options)
			.then(response => response.json())
			.then(response => {
				setType(response[0].type),
					setTextLogo(response[0].text_data),
					setImage(response[0].image)
			})
			.catch(err => console.error(err))
	}, [])

	const handleOpenNav = () => {
		setNavbarOpen(!navbarOpen)
	}

	return (
		<div
			className={`navbar flex flex-row fixed justify-between items-center w-full left-0 top-0 px-8 sm:px-10 md:px-12 py-[16px] z-[999] ${
				scrolled ? 'backdrop-blur-lg bg-opacity-30 bg-gray-800 z-[999]' : ''
			}`}
		>
			<div className='logo-tab relative z-10'>
				<Link to={'/'}>
					{type == 'text' ? (
						<h2 className='text-[25px] md:text-[29px] font-popins font-bold text-left text-[#FBF9ED]'>
							{textLogo || 'LOGO'}
						</h2>
					) : (
						<img src={imag} alt='logo' className='w-[80px]' />
					)}
				</Link>
			</div>
			<div className='options-tab flex flex-row gap-[34px] items-center'>
				<AnimatePresence>
					{navbarOpen && (
						<motion.div
							initial={{ x: '-100%' }}
							animate={{ x: 0 }}
							exit={{ x: '-100%' }}
							transition={{ duration: 0.3 }}
							className='navigations flex fixed left-0 top-0 bg-blue-500 w-full h-screen flex-col z-50 justify-center items-center gap-10'
						>
							<Link to='/aboutcompany'>
								<p
									className='text-[14px] md:text-[15px] text-[#FFFFFF] font-inter cursor-pointer hover:opacity-60 transition-all'
									onClick={handleOpenNav}
								>
									About company
								</p>
							</Link>
							<Link to='/ourteam'>
								<p
									className='text-[14px] md:text-[15px] text-[#FFFFFF] font-inter cursor-pointer hover:opacity-60 transition-all'
									onClick={handleOpenNav}
								>
									Our team
								</p>
							</Link>
							<Link to='/blog'>
								<p
									className='text-[14px] md:text-[15px] text-[#FFFFFF] font-inter cursor-pointer hover:opacity-60 transition-all'
									onClick={handleOpenNav}
								>
									Blog
								</p>
							</Link>
							<button
								className='bg-[#fff] rounded-[52px] font-inter py-[15px] px-[25px] text-[14px] md:text-[15px] text-[#6F0133] hover:text-[#fff] hover:bg-[#6F0133] transition-all font-[500]'
								onClick={handleOpenNav}
							>
								Register
							</button>
						</motion.div>
					)}
				</AnimatePresence>
				<div className='hidden md:flex flex-row gap-8 lg:gap-10 items-center'>
					<Link to='/aboutcompany'>
						<p className='text-[14px] md:text-[15px] text-[#FFFFFF] font-inter cursor-pointer hover:opacity-60 transition-all'>
							About company
						</p>
					</Link>
					<Link to='/ourteam'>
						<p className='text-[14px] md:text-[15px] text-[#FFFFFF] font-inter cursor-pointer hover:opacity-60 transition-all'>
							Our team
						</p>
					</Link>
					<Link to='/blog'>
						<p className='text-[14px] md:text-[15px] text-[#FFFFFF] font-inter cursor-pointer hover:opacity-60 transition-all'>
							Blog
						</p>
					</Link>
				</div>
				<div className='lkm relative hidden md:block'>
					<p className='text-[14px] md:text-[15px] text-[#FFFFFF] font-inter cursor-pointer hover:opacity-60 transition-all'>
						Login
					</p>
					<div className='line absolute h-[1px] w-full bg-[#FFFFFF] hover:opacity-60 transition-all'></div>
				</div>
				<div className='bn hidden sm:block relative'>
					<button className='bg-[#fff] rounded-[52px] font-inter py-[15px] px-[25px] text-[14px] md:text-[15px] text-[#6F0133] hover:text-[#fff] hover:bg-[rgb(111,1,51)] transition-all font-[500]'>
						Register
					</button>
				</div>
				<div
					className='mneu block md:hidden cursor-pointer relative z-[999]'
					onClick={handleOpenNav}
				>
					{navbarOpen ? (
						<IoMdClose className='text-[25px] text-[#fff]' />
					) : (
						<IoIosMenu className='text-[25px] text-[#fff]' />
					)}
				</div>
			</div>
		</div>
	)
}

export default Navbar
