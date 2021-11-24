
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';

import InstructorCard from '../components/InstructorCard';
import { data, fakePostData } from './data';
import { colors } from '../constants/colors';


const Saved = () => {

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Saved</Text>
                <Text style={styles.subTitle}>Saved &gt; Sessions</Text>
            </View>
            <View style={styles.userImageContainer}>
                <Image style={styles.userImage} source={require('../assets/tim.png')}></Image>
                <Text style={styles.userImageText}>Hi Tim</Text>
            </View>
            <ScrollView style={styles.savedScrollView}>
                <View style={styles.savedPostsContainer}>
                    {
                        fakePostData.map(item => {
                            return <InstructorCard key={item.id} postData={item} navLink={"SavedTrainingSession"}></InstructorCard>
                        })
                    }
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 30
    },
    titleContainer: {
        paddingLeft: 20
    },
    title: {
        fontSize: 26,
        fontWeight: "600",
        marginBottom: 10
    },
    subTitle: {
        fontWeight: "500",
    },
    userImageContainer: {
        position: "absolute",
        top: 0,
        right: 20,
        alignItems: 'center'
    },
    userImage: {
        width: 60,
        resizeMode: 'contain'
    },
    userImageText: {
        marginTop: -25,
        fontWeight: "500",
        fontSize: 16
    },
    savedScrollView: {
        marginTop: 50
    },
    savedPostsContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    }
});

export default Saved;