import React, { useEffect, useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import { Image, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Text, Alert, ScrollView, View } from 'react-native';

import LogoApp from '../../assets/location.png';
import axios from 'axios';

const Home = () => {
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [endereco, setEndereco] = useState('');

    const [visible, setVisible] = useState(true);
    const [cep, setCep] = useState('');

    async function handleBuscaCep() {
        if (estado === '' || cidade === '' || endereco === '') {
            Alert.alert('Para fazer a busca é necessário preencher todos os campos',
                estado === '' ? 'Campo estado é obrigatório' :
                    cidade === '' ? 'Campo cidade é obrigatório' :
                        endereco === '' ? 'Campo rua é obrigatório' : 'Todos campos são obrigatórios'
            )

            return false;
        } else {
            axios.get(`https://viacep.com.br/ws/${estado}/${cidade}/${endereco}/json/`).then(response => {
                setVisible(false);
                setCep(response.data.map((dataCep) => {
                    return (
                        <>
                            <Text> Cep: {dataCep.cep}</Text>,
                            <Text> Logradouro: {dataCep.logradouro}</Text>,
                            <Text> Bairro: {dataCep.bairro}</Text>,
                            {"\n"}{"\n"}
                        </>
                    )
                }));
            })
        }
    }

    function limpaResult() {
        setEstado('');
        setCidade('');
        setEndereco('');
        setCep('');
        setVisible(true);
    }

    return (
        <LinearGradient style={{ height: '100%', width: '100%' }} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} colors={['#314755', '#26a0da']}>
            <KeyboardAvoidingView style={styles.container}>
                <Image style={styles.logoApp} source={LogoApp} alt="Localidade CEP" />

                {visible === true ? (
                    <>
                        <TextInput
                            autoCorrect={false}
                            value={estado}
                            onChangeText={setEstado}
                            maxLength={2}
                            style={styles.inputsValues}
                            placeholder="Digite seu estado, exemplo: SP"
                        />

                        <TextInput
                            autoCorrect={false}
                            value={cidade}
                            onChangeText={setCidade}
                            style={styles.inputsValues}
                            placeholder="Digite sua cidade"
                        />

                        <TextInput
                            autoCorrect={false}
                            value={endereco}
                            onChangeText={setEndereco}
                            style={styles.inputsValues}
                            placeholder="Digite sua rua" />

                        <TouchableOpacity
                            style={styles.buttonSearch}
                            onPress={handleBuscaCep}
                        >
                            <Text style={styles.textButtonSearch}>Procurar</Text>
                        </TouchableOpacity>

                    </>

                ) : (
                    <>

                        <Text style={styles.titleCeps}>Ceps encontrados:</Text>

                        <View style={styles.viewCep}>
                            <ScrollView style={styles.scrollCep}>
                                <Text style={styles.resultCep}>
                                    {cep.length > 0 ? cep : 'Nada encontrado'}
                                </Text>
                            </ScrollView>

                            <TouchableOpacity style={styles.buttonReturnHome} onPress={limpaResult}>
                                <Text style={styles.textSearchNew}>Fazer uma nova busca</Text>
                            </TouchableOpacity>
                        </View>
                    </>

                )}
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'transparent',
        justifyContent: 'center'
    },
    logoApp: {
        width: '100%',
        maxHeight: 130,
        resizeMode: 'contain',
        marginBottom: 35,
        marginTop: 60
    },
    inputsValues: {
        width: '80%',
        height: 60,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'rgba(166, 166, 166, 1)',
        backgroundColor: '#FFF',
        color: 'rgba(187, 187, 187, 1)',
        textAlign: 'center',
        fontWeight: 'bold',
        alignContent: 'center',
        fontSize: 16,
        marginBottom: 15
    },
    buttonSearch: {
        width: '80%',
        height: 60,
        backgroundColor: '#26a0da',
        borderColor: 'rgba(125, 125, 125, 1)',
        borderRadius: 5,
        marginTop: 10,
        justifyContent: 'center'
    },
    textButtonSearch: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    titleCeps: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 15
    },
    viewCep: {
        width: '90%',
        marginTop: 5,
        justifyContent: 'center'
    },
    scrollCep: {
        padding: 10,
        maxHeight: 250,
        backgroundColor: 'rgba(8, 213, 121, 1)',
        borderRadius: 6
    },
    resultCep: {
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },
    buttonReturnHome: {
        width: '100%',
        height: 60,
        backgroundColor: '#26a0da',
        borderWidth: 1,
        borderColor: 'rgba(125, 125, 125, 1)',
        marginTop: 20,
        marginBottom: 65,
        borderRadius: 15,
        justifyContent: 'center'
    },
    textSearchNew: {
        textAlign: 'center',
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})

export default Home;