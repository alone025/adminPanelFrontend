import { useEffect, useState } from 'react'
import Wrapper from '../../layout/wrapper'
import { motion } from 'framer-motion'

function Ourteam() {
	const [teamData, setTeamData] = useState({
		firstBigText: '',
		firstSmallText: '',
		cards: [],
	})

	const [cardss, setCardss] = useState()

	useEffect(() => {
		fetch('https://e334514e7b754cb9.mokky.dev/our_team')
			.then(response => response.json())
			.then(data => {
				setTeamData(data[0])
				setCardss(data[0].cards)
			})
			.catch(error => {
				console.error('Error:', error)
			})
	}, [])

	return (
		<div className='relative w-full min-h-screen'>
			<img
				src='/ourteam.svg'
				alt='ourteam'
				className='absolute w-full z-[-1]'
			/>
			<Wrapper>
				<div className='pt-[100px] mx-[50px] 2xl:mx-0 font-inter'>
					<div className='blog_blur right-0 !w-[1000px]'></div>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6 }}
					>
						<div className='flex flex-col gap-[10px] text-white'>
							<h2 className='text-[20px] md:text-[36px] font-[800]'>
								{teamData.firstBigText}
							</h2>
							<p className='text-[16px] md:text-[20px]'>
								{teamData.firstSmallText}
							</p>
						</div>
					</motion.div>
					<motion.div
						className='grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-[32px] mt-[64px] lg:grid-cols-3'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{cardss?.map((teamMember, index) => (
							<motion.div
								key={index}
								className='bg-[white] rounded-[17px] z-[2]'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.1 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
							>
								<div className='p-[16px]'>
									{teamMember.imgUrl ? (
										<div className='ourteam_div_bg w-full flex justify-center items-center mx-auto h-[190px]'>
											{teamMember.imageTrue == 'true' ? (
												<img
													src={teamMember.imgUrl}
													alt='twiter'
													className='cursor-pointer'
												/>
											) : (
												<></>
											)}
										</div>
									) : (
										<div className='ourteam_div_bg w-full flex justify-center items-center mx-auto h-[190px]'></div>
									)}
									<div className='flex flex-col gap-[10px]'>
										<h2 className='pt-[24px] text-[20px] text-[#032457] font-[700]'>
											{teamMember.cardBigText}
										</h2>
										<p className='text-[14px] md:text-[16px] text-[#6B7280]'>
											{teamMember.cardJobLevelText}
										</p>
										<p className='text-[14px] md:text-[16px] text-[#6B7280]'>
											{teamMember.cardDescription}
										</p>
										<div className='flex items-center gap-[12px] mt-[5px]'>
											{teamMember.cardFacebookImageTrue == 'true' ? (
												<a href={teamMember.facebook}>
													<img
														src='/facebook2.svg'
														alt='facebook'
														className='cursor-pointer'
													/>
												</a>
											) : (
												<></>
											)}
											{teamMember.cardTwitterImageTrue == 'true' ? (
												<a href={teamMember.twitter}>
													<img
														src='/twiter.svg'
														alt='twiter'
														className='cursor-pointer'
													/>
												</a>
											) : (
												<></>
											)}
											{teamMember.cardDribbleImageTrue == 'true' ? (
												<a href={teamMember.dribble}>
													<img
														src='/dribble.svg'
														alt='dribble'
														className='cursor-pointer'
													/>
												</a>
											) : (
												<></>
											)}
											{teamMember.cardGitHubImageTrue == 'true' ? (
												<a href={teamMember.github}>
													<img
														src='/github2.svg'
														alt='github'
														className='cursor-pointer'
													/>
												</a>
											) : (
												<></>
											)}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</Wrapper>
		</div>
	)
}

export default Ourteam
