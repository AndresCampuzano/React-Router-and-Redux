import React from 'react';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
	const { id } = props.match.params;
	return (
		<div className='Player'>
			<video controls autoPlay>
				<source
					src='https://arepa.s3.amazonaws.com/baby-bg.mp4'
					type='video/mp4'
				/>
			</video>
			<div className='Player-back'>
				<button type='button' onClick={() => props.history.goBack()}>
					Regresar
				</button>
			</div>
		</div>
	);
};

export default Player;
