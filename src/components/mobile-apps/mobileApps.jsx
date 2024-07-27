import { useEffect, useState } from 'react'
import Wrapper from '../../layout/wrapper'

const MobileApps = () => {
	const [appData, setAppData] = useState({
		appStore_shown: '',
		appStore_url: '',
		pictures: [
			{ img: '', show: '' },
			{ img: '', show: '' },
			{ img: '', show: '' },
		],
		playMarket_shown: '',
		playMarket_url: '',
		steam_shown: '',
		steam_url: '',
		title: '',
	})

	useEffect(() => {
		fetch('https://e334514e7b754cb9.mokky.dev/last_page')
			.then(response => response.json())
			.then(data => {
				setAppData(data[0] || appData)
			})
			.catch(error => {
				console.error('Error:', error)
			})
	}, [])

	return (
		<Wrapper>
			<div className='mobile-apps mt-[180px] lg:mt-[258px] px-2'>
				<div className='title'>
					<h3 className='text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-inter font-bold text-[#fff] text-center'>
						{appData.title || 'Наше мобильное приложение скоро'}
					</h3>
				</div>
				<div className='stars flex flex-row gap-[24px] items-center justify-center mt-5'>
					<div className='star-div flex flex-row gap-[6px] md:gap-[10px]'>
						{[...Array(5)].map((_, index) => (
							<img key={index} src='/star 8.png' alt='star' />
						))}
					</div>
					<p className='text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] text-[#fff] font-inter font-bold leading-none pt-2'>
						4.8
					</p>
				</div>
				<div className='app-store flex flex-row flex-wrap gap-[24px] justify-center mt-[45px]'>
					{appData.appStore_shown && (
						<div className='app-store-app bg-[#fff] pl-[15px] pr-[38px] py-[13px] rounded-[7px] flex flex-row items-center gap-[10px]'>
							<div className='lim'>
								<img src='/apple-logo (3) 1.png' alt='App Store' />
							</div>
							<div className='textim'>
								<p className='text-[8px] text-[#000] font-inter font-medium'>
									Доступно в
								</p>
								<h4 className='text-[16px] text-[#000] font-inter font-bold'>
									App store
								</h4>
							</div>
						</div>
					)}
					{appData.playMarket_shown && (
						<div className='play-market bg-[#fff] pl-[15px] pr-[38px] py-[13px] rounded-[7px] flex flex-row items-center gap-[10px]'>
							<div className='lim'>
								<img src='/playstore 1.png' alt='Play Store' />
							</div>
							<div className='textim'>
								<p className='text-[8px] text-[#000] font-inter font-medium'>
									Доступно в
								</p>
								<h4 className='text-[16px] text-[#000] font-inter font-bold'>
									Play store
								</h4>
							</div>
						</div>
					)}
					{appData.steam_shown && (
						<div className='steam bg-[#fff] pl-[15px] pr-[38px] py-[13px] rounded-[7px] flex flex-row items-center gap-[10px]'>
							<div className='lim'>
								<img src='/Steam_icon_logo.svg 1.png' alt='Steam' />
							</div>
							<div className='textim'>
								<p className='text-[8px] text-[#000] font-inter font-medium'>
									Доступно в
								</p>
								<h4 className='text-[16px] text-[#000] font-inter font-bold'>
									Steam
								</h4>
							</div>
						</div>
					)}
				</div>
				<div className='imgs flex flex-row flex-wrap gap-[14px] xl:gap-[18px] mt-[100px] justify-center'>
					{appData.pictures.map((pic, index) => (
						<img
							key={index}
							src={pic.img || '/default-image.png'}
							alt={`App screenshot ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</Wrapper>
	)
}

export default MobileApps
