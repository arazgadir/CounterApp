import React from 'react'
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent'
import { View, Text, Alert, Platform, Pressable } from 'react-native'
import styles from './style'



export const CounterComponent = () => {
const counter = useSelector = useSelector((state)=> state.petCounter)
const fav = useSelector((state)=> state.petFavourite)
const dispatch = useDispatch()


    return (
        <View style={styles.container}>
            <View  >
                <Text>
                    Redux saga tutorial
                </Text>
            </View>
            <View style={styles.buttonView}>
                <Pressable
                onPress={()=> dispatch(pet)}
                style={styles.button}>
                    <Text> Decrement </Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text> Increment </Text>
                </Pressable>
            </View>
        </View>

    )
}