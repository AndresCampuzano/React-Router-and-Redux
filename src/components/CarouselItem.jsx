import React from 'react';
import '../assets/styles/components/CarouselItem.scss';

//icons
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

//Data validation
import PropTypes from 'prop-types';

//Redux
import { connect } from 'react-redux';
import { setFavorite } from '../actions';

const CarouselItem = (props) => {
	const { cover, title, year, duration, contentRating } = props;
	const handleSetFavorite = () => {
		props.setFavorite({
			cover,
			title,
			year,
			duration,
			contentRating,
		});
	};
	return (
		<div className='carousel-item'>
			<img className='carousel-item__img' src={cover} alt={title} />
			<div className='carousel-item__details'>
				<div>
					<img
						className='carousel-item__details--img'
						src={playIcon}
						alt='Play Icon'
					/>
					<img
						className='carousel-item__details--img'
						src={plusIcon}
						alt='Plus Icon'
						onClick={handleSetFavorite}
					/>
				</div>
				<p className='carousel-item__details--title'>{title}</p>
				<p className='carousel-item__details--subtitle'>
					{`${year} ${contentRating} ${duration}`}
				</p>
			</div>
		</div>
	);
};

CarouselItem.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string,
	year: PropTypes.number,
	contentRating: PropTypes.string,
	duration: PropTypes.number,
};

// Redux
const mapDispatchToProps = {
	setFavorite,
};

// export default CarouselItem;
export default connect(null, mapDispatchToProps)(CarouselItem);
