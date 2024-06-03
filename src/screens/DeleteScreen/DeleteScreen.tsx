import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, FlatList, Alert, StyleSheet } from "react-native";
import axios from "axios";
import WebServiceParams from "../../WebServiceParams";

// Define los tipos
type Item = {
    id: string;
    name: string;
    type: 'producto' | 'material';
};

type DeleteScreenProps = {
    navigation: any;
};

// Define el componente DeleteScreen
export default function DeleteScreen({ navigation }: DeleteScreenProps) {
    const [items, setItems] = useState<Item[]>([]);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [filter, setFilter] = useState<'producto' | 'material'>('producto'); 

    // Función para obtener los elementos según el filtro
    useEffect(() => {
        fetchItems();
    }, [filter]);

    // Función para obtener los elementos desde el servicio web
    const fetchItems = async () => {
        try {
            let response;
            if (filter === 'producto') {
                response = await axios.get(`http://${WebServiceParams.host}:${WebServiceParams.port}/productos`);
            } else {
                response = await axios.get(`http://${WebServiceParams.host}:${WebServiceParams.port}/materiales`);
            }

            const data = response.data.map((item: any) => ({
                id: item.id,
                name: item.nombre,
                type: filter,
            }));
            setItems(data);
        } catch (error) {
            console.error("Error fetching items:", error);
            Alert.alert("Error", "Hubo un problema al obtener los productos y materiales");
        }
    };

    // Función para alternar la selección de elementos
    const handleToggleSelect = (id: string) => {
        setSelectedItems(prevSelectedItems => {
            if (prevSelectedItems.includes(id)) {
                return prevSelectedItems.filter(item => item !== id);
            } else {
                const selectedItem = items.find(item => item.id === id);
                return selectedItem && selectedItem.type === filter
                    ? [...prevSelectedItems, id]
                    : prevSelectedItems;
            }
        });
    };

    // Función para eliminar los elementos seleccionados
    const handleDelete = async () => {
        if (selectedItems.length === 0) {
            Alert.alert("Advertencia", "Por favor seleccione al menos un elemento para eliminar");
            return;
        }

        try {
            await Promise.all(
                selectedItems.map(async id => {
                    const url = `http://${WebServiceParams.host}:${WebServiceParams.port}/${items.find(item => item.id === id)?.type === 'producto' ? 'productos' : 'materiales'}/del/${id}`;
                    console.log("URL de la solicitud DELETE:", url); // Imprimir la URL para depuración
                    await axios.delete(url);
                })
            );

            setItems(prevItems => prevItems.filter(item => !selectedItems.includes(item.id)));
            setSelectedItems([]);
            Alert.alert("Éxito", "Elementos eliminados correctamente");
        } catch (error) {
            console.error("Error deleting items:", error);
            Alert.alert("Error", "Hubo un problema al eliminar los elementos");
        }
    };

    // Función para renderizar cada elemento de la lista
    const renderItem = ({ item }: { item: Item }) => (
        <TouchableOpacity 
            style={[styles.item, { backgroundColor: selectedItems.includes(item.id) ? "#ffcccc" : "white" }]} 
            onPress={() => handleToggleSelect(item.id)}
        >
            <Text style={styles.itemText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
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
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
            <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
                <Text style={styles.deleteButtonText}>Eliminar Elementos Seleccionados</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Bar')}>
                <Text style={styles.homeButtonText}>Home</Text>
            </TouchableOpacity>
        </View>
    );
}

// Estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    filterButton: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    activeFilter: {
        backgroundColor: '#007bff',
    },
    filterText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    list: {
        flexGrow: 1,
    },
    item: {
        backgroundColor: "white",
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    itemText: {
        fontSize: 18,
        color: 'black',
    },
    deleteButton: {
        backgroundColor: "#007bff",
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 10, // Agregamos un margen inferior
    },
    deleteButtonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
    homeButton: { // Agregamos el estilo para el botón de Home
        backgroundColor: "#007bff",
        borderRadius: 8,
        paddingVertical: 14,
        alignItems: "center",
    },
    homeButtonText: { // Agregamos el estilo para el texto del botón de Home
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});