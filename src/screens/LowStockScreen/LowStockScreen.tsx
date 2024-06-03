import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native'; // Importa useFocusEffect

import styles from './lwSckScreen';
import WebServiceParams from "../../WebServiceParams";

// Define el tipo de datos para los productos y materiales con stock bajo
interface LowStockItem {
    id: string;
    name: string;
    stock: number;
}

export default function LowStockScreen({ navigation }: { navigation: any }) {
    const [lowStockItems, setLowStockItems] = useState<LowStockItem[]>([]);

    // Utiliza useFocusEffect para ejecutar el efecto cuando la pantalla está enfocada
    useFocusEffect(
        React.useCallback(() => {
            // Realiza una solicitud inicial al montar el componente
            fetchLowStockItems();

            // Actualiza los datos cada 5 minutos (300,000 milisegundos)
            const interval = setInterval(() => {
                fetchLowStockItems();
            }, 300000);

            // Limpia el intervalo cuando el componente se desmonta
            return () => clearInterval(interval);
        }, []) // Dependencias vacías para ejecutar el efecto solo una vez al cargar la pantalla
    );

    const fetchLowStockItems = async () => {
        try {
            const response = await axios.get(`http://${WebServiceParams.host}:${WebServiceParams.port}/lowstock`);
            const { lowStockProducts, lowStockMaterials } = response.data;
            // Mapea los productos con stock bajo
            const products: LowStockItem[] = lowStockProducts.map((product: any) => ({
                id: product.id,
                name: product.nombre,
                stock: product.cantidad
            }));
            // Mapea los materiales con stock bajo
            const materials: LowStockItem[] = lowStockMaterials.map((material: any) => ({
                id: material.id,
                name: material.nombre,
                stock: material.cantidad
            }));
            // Une los productos y materiales en una sola lista
            const allLowStockItems: LowStockItem[] = [...products, ...materials];
            setLowStockItems(allLowStockItems);
        } catch (error) {
            console.error("Error al obtener los productos y materiales con stock mínimo:", error);
        }
    };

    const renderItem = ({ item }: { item: LowStockItem }) => (
        <TouchableOpacity style={styles.item} onPress={() => handleItemPress(item)}>
            <Text style={styles.itemText}>{item.name} - Stock: {item.stock}</Text>
        </TouchableOpacity>
    );

    const handleItemPress = (item: LowStockItem) => {
        // Aquí puedes manejar la navegación según el tipo de elemento (producto o material)
        // navigation.navigate('ProductDetail', { item });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Productos y Materiales con Stock Bajo</Text>
            <FlatList
                data={lowStockItems}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </View>
    );
}
