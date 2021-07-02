import { Modal, Input, Menu, Dropdown, Button } from 'antd';

import { DeleteOutlined } from '@ant-design/icons';

import { useState } from 'react';
import PropTypes from 'prop-types';
import MoreIcon from '../../assets/moreIcon.svg';

import { useInputValue } from '../../context/TodoContext';

function FormModal({ id, index, completed }) {
	const { inputValue, setInputValue, updateTask, deleteTask } = useInputValue();
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const closeModal = () => {
		setIsModalVisible(false);
		setInputValue('');
	};
	function modalDeleteTask() {
		Modal.confirm({
			title: 'Do you Want to delete these items?',
			icon: <DeleteOutlined />,
			content: 'it will be permanently deleted',
			onOk() {
				deleteTask(id);
			},
		});
	}

	function updateSubmit(e) {
		e.preventDefault();
		updateTask(id, index, completed);
	}

	const menu = (
		<Menu style={{ width: '140px' }}>
			<Menu.Item key="1" onClick={showModal}>
				<p>Update</p>
			</Menu.Item>
			<Menu.Item key="2" onClick={modalDeleteTask}>
				<p>Delete</p>
			</Menu.Item>
		</Menu>
	);

	return (
		<div className="formModalContainer">
			<Dropdown overlay={menu} placement="bottomLeft" trigger={['click']}>
				<Button type="link" style={{ width: '100px' }}>
					<img src={MoreIcon} alt="More Icon" style={{ width: '4px' }} />
				</Button>
			</Dropdown>
			<Modal visible={isModalVisible} onCancel={closeModal} footer={[]}>
				<form onSubmit={updateSubmit} style={{ paddingBottom: '20px' }}>
					<h2>Update Task</h2>
					<Input
						placeholder="Update Task"
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
						Update Task
					</Button>
				</form>
			</Modal>
		</div>
	);
}

FormModal.propTypes = {
	id: PropTypes.number,
	index: PropTypes.number,
	completed: PropTypes.bool,
};

FormModal.defaultProps = {
	id: 1,
	index: 0,
	completed: false,
};

export default FormModal;
