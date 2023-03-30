import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Router from './router/Router';
import { GlobalStyles } from './styles/globalStyles';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Header />
			<Router />
		</BrowserRouter>
	);
};

export default App;
