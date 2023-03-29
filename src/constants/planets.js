import { v4 } from 'uuid';

export const PLANETS = [
	{ id: v4(), planet: 'Mercury', route: '/mercury', color: '#419EBB' },
	{ id: v4(), planet: 'Venus', route: '/venus', color: '#EDA249' },
	{ id: v4(), planet: 'Earth', route: '/earth', color: '#6D2ED5' },
	{ id: v4(), planet: 'Mars', route: '/mars', color: '#D14C32' },
	{ id: v4(), planet: 'Jupiter', route: '/jupiter', color: '#D83A34' },
	{ id: v4(), planet: 'Saturn', route: '/saturn', color: '#CD5120' },
	{ id: v4(), planet: 'Uranus', route: '/uranus', color: '#1EC1A2' },
	{ id: v4(), planet: 'Neptune', route: '/neptune', color: '#2D68F0' }
];
