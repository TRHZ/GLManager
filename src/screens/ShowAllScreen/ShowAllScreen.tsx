import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from "react-native";
import axios from "axios";
import WebServiceParams from "../../WebServiceParams";
import { useNavigation, useFocusEffect } from '@react-navigation/native'; // Importa useFocusEffect
import { StackNavigationProp } from '@react-navigation/stack';

// Define interfaces for Producto y Material
interface Producto {
    id: number;
    nombre: string;
    cantidad: number;
    tipo: string;
}

interface Material {
    id: number;
    nombre: string;
    cantidad: number;
    tipo: string;
}

type Item = Producto | Material;

// Define the type for the navigation stack
type RootStackParamList = {
    ShowAll: undefined;
    ProductDetail: { id: number; type: 'producto' | 'material' };
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'ShowAll'>;

const ShowAllScreen: React.FC = () => {
    const [data, setData] = useState<Item[]>([]);
    const [filter, setFilter] = useState<'todos' | 'producto' | 'material'>('todos');
    const navigation = useNavigation<NavigationProp>();

    // Utiliza useFocusEffect para ejecutar el efecto cuando la pantalla está enfocada
    useFocusEffect(
        React.useCallback(() => {
            fetchData();

            // Actualiza los datos cada 5 minutos (300,000 milisegundos)
            const interval = setInterval(() => {
                fetchData();
            }, 300000);

            // Limpia el intervalo cuando el componente se desmonta
            return () => clearInterval(interval);
        }, []) // Dependencias vacías para ejecutar el efecto solo una vez al cargar la pantalla
    );

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://${WebServiceParams.host}:${WebServiceParams.port}/all`);
            const { productos, materiales } = response.data;
            const allData: Item[] = [
                ...productos.map((item: any) => ({
                    id: item.id,
                    nombre: item.nombre,
                    cantidad: item.cantidad,
                    tipo: 'producto'
                })),
                ...materiales.map((item: any) => ({
                    id: item.id,
                    nombre: item.nombre,
                    cantidad: item.cantidad,
                    tipo: 'material'
                }))
            ];
            setData(allData);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Hubo un problema al obtener los productos y materiales");
        }
    };

    const renderItem = ({ item }: { item: Item }) => (
        <TouchableOpacity 
            style={styles.item}
            onPress={() => {
                navigation.navigate('ProductDetail', { id: item.id, type: item.tipo as 'producto' | 'material' });
            }}
        >
            <Text style={styles.itemText}>{item.nombre} - Cantidad: {item.cantidad}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mostrar Productos y Materiales</Text>
            <View style={styles.filterContainer}>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'todos' && styles.activeFilter]}
                    onPress={() => setFilter('todos')}
                >
                    <Text style={styles.filterText}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'producto' && styles.activeFilter]}
                    onPress={() => setFilter('producto')}
                >
                    <Text style={styles.filterText}>Productos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.filterButton, filter === 'material' && styles.activeFilter]}
                    onPress={() => setFilter('material')}
                >
                    <Text style={styles.filterText}>Materiales</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={filter === 'todos' ? data : data.filter(item => item.tipo === filter)}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                ListEmptyComponent={<Text style={styles.emptyText}>No se encontraron resultados.</Text>}
            />
        </View>
    );
}

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
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    filterButton: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#ccc',
    },
    activeFilter: {
        backgroundColor: '#007bff',
    },
    filterText: {
        color: 'white',
        fontWeight: 'bold',
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
    emptyText: {
        textAlign: 'center',
        color: '#777',
        fontSize: 18,
        marginTop: 20,
    },
});

export default ShowAllScreen;
