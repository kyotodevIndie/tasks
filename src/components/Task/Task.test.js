import Task from './Task';

import { screen, render } from '../../tests/utils';

import TodoProvider from '../../context/TodoContext';

describe('Task Component', () => {
	it('Shold render the Task', () => {
		render(
			<TodoProvider>
				<Task id="1" task="test" index="1" completed={false} />
			</TodoProvider>
		);

		screen.getByRole('button', {
			name: /more icon/i,
		});
	});
});
