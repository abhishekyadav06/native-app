import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class TileComponent extends Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Go To Home Screen"
                    onPress={() => this.props.navigation.navigate('Home')} />
            </View>
        );
    }
}
export default TileComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});