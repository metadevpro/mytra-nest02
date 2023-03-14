# Nx02

CatRequest
CatResponse

Cliente    DTO     Controlador    Servicio     Repositorio     BD / Tablas
          Contrato                              Entidades     ORM


          v1
          v2

C1 -> S2 -> R3 -> BD   acoplamiento

Mock

Nest/Angular

Test -> C1  -> Mock(S2)
Test -> S2  -> Mock(R3)

class C1 {
  constructor(private s2: S2) {}

}

nx
  ng
    jest
    cypress
  nest
    jest
    cypress

Controlador

nestjs
  express
  fastlify

app.get('/version', req, res) => {
  res.status(200).json({ version: '1.2.3'})

}

CORS
Logging
Autenticacion
Serizador XML

req -> M1 -> M2 -> M3 -> M4  -> Controlardor


f(req, next) => {
  req.body -> JSON 
  const res = next()

  res.a = 111

  return res.bofy;

}


PIPEs

numer
dates  ISO 8601  2023-03-31 ->  hora local  2023-03-31T23:59:59Z 

BODY
{
  createdAt: '2023-03-31T23:59:59Z '
  modifiedAt: '2023-03-31T23:59:59Z'
}

coass DTOMessaa {
  createdAt: Date;

}


app1.acme.com -> 
  ang
  nest JWT 20m
id.acme.com ->
    LDAP -  
    user/pass
app1.acme.com

ng -> app1.acme.com  ->

   Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c



user,  hash, 2FA
central usuario
SSO
  50

  google  ->  google -> app1  pjmolina@gmail.com   Autenticando       pjmolina@gmail.com app1 operador
  github
  facebook
  twitter
id.metadev.pro  openid


JWT
OAuth2
OpenID
KeyCloak
Saml2

nest -> express -> passport -> 


Endpoint -> Role -> Usuario

Endpoint -> User->permisos  /cat wr   lista blanca/negra

KeyCloack

RBAC

callback  openfile('a.mpg4', (err, data) => {})

promise  a.then(data => {}).catch(err =>{}).finally()
  lanzas -----------  b  m

rxjs

Observables
  const sub = ob.subscribe({
    next: (data) => {},  N
    error: (err) => {}
    done: () => {}
  })

  const ob1 = from([1,2,3,4,5,6]).pipe(
    first(),
    map(it => it * 2),
    map(it => it * 3),
    tap(it => it )
    catchError()
  );

  ob1.subscribe({
     next: (data) => {
      console.log(data);  // 2 2 3 4 5 12
     }
  })

  sub.unsubuscribe();

Ws -> d1 d32 d323 suscrito

[1,2,3,4, 5,6,7, 5].max(7)

programacion funcional
iteradores
subscriptor/publicador
---



App
  ModuloPpal
  StoreModule
    import Shared
  CheckoutModule
  RRHHModule
  cronModule
  SharedModule
    pipe
    directr

conv
env
  rrhh enabled /disabled


angular  / -> /store


backend
  carga perezosa

nest
  AppModule
  CatModule
    import SharedModule
  DogModule
    import SharedModule
  SharedModule
    shred


Holliwood Principle. 

nest ->  service  implements OnInit
          onInit()
          {}


## DB mongo de ejemplo:

```bash
docker run --name mongodb -d -p 27017:27017 mongo:latest --storageEngine wiredTiger
```

## Create with curl

Creacion con CURL:

```bash
curl -X POST http://localhost:3333/api/cat -H 'Content-type: application/json' -d '{"name" : "cat2","color" : "blue", "breed" : "fish"}'
```

```bash
curl -X PUT http://localhost:3333/api/cat/640a147d1e8fe48063f1a5fa -H 'Content-type: application/json' -d '{"name" : "cat2","color" : "dark blue", "breed" : "tuna", "id":"640a147d1e8fe48063f1a5fa"}'
```


GET
```bash
curl  http://localhost:3333/api/cat
```

## Configuracion

Despliegue: artifacto (git) + configuracion de entorno LOCAL | DEV | QA | PRO

ficheros json yaml 
.env
env vars


Usamos configuracion con ficheros .env

Para saber mas: https://12factor.net/es/


Para hacer e2e: cypress.io


Cache memoria
  browser   loadBalancer  i1   CO soleado        ---> tiempo CO
                          i2   CO soleado        ---> tiempo CO

Alta disponiblidad
  browser   loadBalancer  i1           ---> tiempo CO
                          i2          
                         x redis1  CO soleado, 24H
                           redis2  CO soleado
                           redis3  CO soleado


             fib(n) = fib(n-2) + fib(n-1) / sql / servicio extern   x seg  / 1-3ms

¿por cuanto tiempo cachear?
  eternamente 30d - math
  tiempo en CO   3H
  cliente   ->   3H
  consustencia eventual 

Redis:Semaforo    v/r

 browser   loadBalancer  i1  s1          ---> tiempo CO
                         i2          
                         i3

                         cron/unix    3H  1 fichero


Colas:

REST req >  res

web
cliente -> DTO -> servidor  x
          <--


              Colas Q1                              Workers
cliente -> DTO   ||                     1 Servidor x
                  |--a|  Dead-Queue        N Servidor


Seguridad
  Autenticacion  -> 401 Not authenticated.
        Local --->   la app se encarga    tabla user, pass
        JWT/OAuth

          Single Sign On
  
          CA
          ISSUER id.acme.com          ---> JWT  ->     JWT.io    { sub:123, name:'Pedro', email:'', work:'develper'. country: 'US', roles: ['rrhh', 'dev', 'sales'] }
                app1.acme.com
 audiencia      app2.acme.com  -> 301 Redirect ->  id.acme.com
                  Authentication: Bearer sdlkaldklasdklaskdlsa maria 20
                   n

  Autorizacion  -> 403 Not Authorized. Forbidden
    ¿que permisos tienes?
      pedro -> admin / operador / solo lectura / role3

RBAC
  Role Based Access Security

  U -> Role -> Aplicaion
        Conjunto Permisos


        A -> R(admin) -> C.crea.gatos   C/endi
U -> rol

Para Keycloak -> Openid Client -> https://www.passportjs.org/packages/openid-client/

Encriptacion
Encriptacion Simetrica
   A -> f(1234) -> TCF  --> f'(1234)  -> A           AES, TRIPLE DES

Encriptacion Asimetrica                              RSA  1024 2048bis. ECDA curva eliptica El Gamal
  A  -> enc(pub2)  -> XHAH  --> des(pri2) -> A
  A  -> enc(pri1)  -> XHAH  --> des(pub1) -> A

  A  -> enc(enc(pri1),pub2)  -> XHAH  --> des(des(pub1), pri2) -> A

SSL/TLS
https://

SSH/ telnet   rsa

X503.

Persona 1
  pub1 13  -> publico
  pri1 (7) *

Persona 2
  pub2 (23) -->
  pri2 109  *

Datos personales
  datos cifrados - LOPD
  a@aasda,  

tabla
username    password
pedroj      sha256:abc:asduiuirewwq23409320  -> abc+1234 ->   SHA256 MD5
            sha256:zga:9lewrkopi43o2i4o23io


CORS:
  browser  --> wifi publica ---> https://www.acme.com   mismo protocolo, mismo hostname, mismo puerto
    POST https://www.acme.com/login -->
    POST https://www.acme.c0m/login -->

    origin: https://www.acme.com:443

1.
SPA Angular ->  https://www.acme.com      nginx -> estacios
API:            https://www.acme.com/api  nginx -> contendor

2.
SPA Angular ->  https://www.acme.com    origin  
API:            https://api.acme.com    CORS -->   ['https://www.acme.com:443', 'https://w2.abc.es:443', ]
API:            https://api.weather.org


browser <- CORS
OPTIONS https://api.acme.com/pizza


POST    https://api.acme.com/pizza

El serviro es el que autoriza a los clientes basandose en el ORIGIN.

nest -> cors

dev:  localhost -> DES 
CORS 


Content-Security-Policy: default-src 'self'

Content-Security-Policy: default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';
style-src 'self' https://cdn.fast.com 'unsafe-inline';upgrade-insecure-requests


cdn.fast.com/style.css

GET http://www.acme.com:80 //
GET https://www.acme.com:443 //
POST SSL
