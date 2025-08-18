// COLECCION CURSOS
// cursos que en sus lecciones tienen temas introductorios (Introducción)
db.cursos.find({"lecciones.titulo": {$regex: "^Introducción"}}, {"_id": 0, "titulo": 1, "descripcion": 1, "lecciones.titulo": 1})

// cursos que contienen contenidos relacionados de JavaScript o JS
db.cursos.find({ titulo: { $regex: "JavaScript|JS",}}, { titulo: 1, descripcion: 1})

// cursos que tienen lecciones con recursos que son archivos PDF
db.cursos.find({ "lecciones.recursos": { $regex: "\.pdf$" } }, {titulo: 1, contenido: 1, "lecciones.recursos": 1})

// cursos que tienen lecciones con recursos que son archivos .mp4
db.cursos.find({ "lecciones.recursos": { $regex: "\.mp4$" } }, {titulo: 1, contenido: 1, "lecciones.recursos": 1})

// cursos que tienen lecciones con recursos que son archivos csv
db.cursos.find({ "lecciones.recursos": { $regex: "\.csv$" } }, {titulo: 1, contenido: 1, "lecciones.recursos": 1})

// Cursos donde su categoria contenga la palabra "datos"
db.cursos.find({ categoria: { $regex: "datos", $options: "i"}}, {titulo: 1, titulo: 1, categoria: 1})

// Cursos con exactamente 3 palabras en su título
db.cursos.find({titulo: { $regex: "^[A-Za-z]*\\s[A-Za-z]*\\s[A-Za-z]*$", $options: "i" }}, { titulo: 1 })


// COLECCION USUARIOS
// Usuarios con nombres compuestos por dos palabras
db.usuarios.find({ nombre: { $regex: "^[A-Za-zÁÉÍÓÚáéíóúÑñ]+\\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+$", $options: "i" } },{ nombre: 1, email: 1, rol: 1 })

// Usuarios cuyo nombre comienza con "An" o "Andrea"
// (considerando "An" como un prefijo y "Andrea" como un nombre completo)
db.usuarios.find({ nombre: { $regex: "^An(a|drea)", $options: "i" } }, {nombre: 1, email: 1, rol: 1})

// Usuarios cuyo email termina con ".edu" (considerando que es un dominio educativo)
db.usuarios.find({ email: { $regex: ".edu$"} }, {nombre: 1, email: 1, rol: 1})

// Usuarios que tienen correos personales
db.usuarios.find({ email: { $regex: "@(gmail|yahoo|hotmail|outlook)\\.com$" } }, {nombre: 1, email: 1, rol: 1}) 

// Usuario que tienen (. o _) en su correo electrónico
db.usuarios.find({ email: { $regex: "^[A-Za-z0-9]*[._][A-Za-z0-9]*@.*$", $options: "i" } }, { nombre: 1, email: 1, rol: 1 })

// Usuarios donde sus intereses terminen en "ción"
db.usuarios.find({ intereses: { $regex: "ción$", $options: "i" } }, { nombre: 1, email: 1, rol: 1, intereses: 1 })


// COLECCION INSCRIPCIONES
// Incripciones a cursos de ciencias de datos o bases de datos
db.inscripciones.find({curso_id: { $regex: "CURS-(001|003|007|006)" }}, {usuario_id: 1, curso_id: 1, fecha_inscripcion: 1, estado: 1})

// inscripciones que están activas o pendientes
db.inscripciones.find({estado: { $regex: "activa|pendiente", $options: "i" }}, {progreso: 0, estado: 0, calificacion: 0})

// Inscripciones a cursos cuyo ID termina en un número par
db.inscripciones.find({curso_id: { $regex: "\\d[02468]$" }}, {usuario_id: 1, curso_id: 1, fecha_inscripcion: 1, estado: 1})

// Inscripciones a cursos cuyo ID termina en un número impar
db.inscripciones.find({curso_id: { $regex: "\\d[13579]$" }}, {usuario_id: 1, curso_id: 1, fecha_inscripcion: 1, estado: 1})


// COLECCION PAGOS
// Pagos realizados por usuarios cuyo ID termina en "89"
db.pagos.find({usuario_id: { $regex: "89$" }}, {usuario_id: 1, monto: 1, fecha_pago: 1, estado: 1})

// Pagos con detalles que tienen una referencia de transacción que comienza con "TXN" seguido de 5 dígitos
db.pagos.find({"detalles.referencia_transaccion": { $regex: "^TXN\\d{5}$" }}, {usuario_id: 1, monto: 1, fecha_pago: 1, "detalles.referencia_transaccion": 1})

// Pagos que estan pedientes o completados
db.pagos.find({estado: { $regex: "completado|pendiente", $options: "i" }}, {usuario_id: 1, monto: 1, fecha_pago: 1, estado: 1})

// Pagos realizados por proveedores específicos como "Stripe" o "PayPal"
db.pagos.find({"detalles.proveedor": { $regex: "^(Stripe|PayPal)$", $options: "i" }}, {usuario_id: 1, monto: 1, fecha_pago: 1, "detalles.proveedor": 1})


// COLECCION RESEÑAS
// Reseñas que contienen la palabra "excelente" o "recomendado" en el comentario
db.reseñas.find({comentario: { $regex: "(excelente|recomendado)", $options: "i" }}, {usuario_id: 1, curso_id: 1, comentario: 1})

// Reseñas de usuarios que contengan la palabra "mejorar" en el comentario
db.reseñas.find({comentario: { $regex: "mejorar", $options: "i" }}, {usuario_id: 1, curso_id: 1, comentario: 1})

// Reseñas de usuarios que opinan sobre los cursos del 1 al 5
db.reseñas.find({curso_id: { $regex: "^CURS-00[1-5]$" }})

// Reseñas que terminan con un punto final
db.reseñas.find({ comentario: { $regex: "\\.$" } }, { usuario_id: 1, curso_id: 1, comentario: 1 })

