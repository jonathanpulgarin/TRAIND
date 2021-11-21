import React from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SuggestionBubble from '../components/SuggestionBubble';
import InstructorCard from '../components/InstructorCard';
import { colors } from '../constants/colors'
import { fakePostData, suggestionResults, moreToExplore } from './data';

const WIDTH = Dimensions.get('window').width;

const Search = ({navigation}) => {
    const [searchEntry, onChangeSearch] = React.useState("");

    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <TextInput placeholderTextColor={'#525252'} style={styles.searchInput}
                        onChangeText={onChangeSearch}
                        placeholder={"Find your workout"}
                        value={searchEntry}>
                    </TextInput>
                    <TouchableOpacity style={styles.searchIcon}>
                        <AntDesign name="search1" size={20} color={colors.primary} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View>
                    <Text style={styles.suggestionSectionText}>Related to your Search:</Text>
                    <ScrollView style={{ marginTop: 8 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ width: 20 }}></View>
                        {
                            suggestionResults.map((item, index) => {
                                return <SuggestionBubble key={index} innerText={item}></SuggestionBubble>
                            })
                        }
                    </ScrollView>
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={styles.suggestionSectionText}>More to Explore:</Text>
                    <ScrollView style={{ marginTop: 8 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={{ width: 20 }}></View>
                        {
                            moreToExplore.map((item, index) => {
                                return <SuggestionBubble key={index} innerText={item}></SuggestionBubble>
                            })
                        }
                    </ScrollView>
                </View>
                <View style={styles.postsContainer}>
                    {
                        fakePostData.map(item => {
                            return <InstructorCard key={item.id} postData={item}></InstructorCard>
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
    },
    searchBarContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    searchBar: {
        width: "100%",
        height: 50,
        borderRadius: 50,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginTop: 30
    },
    searchInput: {
        marginTop: 14,
        marginLeft: 20,
        fontWeight: '500',
        fontSize: 16
    },
    searchIcon: {
        position: "absolute",
        right: 20,
        top: 13
    },
    suggestionSectionText: {
        fontSize: 10,
        marginLeft: 30,
        textTransform: "uppercase"
    },
    postsContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    }
});

export default Search;