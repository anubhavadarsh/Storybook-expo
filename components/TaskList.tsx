import * as React from 'react';
import {FlatList, Text, SafeAreaView, View} from 'react-native';
import {styles} from '../constants/globalStyles';
import Task, {ITask, ITaskAction} from "./Task";
import PercolateIcons from '../constants/Percolate';
import LoadingRow from './LoadingRow';

export interface ITaskListProps extends ITaskAction {
	loading?: boolean
	tasks: ITask[],
}

export default function TaskList (props: ITaskListProps) {
	const events = {
		onPinTask: props.onPinTask,
		onArchiveTask: props.onArchiveTask,
	}

	if(props.loading) {
		return (
			<SafeAreaView style={styles.ListItems}> 
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
			</SafeAreaView>
		);
	}

	if(props.tasks.length === 0) {
		return (
			<SafeAreaView style={styles.ListItems}>
        <View style={styles.WrapperMessage}>
          <PercolateIcons name="check" size={64} color={'#2cc5d2'} />
          <Text style={styles.TitleMessage}>You have no tasks</Text>
          <Text style={styles.SubtitleMessage}>Sit back and relax</Text>
        </View>
			</SafeAreaView>
		);
	}

	const tasksInOrder = [
    ...props.tasks.filter(t => t.state === 'TASK_PINNED'),
    ...props.tasks.filter(t => t.state !== 'TASK_PINNED'),
  ];

	return (
		<SafeAreaView style={styles.ListItems}>
		<FlatList
			data={tasksInOrder}
			keyExtractor={task => task.id}
			renderItem={({ item }) => <Task key={item.id} task={item} {...events} />}
		/>
	</SafeAreaView>
	)
}

TaskList.defaultProps = {
 loading: false,
}