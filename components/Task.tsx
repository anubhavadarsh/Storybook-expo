import * as React from 'react';
import { SafeAreaView, Pressable, View, TextInput } from 'react-native';
import { styles } from '../constants/globalStyles';
import PercolateIcons from '../constants/Percolate';

export interface ITask {
		id: string,
		title: string | undefined,
		state: string,
}

export interface ITaskAction {
	onArchiveTask: (id: string) => void,
	onPinTask: (id: string) => void,
}

interface ITaskProps extends ITaskAction {
 task: ITask,
}

export default function Task (props: ITaskProps) {
	return (
    <SafeAreaView style={styles.ListItem}>
      <Pressable onPress={() => props.onArchiveTask(props.task.id)}>
				{props.task.state !== 'TASK_ARCHIVED'? (
					<View style={styles.CheckBox} />)
					:
					(<PercolateIcons name='check' size={20} color={'#2cc5d2'} />
				)}
			</Pressable>
			<TextInput
        placeholder="Input Title"
        style={
          props.task.state === 'TASK_ARCHIVED' ? styles.ListItemInputTaskArchived : styles.ListItemInputTask
        }
        value={props.task.title}
        editable={false}
      />
			<Pressable onPress={() => props.onPinTask(props.task.id)}>
        <PercolateIcons
          name="star"
          size={20}
          color={props.task.state !== 'TASK_PINNED' ? '#eee' : '#26c6da'}
        />
      </Pressable>
    </SafeAreaView>
	);
}
