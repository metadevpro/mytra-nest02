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
