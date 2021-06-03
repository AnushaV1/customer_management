import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App'

it('renders without crashing', function () {
	render(
			<BrowserRouter>
				<App />
			</BrowserRouter>

	);
});

it('matches snapshot', function () {
	const { asFragment } = render(
			<BrowserRouter>
				<App />
			</BrowserRouter>

	);
	expect(asFragment()).toMatchSnapshot();
});
