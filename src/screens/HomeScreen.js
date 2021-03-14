import React from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image,
    ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Caption, Card, Title } from 'react-native-paper';
import AppIcon, { Icons } from '../components/AppIcon';
import CollectionItem from '../components/CollectionItem';
import ProductItem from '../components/ProductItem';
import Colors from "../constants/Colors";
import { CollectionList, ProductList } from '../raw';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.statusbar} />
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.menu}>
                        <AppIcon type={Icons.Ionicons} name="menu" size={24} color={Colors.gray} />

                    </TouchableOpacity>
                    <View style={styles.profileView}>
                        <TouchableOpacity style={styles.profile}>
                            <Image style={styles.image} source={require('../assets/image/profileImg.jpg')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.search}>
                        <AppIcon type={Icons.Ionicons} name="search" size={24} color={Colors.gray} />
                    </TouchableOpacity>
                </View>
                <View style={styles.products}>
                    <View style={styles.titleView}>
                        <Title style={{ fontSize: 24 }}>Popular Products</Title>
                        <TouchableOpacity>
                            <AppIcon type={Icons.MaterialCommunityIcons} name="dots-horizontal" size={24} color={Colors.gray} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {ProductList.map((item, index) => (
                            <ProductItem
                                key={index}
                                name={item.name}
                                desc={item.desc}
                                price={item.price}
                                image={item.image} />
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.collections}>
                    <View style={styles.titleView}>
                        <Title style={{ fontSize: 24 }}>New Collections</Title>
                        <TouchableOpacity>
                            <AppIcon type={Icons.MaterialCommunityIcons} name="dots-horizontal" size={24} color={Colors.gray} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ margin: 10 }}>
                        {CollectionList.map((item, index) => (
                            <CollectionItem
                                key={index}
                                name={item.name}
                                desc={item.desc}
                                image={item.image} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: Colors.bg
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 8
    },
    profileView: {
        width: 200,
        alignItems: 'center',
        alignContent: 'center',
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: Colors.dark,
    },
    image: {
        width: 32,
        height: 32,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 3,
    },
    titleView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    title: {
        width: 100,
        fontFamily: 'san-serif',
        fontWeight: 'bold',
        fontSize: 22,
    },
    bottomView: {
        height: 52,
        flexDirection: 'row',
    },
})
