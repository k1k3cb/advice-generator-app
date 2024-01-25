import { useEffect, useState } from 'react';
import AdviceCard from './components/advice-card/AdviceCard';
import MainContainer from './components/main-container/MainContainer';
import { GlobalStyles } from './styles/GlobalStyles';
import axios from 'axios';

const App = () => {
	const [advice, setAdvice] = useState({ id: null, adviceText: '' });

	useEffect(() => {
		fetchData(setAdvice);
	}, []);

	//! al recargar me aparece el mismo advice repetido
	//! preguntar img div responsive
	//! poner la conexión a al api en otro archivo??

	return (
		<MainContainer>
			<GlobalStyles />
			<AdviceCard
				number={advice.id}
				text={advice.adviceText}
				handleClick={() => handleClick(setAdvice)}
			/>
		</MainContainer>
	);
};

const fetchData = async setAdvice => {
	try {
		const response = await fetch('https://api.adviceslip.com/advice');
		const data = await response.json();
		console.log('data:', data.slip);
		setAdvice({ id: data.slip.id, adviceText: data.slip.advice });
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};

const handleClick = setAdvice => {
	fetchData(setAdvice);
};

export default App;
