import AddButton from './AddButton';

import { screen, render, userEvent } from '../../tests/utils';

import TodoProvider from '../../context/TodoContext';

describe('AddButton Component', () => {
	it('Shold render the Addbutton', () => {
		render(
			<TodoProvider>
				<AddButton />
			</TodoProvider>
		);

		screen.getByRole('img', {
			name: /add button icon/i,
		});
	});
	it('Shold open the modal', () => {
		render(
			<TodoProvider>
				<AddButton />
			</TodoProvider>
		);
		userEvent.click(
			screen.getByRole('img', {
				name: /add button icon/i,
			})
		);
		expect(screen.getByText('New Task')).toBeInTheDocument();
	});
});
