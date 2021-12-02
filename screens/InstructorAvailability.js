
import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	Dimensions,
	Image,
	TouchableOpacity,
	TextInput
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { data } from './data';
import { colors } from '../constants/colors';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { MaterialIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

const WIDTH = Dimensions.get('window').width;

const InstructorAvailability = ({ navigation, route }) => {
	const [ownLocation, setLocation] = useState("");
	const [selectedDate, setDate] = useState(null);
	const sessionData = route.params;

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.title}>{sessionData.firstname}'s Availability</Text>
				<View style={styles.trainerQuickInfoContainer}>
					<Image style={styles.trainerImage} source={{ uri: sessionData.image_url }} resizeMode="cover"></Image>
					<View style={styles.keyAttributesContainer}>
						{
							sessionData.keyAttributes.map((item, index) => {
								return <View key={index} style={styles.keyAttributesTextContainer}>
									<Feather name="check" size={16} color="white" />
									<Text style={styles.keyAttributesText}>{item}</Text>
								</View>
							})
						}
					</View>
				</View>
				<View style={{ width: "100%", paddingHorizontal: 20 }}>
					<Text style={{ fontSize: 18, fontWeight: '600' }}>Choose a date and time</Text>
					<Text style={{ fontSize: 14 }}>When do you want to GET TRAIND?</Text>
				</View>
				<View style={styles.DateSelectionContainer}>
					<Calendar
						style={{
							width: 330,
							height: 330,
						}}
						theme={{
							textSectionTitleColor: 'black',
							textSectionTitleDisabledColor: 'black',
							selectedDayBackgroundColor: '#00adf5',
							selectedDayTextColor: '#ffffff',
							todayTextColor: colors.primary,
							dayTextColor: '#2d4150',
							textDisabledColor: '#d9e1e8',
							dotColor: '#00adf5',
							selectedDotColor: '#ffffff',
							arrowColor: "black",
							disabledArrowColor: '#d9e1e8',
							monthTextColor: 'black',
							indicatorColor: 'black',
							textDayFontWeight: '600',
							textMonthFontWeight: 'bold',
							textDayHeaderFontWeight: '300',
							textDayFontSize: 18,
							textMonthFontSize: 18,
							textDayHeaderFontSize: 18
						}}></Calendar>
					<View style={{ flexDirection: 'row' }}>
						<Text style={{ fontWeight: '600', fontSize: 14, color: colors.primary, marginRight: 10, marginTop: 3 }}>Selected:</Text>
						<Text style={{ fontSize: 18, fontWeight: '600' }}>No date selected yet</Text>
					</View>
					<TouchableOpacity style={styles.greenButton}>
						<Text style={{ fontSize: 14, fontWeight: '600', color: "white" }}>SAVE DATE & TIME</Text>
					</TouchableOpacity>
					<View style={{ alignSelf: 'stretch' }}>
						<TouchableOpacity style={styles.timeZoneSelector}>
							<View style={{ flexDirection: 'row', }}>
								<Text style={{ fontSize: 16, fontWeight: '600', color: "white", marginRight: 10 }}>Eastern Standard Time (EST)</Text>
								<MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
							</View>
						</TouchableOpacity>
					</View>
					<View style={{ marginTop: 20, flexDirection: 'row' }}>
						<TouchableOpacity style={styles.timeSelector}>
							<Text style={{ fontSize: 18, color: "white", marginRight: 10 }}>60 MINS</Text>
							<MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
						</TouchableOpacity>
						<TouchableOpacity style={{ padding: 3, borderRadius: 30, borderColor: colors.orange, borderWidth: 1, flexDirection: 'row' }}>
							<View style={{ backgroundColor: colors.orange, borderRadius: 20, marginRight: 10, height: 35, width: 35 }}>
								<Text style={{ color: 'white', fontSize: 18, marginTop: 6, marginLeft: 3 }}>AM</Text>
							</View>
							<View>
								<Text style={{ color: '#CECECE', fontSize: 18, marginTop: 6, marginLeft: 3, marginRight: 10 }}>PM</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={{ marginTop: 30 }}>
						<View style={styles.timeRow}>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>12:00 PM</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>01:00 PM</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>02:00 PM</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.timeRow}>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>03:00 PM</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>04:00 PM</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>05:00 PM</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.timeRow}>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>6:00 PM</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>07:00 PM</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>08:00 PM</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.timeRow}>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>9:00 PM</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>10:00 PM</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.timeSlot}>
								<Text style={styles.timeSlotText}>11:00 PM</Text>
							</TouchableOpacity>
						</View>
						<View style={{ alignItems: 'center' }}>
							<View style={{ flexDirection: 'row', marginTop: 20 }}>
								<Text style={{ fontWeight: '600', fontSize: 14, color: colors.primary, marginRight: 10, marginTop: 3 }}>Selected:</Text>
								<Text style={{ fontSize: 18, fontWeight: '600' }}>No time selected</Text>
							</View>
						</View>
						<View style={{ alignItems: 'center' }}>
							<TouchableOpacity style={styles.greenButton}>
								<Text style={{ fontSize: 14, fontWeight: '600', color: "white" }}>SAVE TIME</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={{ width: "100%", paddingHorizontal: 20 }}>
					<Text style={{ fontSize: 18, fontWeight: '600' }}>Choose a location</Text>
					<Text style={{ fontSize: 14, marginBottom: 20 }}>Where do you want to GET TRAIND?</Text>
				</View>
				<View style={{paddingHorizontal: 40, overflow: 'hidden'}}>
					<View style={{ flexDirection: 'row', marginBottom: 30}}>
						<View style={styles.checkboxRound}></View>
						<View>
							<Text style={styles.locationPlaceTitle}>Train at Indoor Facility</Text>
							<Text style={styles.locationPlaceTextTitle}>{sessionData.indoorLocation.name}</Text>
							<Text style={styles.locationPlaceText}>{sessionData.indoorLocation.location}</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', marginBottom: 30}}>
						<View style={styles.checkboxRound}></View>
						<View>
							<Text style={styles.locationPlaceTitle}>Train at Outdoor Facility</Text>
							<Text style={styles.locationPlaceTextTitle}>{sessionData.outdoorLocation.name}</Text>
							<Text style={styles.locationPlaceText}>{sessionData.outdoorLocation.location}</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', marginBottom: 10}}>
						<View style={styles.checkboxRoundFill}></View>
						<View>
							<Text style={{fontSize: 16, marginRight: 50}}>Input location where you want your trainer to meet you</Text>
						</View>
					</View>
					<TextInput style={styles.input}
                        onChangeText={setLocation}
                        value={ownLocation}>
                    </TextInput>
					<View style={{ flexDirection: 'row', marginBottom: 30}}>
						<View style={styles.checkboxRound}></View>
						<View>
							<Text style={styles.locationPlaceTitle}>Virtual</Text>
							<Text style={styles.locationPlaceText}>Virtual meeting via our platform</Text>
						</View>
					</View>
				</View>
				<Text style={styles.bottomTitle}>GET YOUR PERFECT WORKOUT</Text>
				<View style={{flexDirection: 'row'}}>
					<TouchableOpacity style={styles.greenOutlineButton}>
						<Text style={{color: colors.primary,fontSize: 16, fontWeight: '600'}}>GET TRAIND</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.greenButtonBottom}>
						<Text style={{color: 'white', fontWeight: '600', fontSize: 16}}>REQUEST BOOKING</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		paddingBottom: 50,
	},
	title: {
		fontSize: 24,
		fontWeight: "600",
		marginTop: 30
	},
	trainerQuickInfoContainer: {
		flexDirection: 'row',
		paddingHorizontal: 20,
		marginVertical: 30
	},
	keyAttributesContainer: {
		backgroundColor: colors.primary,
		paddingHorizontal: 10,
		paddingVertical: 10,
		borderRadius: 20,
		marginLeft: 20,
	},
	keyAttributesTextContainer: {
		flexDirection: 'row',
	},
	keyAttributesText: {
		color: "white",
		fontSize: 14,
		fontWeight: "600",
		textTransform: 'uppercase',
		marginLeft: 10
	},
	trainerImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		marginTop: 4
	},
	DateSelectionContainer: {
		marginTop: 30,
		borderColor: colors.secondary,
		borderWidth: 1,
		borderRadius: 20,
		padding: 20,
		alignItems: 'center',
		marginBottom: 50,
	},
	greenOutlineButton: {
		alignItems: 'center',
		borderColor: colors.primary,
		borderWidth: 2,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 30,
		marginRight: 10
	},
	greenButtonBottom: {
		alignItems: 'center',
		backgroundColor: colors.primary,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 30,
	},
	greenButton: {
		alignItems: 'center',
		backgroundColor: colors.primary,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 30,
		marginTop: 30
	},
	timeZoneSelector: {
		backgroundColor: 'black',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 30,
		marginTop: 30,
		alignItems: 'center',
	},
	timeSelector: {
		backgroundColor: 'black',
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 30,
		flexDirection: 'row',
		marginRight: 30
	},
	timeRow: {
		flexDirection: 'row',
		marginBottom: 10
	},
	timeSlot: {
		width: 100,
		borderWidth: 2,
		borderColor: 'black',
		borderRadius: 30,
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginHorizontal: 5,
		alignItems: 'center'
	},
	timeSlotText: {
		fontSize: 16,
		fontWeight: '600'
	},
	checkboxRound: {
		height: 20,
		width: 20,
		borderRadius: 20,
		borderColor: colors.orange,
		borderWidth: 3,
		marginRight: 20
	},
	checkboxRoundFill: {
		height: 20,
		width: 20,
		backgroundColor: colors.orange,
		borderColor: colors.orange,
		borderRadius: 20,
		borderWidth: 3,
		marginRight: 20
	},
	locationPlaceTitle: {
		fontSize: 16,
		marginBottom: 10
	},
	locationPlaceTextTitle: {
		color: '#CECECE',
		fontWeight: '600',
		marginBottom: 10,
		fontSize: 16
	},
	locationPlaceText: {
		color: '#CECECE',
		fontSize: 16,
	},
	input: {
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 30,
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginLeft: 40,
		marginBottom: 30
	},
	bottomTitle: {
		fontSize: 14,
		fontWeight: '600',
		marginVertical: 30
	}
});

export default InstructorAvailability;