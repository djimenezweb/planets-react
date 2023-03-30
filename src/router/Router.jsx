import { Route, Routes } from 'react-router-dom';
import { MENU } from '../constants/menu';

const Router = () => {
	return (
		<Routes>
			{MENU.map(planet => (
				<Route
					key={planet.id}
					path={planet.route}
					element={<h1>{planet.planet}</h1>}
				/>
			))}
		</Routes>
	);
};

export default Router;
