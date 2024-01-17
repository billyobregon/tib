# Social Network - Prueba Técnica

Bienvenido/a al proyecto de prueba técnica de Social Network. Este proyecto utiliza la API DummyAPI para crear una red social básica. A continuación, encontrarás información sobre cómo iniciar el proyecto, las funcionalidades implementadas y las instrucciones para su uso.

## Instrucciones de inicio

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/billyobregon/tib.git
   cd tib
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

4. **Iniciar la aplicación:**
   ```bash
   npm start
   ```
   La aplicación se abrirá en tu navegador por defecto en [http://localhost:5173](http://localhost:5173).

## Funcionalidades Implementadas

1. **Iniciar Sesión con Autenticador Externo:**
   - Se ha implementado la opción de iniciar sesión utilizando autenticadores externos, y se utilizó el paquete `@react-oauth/google`.

2. **Visualización de Posts en el Home:**
   - En la página principal, podrás visualizar todos los posts disponibles.

3. **Detalles de Cada Post:**
   - Cada post muestra la foto y el nombre del usuario, la imagen y el texto del post, los tags, la cantidad de likes y la opción para ver comentarios.

4. **Modal de Comentarios:**
   - Puedes ver todos los comentarios de un post en un modal dedicado.

5. **Modal de Información del Usuario:**
   - Existe un modal que muestra toda la información del usuario que hizo el post.

6. **Filtrado de Posts por Tag:**
   - Se proporciona la capacidad de filtrar los posts por tags específicos.

7. **Información del Usuario Autenticado en el Header:**
   - La información del usuario autenticado se muestra en el header de la aplicación.

## Repositorio Desplegado

Puedes acceder al repositorio desplegado de este proyecto en [https://github.com/billyobregon/tib.git](https://github.com/billyobregon/tib.git).

## Tecnologías Utilizadas

- React
- Axios
- React Router
- DummyAPI
- `@react-oauth/google`

## Contribuciones

Si encuentras algún problema o tienes sugerencias para mejorar el proyecto, por favor, crea un *issue* o envía un *pull request*. ¡Todas las contribuciones son bienvenidas!

Gracias por probar esta prueba técnica. ¡Esperamos que disfrutes explorando la red social!
