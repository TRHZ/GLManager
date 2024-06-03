import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, Alert } from "react-native";
import axios from "axios";
import WebServiceParams from "../../WebServiceParams";

// Definir tipos para los datos de búsqueda
interface SearchResult {
    id: number;
    nombre: string;
    lote?: string; // `lote` es opcional porque los materiales pueden no tener esta propiedad
}

export default function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

    useEffect(() => {
        if (searchQuery.length > 2) {
            fetchSearchResults();
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    const fetchSearchResults = async () => {
        try {
            const response = await axios.get(`http://${WebServiceParams.host}:${WebServiceParams.port}/all/search`, {
                params: { query: searchQuery }
            });
            setSearchResults([...response.data.productos, ...response.data.materiales]);
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Hubo un problema al realizar la búsqueda");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buscar Productos y Materiales</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar por nombre o lote..."
                placeholderTextColor="#888"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
            <FlatList
                data={searchResults}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.resultItem}>
                        <Text style={styles.resultText}>{item.nombre}</Text>
                        {item.lote && <Text style={styles.resultText}>Lote: {item.lote}</Text>}
                    </View>
                )}
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
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: 'white',
        color: 'black',
    },
    resultItem: {
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
    resultText: {
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
