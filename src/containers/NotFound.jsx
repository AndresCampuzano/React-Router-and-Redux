import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<>
			<h1>No encontrado</h1>
			<Link to='/'>
				<button className='button'>Regresa al Home</button>
			</Link>
		</>
	);
};

export default NotFound;
