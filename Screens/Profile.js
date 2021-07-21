import * as React from 'react';
import {Text, TouchableOpacity, KeyboardAvoidingView, Image, View,Platform,Dimensions, StatusBar, TextInput, Alert, StyleSheet, ScrollView} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Font from 'expo-font';

//const font = 

export default class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            fontLoaded: false,
        };
    }

    render(){
        return(
            <View style = {styles.container}>
                 <SafeAreaView style = {styles.safeview}/>
                    <Text>App Name</Text>
                    <Text>Profile</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignSelf:"center",
        alignItems:"center",
    },
    safeview: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appname:{

    }
});