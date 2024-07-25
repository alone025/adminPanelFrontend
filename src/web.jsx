import Cards from './blocks/cards'
import Details from './blocks/details'
import Information from './blocks/information'
import Main from './blocks/main'
import CardHomeBlog from './components/cardHomeBlog/cardHomeBlog'
import ShortPage from './components/short-page/shortPage'

const Web = () => {
	return (
		<div className='web-main px-8 sm:px-10 md:px-12'>
			<Main />
			<div className=''>
				{/* Cards */}
				<Cards />
				{/* Short page */}
				<div className='short-page mt-[160px]'>
					<ShortPage />
				</div>
				<div className='bg'>
					<img
						src='/Frame 268.png'
						alt=''
						className='absolute hidden md:block md:top-[2100px] lg:top-[1500px] left-0 w-[-webkit-fill-available] -z-10'
					/>
				</div>
			</div>

			{/* Information */}
			<Information />

			{/* Presale Details */}
			<Details />

			{/* Ozgacha cardlar */}

			<div className='different-cards  mt-[200px] sm:mt-[250px] md:mt-[300px] lg:mt-[550px]'>
				<div className='top-cards flex flex-col xl:flex-row gap-[42px]'>
					<div className='long-card xl:max-w-[800px] justify-between bg-[#FFFFFF] flex flex-col md:flex-row gap-[10px] md:items-end rounded-[30px] p-[30px] lg:p-[40px] 2xl:p-[50px]'>
						<div className='txp max-w-[400px] lg:max-w-[600px] xl:max-w-[400px] 2xl:max-w-[490px] pb-[50px]'>
							<h3 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]'>
								Lorem ipsum
							</h3>
							<p className='text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore
							</p>
						</div>
						<div className='imx'>
							<img src='/4756473 1.png' alt='' />
						</div>
					</div>
					<div className='short-card bg-[#EBD6D9] flex flex-col md:flex-row justify-between gap-[10px] md:items-end rounded-[30px] p-[40px] 2xl:p-[50px]'>
						<div className='txp max-w-[400px] lg:max-w-[600px] xl:max-w-[250px] 2xl:max-w-[312px] '>
							<h3 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]'>
								Lorem ipsum
							</h3>
							<p className='text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore
							</p>
						</div>
						<div className='imx'>
							<img src='/gamers-5266580-4403854 1.png' alt='' />
						</div>
					</div>
				</div>
				<div className='bottom-cards flex flex-col xl:flex-row gap-[42px] mt-11'>
					<div className='short-card bg-[#FFF] flex flex-col md:flex-row justify-between gap-[10px] md:items-end rounded-[30px] p-[40px] 2xl:p-[50px]'>
						<div className='txp max-w-[400px] lg:max-w-[600px] xl:max-w-[250px] 2xl:max-w-[312px] '>
							<h3 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]'>
								Lorem ipsum
							</h3>
							<p className='text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore
							</p>
						</div>
						<div className='imx'>
							<img
								src='/3d-render-game-equipment-console-headset-free-png 2.png'
								alt=''
								className='max-h-[215px]'
							/>
						</div>
					</div>

					<div className='long-card xl:max-w-[800px] justify-between bg-[#EBD6D9] flex flex-col md:flex-row gap-[10px] md:items-end rounded-[30px] p-[30px] lg:p-[40px] 2xl:p-[50px]'>
						<div className='txp max-w-[400px] lg:max-w-[600px] xl:max-w-[400px] 2xl:max-w-[490px] pb-[50px]'>
							<h3 className='text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-inter font-bold text-[#032457] leading-[30px] mb-[37px]'>
								Lorem ipsum
							</h3>
							<p className='text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-inter font-normal text-[#707076] leading-[30px]'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua
								consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
								labore
							</p>
						</div>
						<div className='imx'>
							<img src='/image 68.png' alt='' />
						</div>
					</div>
				</div>
			</div>

			<div className='cards-blog mt-[900px] lg:mt-[250px] xl:mt-[150px] 2xl:mt-[450px] h-screen'>
				<div className='flex flex-col justify-center items-center h-full'>
					<div className='text-center'>
						<h3 className='text-xl md:text-4xl font-inter font-bold text-white md:text-[#191B21]'>
							Lorem ipsum dolor sit amet
						</h3>
						<p className='text-sm md:text-base font-medium font-inter text-white md:text-[#191B21] mt-5 md:mt-12 max-w-2xl mx-auto'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna
						</p>
					</div>
					<div className='flex flex-wrap justify-center xl:flex-nowrap gap-5 mt-20 z-10'>
						<CardHomeBlog />
						<CardHomeBlog />
						<CardHomeBlog />
						<CardHomeBlog />
					</div>
				</div>

				<img
					src='../public/Subtract2.png'
					alt=''
					className='absolute top-[7800px] md:top-[9200px] lg:top-[7755px] xl:top-[6700px] left-0 w-full -z-10 hidden md:block'
				/>
			</div>
		</div>
	)
}

export default Web
