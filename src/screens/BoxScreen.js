import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';



const BoxScreen = () => {

    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}/>
            <View style={styles.viewTwoStyle}/>
            <View style={styles.viewThreeStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;