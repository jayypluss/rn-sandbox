import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CHANGE_VALUE = 1;

const reducer = (state, action) => {

    switch (action.type) {
        case 'counter_up':
            return { ...state, counter: state.counter + action.payload };

        case 'counter_down':
            return { ...state, counter: state.counter - action.payload };

        // Doesn't allow state below 0
        // case 'counter_down':
        //     return state.counter - action.payload <= 0
        //         ? { ...state, counter: 0 }
        //         : { ...state, counter: state.counter - action.payload };

        default:
            return state;
    }

};

const ImageDetail = props => {
    // const [counter, setCounter] = useState(0);
    const [state, dispatch] = useReducer(reducer, { counter: 0 });

    const { counter } = state;

	return (
		<View>
            <Button 
                title="Increase" 
                onPress={() => {
                    dispatch({ type: 'counter_up', payload: CHANGE_VALUE  });
                }}
            />
            <Button 
                title="Decrease" 
                onPress={() => {
                    dispatch({ type: 'counter_down', payload: CHANGE_VALUE  });
                }}
            />
			<Text>Current count: {state.counter}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});

export default ImageDetail;