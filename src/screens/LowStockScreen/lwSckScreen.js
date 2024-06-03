import { StyleSheet } from 'react-native';

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
        textAlign: 'center', // Agregar esta línea para centrar el texto
    },
    
    list: {
        flexGrow: 1,
    },
    item: {
        backgroundColor: 'white',
        padding: 20,
        marginBottom: 16,
        borderRadius: 10,
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

export default styles;
