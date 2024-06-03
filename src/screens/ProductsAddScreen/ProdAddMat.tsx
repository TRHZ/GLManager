import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Alert } from "react-native";
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import axios, { AxiosError } from "axios";
import WebServiceParams from "../../WebServiceParams";

interface Props {
    navigation: any;
}

export default function MatAdd({ navigation }: Props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');
    const [minStock, setMinStock] = useState('');
    const [entryDate, setEntryDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleAddMaterialPress = async () => {
        try {
            if (name && description && quantity && minStock && entryDate) {
                const data = {
                    nombre: name,
                    descripcion: description,
                    cantidad: parseFloat(quantity),
                    stock_minimo: parseFloat(minStock),
                    fecha_entrada: entryDate.toISOString().split('T')[0]
                };

                console.log("Enviando datos:", data);

                const response = await axios.post(`http://${WebServiceParams.host}:${WebServiceParams.port}/materiales/add`, data);

                console.log("Respuesta del servidor:", response.data);

                Alert.alert('Material agregado', 'Navegando a Home...');
                navigation.navigate('Bar');
            } else {
                Alert.alert('Fallido', 'Datos incompletos');
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                console.error("Error al agregar material:", axiosError.message);
                console.error("Detalles del error:", axiosError.response?.data);
                Alert.alert('Error al agregar material', `Error: ${axiosError.message}\nDetalles: ${JSON.stringify(axiosError.response?.data)}`);
            } else if (error instanceof Error) {
                console.error("Error inesperado:", error.message);
                Alert.alert('Error inesperado', error.message);
            } else {
                console.error("Error desconocido:", error);
                Alert.alert('Error desconocido', 'Ocurrió un error inesperado');
            }
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
            <Text style={styles.title}>Agregar Material</Text>
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
            <TouchableOpacity style={styles.addButton} onPress={handleAddMaterialPress}>
                <Text style={styles.addButtonText}>Agregar Material</Text>
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
