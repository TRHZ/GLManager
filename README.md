# 1. GLManager

- [1. GLManager](#1-glmanager)
  - [1.1. Descripción](#11-descripción)
  - [1.2. Estructura de la Aplicación](#12-estructura-de-la-aplicación)
  - [1.3. Conexión al Web Service](#13-conexión-al-web-service)
  - [1.4. Instrucciones para Ejecutar la Aplicación](#14-instrucciones-para-ejecutar-la-aplicación)

## 1.1. Descripción
GLManager es una aplicación móvil diseñada para gestionar las actividades y tareas de los usuarios, proporcionando una interfaz intuitiva y funcional.

## 1.2. Estructura de la Aplicación
- **Home Screen**: Pantalla principal de la aplicación.
- **Login Screen**: Pantalla de inicio de sesión.
- **Registration Screen**: Pantalla de registro de usuarios.
- **Dashboard**: Panel principal con opciones y funcionalidades.
- **Profile Screen**: Pantalla de perfil del usuario.
- **Settings Screen**: Pantalla de configuración de la aplicación.

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
