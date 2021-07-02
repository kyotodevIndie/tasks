/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import { Modal, Tooltip, Input, Button } from 'antd';

import './AddButton.scss';

import AddButtonIcon from '../../assets/addButtonIcon.svg';

import { useInputValue } from '../../context/TodoContext';

export default function AddButton() {
	const { inputValue, setInputValue, newTask } = useInputValue();
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const closeModal = () => {
		setIsModalVisible(false);
		setInputValue('');
	};

	function addSubmit(e) {
		e.preventDefault();
		newTask();
	}

	return (
		<>
			<Tooltip title="Add New Task" role="button">
				<div
					className="addButtonContainer"
					onClick={showModal}
					onKeyUp={showModal}
				>
					<img src={AddButtonIcon} alt="Add Button Icon" />
				</div>
			</Tooltip>

			<Modal visible={isModalVisible} onCancel={closeModal} footer={[]}>
				<form onSubmit={addSubmit}>
					<h2>New Task</h2>
					<Input
						placeholder="New Task"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						autoFocus
					/>
					<Button
						type="primary"
						htmlType="submit"
						onClick={closeModal}
						style={{ float: 'right', marginTop: '10px' }}
					>
						Add New Task
					</Button>
				</form>
			</Modal>
		</>
	);
}
