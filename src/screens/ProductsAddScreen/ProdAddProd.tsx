import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Alert } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import axios from "axios";
import WebServiceParams from "../../WebServiceParams";

interface Props {
    navigation: any;
}

export default function ProdAddProd({ navigation }: Props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [minStock, setMinStock] = useState('');
    const [maxStock, setMaxStock] = useState('');
    const [lot, setLot] = useState('');
    const [entryDate, setEntryDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const formatDate = (date: Date): string => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleAddProduct = async () => {
        try {
            const formattedDate = formatDate(entryDate);
            const data = {
                nombre: name,
                descripcion: description,
                cantidad: parseFloat(quantity),
                stock_minimo: parseFloat(minStock),
                stock_maximo: parseFloat(maxStock),
                lote: lot,
                fecha_entrada: formattedDate,
            };
    
            console.log("Enviando datos:", data);
    
            const response = await axios.post(`http://${WebServiceParams.host}:${WebServiceParams.port}/productos/add`, data);
    
            console.log("Respuesta del servidor:", response.data);
    
            Alert.alert('Producto agregado', 'Navegando a Home...');
            navigation.navigate('Bar'); // Movido aquí
        } catch (error) {
            console.error("Error:", error);
            Alert.alert('Error', 'Ocurrió un error al agregar el producto. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    const showDatePickerFunction = () => {
        setShowDatePicker(true);
    };

    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const currentDate = selectedDate || entryDate;
        setShowDatePicker(Platform.OS === 'ios');
        setEntryDate(currentDate);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Bar')}>
                <Text style={styles.backButtonText}>Regresar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Agregar Producto</Text>
            <TextInput
                style={[styles.input, { color: 'black' }]}
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
                placeholderTextColor="#888"
            />
            <TextInput
                style={[styles.input, styles.textArea, { color: 'black' }]}
                placeholder="Descripción"
                value={description}
                onChangeText={setDescription}
                multiline
                placeholderTextColor="#888"
            />
            <TextInput
                style={[styles.input, { color: 'black' }]}
                placeholder="Cantidad"
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <TextInput
                style={[styles.input, { color: 'black' }]}
                placeholder="Stock Mínimo"
                value={minStock}
                onChangeText={setMinStock}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <TextInput
                style={[styles.input, { color: 'black' }]}
                placeholder="Stock Máximo"
                value={maxStock}
                onChangeText={setMaxStock}
                keyboardType="numeric"
                placeholderTextColor="#888"
            />
            <TextInput
                style={[styles.input, { color: 'black' }]}
                placeholder="Número de Lote"
                value={lot}
                onChangeText={setLot}
                placeholderTextColor="#888"
            />
            <TouchableOpacity style={styles.datePickerButton} onPress={showDatePickerFunction}>
                <Text style={styles.dateButtonText}>{entryDate.toISOString().split('T')[0]}</Text>
            </TouchableOpacity>
            {Platform.OS === 'ios' || showDatePicker ? (
                <DateTimePicker
                    value={entryDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            ) : null}
            <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
                <Text style={styles.addButtonText}>Agregar Producto</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    backButtonText: {
        fontSize: 16,
        color: 'blue',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
    textArea: {
        height: 80,
        textAlignVertical: 'top',
    },
    datePickerButton: {
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
    },
    dateButtonText: {
        fontSize: 16,
        color: 'black',
    },
    addButton: {
        backgroundColor: 'blue',
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    addButtonText: {
        fontSize: 18,
        color: 'white',
    },
});


