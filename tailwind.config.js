/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	daisyui: {
	  themes: [
		{
		  colors: {
			primary: '#9377d1',
			secondary: '#1e6c96',
			tertiary: '#394867',
			accent: '#212A3E',
			neutral: '#211b22',
			'base-100': '#f5f6fa',
			info: '#a3b7eb',
			success: '#68ed9e',
			warning: '#f9be67',
			error: '#f03d2d',
		  },
		  extend: {
			fontFamily: {
			  garamond: ['Cormorant Garamond', 'serif'],
			},
		  },
		},
	  ],
	},
	plugins: [require('daisyui')],
  };
  