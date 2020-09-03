import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput  } from 'react-native';

const TextScreen = () => {
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View>
			<Text style={styles.inputPlaceholder}>Enter name: </Text>
			<TextInput
				style={styles.input}
				autoCapialize="none"
				autoCorrect={false}
				value={name}
				onChangeText={(newValue) => {
					setName(newValue);
				}}
			/>
			<Text style={styles.inputReflect}>My name is: {name}</Text>
			<Text style={styles.inputPlaceholder}>Enter password: </Text>
			<TextInput
				style={styles.input}
				autoCapialize="none"
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => {
					setPassword(newValue);
				}}
			/>
			{ password.length < 7 ?
				<Text style={styles.inputReflect}>Password lenght must have 6 or more characters.</Text>
				: null
			}

		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		margin: 10,
		borderColor: 'black',
		borderWidth: 1,
		height: 50
	},
	inputPlaceholder: {
		marginTop: 30,
		marginLeft: 25
	},
	inputReflect: {
		marginLeft: 25
	}
});

export default TextScreen;