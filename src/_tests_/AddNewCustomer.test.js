import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import AddNewCustomer from '../components/AddNewCustomer';


it('renders without crashing', function () {
	render(
			<BrowserRouter>
				<AddNewCustomer />
			</BrowserRouter>
	);
});

it('matches snapshot', function () {
	const { asFragment } = render(
			<BrowserRouter>
				<AddNewCustomer />
			</BrowserRouter>
	);
	expect(asFragment()).toMatchSnapshot();
});