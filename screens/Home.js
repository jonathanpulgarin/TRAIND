
import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
} from 'react-native';
import ActivityTypeImagePost from '../components/activityTypeImagePost';
import HeroSection from '../components/HeroSection';
import { data } from './data';

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
						<ActivityTypeImagePost key={item.id} image={item.image_url} title={item.title}></ActivityTypeImagePost>
					))}
				</View>
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
		marginTop: "10px",
		marginBottom: "10px",
	},
	dividerContainer: {
		width: "100%",
		height: "25px",
		flexDirection:'row',
		flexWrap:'wrap',
		marginBottom: "10px"
	},
	dividerSection1: {
		width: "50%",
		height: "100%",
		backgroundColor: "#E3F0D1"
	},
	dividerSection2: {
		width: "50%",
		height: "100%",
	},
	dividerSectionText: {
		marginTop: "3px",
		marginLeft: "5px"
	}
});

export default Home;