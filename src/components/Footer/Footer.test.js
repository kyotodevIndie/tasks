import Footer from './Footer';

import { screen, render } from '../../tests/utils';

describe('Footer Component', () => {
	it('shold render the Footer', () => {
		render(<Footer />);

		screen.getByText('Made with ❤ by');
		screen.getByText('Kyoto');
	});
});
