import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const TodoContext = createContext();

function TodoProvider({ children }) {
	const [inputValue, setInputValue] = useState('');
	const [taskList, setTaskList] = useState([]);
	const [uncompletedLength, setUncompletedLength] = useState();

	useEffect(() => {
		setUncompletedLength(
			taskList.filter((getTask) => getTask.completed === false).length
		);
	}, [taskList]);

	useEffect(() => {
		if (localStorage.getItem('tasksList')) {
			setTaskList(JSON.parse(localStorage.getItem('tasksList')));
		}
	}, []);

	function saveData(inputValues) {
		localStorage.setItem('tasksList', JSON.stringify(inputValues));
	}

	function newTask() {
		if (inputValue.trim()) {
			const inputValues = [
				...taskList,
				{ task: inputValue.trim(), completed: false, id: Date.now() },
			];
			setTaskList(inputValues);
			setInputValue('');
			saveData(inputValues);
		}
	}

	function updateTask(id, index, completed) {
		if (inputValue.trim()) {
			const inputValues = [...taskList];

			inputValues[index] = {
				task: inputValue.trim(),
				completed,
				id,
			};

			setTaskList([...inputValues]);
			setInputValue('');
			saveData([...inputValues]);
		}
	}

	function deleteTask(id) {
		const inputValues = taskList.filter((getTask) => getTask.id !== id);
		setTaskList(inputValues);

		saveData(inputValues);
	}

	function completeTask(id, task, index, completed) {
		const inputValues = [...taskList];

		if (completed) {
			inputValues[index] = {
				task,
				completed: false,
				id,
			};
		} else {
			inputValues[index] = {
				task,
				completed: true,
				id,
			};
		}

		setTaskList([...inputValues]);
		saveData([...inputValues]);
	}

	return (
		<TodoContext.Provider
			value={{
				inputValue,
				setInputValue,
				taskList,
				uncompletedLength,
				newTask,
				updateTask,
				deleteTask,
				completeTask,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
}
TodoProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

TodoProvider.defaultProps = {
	children: {},
};
export default TodoProvider;

export function useInputValue() {
	const value = useContext(TodoContext);
	const {
		inputValue,
		setInputValue,
		newTask,
		updateTask,
		deleteTask,
		completeTask,
	} = value;
	return {
		inputValue,
		setInputValue,
		newTask,
		updateTask,
		deleteTask,
		completeTask,
	};
}

export function useTaskList() {
	const value = useContext(TodoContext);
	const { taskList, uncompletedLength } = value;
	return { taskList, uncompletedLength };
}
