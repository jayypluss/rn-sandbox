import React, { useState } from 'react';
import { View, StyleSheet, Button, Text  } from 'react-native';
import ColorCounter from '../components/ColorCounter';


const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);
	const [colorChangeValue, setColorChangeValue] = useState(15);

	const setColor = (color, change) => {
		// color === 'red', 'green', 'blue'
		// change === colorChangeValue 

		switch (color) {
			case 'red':
				if (red + change < 0) setRed(0);
				else if(red + change > 255) setRed(255);
				else setRed(red + change);
			break;

			case 'blue':
				if (blue + change < 0) setBlue(0);
				else if(blue + change > 255) setBlue(255);
				else setBlue(blue + change);
			break;

			case 'green':
				if (green + change < 0) setGreen(0);
				else if(green + change > 255) setGreen(255);
				else setGreen(green + change);
			break;

		}
	};

	const increaseColorChangeValue = (increase) => {
		if (colorChangeValue + increase > 255) setColorChangeValue(255);
		else setColorChangeValue(colorChangeValue + increase);
	};

	const decreaseColorChangeValue = (decrease) => {
		if (colorChangeValue - decrease < 0) setColorChangeValue(0);
		else setColorChangeValue(colorChangeValue - decrease);
	};

	return (
		<View>
			<Button 
				title="Aumentar em 5"
				onPress={() => increaseColorChangeValue(50)}
			/>
			<Text>{colorChangeValue}</Text>
			<Button 
				title="Diminuir em 5"
				onPress={() => decreaseColorChangeValue(50)} 
			/>

			<ColorCounter 
				color="Red" 
				onIncrease={() => setColor('red', colorChangeValue)}
				onDecrease={() => setColor('red', -colorChangeValue)}
			/>
			<ColorCounter 
				color="Blue" 
				onIncrease={() => setColor('blue', colorChangeValue)}
				onDecrease={() => setColor('blue', -colorChangeValue)}
			/>
			<ColorCounter 
				color="Green" 
				onIncrease={() => setColor('green', colorChangeValue)}
				onDecrease={() => setColor('green', -colorChangeValue)}
			/>
			<View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
			<Text> { `rgb(${red}, ${blue}, ${green})` } </Text>
		</View>
	);
}

const styles = StyleSheet.create({});

export default SquareScreen;