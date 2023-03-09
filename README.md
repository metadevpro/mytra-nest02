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
