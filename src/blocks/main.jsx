import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Wrapper from '../layout/wrapper'

function Main() {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	})

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	}

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	}
	return (
		<>
			<Wrapper>
				<motion.div
					className='bg-bop flex flex-col lg:flex-row mt-[50px] mx-[50px] 2xl:mx-0'
					ref={ref}
					initial='hidden'
					animate={inView ? 'visible' : 'hidden'}
					variants={containerVariants}
				>
					<div className='left-text max-w-[500px] xl:max-w-[610px] mt-[40px] md:mt-[80px] gap-[25px] flex flex-col'>
						<motion.div className='smal' variants={itemVariants}>
							<p className='font-azosans font-medium text-[#2278D4] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[18px]'>
								At Tokners are
							</p>
						</motion.div>
						<motion.div className='big-text' variants={itemVariants}>
							<h2 className='font-inter font-semibold text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] leading-[38px] sm:leading-[42px] md:leading-[48px] text-[#fff]'>
								Lorem ipsum{' '}
								<span className='text-[#E61467]'>dolor sit amet</span>{' '}
								consectetur adipiscing elit, sed do eiusmod
							</h2>
						</motion.div>
						<motion.div className='desc' variants={itemVariants}>
							<p className='text-[13px] sm:text-[14px] md:text-[15px] ld:text-[16px] leading-[30px] font-inter font-normal text-[#FFFFFF]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore et dolore magna aliqua consectetur adipiscing elit, sed
								do eiusmod tempor incididunt ut labore et dolore magna aliqua
								consectetur adipiscing elit, sed do{' '}
							</p>
						</motion.div>
						<motion.div
							className='btns flex flex-row flex-wrap sm:flex-nowrap justify-center sm:justify-normal gap-4 mt-[12px]'
							variants={itemVariants}
						>
							<button className='bg-[#01BAD6] hover:bg-transparent hover:border hover:border-[#01BAD6] hover:text-[#01BAD6] transition-all rounded-[52px] hover:py-[11px] py-[13px] w-full max-w-[158px] md:max-w-[178px] text-[15px] md:text-[17px] font-inter font-medium text-[#FFFFFF]'>
								О Проекте
							</button>
							<button className='bg-[#E61467] hover:bg-transparent hover:border hover:border-[#E61467] hover:text-[#E61467] transition-all rounded-[52px] hover:py-[11px] py-[13px] w-full max-w-[158px] md:max-w-[178px] text-[15px] md:text-[17px] font-inter font-medium text-[#FFFFFF]'>
								Наша команда
							</button>
						</motion.div>
					</div>
					<motion.div className='right-picture flex items-center xl:block xl:items-baseline'>
						<motion.img
							src='/Frame 267.png'
							alt=''
							className='absolute w-[650px] lg:w-[800px] xl:w-[1000px] 2xl:w-auto -z-10 right-0 top-0'
							initial={{ opacity: 0, scale: 0.8 }}
							animate={
								inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
							}
							transition={{ duration: 0.8, ease: 'easeInOut' }}
						/>

						<motion.img
							src='/Component 1.png'
							alt=''
							initial={{ opacity: 0, y: 50 }}
							animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
							transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
						/>
					</motion.div>
				</motion.div>
			</Wrapper>
		</>
	)
}

export default Main
