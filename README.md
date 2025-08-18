<p align="center">
  <img src="./Readme_images/AulaNext_logo.png" alt="logo_AulaNext" width="250"/>
</p>

# AulaNext

**AulaNext** es una plataforma de educación en línea diseñada para conectar estudiantes y profesores en un entorno digital accesible, organizado y moderno. El proyecto está pensado como una aplicación web educativa en la que los usuarios pueden registrarse, inscribirse en cursos y avanzar en su proceso de aprendizaje de manera estructurada.

AulaNext requiere el diseño de un modelo de base de datos integral que permita gestionar de forma eficiente cursos, lecciones, usuarios, profesores y sugerencias. Este modelo debe estar optimizado para responder a las necesidades del sistema y soportar la estructura completa de la plataforma.

## Modelo conceptual propuesto

<p align="center">
  <img src="./Readme_images/AulaNext%20Diagrama-conceptual%20(3).png" alt="modelo_conceptual" width="600"/>
</p>

## Colecciones determinadas

### Usuarios

La colección usuarios almacena la información básica de las personas que interactúan con la plataforma. Aquí se registran tanto estudiantes como profesores, junto con sus datos personales, credenciales de acceso y rol dentro del sistema.

- **_id** (string): Cédula del usuario (identificador único).

- **nombre** (string): Nombre completo.

- **email** (string): Correo del usuario (único).

- **rol** (string): estudiante | profesor.

- **pais** (string): País de residencia.

- **fecha_registro** (string, YYYY-MM-DD): Fecha de alta en la plataforma.

- **intereses** (array): Temas de interés.

- **estado** (string): activo | inactivo | suspendido.

- **biografia** (string): Breve descripción del usuario.

📖 **Ejemplo**

```json
{
  "_id": "1023456789",
  "nombre": "Sebastián Delgado",
  "email": "sebas@gmail.com",
  "rol": "estudiante",
  "pais": "Colombia",
  "fecha_registro": "2025-06-01",
  "intereses": ["programación", "data science"],
  "estado": "activo",
  "biografia": "Estudiante apasionado por el backend y bases de datos."
}

```

### Cursos

Esta colección almacena la información de los cursos disponibles en la plataforma, incluyendo sus lecciones y recursos.

- **_id** (string): Identificador único del curso.

- **titulo** (string): Nombre del curso.

- **descripcion** (string): Breve resumen del contenido y objetivos del curso.

- **categoria** (string): Categoría principal del curso (ejemplo: "Bases de datos").

- **nivel** (string): Nivel de dificultad (Principiante | Intermedio | Avanzado).

- **profesor_id** (string): Referencia al ID del profesor que imparte el curso.

- **fecha_creacion** (string, YYYY-MM-DD): Fecha en que se creó el curso en la plataforma.

- **etiquetas** (array): Lista de palabras clave para clasificar y facilitar la búsqueda.

- **lecciones** (array[object]): Arreglo de objetos que representan las lecciones del curso, cada una con:

    - **titulo** (string): Nombre de la lección.

    - **contenido** (string): Descripción de lo que cubre la lección.

    - **duracion_minutos** (number): Duración estimada en minutos.

    - **recursos** (array): Archivos asociados a la lección (videos, PDFs, etc.).

📖 **Ejemplo**

```json
{
    "_id": "CURS-001",
    "titulo": "Introducción a MongoDB",
    "descripcion": "Aprende bases de datos NoSQL con ejemplos prácticos.",
    "categoria": "Bases de datos",
    "nivel": "Principiante",
    "profesor_id": "2034567890",
    "fecha_creacion": "2025-05-15",
    "etiquetas": ["mongodb", "nosql", "backend"],
    "lecciones": [
      {
        "titulo": "Instalación de MongoDB",
        "contenido": "Guía paso a paso para instalar MongoDB en tu PC.",
        "duracion_minutos": 15,
        "recursos": ["instalación.mp4", "guia.pdf"]
      },
      {
        "titulo": "Comandos básicos",
        "contenido": "Uso de comandos iniciales en la shell de MongoDB.",
        "duracion_minutos": 40,
        "recursos": ["comandos_basicos.mp4"]
      },
      {
        "titulo": "Consultas con filtros",
        "contenido": "Aprende a usar find, operadores y expresiones regulares.",
        "duracion_minutos": 25,
        "recursos": ["consultas.mp4", "ejercicios.pdf"]
      }
    ]
  }

```

### Inscripciones

En esta colección se realizan las inscripciones que realizan los estudiantes a los cursos deseados por realizar.

- **_id** (string): Identificador único de la inscripción.

- **usuario_id** (string): Referencia al ID único del usuario que se inscribe .

- **curso_id** (string): Referencia al ID único del curso inscrito.

- **fecha_inscripcion** (string, YYYY-MM-DD): Fecha en la que el usuario se inscribe al curso.

- **estado** (string): Estado de la inscripción → "activa" | "finalizada" | "cancelada".

- **progreso** (number): Porcentaje de avance del usuario en el curso (0–100).

- **calificacion** (number | null): Nota final del curso, en caso de estar finalizado. Puede ser null si aún no se ha calificado.

📖 **Ejemplo**

```json
{
    "_id": "INS-001",
    "usuario_id": "1023456789",
    "curso_id": "CURS-007",
    "fecha_inscripcion": "2025-01-15",
    "estado": "activa",
    "progreso": 40,
    "calificacion": null
  }

```

### Pagos

Colección donde se realizan los pagos de las inscripciones a los cursos hechas por lo estudiantes, los estuidantes que hayan hecho una inscripcion a un curso y hecho su pago, aparecerá en la colección de pagos

- **_id** (string): Identificador único del pago.

- **usuario_id** (string): ID del usuario que realizó el pago (relación con colección Usuarios).

- **curso_id** (string): ID del curso adquirido (relación con colección Cursos).

- **inscripcion_id** (string): ID de la inscripción vinculada al pago (relación con colección Inscripciones).

- **monto** (decimal): Valor total del pago realizado.

- **moneda** (string): Moneda utilizada en el pago (ejemplo: USD, EUR, COP).

- **metodo_pago** (string): Método utilizado para el pago. Ejemplo: tarjeta_credito | paypal | transferencia.

- **estado** (string): Estado del pago. Ejemplo: pendiente | completado | fallido.

- **fecha_pago** (date, ISO 8601): Fecha y hora en que se registró el pago.

- **detalles** (object): Información adicional del pago.

- **referencia_transaccion** (string): Código de referencia de la transacción.

- **proveedor** (string): Proveedor de pago utilizado (ejemplo: Stripe, PayPal).

📖 **Ejemplo**

```json
 {
    "_id": "payment-001",
    "usuario_id": "1023456789",
    "curso_id": "CURS-007",
    "inscripcion_id": "INS-001",
    "monto": 120.00,
    "moneda": "USD",
    "metodo_pago": "tarjeta_credito",
    "estado": "completado",
    "fecha_pago": new Date("2025-01-15T12:30:00Z"),
    "detalles": {
      "referencia_transaccion": "TXN10001",
      "proveedor": "Stripe"
    }
  }
```

### Reseñas

Esta colección almacena las reseñas que los usuarios dejan sobre los cursos en los que han participado. Contiene información sobre la calificación, comentarios y estado de la reseña.

- **_id** (string): Identificador único de la reseña.

- **usuario_id** (string): ID del usuario que realizó la reseña (relación con colección Usuarios).

- **curso_id** (string): ID del curso reseñado (relación con colección Cursos).

- **calificacion** (decimal): Puntuación otorgada al curso en una escala de 1 a 5 (puede incluir decimales).

- **comentario** (string): Opinión escrita por el usuario sobre el curso.

- **fecha_reseña** (date, ISO 8601): Fecha y hora en que se realizó la reseña.

- **estado** (string): Estado de la reseña. Ejemplo: publicada | pendiente | oculta.

📖 **Ejemplo**

```json
  {
    "_id": "RES-001",
    "usuario_id": "1023456789",
    "curso_id": "CURS-007",
    "calificacion": 4.8,
    "comentario": "El curso es excelente, muy bien estructurado y fácil de seguir.",
    "fecha_reseña": new Date("2025-08-10T14:20:00Z"),
    "estado": "publicada"
  },
```







