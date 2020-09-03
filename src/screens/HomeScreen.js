import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>HomeScreen</Text>
			<Button 
				onPress={() => navigation.navigate('Components')}
				title="Go to Components Demo" 
			/>
			<Button 
				onPress={() => navigation.navigate('List')}
				title="Go to List Demo" 
			/>
			<Button 
				onPress={() => navigation.navigate('Image')}
				title="Go to Image Demo" 
			/>
			<Button 
				onPress={() => navigation.navigate('Counter')}
				title="Go to Counter Demo" 
			/>
			<Button 
				onPress={() => navigation.navigate('Color')}
				title="Go to Color Demo" 
			/>
			<Button 
				onPress={() => navigation.navigate('ColorList')}
				title="Go to Color List Demo" 
			/>
			<Button 
				onPress={() => navigation.navigate('Square')}
				title="Go to Square List" 
			/>
			<Button
				onPress={() => navigation.navigate('Text')}
				title="Go to Text List"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
