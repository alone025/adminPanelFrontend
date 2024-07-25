import Blog_cards from './blocks/blog_cards'
import Cards from './blocks/cards'
import Cards2 from './blocks/cards2'
import Details from './blocks/details'
import Information from './blocks/information'
import Main from './blocks/main'
import ShortPage from './components/short-page/shortPage'

const Web = () => {
	return (
		<div className='web-main'>
			<Main />
			<div className=''>
				{/* Cards */}
				<Cards />
				{/* Short page */}
				<div className='short-page mt-[160px]'>
					<ShortPage />
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
