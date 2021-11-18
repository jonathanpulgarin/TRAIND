import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { colors } from '../constants/colors'

import Amplify, { Auth } from 'aws-amplify';
// import Amplify from '@aws-amplify/core'
import aws_exports from '../aws_exports.js';
import SignUp from './SignUp';

// const aws_exports = {
// 	"Auth": {
// 		"aws_project_region": "us-east-2",
// 		"aws_cognito_identity_pool_id": "us-east-2:9760398a-f723-4da2-afa1-797c03a38159",
// 		"aws_cognito_region": "us-east-2",
// 		"aws_user_pools_id": "us-east-2_SSsy4Ny2z",
// 		"aws_user_pools_web_client_id": "4nhp3flbftit7cf46qc3i5a8vq",
// 	},
// }

Amplify.configure(aws_exports);
Auth.configure(aws_exports);


const WIDTH = Dimensions.get('window').width;

const Login = () => {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    function SignUp() {
        Auth.signIn(email, password)
        .then(success => console.log('successful sign in'))
        .catch(err => Alert("wrong boi"));
    }

    return (
        <TouchableWithoutFeedback /*onPress={Keyboard.dismiss}*/ style={styles.container}>
            < View style={styles.contentContainer}>
                <Text style={styles.welcome}>Welcome back!</Text>
                <Text style={styles.title}>Login</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangeEmail}
                        placeholder={"email"}
                        value={email}>
                    </TextInput>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput style={styles.input}
                        onChangeText={onChangePassword}
                        placeholder={"password"}
                        value={password}>
                    </TextInput>
                </View>
                <View style={styles.bottomAreaContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => SignUp()}>
                        <Text style={styles.button}>LOGIN</Text>
                    </TouchableOpacity>
                    <View style={styles.signUpArea}>
                        <Text style={styles.signUpLabel}>No account?</Text>
                        <TouchableOpacity onPress={() => SignUp}>
                            <Text style={styles.signUpButton}>Sign Up.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentContainer: {
        marginTop: 50,
        alignItems: 'center',
        paddingTop: 50,
        paddingHorizontal: 20,
        height: "100%"
    },
    welcome: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.primary,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
        marginTop: 80,
    },
    formContainer: {
        marginTop: 80,
        width: WIDTH * 0.75,
    },
    inputLabel: {
        fontSize: 10,
        marginTop: 50,
    },
    bottomAreaContainer: {
        position: "absolute",
        bottom: 150,
    },
    input: {
        width: "100%",
        height: 40,
        borderBottomWidth: 1,
    },
    button: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        fontWeight: "600",
        backgroundColor: colors.primary,
        paddingTop: 13,
        paddingBottom: 15,
        paddingHorizontal: 50,
        borderRadius: 25,
        overflow: 'hidden',
    },
    signUpArea: {
        flexDirection:'row',
		flexWrap:'wrap',
        marginTop: 20
    },
    signUpLabel: {
        fontSize: 18,
        fontWeight: "600",
        marginRight: 5
    },
    signUpButton: {
        color: colors.primary,
        fontSize: 18,
        fontWeight: "600"
    }
});

export default Login;