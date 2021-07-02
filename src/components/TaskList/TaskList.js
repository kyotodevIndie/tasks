import { Row, Col, Card, Tabs } from 'antd';
import AddButton from '../AddButton/AddButton';

import Task from '../Task/Task';
import taskListIcon from '../../assets/taskListIcon.svg';
import CompletedIcon from '../../assets/completedIcon.svg';

import './TaskList.scss';

import { useTaskList } from '../../context/TodoContext';

const { TabPane } = Tabs;

export default function TaskList() {
	const { taskList, uncompletedLength } = useTaskList();

	return (
		<Row justify="center" className="taskListContainer">
			<Col>
				<Card
					style={{
						borderRadius: '10px',
						paddingBottom: '30px',
						overflow: 'auto',
					}}
				>
					<Row>
						<Tabs
							defaultActiveKey="1"
							style={{
								borderRadius: '5px',
								width: '500px',
							}}
						>
							<TabPane
								tab={
									<span>
										<img src={taskListIcon} alt="todo list icon" />
									</span>
								}
								key="1"
							>
								<h1>My Tasks ({uncompletedLength})</h1>
								{taskList.map(({ id, task, completed }, index) => (
									<div key={id}>
										{completed === false ? (
											<Task
												id={id}
												task={task}
												index={index}
												completed={completed}
											/>
										) : null}
									</div>
								))}
							</TabPane>
							<TabPane
								tab={
									<span>
										<img src={CompletedIcon} alt="completed list icon" />
									</span>
								}
								key="2"
							>
								<h1>Completed Tasks ({taskList.length - uncompletedLength})</h1>
								{taskList.map(({ id, task, completed }, index) => (
									<div key={id}>
										{completed === true ? (
											<Task
												id={id}
												task={task}
												index={index}
												completed={completed}
											/>
										) : null}
									</div>
								))}
							</TabPane>
						</Tabs>
					</Row>
				</Card>
				<AddButton />
			</Col>
		</Row>
	);
}
