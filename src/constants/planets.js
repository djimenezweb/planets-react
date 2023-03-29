import { v4 } from 'uuid';

export const PLANETS = [
	{ id: v4(), planet: 'Mercury', route: '/mercury' },
	{ id: v4(), planet: 'Venus', route: '/venus' },
	{ id: v4(), planet: 'Earth', route: '/earth' },
	{ id: v4(), planet: 'Mars', route: '/mars' },
	{ id: v4(), planet: 'Jupiter', route: '/jupiter' },
	{ id: v4(), planet: 'Saturn', route: '/saturn' },
	{ id: v4(), planet: 'Uranus', route: '/uranus' }
];
