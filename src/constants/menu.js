import { v4 } from 'uuid';
import { COLORS } from './colors';

export const MENU = [
	{ id: v4(), planet: 'mercury', route: '/', color: COLORS.mercury },
	{ id: v4(), planet: 'venus', route: '/venus', color: COLORS.venus },
	{ id: v4(), planet: 'earth', route: '/earth', color: COLORS.earth },
	{ id: v4(), planet: 'mars', route: '/mars', color: COLORS.mars },
	{ id: v4(), planet: 'jupiter', route: '/jupiter', color: COLORS.jupiter },
	{ id: v4(), planet: 'saturn', route: '/saturn', color: COLORS.saturn },
	{ id: v4(), planet: 'uranus', route: '/uranus', color: COLORS.uranus },
	{ id: v4(), planet: 'neptune', route: '/neptune', color: COLORS.neptune }
];
