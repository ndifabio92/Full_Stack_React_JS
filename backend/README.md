# TypeScript Configuracion
1) Instalar TypeScript
    > npm i typescript --save-dev

2) Crear el archivo de configuracion.
    > tsc --init

3) En el archivo tsconfig.json, realizar las siguientes modificaciones.
    - "outDir": "./dist",
    - "sourceMap": true,
    - "moduleResolution": "node",

4) Instalar tslint
    > npm i tslint --save-dev

5) Crear archivo de configuracion de tslint
    > ./node_modules/.bin/tslint --init

6) Agregar rule en el archivo tslint.json
> "rules": { "no-console": false }

# Terminal
Para ejecutar el node/nodemon en tsc se tiene que utilizar el siguiente codigo.
> node/nodemon dist/app.js

Para evitar que siempre se tenga que ejecutar el comando tsc en la terminar, ejecutando el siguiente comando queda observando por si hay cambios.
> tsc --wath