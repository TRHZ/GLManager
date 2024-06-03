import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    itemText: {
        fontSize: 17,
        color: 'black',
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    smallButton: {
        backgroundColor: '#007AFF',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    list: {
        flexGrow: 1,
    },
    item: {
        backgroundColor: 'white',
        padding: 24, // Aumenta el padding para ampliar el tamaño del recuadro
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        elevation: 2, // Sombra en Android
        shadowColor: '#000', // Sombra en iOS
        shadowOffset: { width: 0, height: 2 }, // Sombra en iOS
        shadowOpacity: 0.25, // Sombra en iOS
        shadowRadius: 3.84, // Sombra en iOS
    },
});

export default styles;
