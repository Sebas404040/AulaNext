db.cursos.insertMany([
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
  },
  {
    "_id": "CURS-002",
    "titulo": "Fundamentos de JavaScript",
    "descripcion": "Curso para aprender la lógica y sintaxis básica de JavaScript.",
    "categoria": "Programación",
    "nivel": "Principiante",
    "profesor_id": "1113456789",
    "fecha_creacion": "2025-06-02",
    "etiquetas": ["javascript", "frontend", "programacion"],
    "lecciones": [
      {
        "titulo": "Variables y Tipos de Datos",
        "contenido": "Explicación de var, let y const.",
        "duracion_minutos": 18,
        "recursos": ["variables_y_tipos.mp4"]
      },
      {
        "titulo": "Funciones",
        "contenido": "Cómo declarar y usar funciones.",
        "duracion_minutos": 25,
        "recursos": ["funciones.mp4", "ejercicios.pdf"]
      },
      {
        "titulo": "DOM Básico",
        "contenido": "Manipulación inicial del DOM.",
        "duracion_minutos": 30,
        "recursos": ["DOM.mp4"]
      }
    ]
  },
  {
    "_id": "CURS-003",
    "titulo": "Python para Ciencia de Datos",
    "descripcion": "Aprende a manejar Python y librerías para análisis de datos.",
    "categoria": "Ciencia de Datos",
    "nivel": "Intermedio",
    "profesor_id": "9101234567",
    "fecha_creacion": "2025-06-10",
    "etiquetas": ["python", "pandas", "numpy"],
    "lecciones": [
      {
        "titulo": "Introducción a Python",
        "contenido": "Repaso de sintaxis básica y estructuras de datos.",
        "duracion_minutos": 20,
        "recursos": ["Python_basico.mp4", "notas.pdf"]
      },
      {
        "titulo": "Uso de Pandas",
        "contenido": "Manipulación de datasets con Pandas.",
        "duracion_minutos": 30,
        "recursos": ["manipular_pandas.mp4", "dataset.csv"]
      },
      {
        "titulo": "Visualización de Datos",
        "contenido": "Creación de gráficos con Matplotlib y Seaborn.",
        "duracion_minutos": 25,
        "recursos": ["visualizar_datos.mp4"]
      }
    ]
  },
  {
    "_id": "CURS-004",
    "titulo": "Diseño UX/UI para Web",
    "descripcion": "Principios de diseño centrado en el usuario y prototipado.",
    "categoria": "Diseño",
    "nivel": "Intermedio",
    "profesor_id": "5067890123",
    "fecha_creacion": "2025-07-01",
    "etiquetas": ["ux", "ui", "figma"],
    "lecciones": [
      {
        "titulo": "Fundamentos del UX",
        "contenido": "Qué es UX y cómo aplicarlo en proyectos reales.",
        "duracion_minutos": 15,
        "recursos": ["fundamentos_UX.mp4"]
      },
      {
        "titulo": "Principios de UI",
        "contenido": "Buenas prácticas de diseño visual.",
        "duracion_minutos": 22,
        "recursos": ["principios.mp4", "ejemplos.pdf"]
      },
      {
        "titulo": "Prototipado en Figma",
        "contenido": "Creación de prototipos navegables.",
        "duracion_minutos": 30,
        "recursos": ["Figma_prototype.mp4", "plantilla.fig"]
      }
    ]
  },
  {
    "_id": "CURS-005",
    "titulo": "Docker y Contenerización",
    "descripcion": "Aprende a crear y administrar contenedores con Docker.",
    "categoria": "DevOps",
    "nivel": "Avanzado",
    "profesor_id": "2034567890",
    "fecha_creacion": "2025-07-15",
    "etiquetas": ["docker", "devops", "infraestructura"],
    "lecciones": [
      {
        "titulo": "Introducción a Docker",
        "contenido": "Conceptos básicos y beneficios del uso de contenedores.",
        "duracion_minutos": 20,
        "recursos": ["docker_basics.mp4"]
      },
      {
        "titulo": "Imágenes y Contenedores",
        "contenido": "Cómo crear y gestionar imágenes de Docker.",
        "duracion_minutos": 28,
        "recursos": ["imagenes_docker.mp4", "dockerfile.txt"]
      },
      {
        "titulo": "Docker Compose",
        "contenido": "Orquestación de múltiples contenedores.",
        "duracion_minutos": 30,
        "recursos": ["docker_compose.mp4"]
      }
    ]
  },
  {
  "_id": "CURS-006",
  "titulo": "Fundamentos de Redes de Computadoras",
  "descripcion": "Comprende los principios básicos de redes, protocolos y seguridad.",
  "categoria": "Redes",
  "nivel": "Principiante",
  "profesor_id": "1113456789",
  "fecha_creacion": "2025-05-22",
  "etiquetas": ["redes", "tcp/ip", "protocolos"],

  "lecciones": [
    {
      "titulo": "Introducción a las redes",
      "contenido": "Conceptos básicos de redes y su importancia en la comunicación.",
      "duracion_minutos": 18,
      "recursos": ["intro_redes.mp4", "glosario.pdf"]
    },
    {
      "titulo": "Modelo OSI",
      "contenido": "Explicación de las 7 capas del modelo OSI.",
      "duracion_minutos": 25,
      "recursos": ["modelo_osi.mp4", "ejemplo.pdf"]
    },
    {
      "titulo": "Protocolos TCP/IP",
      "contenido": "Funcionamiento de los protocolos más utilizados en internet.",
      "duracion_minutos": 22,
      "recursos": ["tcpip.mp4"]
    }
  ]
},
{
  "_id": "CURS-007",
  "titulo": "Python para Ciencia de Datos",
  "descripcion": "Aprende a manejar datos, limpiar información y usar librerías clave como pandas y NumPy.",
  "categoria": "Ciencia de Datos",
  "nivel": "Intermedio",
  "profesor_id": "2034567890",
  "fecha_creacion": "2025-05-25",
  "etiquetas": ["python", "pandas", "numpy", "data-science"],

  "lecciones": [
    {
      "titulo": "Manejo de datos con pandas",
      "contenido": "Introducción a DataFrames y Series en pandas.",
      "duracion_minutos": 30,
      "recursos": ["pandas_intro.mp4", "dataset.csv"]
    },
    {
      "titulo": "NumPy para cálculos científicos",
      "contenido": "Uso de arrays y operaciones matemáticas eficientes.",
      "duracion_minutos": 28,
      "recursos": ["numpy.mp4", "ejercicios_numpy.pdf"]
    },
    {
      "titulo": "Limpieza de datos",
      "contenido": "Técnicas de depuración y normalización de datasets.",
      "duracion_minutos": 35,
      "recursos": ["limpieza.mp4"]
    }
  ]
},
{
  "_id": "CURS-008",
  "titulo": "JavaScript Moderno con ES6+",
  "descripcion": "Domina las características modernas de JavaScript para desarrollo web.",
  "categoria": "Programación",
  "nivel": "Intermedio",
  "profesor_id": "9101234567",
  "fecha_creacion": "2025-05-28",
  "etiquetas": ["javascript", "es6", "frontend"],

  "lecciones": [
    {
      "titulo": "Variables y alcance",
      "contenido": "Diferencias entre var, let y const.",
      "duracion_minutos": 15,
      "recursos": ["variables.mp4"]
    },
    {
      "titulo": "Funciones flecha",
      "contenido": "Cómo usar arrow functions y su diferencia con las tradicionales.",
      "duracion_minutos": 20,
      "recursos": ["funciones_flecha.mp4", "ejemplos.pdf"]
    },
    {
      "titulo": "Destructuración y spread",
      "contenido": "Uso práctico de la sintaxis moderna en objetos y arrays.",
      "duracion_minutos": 25,
      "recursos": ["destructuracion.mp4"]
    }
  ]
},
{
  "_id": "CURS-009",
  "titulo": "Introducción al Machine Learning",
  "descripcion": "Primeros pasos en el aprendizaje automático con modelos supervisados y no supervisados.",
  "categoria": "Inteligencia Artificial",
  "nivel": "Avanzado",
  "profesor_id": "1113456789",
  "fecha_creacion": "2025-06-01",
  "etiquetas": ["machine-learning", "ai", "python"],

  "lecciones": [
    {
      "titulo": "Conceptos básicos de ML",
      "contenido": "Qué es machine learning y sus principales aplicaciones.",
      "duracion_minutos": 18,
      "recursos": ["intro_ml.mp4", "resumen.pdf"]
    },
    {
      "titulo": "Modelos supervisados",
      "contenido": "Regresión lineal y clasificación básica.",
      "duracion_minutos": 30,
      "recursos": ["supervisado.mp4", "dataset1.csv"]
    },
    {
      "titulo": "Modelos no supervisados",
      "contenido": "Clustering y reducción de dimensionalidad.",
      "duracion_minutos": 35,
      "recursos": ["no_supervisado.mp4"]
    }
  ]
},
{
  "_id": "CURS-010",
  "titulo": "Diseño de Interfaces con Figma",
  "descripcion": "Aprende a crear prototipos y diseños de interfaces modernas con Figma.",
  "categoria": "Diseño UX/UI",
  "nivel": "Principiante",
  "profesor_id": "5067890123",
  "fecha_creacion": "2025-06-05",
  "etiquetas": ["figma", "ui", "ux"],

  "lecciones": [
    {
      "titulo": "Introducción a Figma",
      "contenido": "Primeros pasos con la interfaz de Figma.",
      "duracion_minutos": 15,
      "recursos": ["intro_figma.mp4", "guia.pdf"]
    },
    {
      "titulo": "Diseño de wireframes",
      "contenido": "Cómo crear bocetos de aplicaciones.",
      "duracion_minutos": 25,
      "recursos": ["wireframes.mp4"]
    },
    {
      "titulo": "Prototipado interactivo",
      "contenido": "Simulación de interacciones entre pantallas.",
      "duracion_minutos": 30,
      "recursos": ["prototipado.mp4", "ejemplos.fig"]
    }
  ]
}
]
)