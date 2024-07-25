import Blog_cards from './blocks/blog_cards'
import Cards from './blocks/cards'
import Cards2 from './blocks/cards2'
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
			<Cards2 />

			<Blog_cards />
		</div>
	)
}

export default Web
