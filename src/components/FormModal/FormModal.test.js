import FormModal from './FormModal';

import { screen, render, userEvent } from '../../tests/utils';

import TodoProvider from '../../context/TodoContext';

describe('FormModal Component', () => {
	it('Shold render the FormModal', () => {
		render(
			<TodoProvider>
				<FormModal />
			</TodoProvider>
		);

		screen.getByRole('button', {
			name: /more icon/i,
		});
	});
	it('Shold open the dropdown', () => {
		render(
			<TodoProvider>
				<FormModal />
			</TodoProvider>
		);
		userEvent.click(
			screen.getByRole('button', {
				name: /more icon/i,
			})
		);
		expect(screen.queryByText('Update')).toBeInTheDocument();
		expect(screen.queryByText('Delete')).toBeInTheDocument();
	});
});
