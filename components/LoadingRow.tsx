import React, {useState, useEffect, FC} from 'react';
import {Animated, Text, View, Easing, SafeAreaView } from 'react-native';
import {styles} from '../constants/globalStyles';


const GlowView: FC = ({children}) => {
	const [glowAnim] = useState(new Animated.Value(0));

	useEffect(() => {
		Animated.loop(
			Animated.timing(glowAnim, {
				toValue: 1,
				duration: 1500,
				easing: Easing.inOut(Easing.quad),
				useNativeDriver: true,
			})
		).start();
	}, []);

	return (
		<Animated.View style={{ opacity: glowAnim}}>
			{children}
		</Animated.View>
	)
}

const LoadingRow = () => (
  <SafeAreaView style={{ padding: 12 }}>
    <GlowView>
      <View style={styles.LoadingItem}>
        <View style={styles.GlowCheckbox} />
        <Text style={styles.GlowText}>Loading</Text>
        <Text style={styles.GlowText}>cool</Text>
        <Text style={styles.GlowText}>state</Text>
      </View>
    </GlowView>
  </SafeAreaView>
);

export default LoadingRow;