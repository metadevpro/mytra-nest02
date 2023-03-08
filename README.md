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

