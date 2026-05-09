
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const SocialBox = ({ name = "plus" }: { name: keyof typeof FontAwesome.glyphMap }) => {
    return (
        <View style={styles.container}>
            <FontAwesome name={name} size={24} color="black" />
        </View>
    )
}

export default SocialBox

const styles = StyleSheet.create({
    container: {
        borderColor: "#333",
        borderWidth: 1,
        padding: 10,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18
    }
})