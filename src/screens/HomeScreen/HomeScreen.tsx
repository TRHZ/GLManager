import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from "react-native";
import { useFocusEffect } from '@react-navigation/native'; // Importa useFocusEffect
import axios from "axios";
import WebServiceParams from "../../WebServiceParams";
import styles from './hmScreen'; // Importa los estilos desde el nuevo archivo

// Define the product type
interface Product {
    id: string;
    name: string;
}

export default function HomeScreen({ navigation }: { navigation: any }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false); // Estado para controlar la actualización

    // Utiliza useFocusEffect para ejecutar el efecto cuando la pantalla está enfocada
    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                try {
                    // Obtener los productos/materiales recientes desde el servicio web
                    const response = await axios.get(`http://${WebServiceParams.host}:${WebServiceParams.port}/all/recent`);
                    console.log(response.data); // Añade esto para ver la respuesta del servidor
                    const productsList: Product[] = response.data.slice(0, 6).map((item: any) => ({
                        id: item.id,
                        name: item.nombre // Ajusta esto si la propiedad del nombre es diferente
                    }));

                    // Filtrar productos duplicados
                    const uniqueProducts = productsList.filter((item, index, self) =>
                        index === self.findIndex((t) => (
                            t.id === item.id
                        ))
                    );

                    setProducts(uniqueProducts);
                } catch (error) {
                    console.error("Error al obtener los productos/materiales:", error);
                }
            };

            fetchData();

            // Configura un intervalo para verificar actualizaciones cada 1 minuto (60000 milisegundos)
            const interval = setInterval(() => {
                fetchData();
            }, 60000);

            // Limpia el intervalo cuando el componente se desmonta
            return () => clearInterval(interval);
        }, [refresh]) // El efecto se activará cada vez que 'refresh' cambie
    );

    const renderItem = ({ item }: { item: Product }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Edit', { item })}>
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    // Función para manejar la acción de agregar un producto
    const handleAddProduct = (screen: string) => {
        navigation.navigate(screen);
        // Cambia el estado 'refresh' para forzar una actualización
        setRefresh(prev => !prev);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Productos Recientes</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.smallButton, customStyles.button]} onPress={() => handleAddProduct('ProdAddMat')}>
                    <Text style={[styles.buttonText, customStyles.buttonText]}>Agregar Material</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.smallButton, customStyles.button]} onPress={() => handleAddProduct('ProdAddProd')}>
                    <Text style={[styles.buttonText, customStyles.buttonText]}>Agregar Producto</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.smallButton, customStyles.deleteButton]} onPress={() => navigation.navigate('Delete')}>
                <Text style={[styles.buttonText, customStyles.deleteButtonText]}>Eliminar</Text>
            </TouchableOpacity>
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
                // Agrega la propiedad extraData para que FlatList vuelva a renderizarse cuando 'refresh' cambie
                extraData={refresh}
            />
        </View>
    );
}

// Estilos personalizados
const customStyles = StyleSheet.create({
    button: {
        backgroundColor: '#3498db',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 1,
        marginHorizontal: 5,
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 2,
        marginHorizontal: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
