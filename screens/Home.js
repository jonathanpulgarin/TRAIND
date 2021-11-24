
import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Dimensions
} from 'react-native';

import ActivityTypeImagePost from '../components/ActivityTypeImagePost';
import HeroSection from '../components/HeroSection';
import { data } from './data';
import { colors } from '../constants/colors';
import FeaturedSection from '../components/FeaturedSection';

const WIDTH = Dimensions.get('window').width;

const Home = () => {
	//const tabBarheight = useBottomTabBarHeight();
	const tabBarheight = 45;
	return (
		<View style={styles.container}>
			<ScrollView
				indicatorStyle="white"
				contentContainerStyle={[
					styles.scrollContainer,
					{ paddingBottom: tabBarheight },]}>

				<HeroSection></HeroSection>
				<View style={styles.scrollContentContainer}>
					<Text style={styles.homeTitle}>Get TRAIND...</Text>
					<View style={styles.dividerContainer}>
						<View style={styles.dividerSection1}>
							<Text style={styles.dividerSectionText}>Nearby</Text>
						</View>
						<View style={styles.dividerSection2}>
							<Text style={styles.dividerSectionText}>Experiences</Text>
						</View>
					</View>
					{data.map((item) => (
						<ActivityTypeImagePost key={item.id} image={{uri: item.image_url}} title={item.title}></ActivityTypeImagePost>
					))}
				</View>
				<FeaturedSection></FeaturedSection>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	scrollContentContainer: {
		paddingHorizontal: 20,
		paddingBottom: 20,
	},
	homeTitle: {
		fontSize: 24,
		fontWeight: "600",
		marginTop: 10,
		marginBottom: 10,
	},
	dividerContainer: {
		width: "100%",
		height: 25,
		flexDirection:'row',
		flexWrap:'wrap',
		marginBottom: 10
	},
	dividerSection1: {
		width: "50%",
		height: "100%",
		borderRadius: 5,
		backgroundColor: colors.secondary
	},
	dividerSection2: {
		width: "50%",
		height: "100%",
	},
	dividerSectionText: {
		marginTop: 3,
		marginLeft: 5
	}
});

export default Home;