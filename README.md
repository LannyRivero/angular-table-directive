# 📊 Angular Table Directive – Código Samurái Reto

Este proyecto es parte del curso de Angular de Código Samurái. Consiste en crear una directiva personalizada que permite ordenar y filtrar tablas dinámicamente.

---

## 🎯 Objetivo

- Crear una directiva reutilizable para ordenación (`appSortable`)
- Aplicar filtrado dinámico por texto
- Mostrar tabla con datos simulados (nombre, rol, edad)
- Añadir mejoras visuales como flechas 🔼🔽 y estilos al encabezado activo

---

## 🧱 Estructura del proyecto
```bash
src/
├── app/
│ ├── components/
│ │ └── table-demo/
│ │ ├── table-demo.ts
│ │ ├── table-demo.html
│ │ └── table-demo.css
│ └── directives/
│ └── table-sort-filter.directive.ts
```
---

## 🔧 Cómo usarlo

# Clona el repositorio
```bash
git clone https://github.com/tu-usuario/angular-table-directive.git
```

# Entra al proyecto
```bash
cd angular-table-directive
```

# Instala dependencias
```bash
npm install
```

# Ejecuta la app
```bash
ng serve
```
Luego abre:
👉 http://localhost:4200


---

## 🎥 Demostración en video
Aquí puedes ver el funcionamiento completo de la directiva en acción:

📁 El video se encuentra dentro del repositorio (src/assets/demo.mp4)

```bash
<video src="src/assets/demo.mp4" controls width="600">
  Tu navegador no soporta la reproducción de video.
</video>
```
[![Ver demo](https://github.com/TU_USUARIO/TU_REPO/blob/main/src/assets/demo-thumbnail.png)](https://github.com/TU_USUARIO/TU_REPO/blob/main/src/assets/demo.mp4)
[![Ver demo](https://github.com/LannyRivero/angular-table-directive/blob/main/src/assets/demo-thumbnail.png)](https://github.com/LannyRivero/angular-table-directive/blob/main/src/assets/demo-video.mp4)



---
## 📦 Ejemplo en uso

```bash
| Nombre | Rol             | Edad |
| ------ | --------------- | ---- |
| Lanny  | QA Tester       | 39   |
| Marta  | Frontend Dev    | 28   |
| Carlos | Project Manager | 45   |
```
- 🔍Puedes escribir "Dev" o "39" en el input de búsqueda y ver cómo se filtra.
- 🧭Haz clic en los encabezados para ordenar (por nombre, rol o edad).
---

## 🔄 Reutiliza esta directiva
Puedes usar appSortable en cualquier tabla de tu app Angular para agregar ordenación:

Importa la directiva TableSortFilterDirective en tu componente.

Usa (sort)="tuMétodoDeOrdenado($event)" en los encabezados <th>:

```bash
<th appSortable="nombre" (sort)="sortBy('nombre')">Nombre</th>
```
Asegúrate de implementar una función sortBy que actualice las propiedades sortColumn y sortDirection.
---

## 🧪 Tests y mejora futura
- ✔️ Comportamiento validado visualmente

- 🧪 Se puede ampliar con tests unitarios (Vitest o Jasmine)

- 🔜 Posibles mejoras: paginación, exportar a Excel, orden múltiple
  
---

## ✨ Autor

Lanny Rivero Canino
- 🎓 Reto Angular – Código Samurái 2025
- 👩‍💻 QA Tester & Frontend Developer
- 🔗  [LinkedIn](https://www.linkedin.com/in/lanny-rivero/)

