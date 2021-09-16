import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import IonicIcons from 'react-native-vector-icons/Ionicons';
import LogoApp from '../../assets/location.png';

const Doc = () => {
  return (
    <LinearGradient style={{ height: '100%', width: '100%' }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#314755', '#26a0da']}>
        <View style={styles.container}>
            <Image style={styles.LogoApp} source={LogoApp} alt="Localidade Cep"  />
    
            <Text style={styles.titleDoc}>Como usar o App?</Text>

            <ScrollView style={styles.scrollDoc}>
                
            <Text style={styles.textDoc}>
                    <IonicIcons name="pin-outline" size={26} color="#FFF" />{' '}
                    Ao acessar, preencha seu estado utilizando uma sigla, exemplo: 
                    <Text style={styles.textParafraseado}>
                        SP
                    </Text>
                </Text>

                <Text style={styles.textDoc}>
                    <IonicIcons name="navigate-circle-outline" size={26} color="#FFF" />{' '}
                    Preencha o nome completo da sua cidade, exemplo:
                    <Text style={styles.textParafraseado}>
                        Ubatuba
                    </Text>
                </Text>

                <Text style={styles.textDoc}>
                    <IonicIcons name="location-outline" size={26} color="#FFF" />{' '}
                    Preencha o nome completo da sua rua sem o número da sua casa, exemplo: {' '}
                    <Text style={styles.textParafraseado}>
                        Professor Thomaz Galhardo
                    </Text>
                </Text>
                

                <Text style={styles.textDoc}>
                    Observação: Se atente a não errar o nome da sua rua, caso escrever alguma
                    nome não correto ele não encontrará os dados.
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
    scrollDoc: {
        width: '90%',
        height: '100%',
        maxHeight: 300,
        padding: 12,
        backgroundColor: '#26a0da',
        borderRadius: 6
    },
    textDoc: {
        textAlign: 'left',
        lineHeight: 30,
        fontSize: 20,
        paddingBottom: 25,
        fontWeight: 'bold',
        color: '#FFF'
    },
    titleDoc: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textParafraseado: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
})

export default Doc;