import {
    Alert,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    View,
} from 'react-native';
import React, { useState } from 'react';
import { Button, Text } from 'react-native-paper';
import { TwitterCallBack, add, getAuth } from '../../services/Service';
import WebView from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import NavigationName from '../../constants/NavigationName';
import URL from 'url-parse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LocalStorageKey from '../../constants/LocalStorageKey';
const styles = StyleSheet.create({

    webView: {
        height: 1000, width: '100%', padding: '20%', marginTop: '10%', marginBottom: '20%'
    },
    container: {

        justifyContent: 'center', // Center horizontally
        alignItems: 'center', // Center vertically
        marginTop: 400, // Add margin from the top
    },
    button: {
        backgroundColor: 'lightblue', // Light blue background color
        padding: 10,
        borderRadius: 5, // Border radius to create a rounded look
        borderWidth: 1, // Border width
        borderColor: 'lightblue', // Border color
    },
    buttonText: {
        color: 'black', // Text color
        textAlign: 'center',
    },

});

const Login = ({ navigation }) => {

    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);
    const [startView, setStartView] = useState(false);
    const handleNavigationStateChange = async (navState) => {
        const url = navState.url;
        if (url.includes('sessions/saveAccessTokens')) {
            const urlParams = new URLSearchParams(new URL(url).search);

            const parsedUrl = new URL(url, true);

            const oauthToken = parsedUrl.query.oauth_token;
            await AsyncStorage.setItem(LocalStorageKey.token, oauthToken);
            const oauthVerifier = parsedUrl.query.oauth_verifier;
            const data = await TwitterCallBack(oauthToken, oauthVerifier).then(async () => {
                await add();
            }

            )
            console.log(data);

            console.log("oauth_token:", oauthToken);
            console.log("oauth_verifier:", oauthVerifier);
            setStartView(false);
            navigation.navigate(NavigationName.HOME);
        }
    };

    const handleAuth = async () => {
        try {
            const result = await getAuth();
            setUrl(result.redirectUrl);
            setStartView(true)

        } catch (error) {
            console.log(error);
            setError(error);
        }
    };
    return (
        <>
            <View>


                {startView ? (
                    <ScrollView>
                        <View >

                            <WebView
                                source={{ uri: url }}
                                style={styles.webView}
                                onNavigationStateChange={handleNavigationStateChange}
                            />
                        </View>
                    </ScrollView>
                ) : (
                    <>
                        <View style={styles.container}>
                            <TouchableOpacity style={styles.button} onPress={() => handleAuth()}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                        </View>

                    </>

                )}
            </View>
        </>
    );
}
export default Login;