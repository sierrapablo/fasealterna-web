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

- Has ejecutado `pnpm exec prettier --check . --config .prettierrc` y el código pasa sin errores. Si hay warnings o errores, ejecuta `pnpm exec prettier --write . --config .prettierrc`.
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
- **Se recomienda usar la aplicación [gitzen](https://github.com/JorgeRosbel/gitzen)**

### Ejemplos

```
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
   pnpm install
   pnpm run dev
   ```

5. **Haz tus cambios**
   > Usa `pnpm exec prettier --check . --config .prettierrc` y `pnpm exec prettier --write . --config .prettierrc` para asegurarte de que el código sigue el estilo del proyecto.

6. **Haz commit**
   ```bash
   git add .
   git commit -m "✨ feat: implement new section"
   ```
   o si usas **gitzen**
   ```bash
   gitzen batch
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

## ℹ️ Próximas mejoras planteadas

- [ ] **Reproductor de vídeos personalizado**  
  Actualmente, los vídeos se muestran mediante iframes de YouTube, lo que afecta negativamente al rendimiento de la web.

  Se planea sustituir estos iframes por un componente reproductor personalizado que:
  - Use un **renderizado tipo island** para hidratar solo el componente necesario en cliente, manteniendo el resto del sitio estático.
  - Sirva los vídeos propios almacenados en un bucket privado, accesible solo mediante un backend proxy, evitando exponer URLs públicas directamente.
  - Mejore el rendimiento general y la experiencia de usuario al cargar menos recursos innecesarios.
  - Mantenga segura la URL de los vídeos y permita mayor control sobre el contenido.

  Esta implementación permitirá un control total sobre la reproducción, evitando la carga pesada y las limitaciones de los iframes de YouTube.

- [ ] **Reproductor de música personalizado**  
  Con la misma intención que el reproductor de videos, se planea sustituir el reproductor de música de Spotify por uno personalizado, evitando exponer las URL de contenido.

- [x] **Prefetch de las páginas cuando se haga hover sobre los botones de navegación**  
  Para mejorar el rendimiento de la web, se planea implementar un prefetch en los botones de navegación que actúe al hacer hover sobre cada botón, para así mejorar el tiempo de respuesta al navegar en la web.

- [ ] **Traducción de la página**  
  Se planea traducir la página a inglés y que se cargue dependiendo de la localización del usuario. Si el usuario se encuentra en un país de habla hispana, la página se mostrará en español, de lo contrario, en inglés. Esto aplica específicamente al formateo de la fecha recibida por el backend en ConcertTable. Hay que considerar el formateo de fecha para los locales `'es-*'` y `'xx-XX'`.

---

## 😊 Gracias

Tu tiempo y ayuda hacen que este proyecto sea mejor para todos.  
Ya seas fan de Fase Alterna o simplemente alguien curioso con ganas de colaborar: **¡gracias!**
