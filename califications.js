db.reseñas.insertMany(
    [
  {
    "_id": "RES-001",
    "usuario_id": "1023456789",
    "curso_id": "CURS-007",
    "calificacion": 4.8,
    "comentario": "El curso es excelente, muy bien estructurado y fácil de seguir.",
    "fecha_reseña": new Date("2025-08-10T14:20:00Z"),
    "estado": "publicada"
  },
  {
    "_id": "RES-002",
    "usuario_id": "1012345678",
    "curso_id": "CURS-003",
    "calificacion": 4.5,
    "comentario": "El contenido es bueno, aunque algunos temas podrían profundizarse más.",
    "fecha_reseña": new Date("2025-08-12T10:15:00Z"),
    "estado": "publicada"
  },
  {
    "_id": "RES-003",
    "usuario_id": "1134567891",
    "curso_id": "CURS-009",
    "calificacion": 4.9,
    "comentario": "Uno de los mejores cursos que he tomado, lo recomiendo totalmente.",
    "fecha_reseña": new Date("2025-08-13T18:45:00Z"),
    "estado": "publicada"
  },
  {
    "_id": "RES-004",
    "usuario_id": "1214567890",
    "curso_id": "CURS-001",
    "calificacion": 4.2,
    "comentario": "El curso es útil, aunque las explicaciones podrían ser más dinámicas.",
    "fecha_reseña": new Date("2025-08-14T09:30:00Z"),
    "estado": "pendiente"
  },
  {
    "_id": "RES-005",
    "usuario_id": "1123456780",
    "curso_id": "CURS-006",
    "calificacion": 3.9,
    "comentario": "El contenido es bueno, pero el ritmo de las clases es un poco lento.",
    "fecha_reseña": new Date("2025-08-14T21:10:00Z"),
    "estado": "publicada"
  },
  {
    "_id": "RES-006",
    "usuario_id": "4056789012",
    "curso_id": "CURS-002",
    "calificacion": 4.6,
    "comentario": "Muy buen curso, con ejemplos prácticos que ayudan a comprender mejor.",
    "fecha_reseña": new Date("2025-08-15T11:00:00Z"),
    "estado": "publicada"
  },
  {
    "_id": "RES-007",
    "usuario_id": "4056789012",
    "curso_id": "CURS-010",
    "calificacion": 4.4,
    "comentario": "El profesor domina el tema, aunque el material adicional podría mejorar.",
    "fecha_reseña": new Date("2025-08-15T19:20:00Z"),
    "estado": "publicada"
  },
  {
    "_id": "RES-008",
    "usuario_id": "1023456789",
    "curso_id": "CURS-008",
    "calificacion": 4.1,
    "comentario": "Buen curso, pero las lecciones podrían tener más ejercicios prácticos.",
    "fecha_reseña": new Date("2025-08-16T08:40:00Z"),
    "estado": "pendiente"
  },
  {
    "_id": "RES-009",
    "usuario_id": "1023456780",
    "curso_id": "CURS-005",
    "calificacion": 4.7,
    "comentario": "Excelente contenido, bien explicado y actualizado.",
    "fecha_reseña": new Date("2025-08-16T12:10:00Z"),
    "estado": "publicada"
  },
  {
    "_id": "RES-010",
    "usuario_id": "4056789012",
    "curso_id": "CURS-004",
    "calificacion": 3.8,
    "comentario": "El curso está bien, aunque esperaba más ejemplos prácticos.",
    "fecha_reseña": new Date("2025-08-16T15:00:00Z"),
    "estado": "eliminada"
  }
]
)