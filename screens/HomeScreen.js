import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                
                <Button title="Go To Meal Swipe Screen"
                    onPress={() => this.props.navigation.navigate('Meal')} />

            </View>
        );
    }
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});