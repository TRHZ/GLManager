# 1. GLManager

- [1. GLManager](#1-glmanager)
  - [1.1. Descripción](#11-descripción)
  - [1.2. Estructura de la Aplicación](#12-estructura-de-la-aplicación)
  - [1.3. Conexión al Web Service](#13-conexión-al-web-service)
  - [1.4. Instrucciones para Ejecutar la Aplicación](#14-instrucciones-para-ejecutar-la-aplicación)

## 1.1. Descripción
GLManager es una aplicación móvil diseñada ser un gestor de inventarios para empacadoras que trabajan con frutas/verduras, al igual que le permite registrar materiales (Como ejemplo: Esquineros, cajas, grapas, etc), en esta contiene lo que son 14 pantallas, pero las funcionales referente el funcionamiento principal de este son el HomeScreen, LowStockScreen, ProductDetailScreen, ProductAddScreen, SearchScreen, ShowAllScreen y SettingsScreen. En el caso del resto cumplen con su funcion de navegacion pero no validan las credenciales de los usuarios.
El HomeScreen es la pantalla principal de la aplicación, en esta se muestra el inventario de los productos/materiales.
El LowStockScreen es la pantalla que muestra los productos/materiales que se encuentran en stock bajo.
El ProductDetailScreen es la pantalla que muestra los detalles de un producto/material.
El ProductAddScreen es la pantalla que permite agregar un nuevo producto/material.
El SearchScreen es la pantalla que permite buscar un producto/material.
El ShowAllScreen es la pantalla que muestra todos los productos/materiales.
El SettingsScreen es la pantalla que permite configurar la aplicación (Por el momento solo demuestra el ingles y español en el).
El LoginScreen es la pantalla que permite iniciar sesión en la aplicación (No valida).
El RegisterScreen es la pantalla que permite registrarse en la aplicación (No valida).
El ForgotPasswordScreen es la pantalla que permite recuperar la contraseña (No valida).
El ChangePasswordScreen es la pantalla que permite cambiar la contraseña (No valida).
El ChangeEmailScreen es la pantalla que permite cambiar el correo electrónico (No valida).

## 1.2. Estructura de la Aplicación
- **src/**: Contiene todos los archivos de código fuente.
  - **components/**: Contiene los componentes de la aplicacion.
    - **Authentication**: Renderiza una vista segura que contiene el componente de navegación con un fondo claro.
    - **BottomBar**: Configura y renderiza una barra de navegación inferior con diferentes pantallas.
    - **CustomButton**: Renderiza un botón personalizable con diferentes estilos.
    - **CustomImput**: Renderiza un campo de entrada de texto con estilos personalizables.
    - **SocialSignInButton**: Este componente renderiza un botón personalizado para iniciar sesión.
  - **navigation/**: Contiene la configuración de navegación.
  - **screens/**: Contiene las pantallas de la aplicación.
    - [ConfirmEmailScreen](src/screens/ConfirmEmailScreen) 
    - [DeleteScreen](src/screens/DeleteScreen) 
    - [EditScreen](src/screens/EditScreen) 
    - [ForgotPasswordScreen](src/screens/ForgotPasswordScreen) 
    - [HomeScreen](src/screens/HomeScreen) 
    - [LowStockScreen](src/screens/LowStockScreen) 
    - [NewPasswordScreen](src/screens/NewPasswordScreen) 
    - [ProductDetailScreen](src/screens/ProductDetailScreen) 
    - [ProductsAddScreen](src/screens/ProductsAddScreen) 
    - [SearchScreen](src/screens/SearchScreen) 
    - [SettingsScreen](src/screens/SettingsScreen) 
    - [ShowAllScreen](src/screens/ShowAllScreen) 
    - [SignInScreen](src/screens/SignInScreen) 
    - [SignUpScreen](src/screens/SignUpScreen)
- **assets/**: Contiene recursos como imágenes.
- **components/**: Contiene los componentes reutilizables.
- **services/**: Contiene los servicios para interactuar con el backend.

## 1.3. Conexión al Web Service
La aplicación se conecta a un Web Service que maneja el almacenamiento y la consulta de datos mediante solicitudes GET y POST.

## 1.4. Instrucciones para Ejecutar la Aplicación
1. Clona el repositorio:
   git clone https://github.com/TRHZ/GLManager.git

2. Navega al directorio del proyecto (Dependiendo de donde lo tienes):
   cd GLManager

3. Instala las dependencias
   npm install

4. Clona el repositorio del Servicio Web eh instalas sus dependencias:
   git clone https://github.com/TRHZ/GLManager-Web-Service.git
   npm install

   1. inicia lo que es el servicio web
      docker compose up -d (comando para construir e iniciar si es la primera vez)
      docker compose down (comando para detener el Servicio Web)

5. Configura las variables para conectar al backend:
   En este caso, modifica la URL del archivo (Es decir el host) [WebServiceParams.ts](src/WebServiceParams.ts) por la IP de tu maquina
   
6. Una vez hecho lo anterior inicia la aplicacion
   npm start y despues seleccionas la opcion de Android.