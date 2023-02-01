import * as React from 'react';
import {SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './Screens/HomeScreen';
import GameOption from './Screens/GameOptionScreen';
import GameScreen from './Screens/GameScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		// <SafeAreaView>
			<PaperProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Home"	
							component={HomeScreen}
							options = {{
								headerShown : false
							}}
						/>
						<Stack.Screen name='Options' component={GameOption}  options = {{
								headerShown : false
							}}/>
						<Stack.Screen name='GameScreen' component={GameScreen} options = {{headerBackVisible : false, headerShown : false}} />
					</Stack.Navigator>
				</NavigationContainer>
			</PaperProvider>
		// </SafeAreaView>
	);
}