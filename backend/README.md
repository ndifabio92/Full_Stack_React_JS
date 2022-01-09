#### GET
> http://localhost:8000/api/user

Se obtienen todos los usuarios que se encuentren en la base de datos.

#### GET:Id
> http://localhost:8000/api/user/:id

Se obtiene el usuario especifico.

#### POST
> http://localhost:8000/api/user

Body: `{
    "email": "email",
    "password": "password",
    "status": 1/0 
}`

El status no es necesario para la creacion a menos que se quiera crear un usuario deshabilitado, por defecto siempre se va a crear como activo.

#### DELETE
> http://localhost:8000/api/user/:id

Para eliminar un usuario se tiene que agregar el token en la cabeza para poder eliminar.

`x-token: {token}`


#### POST - AUTH
> http://localhost:8000/api/auth/login
`{
    "email": "email",
    "password": "email"
}`
