# Guía de contribución a Fase Alterna Web

🚀 **Gracias por tu interés en contribuir a la web oficial de Fase Alterna**

Este proyecto está abierto a colaboraciones de la comunidad. Ya seas desarrollador/a, diseñador/a o simplemente fan de la banda con ideas, tu ayuda es bienvenida. ¡Vamos a hacer crecer este sitio juntos!

---

## 💡 Antes de empezar

- Asegúrate de haber revisado el [README](./README.md) para conocer el contexto del proyecto.
- Si es la primera vez que colaboras en GitHub, te recomendamos esta guía:  
  👉 [Contributing to projects (GitHub Docs)](https://docs.github.com/es/get-started/quickstart/contributing-to-projects)

---

## 🎓 Buenas prácticas

- Usa nombres de ramas descriptivos: `feature/nueva-seccion`, `fix/bug-menu`, etc.
- Acompaña cada Pull Request con una descripción clara y concisa.
- Si vas a modificar estilos o estructura visual, procura mantener la coherencia con el diseño original.
- Antes de hacer un cambio mayor, abre un [Issue](https://github.com/sierrapablo/fasealterna-web/issues) para discutirlo.

---

## ✅ Linting y estilo

Antes de hacer commit, asegúrate de que:

- Has ejecutado `npm lint` y el código pasa sin errores.
- **No has modificado el estilo o indentación de líneas que no estás tocando directamente.**
  - Cambios innecesarios en el formato dificultan la revisión del código.
  - Si tu editor formatea automáticamente, haz staging selectivo (`git add -p`) para evitar incluir cambios no relacionados.

Esto nos ayuda a mantener el historial de commits limpio y claro.

---

## 📝 Estilo de commits

Para mantener un historial consistente y fácil de leer, utiliza este formato para tus mensajes de commit:

```
:emoji: keyword: descripción clara en inglés
```

- Usa un **emoji representativo** al inicio.
- La **palabra clave** en inglés indica el tipo de cambio.
- Después de los dos puntos, describe brevemente lo que hiciste.

### Ejemplos

```bash
✨ feat: add gallery section with image lightbox
🐛 fix: resolve crash on mobile navigation
🎨 style: fix button alignment on homepage
📝 docs: update README with new instructions
🔥 chore: remove unused assets
✅ test: add tests for hero component
```

### Palabras clave sugeridas

| Emoji | Keyword  | Propósito                              |
|-------|----------|----------------------------------------|
| ✨     | feat     | Nueva funcionalidad                    |
| 🐛     | fix      | Corrección de errores                  |
| 📝     | docs     | Cambios en la documentación            |
| 🎨     | style    | Cambios de formato (espacios, indent.) |
| ♻️     | refactor | Refactorización sin cambio funcional   |
| 🔥     | chore    | Tareas menores o limpieza               |
| ✅     | test     | Añadir o modificar pruebas              |

Este estilo mejora la legibilidad del historial y facilita futuras búsquedas o automatizaciones.

---

## 🚄 Flujo de trabajo

1. **Haz fork del repositorio**
   - https://github.com/sierrapablo/fasealterna-web/fork

2. **Clona tu fork**
   ```bash
   git clone https://github.com/tuusuario/fasealterna-web.git
   cd fasealterna-web
   ```

3. **Crea una rama**
   ```bash
   git switch -c feature/mi-mejora
   ```

4. **Instala dependencias y ejecuta en local**
   ```bash
   npm install
   npm run dev
   ```

5. **Haz tus cambios**
   > Usa `npm lint` para asegurarte de que el código sigue el estilo del proyecto.

6. **Haz commit**
   ```bash
   git add .
   git commit -m "✨ feat: implement new section"
   ```

7. **Haz push y abre un Pull Request**
   ```bash
   git push origin feature/mi-mejora
   ```
   Luego, abre el PR desde GitHub.

---

## 🔍 Revisión y merge

- Todos los Pull Requests serán revisados manualmente.
- Si hay comentarios o sugerencias, te los dejaremos directamente en el PR.
- Una vez aprobado, lo uniremos a `main` y te mencionaremos como contribuidor/a.

---

## ✅ Ejemplos de contribución

- Arreglar errores tipográficos o enlaces rotos.
- Mejorar el diseño o la usabilidad.
- Añadir nuevas secciones (prensa, galería, etc.).
- Traducir el sitio o mejorar la accesibilidad.
- Refactorizar componentes para mayor claridad o reutilización.

---

## 😊 Gracias

Tu tiempo y ayuda hacen que este proyecto sea mejor para todos.  
Ya seas fan de Fase Alterna o simplemente alguien curioso con ganas de colaborar: **¡gracias!**
