import {
	StyledCardContainer,
	StyledDivImg,
	StyledDivider,
	StyledText,
	StyledTitle
} from './styles';

const AdviceCard = ({ number, text, handleClick }) => {
	return (
		<StyledCardContainer>
			<StyledTitle>ADVICE #{number}</StyledTitle>
			<StyledText>{text}</StyledText>
			<StyledDivider></StyledDivider>
			<StyledDivImg>

				{/* poner con etiqueta picture  */}
				<img
					src='public/assets/images/icon-dice.svg'
					alt=''
					onClick={() => handleClick()}
				/>
			</StyledDivImg>
		</StyledCardContainer>
	);
};



export default AdviceCard;
