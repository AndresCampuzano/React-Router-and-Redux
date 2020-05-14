import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Player.scss';

const Player = () => {
	return (
		<div className='Player'>
			<video controls autoPlay>
				<source
					src='https://arepa.s3.amazonaws.com/baby-bg.mp4'
					type='video/mp4'
				/>
			</video>
			<div className='Player-back'>
				<Link to='/'>
					<button type='button'>Regresar</button>
				</Link>
			</div>
		</div>
	);
};

export default Player;
