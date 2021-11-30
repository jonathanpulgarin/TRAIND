
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

import AccountOverviewCard from '../components/AccountOverviewCard';

import { Entypo } from '@expo/vector-icons';
import { data, AccountInfo } from './data';
import { colors } from '../constants/colors';


const Account = ({ navigation, route }) => {

    const sessionData = AccountInfo;

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.container}>
                <Text style={styles.title}>{sessionData.name}</Text>
                <AccountOverviewCard></AccountOverviewCard>
                <View style={{ width: "100%", marginTop: 40 }}>
                    <Text style={styles.sessionSectionTitle}>More About {sessionData.firstname}</Text>
                </View>
                <View style={styles.borderViewContainer}>
                    <Text style={styles.borderViewTitle}>Music: What's on {sessionData.firstname}'s playlist?</Text>
                    <Image style={styles.imageOfFeaturedItem} source={{uri: sessionData.playlistSongAlbumCover}}></Image>
                    <Text style={styles.borderViewTitle}>What's {sessionData.firstname} reading?</Text>
					<Image style={styles.imageOfFeaturedItem} source={{uri: sessionData.bookReadingCover}}></Image>
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
	imageOfFeaturedItem: {
		width: 150,
		height: 150,
		marginVertical: 20,
		borderRadius: 20,
		resizeMode: 'cover'
	}
});

export default Account;