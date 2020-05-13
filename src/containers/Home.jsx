import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

import useInitialState from '../hooks/useInitialState';

const API = 'https://api.jsonbin.io/b/5ea16a131299b9374234b2de/2/';

const Home = () => {
	const initialState = useInitialState(API);
	return initialState.length === 0 ? (
		<h1>Loading...</h1>
	) : (
		<>
			{/* <Header /> */}
			<Search />

			{initialState.mylist.length > 0 && (
				<Categories title='Mi Lista'>
					<Carousel>
						{initialState.mylist.map((item) => (
							<CarouselItem key={item.id} {...item} />
						))}
					</Carousel>
				</Categories>
			)}

			<Categories title='Tendencias'>
				<Carousel>
					{initialState.trends.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			<Categories title='Originales de Platzi Video'>
				<Carousel>
					{initialState.originals.map((item) => (
						<CarouselItem key={item.id} {...item} />
					))}
				</Carousel>
			</Categories>

			{/* <Footer /> */}
		</>
	);
};

export default Home;
