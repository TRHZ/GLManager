import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => console.log('Ir a la información del usuario')}>
            <View style={styles.iconButton}>
              {/* Icono de usuario */}
              <Text style={styles.iconText}>Usuario</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Ir a los ajustes')}>
            <View style={styles.iconButton}>
              {/* Icono de ajustes */}
              <Text style={styles.iconText}>Ajustes</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Contenido principal */}
        <View style={styles.content}>
          {/* Aquí irá el resumen de productos e materiales */}
          <Text style={styles.summary}>
            Resumen de productos e materiales ingresados
          </Text>
          {/* Puedes agregar más componentes aquí para mostrar el resumen */}
        </View>
      </ScrollView>

      {/* Botón de opciones */}
      <TouchableOpacity onPress={() => console.log('Ir a las opciones del gestor')} style={styles.optionButton}>
        <Text style={styles.optionText}>Opciones</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  iconButton: {
    backgroundColor: 'lightblue',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  content: {
    flex: 1, // Usa todo el espacio disponible
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    padding: 20,
  },
  summary: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    padding: 15,
    margin: 10, // Agregamos un margen para separar el botón del contenido
    alignSelf: 'center', // Lo alineamos al centro horizontalmente
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
