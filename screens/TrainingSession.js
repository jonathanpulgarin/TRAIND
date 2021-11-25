
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import SessionOverviewCard from '../components/SessionOverviewCard';

import { Entypo } from '@expo/vector-icons';
import { data, fakePostData } from './data';
import { colors } from '../constants/colors';


const TrainingSession = ({ navigation, route }) => {
    const [outdoorEnabled, setOutdoor] = useState(true);

    const sessionData = fakePostData[route.params.key - 1];

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.container}>
                <Text style={styles.title}>{sessionData.trainingType} with {sessionData.name}</Text>
                <SessionOverviewCard sessionData={sessionData}></SessionOverviewCard>
                <View style={{ width: "100%", marginTop: 40 }}>
                    <Text style={styles.sessionSectionTitle}>Directions</Text>
                </View>
                <View style={styles.directionSelectorConatiner}>
                    <TouchableOpacity onPress={() => setOutdoor(false)}
                        style={!outdoorEnabled ? styles.directionSelectorEnabled : styles.directionSelectorDisabled}>
                        <Text style={!outdoorEnabled ? styles.directionSelectorTextEnabled : styles.directionSelectorTextDisabled}
                        >INDOOR LOCATION</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setOutdoor(true)}
                        style={outdoorEnabled ? styles.directionSelectorEnabled : styles.directionSelectorDisabled}>
                        <Text style={outdoorEnabled ? styles.directionSelectorTextEnabled : styles.directionSelectorTextDisabled}
                        >OUTDOOR LOCATION</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.borderViewContainer}>
                    <Text style={styles.borderViewTitle}>{
                        outdoorEnabled ? sessionData.outdoorLocation.name : sessionData.indoorLocation.name
                    }</Text>
                    <Text style={styles.directionViewLocation}>{
                        outdoorEnabled ? sessionData.outdoorLocation.location : sessionData.indoorLocation.location
                    }</Text>
                </View>
                <View style={{ width: "100%", marginTop: 40 }}>
                    <Text style={styles.sessionSectionTitle}>Equipment</Text>
                </View>
                <View style={styles.borderViewContainer}>
                    <Text style={styles.borderViewTitle}>Activewear & other items</Text>
                    <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 20 }}>
                        {
                            sessionData.neededEquipment.map((item, index) => {
                                return <View style={styles.equipmentListItemContainer} key={index}>
                                    <Entypo style={{ marginTop: 0 }} name="dot-single" size={24} color="black" />
                                    <Text style={styles.equipmentListItem}>{item}</Text>
                                </View>
                            })
                        }
                    </View>
                    <Text style={styles.borderViewTitle}>Optional</Text>
                    <View style={{ marginTop: 10, marginLeft: 10 }}>
                        {
                            sessionData.optionalEquipment.map((item, index) => {
                                return <View style={styles.equipmentListItemContainer} key={index}>
                                    <Entypo style={{ marginTop: 0 }} name="dot-single" size={24} color="black" />
                                    <Text style={styles.equipmentListItem}>{item}</Text>
                                </View>
                            })
                        }
                    </View>
                </View>
                <View style={{ marginTop: 30 }}></View>
                {
                    sessionData.showcaseImages.map((item, index) => {
                        return <Image key={index} style={styles.showcaseImage} source={{ uri: item }}></Image>
                    })
                }
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 100
    },
    title: {
        marginTop: 30,
        fontSize: 24,
        fontWeight: "600"
    },
    sessionSectionTitle: {
        fontWeight: "600",
        fontSize: 18
    },
    directionSelectorConatiner: {
        flexDirection: 'row',
        marginTop: 20
    },
    directionSelectorDisabled: {
        paddingTop: 5,
        borderTopWidth: 1,
        borderColor: "#CECECE",
        width: "50%",
        alignItems: 'center'
    },
    directionSelectorEnabled: {
        paddingTop: 5,
        borderTopWidth: 1,
        borderColor: colors.primary,
        width: "50%",
        alignItems: 'center'
    },
    directionSelectorTextDisabled: {
        fontSize: 14,
        color: '#CECECE'
    },
    directionSelectorTextEnabled: {
        fontSize: 14,
        color: colors.primary
    },
    borderViewContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 1,
        width: "100%",
        marginTop: 20
    },
    borderViewTitle: {
        fontWeight: "600",
        fontSize: 18
    },
    directionViewLocation: {
        fontSize: 18,
        marginTop: 10
    },
    equipmentListItem: {
        textTransform: 'uppercase',
        fontSize: 18,
        fontWeight: "600",
    },
    equipmentListItemContainer: {
        flexDirection: 'row',
        marginVertical: 7,
    },
    showcaseImage: {
        width: "100%",
        height: 300,
        borderRadius: 30,
        resizeMode: 'cover',
        marginBottom: 10
    }
});

export default TrainingSession;