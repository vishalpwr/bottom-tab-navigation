import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Caption, Card } from 'react-native-paper';
import AppIcon, { Icons } from '../components/AppIcon';
import Colors from "../constants/Colors";

const ProductItem = ({image, name, desc, price}) => {
    return (
        <View style={styles.itemView}>
            <Card style={styles.card}>
                <Image source={image} style={{ width: 130, height: 100, alignSelf: 'center' }} />
                <View style={{ overflow: 'hidden', height: 60 }}>
                    <Text style={styles.title}>{name}</Text>
                </View>
                <Caption>{desc}</Caption>
                <View style={styles.bottomView}>
                    <LinearGradient colors={[Colors.light, Colors.dark]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.addBtn}>
                        <AppIcon type={Icons.Ionicons} name="add" size={24} color={Colors.white} />
                    </LinearGradient>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, alignSelf: 'center', marginLeft: 10, }}>{price}</Text>
                </View>
            </Card>
        </View>
    )
}

export default ProductItem;

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