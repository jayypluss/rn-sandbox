import React from 'react';
import { View, StyleSheet, Button, Text, TextInput  } from 'react-native';

const TextScreen = () => {


	return (
		<View>
			<TextInput
				style={styles.input}
				autoCapialize="none"
				autoCorrect={false}

			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1,
		height: 50
	}
});

export default TextScreen;