import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './Screens/HomeScreen';
import GameOption from './Screens/GameOptionScreen';
import GameScreen from './Screens/GameScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<PaperProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"	
						component={HomeScreen}
					/>
					<Stack.Screen name='Options' component={GameOption} />
					<Stack.Screen name='GameScreen' component={GameScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</PaperProvider>
	);
}