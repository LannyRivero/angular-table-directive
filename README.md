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

## 📦 Ejemplo en uso

```bash
| Nombre | Rol             | Edad |
| ------ | --------------- | ---- |
| Lanny  | QA Tester       | 39   |
| Marta  | Frontend Dev    | 28   |
| Carlos | Project Manager | 45   |
```
- Puedes escribir "Dev" o "39" en el input de búsqueda y ver cómo se filtra.
- Haz clic en los encabezados para ordenar (por nombre, rol o edad).
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

