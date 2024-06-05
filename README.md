# API Aplicación Web para la Gestión de Eventos con Node.js y MongoDB

## Realizado por: Ali Morillo y Gilharyth Lugo


## Resumen del proyecto
Este proyecto implementa una aplicación Node.js y Express para gestionar eventos y sus inscripciones utilizando MongoDB como base de datos. La aplicación expone una API RESTful que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre eventos e inscripciones en los mismos.


### Tecnologías utilizadas

Este proyecto utiliza las siguientes tecnologías para su desarrollo:

**Backend:**

* *Node.js:* Entorno de ejecución JavaScript del lado del servidor que permite crear aplicaciones web dinámicas y escalables.
* *Express:* Framework web popular para Node.js que facilita la creación de APIs RESTful y aplicaciones web.
* *Mongoose:* Modelador de objetos para MongoDB que permite interactuar con la base de datos de manera intuitiva y orientada a objetos.
* *MongoDB:* Base de datos NoSQL flexible y escalable que almacena datos en formato JSON.

**Herramientas de desarrollo:**

* *dotenv:* Permite cargar variables de entorno desde un archivo .env para mantener la configuración segura.
* *ejs:* Motor de plantillas de lado del servidor para generar HTML dinámico.
* *env-var:* Paquete para acceder y manipular variables de entorno.
* *nodemon:* Herramienta para ejecutar scripts Node.js en modo de desarrollo, reiniciando automáticamente el servidor cuando hay cambios en el código.

### Estructura de la Base de Datos 
![](https://raw.githubusercontent.com/AJ-Morillo-C/API-NODEJS-FOR-EVENT-SYSTEM/main/ESTRUCTURA%20DB%20API_EVENT-SYSTEM.png)

## Requisitos previos para probar la API

* Contar con un editor de codigo (de preferencia Visual Studio Code).
* Tener Node.js y npm instalados.
* Tener una cuenta de MongoDB Atlas.
* Tener Git instalado.
* Tener la extensión de Thunder Client instalada en Visual Studio Code.

## Pasos para probar el proyecto

1. *Clonar el repositorio:*
```
git clone https://github.com/AJ-Morillo-C/API-NODEJS-FOR-EVENT-SYSTEM.git
```

2. *Instalar las dependencias:*

```
npm install
```

3. *Configurar las variables de entorno:*

Cree un archivo .env en la raíz del proyecto y defina las siguientes variables:

```
PORT=5000  //Puerto para el servidor Node.js 
MONGO_URL=mongodb+srv://<user>:<password>@cluster0.udwxxg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0  //URL de la base de datos MongoDB Atlas
```

*Nota:* Reemplace la URL contenida en MONGO_URL con la URL de su servidor MongoDB Atlas

4. *Importar la colección Thunder:*

Siga estos pasos para importar la colección Thunder utilizando la extensión Thunder Client:

* Abra el proyecto en Visual Studio Code.
* Haga clic en el icono de Thunder Client en la barra lateral izquierda.
* En el panel "Collections", haga clic en el icono de tres puntos (⋮) y seleccione "Import".
* En el cuadro de diálogo "Import Collection", seleccione el archivo thunder-collection.json ubicado en la raíz del proyecto.
* Haga clic en el botón "Import".

5. *Iniciar el servidor Node.js:*

Ejecute el siguiente comando para iniciar el servidor Node.js:

```
npm run dev
```

La API estará disponible en la URL http://localhost:5000/.


6. *Probar las peticiones RESTful de la API:* 

Una vez importada la coleccion Thunder puede ir probando las peticiones (POST, GET, PUT Y DELETE) O tambien puede utilizar herramientas como Postman o Insomnia tomando en cuenta las rutas del proyecto.

> localhost:5000/events

> localhost:5000/inscriptions

### URL al video donde se prueba el funcinamiento de nuestra API RESTfu
 [API Aplicación Web para la Gestión de Eventos con Node.js y MongoDB](https://markdownlivepreview.com/).

*Nota:* Se intentó desarrollar el front-end de la aplicación, pero debido a limitaciones de tiempo no se pudo implementar por completo. Actualmente, el proyecto se enfoca en la API RESTful y la base de datos MongoDB.
