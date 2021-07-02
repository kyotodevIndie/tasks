/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import FormModal from '../FormModal/FormModal';

import './Task.scss';
import { useInputValue } from '../../context/TodoContext';

function Task({ id, task, index, completed }) {
	const { completeTask } = useInputValue();
	function handleCompleteTask() {
		setTimeout(() => {
			completeTask(id, task, index, completed);
		}, 1000);
	}

	return (
		<div className="taskContainer">
			<>
				<div className="taskContainer__checkbox" onClick={handleCompleteTask}>
					{completed === true ? (
						<>
							<input id={id} type="checkbox" value="1" defaultChecked />
							<label htmlFor={id}>{task}</label>
						</>
					) : (
						<>
							<input id={id} type="checkbox" value="1" />
							<label htmlFor={id}>{task}</label>
						</>
					)}
				</div>
				<FormModal id={id} index={index} completed={completed} />
			</>
		</div>
	);
}

Task.propTypes = {
	id: PropTypes.number,
	task: PropTypes.string,
	index: PropTypes.number,
	completed: PropTypes.bool,
};

Task.defaultProps = {
	id: 1,
	task: 'Task',
	index: 0,
	completed: false,
};
export default Task;
