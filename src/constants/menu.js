import { v4 } from 'uuid';
import { COLORS } from './colors';

export const MENU = [
	{ id: v4(), planet: 'Mercury', route: '/', color: COLORS.mercury },
	{ id: v4(), planet: 'Venus', route: '/venus', color: COLORS.venus },
	{ id: v4(), planet: 'Earth', route: '/earth', color: COLORS.earth },
	{ id: v4(), planet: 'Mars', route: '/mars', color: COLORS.mars },
	{ id: v4(), planet: 'Jupiter', route: '/jupiter', color: COLORS.jupiter },
	{ id: v4(), planet: 'Saturn', route: '/saturn', color: COLORS.saturn },
	{ id: v4(), planet: 'Uranus', route: '/uranus', color: COLORS.uranus },
	{ id: v4(), planet: 'Neptune', route: '/neptune', color: COLORS.neptune }
];
