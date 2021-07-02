import Nav from './Nav';

import { screen, render } from '../../tests/utils';

describe('Nav Component', () => {
	it('shold render the Nav', () => {
		render(<Nav />);

		screen.getByAltText('Logo');
	});
});
