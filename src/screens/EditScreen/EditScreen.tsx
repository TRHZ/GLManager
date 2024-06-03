import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { RouteProp, NavigationProp, ParamListBase } from "@react-navigation/native";
import axios from "axios";
import WebServiceParams from "../../WebServiceParams";

interface Item {
    id: string;
    name: string;
    description: string;
    stock: string;
    minStock?: string;
    maxStock?: string;
    entryDate: string;
}

type EditScreenRouteProp = RouteProp<{ params: { item: Item } }, 'params'>;

type EditScreenProps = {
    route: EditScreenRouteProp;
    navigation: NavigationProp<ParamListBase>;
};

const EditScreen: React.FC<EditScreenProps> = ({ route, navigation }) => {
    const { item } = route.params;
    const [detail, setDetail] = useState<Item | null>(null);

    useEffect(() => {
        fetchItemData();
    }, []);

    const fetchItemData = async () => {
        try {
            const response = await axios.get(`http://${WebServiceParams.host}:${WebServiceParams.port}/all/${item.id}`);
            setDetail(response.data);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Hubo un problema al obtener los detalles del elemento");
        }
    };

    if (!detail) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Cargando...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalles del Elemento</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Regresar</Text>
            </TouchableOpacity>
            <View style={styles.item}>
                {Object.keys(detail).map((key, index) => (
                    <View key={index} style={styles.detailItem}>
                        <Text style={styles.detailItemTitle}>{key}</Text>
                        <Text style={styles.detailItemValue}>{detail[key as keyof Item]}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#007AFF',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    detailItemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    detailItemValue: {
        fontSize: 18,
        color: 'black',
    },
});

export default EditScreen;
