import React, { useState } from 'react';

const RoundQuestionMark = ({ tooltip }) => {
	const [isTooltipVisible, setTooltipVisible] = useState(false);

	const spanStyle = {
		display: 'inline-block',
		border: '1px solid #000',
		borderRadius: '50%',
		fontSize: '11px',
		width: '14px',
		height: '14px',
		textAlign: 'center',
		position: 'relative',
		cursor: 'pointer', // Use pointer cursor to indicate it's clickable
	};

	const tooltipStyle = {
		visibility: isTooltipVisible ? 'visible' : 'hidden',
		width: '100px',
		backgroundColor: '#333',
		color: '#fff',
		textAlign: 'center',
		borderRadius: '5px',
		padding: '5px',
		position: 'absolute',
		top: 'calc(100% + 5px)',
		left: '50%',
		transform: 'translateX(-50%)',
		opacity: isTooltipVisible ? '1' : '0',
		transition: 'opacity 0.3s, visibility 0.3s',
	};

	const handleMouseEnter = () => {
		setTooltipVisible(true);
	};

	const handleMouseLeave = () => {
		setTooltipVisible(false);
	};

	return (
		<span style={spanStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			?
			<span style={tooltipStyle}>{tooltip}</span>
		</span>
	);
};

export default RoundQuestionMark;
