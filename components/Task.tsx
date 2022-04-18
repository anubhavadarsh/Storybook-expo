import * as React from 'react';
import { TextInput, SafeAreaView, TextInputProps } from 'react-native';
import { styles } from '../constants/globalStyles';

export interface ITaskProps {
	task: {
		id: string,
		title: string | undefined,
		state: string,
	},
	onArchiveTask: () => void,
	onPinTask: () => void,
}

export default function Task (props: ITaskProps) {
	return (
    <SafeAreaView style={styles.ListItem}>
      <TextInput value={props.task.title} editable={false} />
    </SafeAreaView>
	);
}
