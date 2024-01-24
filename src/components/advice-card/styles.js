import styled from 'styled-components';

export const StyledCardContainer = styled.div`
	width: 343px;
	height: 315px;
	margin-inline: auto;
	background-color: #313a48;
	padding-top: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	@media (width>= 768px) {
		width: 540px;
		height: 332px;
	}
`;
export const StyledTitle = styled.h4`
	color: #53ffaa;
	text-align: center;
	font-size: 11px;
	font-weight: 800;
	letter-spacing: 3.457px;
	margin-bottom: 24px;
`;

export const StyledText = styled.p`
	width: 295px;
	color: #cee3e9;
	text-align: center;
	font-size: 24px;
	font-weight: 800;
	letter-spacing: -0.257px;

	@media (width>= 768px) {
		width: 444px;
	}
`;

export const StyledDivider = styled.div`
	width: 80%;
	height: 16px;
	background-image: url('public/assets/images/pattern-divider-mobile.svg');

	@media (width>= 768px) {
		background-image: url('public/assets/images/pattern-divider-desktop.svg');
	}
`;

export const StyledDivImg = styled.div`
	position: absolute;
	bottom: -25px;
	background-color: green;
	width: 44px;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	cursor: pointer;

	&:hover {
		background-color: #53ffaa;
	}
`;
