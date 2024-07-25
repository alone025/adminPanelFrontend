import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Web from './web'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import AboutPage from './aboutPage'
import BlogPage from './components/blog/blogPage'
import { useEffect, useState } from 'react'

function App() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 3000)
		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			{loading ? (
				<div className='flex justify-center items-center h-screen'>
					<img src='/loading.png' alt='loading' className='loading-image jump  w-[300px]' />
				</div>
			) : (
				<Router>
					<Navbar />
					<Routes>
						<Route path='/' element={<Web />} />
						<Route path='/aboutcompany' element={<AboutPage />} />
						<Route path='/blog' element={<BlogPage />} />
					</Routes>
					<Footer />
				</Router>
			)}
		</>
	)
}

export default App
