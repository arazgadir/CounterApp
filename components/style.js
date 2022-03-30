import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
   
    buttonView: {
        height: 50,
        margin: 10,
        flexDirection: 'row',
        borderRadius: 10,
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        height: 45,
        margin: 5
    }
})

export default styles