import Nav from './Nav';

import { screen, render, userEvent } from '../../tests/utils';

describe('Add Button Component', () => {
	it('shold render the Nav', () => {
		render(<Nav />);

		screen.getByAltText('Logo');
	});
});
