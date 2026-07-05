# Y Aquí seguimos

Web estática en español (yaquiseguimos.dev) que documenta con humor las predicciones fallidas de lideres tech sobre la desaparición de los programadores por la IA. Muestra un contador en vivo de días desde el lanzamiento de ChatGPT (30/11/2022) y un timeline de citas con veredicto por predicción. Para curiosos del sector y para reírse de las profecías apocalípticas con datos reales. Autor: ArturoMauricioDev

## Stack

    - Lenguajes: HTML + CSS + JavaScript vanilla (sin TypeScript)
    - Framework / runtime ninguno - no hay build, ni dependencias ni framework
    - Base de datos: no aplica - todo el contenido vive en el array 'MILESTONES' de `script.js`
    - Tests: no hay suit de test; la validación es `node --check scripts.js`+ revisión visual del navegador

## Comandos

    - `pytjon3 -m http.server 8765` - arranca el servidor en local (http://localhost:8765)
    - `node --check script.js` - valida la sintaxis del JS tras editarlo
    - _(sin lint configurado)_ - revisión manual de estilo siguiendo las convenciones de abajo
    - _(sin build)_ - el sitio se sirve tal cual; el despliegue son los archivos estáticos.

## Estructura del proyecto

    - `index.html` - hero/contador, sección de datos reales ("Mientras tanto , en la realidad") y footer. La estructura fija de la página.
    - `script.js` - el array `MILESTONES` con todo el contenido del timeline, el render (`renderMilestones()` dentro de `#timeline-list`) y los contadores en vivo
    - `styles.css` - tema oscuro estilo terminal con variables Css en `:root`
    - `spec/` - documentación para Spec Driven Development: `constitution/` (mision, tech-stack, roadmap) y `features/NNN-nombre/`(spec, plan, task)
    - `AGENTES.md` -   este archivo: guía operativa del proyecto.

## Arquitectura

Todo el contenido vive en el array `MILESTONES` de `script.js`; `index.html` solo tiene el hero/contador, la sección de datos reales ("Mientras tatno , en la realidad") y el footer. El timeline se renderiza en JS (`renderMilestones()`) dentro de `#timeline-list` - el rende no ordena- usa el orden de array.

Campos de cada hito y mecánica: - `date` (ISO o `"today"`): ordena el timeline y calcula el "hace N días" de cada tarjeta. Mantener el array en orden cronológico - el render no ordena. - `deadline` (opcional): activa el veredicto dinámico. Si la fecha no ha vencido, el `{days}`del label del veredicto se sustituye por los dias restantes; si ya venció, el veredicto se convierte automáticamente en "PLAZO VENCIDO X" con timpo `failed`. Por eso las predicciones con plazo no necesitan mantenimiento manual al expirar. - `veredict.type`: `ok`(verde), `pending`(ambar, cuenta atrás), `failed`(rojo). - `doom`:solo cambia el color del punto del timeline (rojo = profecía apocaliptica). - `quoteNote: "neutral"`: borde ambar en la cita (citas de contexto/parafraseadas) en vez del rojo por defecto (citas literales de la predicción). - `source`: URL del medio/fuente original: renderiza el enlace "fuente ".

Contadores: el principal (hero) cuenta desde `CHATGPT_LAUNCH` y se actualiza cada segundo; los de las tarjetas se calculan al cargar.

## Convenciones

    - Manten el array `Milestones` en orden cronológico: el render no ordena, usa el orden del array.
    - Cada hito usa los campos de la sección Arquitecra (`date`, `dateline`, `verdict.type`, `doom`, `quoteNote`, `source`). Respeta su mecánica.
    - Todo el texto visible va en español. Tono irónico, datos rigurosos.
    - Todas las citas deben ser reales y verificadas con búsqueda web antes de añadirse, con su fuente enlazada en `source`-
    - Las citas se muestran traducidas al español; precisión sobre dramatismo ( incluye matices como " puede que" si el original los tiene).
    - Las paráfrasis sin autor concreto se marcan con `quote: "neutral"`.

## Estilo visual

Tema oscuro estilo terminal definido con variables CSS en `:root` (`styles.css`): acento verde `--accent`, rojo `--danger` para profecías, ámbar `--warning` para pendientes. Tipografías: JetBrains Mono (clase `.mono `) e Inter. El timeline alterna tarjetas a ambos lados de la línea central en desktop y colapsa a una columna bajo 760px.

## No hagas

    - No añadas dependencias, build ni framework: el valor del proyecto es que son 3 archivos vanilla sin tooling.
    - No añadas una cita sin verificarla antes con búsqueda web y en lazarla su `source` real. Nada inventado.
    - No subas `.DS_Sotre` ni la carpeta `.claude/` (ya estan en `.gitignore`).
    - No reordenes el render: si cambias el orden visual, reordena el array `MILESTONES`, no el código de render.

## Flujo de trabajo

    - Trabajamos con **Spec Driven Development**: la spec va antes que el código. Para una feature nueva,  primero `spec.md´ -> `plan.md`-> `tasks.md` en `spec/features/NN-nombre/`, y solo entonces se implementa (ver "Documentación").
    - Antes de una tarea no trivial, propón un plan y espera mi OK.
    - Una tarea a la vez; al terminar, dime que cambiaste para que lo revise.
    - Si añades hitos, comprueba si la sección "Mientras tanto, en la realidad"  de ìndex.html` sigue actualizada (cifras de BLS, GitHub Octoverse, % de codigo generado por IA).
    - Si no estás seguro al 80%, pregunta. No inventes.

## Documentación

La documentación para hacer **Spec Driven Development (SDD)** vive en `spec/`. Empieza por `spec/README.md`, que explica la estructura y el flujo completo. En resumen: - `spec/constitution/`- las reglas estables del proyecto. **Léelas antes de tocar nada:**
○ `mission.md` - que construimos y para quien.
○ `tech-stack.md` - tecnologías, modelos de datos de los hitos ('MILESTONES`), convenciones y limites duros.
		○ `roadmap.md`- orden de las features ( hechas, siguiente, backlog).
	- `spec/features/NNN-nombre/`- una carpeta por feature, cada una con`spec.md`(que hace + criterios de aceptación),`plan.md`(como se implementa) y`tasks.md` (checklist).

Como usarla: 1. **Antes de implementar**, lee la `constituction/` y la `spec.md` de la feature afectada para no contradecirlas. 2. **Para una feature nueva**, crea `spec/features/NNN-nombre/` (siguiente número libre) y escribe `spec.md` -> `plan.md` -> `tasks.md` antes de escribir código. 3. **Al terminar**, marca las tareas en `tasks.md` y mueve la feature a "Hecho" en `roadmap.md`. 4. La contitución manda: si una feature choca con `mission.md` o `tech-stack.md` (p. ej. Pide un build o una dependencia), se replantea la feature, no la consitución.

Arturomauriciodev - autor del proyecto
