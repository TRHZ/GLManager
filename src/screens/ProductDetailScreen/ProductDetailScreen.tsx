import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { useNavigation, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from "axios";
import WebServiceParams from "../../WebServiceParams";

// Define interfaces for Producto y Material
interface Producto {
    id: number;
    nombre: string;
    cantidad: number;
    tipo: string;
    descripcion: string;
}

interface Material {
    id: number;
    nombre: string;
    cantidad: number;
    tipo: string;
    descripcion: string;
}

type Item = Producto | Material;

// Define the type for the navigation stack
type RootStackParamList = {
    ShowAll: undefined;
    ProductDetail: { id: number; type: 'producto' | 'material' };
};

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetail'>;

interface Props {
    route: ProductDetailScreenRouteProp;
    navigation: NavigationProp;
}

const ProductDetailScreen: React.FC<Props> = ({ route, navigation }) => {
    const { id, type } = route.params;
    const [detail, setDetail] = useState<Item | null>(null);

    useEffect(() => {
        if (type === 'material') {
            fetchMaterialDetail();
        } else {
            fetchProductDetail();
        }
    }, [id, type]);

    const fetchProductDetail = async () => {
        try {
            const response = await axios.get(`http://${WebServiceParams.host}:${WebServiceParams.port}/productos/${id}`);
            setDetail(response.data);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Hubo un problema al obtener los detalles del producto");
        }
    };

    const fetchMaterialDetail = async () => {
        try {
            const response = await axios.get(`http://${WebServiceParams.host}:${WebServiceParams.port}/materiales/${id}`);
            setDetail(response.data);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Hubo un problema al obtener los detalles del material");
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
            <Text style={styles.title}>Detalles del {type === 'material' ? 'Material' : 'Producto'}</Text>
            <Button title="Regresar" onPress={() => navigation.goBack()} />
            <View style={styles.item}>
                <Text style={styles.itemText}>Nombre: {detail.nombre}</Text>
                <Text style={styles.itemText}>Cantidad: {detail.cantidad}</Text>
                <Text style={styles.itemText}>Descripción: {detail.descripcion}</Text>
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
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    itemText: {
        fontSize: 18,
        color: 'black',
    },
});

export default ProductDetailScreen;
