import React, { useState } from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';



const ColorScreen = () => {
    const [colors, setColors] = useState([]);

	return (
		<View>
            {/* <Button 
                title="Change color"
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
            /> */}

            <TouchableOpacity
                style={{ height: '100%', width: '100%', backgroundColor: randomRgb() }}
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
            >
            </TouchableOpacity>
		</View>
	);
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;