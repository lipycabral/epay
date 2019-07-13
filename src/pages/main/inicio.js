import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Inicio extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewOfertas}>
                    <View style={styles.imgOfertas} />
                </View>
                <Text>Melhores avaliados</Text>
                <View style={styles.mercados}>
                    
                </View>
                <Text>Mais próximos</Text>
                <View style={styles.mercados}>
                    
                </View>
                <Text style={{textAlign: 'center', backgroundColor: 'transparent'}}>Em ofertas</Text>
                <View style={styles.mercados}>
                    <Text>teste</Text>
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center'
    },
    viewOfertas: {
        flex: 3
    },
    imgOfertas: {
        width: '100%',
        height: '100%',
        borderColor: 'black',
        borderWidth: 0.2,
    },
    mercados: {
        flex: 1,
        borderColor: 'black',
        borderWidth: 0.8,
        borderRadius: 5,
        marginHorizontal: 2,
        marginVertical: 2,
    }
})