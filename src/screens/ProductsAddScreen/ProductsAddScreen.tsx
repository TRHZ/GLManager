import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";

export default function ProductsAddScreen({ navigation }) {
    const [category, setCategory] = useState('');
    const [showListBox, setShowListBox] = useState(false);
    const [showUnitListBox, setShowUnitListBox] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
        stock: '',
        unit: '',
        purchasePrice: '',
        salePrice: '',
        expirationDate: '',
        supplier: '',
        entryDate: '',
        lotNumber: '',
        additionalNotes: '',
        minStock: '',
    });

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Agregar Producto/Material</Text>
            
            <TouchableOpacity
                style={styles.listBox}
                onPress={() => setShowListBox(!showListBox)}
            >
                <Text style={styles.listBoxText}>
                    {category || "Seleccionar Categoría"}
                </Text>
            </TouchableOpacity>

            {showListBox && (
                <View style={styles.listBoxOptions}>
                    <TouchableOpacity
                        style={styles.listBoxOption}
                        onPress={() => {
                            setCategory("Producto");
                            setShowListBox(false);
                        }}
                    >
                        <Text style={styles.listBoxOptionText}>Producto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.listBoxOption}
                        onPress={() => {
                            setCategory("Material");
                            setShowListBox(false);
                        }}
                    >
                        <Text style={styles.listBoxOptionText}>Material</Text>
                    </TouchableOpacity>
                </View>
            )}

            <TextInput
                style={styles.input}
                placeholder="ID del Item"
                placeholderTextColor="#888888"
                value={formData.id}
                onChangeText={(value) => handleInputChange('id', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Número de Lote"
                placeholderTextColor="#888888"
                value={formData.lotNumber}
                onChangeText={(value) => handleInputChange('lotNumber', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                placeholderTextColor="#888888"
                value={formData.name}
                onChangeText={(value) => handleInputChange('name', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Descripción"
                placeholderTextColor="#888888"
                value={formData.description}
                onChangeText={(value) => handleInputChange('description', value)}
            />
            
            <View style={styles.row}>
                <TextInput
                    style={[styles.input, styles.halfInput]}
                    placeholder="Cantidad en Stock"
                    placeholderTextColor="#888888"
                    value={formData.stock}
                    onChangeText={(value) => handleInputChange('stock', value)}
                />
                <TouchableOpacity
                    style={[styles.listBox, styles.halfInput]}
                    onPress={() => setShowUnitListBox(!showUnitListBox)}
                >
                    <Text style={styles.listBoxText}>
                        {formData.unit || "Unidad de Medida"}
                    </Text>
                </TouchableOpacity>
            </View>

            {showUnitListBox && (
                <View style={styles.listBoxOptions}>
                    <TouchableOpacity
                        style={styles.listBoxOption}
                        onPress={() => {
                            handleInputChange('unit', 'Kg');
                            setShowUnitListBox(false);
                        }}
                    >
                        <Text style={styles.listBoxOptionText}>Kg</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.listBoxOption}
                        onPress={() => {
                            handleInputChange('unit', 'L');
                            setShowUnitListBox(false);
                        }}
                    >
                        <Text style={styles.listBoxOptionText}>L</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.listBoxOption}
                        onPress={() => {
                            handleInputChange('unit', 'Unidad');
                            setShowUnitListBox(false);
                        }}
                    >
                        <Text style={styles.listBoxOptionText}>Unidad</Text>
                    </TouchableOpacity>
                </View>
            )}

            {category === 'Producto' && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Precio de Compra"
                        placeholderTextColor="#888888"
                        value={formData.purchasePrice}
                        onChangeText={(value) => handleInputChange('purchasePrice', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Precio de Venta"
                        placeholderTextColor="#888888"
                        value={formData.salePrice}
                        onChangeText={(value) => handleInputChange('salePrice', value)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Fecha de Caducidad"
                        placeholderTextColor="#888888"
                        value={formData.expirationDate}
                        onChangeText={(value) => handleInputChange('expirationDate', value)}
                    />
                </>
            )}

            {category === 'Material' && (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Precio de Compra"
                        placeholderTextColor="#888888"
                        value={formData.purchasePrice}
                        onChangeText={(value) => handleInputChange('purchasePrice', value)}
                    />
                </>
            )}

            <TextInput
                style={styles.input}
                placeholder="Proveedor"
                placeholderTextColor="#888888"
                value={formData.supplier}
                onChangeText={(value) => handleInputChange('supplier', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Fecha de Entrada"
                placeholderTextColor="#888888"
                value={formData.entryDate}
                onChangeText={(value) => handleInputChange('entryDate', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Notas Adicionales"
                placeholderTextColor="#888888"
                value={formData.additionalNotes}
                onChangeText={(value) => handleInputChange('additionalNotes', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Stock Mínimo"
                placeholderTextColor="#888888"
                value={formData.minStock}
                onChangeText={(value) => handleInputChange('minStock', value)}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 5,
    },
    backButtonText: {
        color: 'white',
        fontSize: 16,
    },
    title: {
        marginTop: 50,
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    listBox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    listBoxText: {
        color: '#888888',
    },
    listBoxOptions: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 5,
    },
    listBoxOption: {
        padding: 10,
    },
    listBoxOptionText: {
        color: 'black',
    },
    input: {
        color: 'black',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        flex: 1,
        marginHorizontal: 5,
    },
});
