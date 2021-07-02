import Footer from './Footer';

import { screen, render, userEvent } from '../../tests/utils';

describe('Add Button Component', () => {
	it('shold render the Nav', () => {
		render(<Footer />);

		screen.getByText('Made with ❤ by');
		screen.getByText('Kyoto');
	});
});
