import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Caption, Card } from 'react-native-paper';
import AppIcon, { Icons } from './AppIcon';
import Colors from "../constants/Colors";

const CollectionItem = ({image, name, desc}) => {
    return (
        <Card style={{ elevation: 8, borderRadius: 20, marginBottom: 20, }} onPress={() => { console.log('click') }}>
            <View style={styles.horizontalCard}>
                <View style={{ alignSelf: 'center', justifyContent: 'center' }}>
                    <Image source={image} style={{ width: 80, height: 80, }} />
                </View>
                <View style={{ overflow: 'hidden', marginVertical: 24, paddingHorizontal: 10, justifyContent: 'center', alignSelf: 'center' }}>
                    <Text style={[styles.title, { width: '100%' }]}>{name}</Text>
                    <Caption>{desc}</Caption>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <LinearGradient colors={[Colors.light, Colors.dark]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.addHBtn}>
                        <AppIcon type={Icons.Ionicons} name="add" size={24} color="white" />
                    </LinearGradient>
                </View>
            </View>
        </Card>
    )
}

export default CollectionItem;

const styles = StyleSheet.create({
    itemView: {
        flex: 1,
        padding: 10,
    },
    title: {
        width: 100,
        fontFamily: 'san-serif',
        fontWeight: 'bold',
        fontSize: 22,
    },
    card: {
        height: 245,
        width: 170,
        paddingHorizontal: 16,
        paddingTop: 10,
        borderRadius: 20,
        elevation: 10,
        overflow: 'hidden',
    },
    bottomView: {
        height: 52,
        flexDirection: 'row',
    },
    addBtn: {
        padding: 7,
        paddingVertical: 10,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
        marginTop: 8,
    },
    horizontalCard: {
        height: 120,
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'space-around',
    },
    addHBtn: {
        padding: 7,
        paddingHorizontal: 10,
        borderTopLeftRadius: 18,
        borderBottomLeftRadius: 18,
        left: 30,
    }
});