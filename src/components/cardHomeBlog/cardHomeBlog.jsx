import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const CardHomeBlog = () => {
	const [modal, setModal] = useState(false)

	const handleOpenModal = () => {
		setModal(!modal)
	}
	return (
		<>
			<div className='card-content relative max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] justify-center xl:justify-normal xl:max-w-max max-h-[480px] sm:max-h-[550px] md:max-h-[610px] z-[10]'>
				<img
					src='/Frame 267.png'
					className='img absolute top-0 left-0 h-full w-full bg-[#C4D3EA] rounded-[17px] -z-[1]'
				></img>
				<div className='btm rounded-[17px] bgh min-h-[400px] sm:min-h-[440px] md:min-h-[460px] flex flex-col justify-end p-[18px] sm:p-[22px] md:p-[26px]'>
					<h4 className='text-[15px] sm:text-[17px] md:text-[20px] lg:text-[32px] font-inter font-bold text-[#fff]'>
						Клан 1
					</h4>
					<p className='text-[12px] sm:text-[13px] lg:text-[14px] mt-[22px] font-inter font-[400] text-[#fff]'>
						Lorem ipsum dolor sit amet, consec adipiscing elit, sed consec
						adipiscing elit, sed consec adipiscing elit, sed{' '}
					</p>
					<button
						className='rounded-[52px] mt-4 bg-[#E61467] hover:text-[#E61467] transition-all hover:bg-transparent hover:border hover:border-[#E61467] hover:py-[8px] py-[9px] text-[13px] md:text-[14px] font-inter font-[600] text-[#fff]'
						onClick={handleOpenModal}
					>
						Узнать подробнее
					</button>
				</div>
			</div>
			<AnimatePresence>
				{modal && (
					<motion.div
						className='z-[1000] left-0 top-0 right-0 bottom-0 w-screen h-screen inset-0 bg-[#00000099] fixed flex justify-center items-center font-inter px-[20px]'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<motion.div
							className='w-[1130px] xl:h-[530px] 2xl:h-[630px] relative flex flex-col md:flex-row  justify-center items-center bg-white overflow-hidden rounded-[40px] z-[1000]'
							initial={{ scale: 0.5, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.5, opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<img
								src='/close.png'
								alt='close'
								className='absolute right-6 top-6 cursor-pointer'
								onClick={handleOpenModal}
							/>
							<motion.div
								className='w-full md:w-1/2 z-[2000]'
								initial={{ x: -50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.2 }}
							>
								<img
									src='/modal_pic.png'
									alt='modal picture'
									className='w-full h-auto'
								/>
							</motion.div>
							<motion.div
								className='w-full md:w-1/2 p-6 flex justify-center flex-col'
								initial={{ x: 50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								<h2 className='text-[48px] mb-4 text-[#032457] font-[700] text-center'>
									Клан мафии
								</h2>
								<div className='flex flex-col gap-[12px]'>
									<p className='text-[#032457]'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor
									</p>
									<p className='text-[16px] text-[#191B21]'>
										There are several thousand celebrities and creators on
										twitter, tiktok, Instagram and YouTube with followings in
										the millions who we would be actively engaging before we go
										viral.
									</p>
									<p className='text-[16px] text-[#191B21]'>
										We would get them on our platform and they would see the
										opportunity to create a fan driven digital economy where
										their digital content can be traded as NFTs and their most
										loyal fans can have the monetary value of their creator's
										currency increase significantly as they promote their
										digital currency across their channels while our native
										token holders benefit from the Tokners popularity.
									</p>
								</div>
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default CardHomeBlog
