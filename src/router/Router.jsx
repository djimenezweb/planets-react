import { Route, Routes } from 'react-router-dom';
import { MENU } from '../constants/menu';
import Planet from '../pages/Planet';

const Router = () => {
	return (
		<Routes>
			{MENU.map(planet => (
				<Route
					key={planet.id}
					path={planet.route}
					element={<Planet planetName={planet.planet} />}
				/>
			))}
		</Routes>
	);
};

export default Router;
