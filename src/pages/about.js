import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import IonicIcons from 'react-native-vector-icons/Ionicons';
import LogoApp from '../../assets/location.png';

const About = () => {
  return (
    <LinearGradient style={{ height: '100%', width: '100%' }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#314755', '#26a0da']}>
        <View style={styles.container}>
            <Image style={styles.LogoApp} source={LogoApp} alt="Localidade Cep"  />
    
            <ScrollView style={styles.scrollAbout}>
                <Text style={styles.textAbout}>
                    Esse app foi desenvolvido com o ojetivo de ajudar pessoas a encontrar os ceps de seu endereço.
                    Devido a mudanças de cep em algumas cidade, isso não foi anunciado de forma global,
                    por isso se você ainda não sabe qual seu cep, digite em nosso app e localize-o.
                </Text>
                
                <Text style={styles.textAbout}><IonicIcons name="wifi-outline" size={27} color="#FFF"/>{' '}
                    Esse app necessita de conexão com a internet para realizar a busca de ceps.
                </Text>
            </ScrollView>

        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        height: '100%',
        backgroundColor: 'transparent'
    },
    LogoApp: {
        width: '100%',
        maxHeight: 130,
        resizeMode: 'contain',
        marginBottom: 35,
        marginTop: 30
    },
    scrollAbout: {
        width: '90%',
        height: '100%',
        maxHeight: 300,
        padding: 10,
        backgroundColor: '#26a0da',
        borderRadius: 6
    },
    textAbout: {
        textAlign: 'left',
        lineHeight: 30,
        padding: 10,
        fontSize: 20,
        paddingBottom: 25,
        fontWeight: 'bold',
        color: '#FFF'
    }
})

export default About;