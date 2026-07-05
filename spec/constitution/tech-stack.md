# Tech stack y convenciones

<!-- _Cómo está construido el proyecto y las reglas que todo el código debe respetar. Es la referencia técnica que ningún plan de feature debería contradecir._ -->

## Tecnologías

- **Lenguaje:** HTML + CSS + JavaScript vanilla, Sin TypeScript.
- **Framework / runtime:** ninguno. No hay build, ni dependencias, ni frameworkm ni gestor de paquetes.
- **Fuentes externas:** Google Fonts (JetBrains Mono e Inter). Nada mas se carga de terceros.
- **Base de datos:** No aplica. Todo el contenido vive en el array `MILESTONES` de `script.js`.
- **Tests:** no hay suite automatizada. Validación = `node --check script.js`+ revisión visual en el navegador.
- **Despliegue:** archivos estátivcos servidos tal cual.

## Archivos

- `index.html` — hero/contador, sección "Mientras tanto, en la realidad" y footer. Estructura fija de la página.
- `script.js` — array `MILESTONES` (todo el contenido del timeline), render (`renderMilestones()`) en `#timeline-list` y contadores en vivo.
- `styles.css` — Tema oscuro estilo terminal con variables CSS en `:root`.

## Comandos

- `python3 -m http.server 8765` — servidor local (http://localhost:8765).
- `node --check script.js` — valida la sintaxis del JS tras editarlo.
- _(sin lint, sin build)_ — revisión manual de estilo.

## Modelo de datos: campos de un hito (`MILESTONES`)

- `date` (ISO o "today"): ordena el timeline y calcula el "hace N días". **El render NO ordena**: mantener el array en orden cronológico.
- `dateLabel` : etiqueta de fecha legible mostrada en la tarjeta.
- `title`, `autor`, `body`: textos de la tarjeta.
- `quote`(opcional): cita literal; `null` si el hito no tiene cita.
- `quoteNote: "neutral`: borde ambar para citas de contexto/parafraseadas (el rojo por defecto es pta citas literales de la predicción).
- `deadline` (opcional): activa el **veredicto dinámico**. Si la fecha no ha vencido, `{days}` en el label se sustituye por los días restantes; si ya venció, el veredicto pasa solo a "PLAZO VENCIDO X" con tipo `failed`. Por eso las predicciones con plazo no requieren mantenimiento manual.
- `veredict.type`: `ok`(verde), `pending`(ámbar, cuenta antrás), `failed`(rojo).
- `doom`: solo cambia de color del punto del timeline (rojo = profecía apocalíptica).
- `source`: URL de la fuente original; renderiza el enlace "fuente: ".

Contadores: el principal (hero) cuenta dese `CHATGPT_LUNCH` y se actualiza cada segundo; los de las tarjetas se calculan al cargar.

## Convenciones

- Todo el texto visible va en **español**. Tono irónico, datos rigurosos.
- Toda cita de ser **real y verificada con búsqueda web** antes de añadirse, con su `source`enlazada.
- Las citas se muestran traducidas; **precisión sobre dramatismo** (incluir matices como "puede que" si el original lo tiene).
- Las paráfrasis sin autor concreto marcan con `quoteNote: "neutral"`.

## Estilo visual

Tema oscuro estilo terminal con variables CSS en `:root`: acento verde `--accent`, rojo `--dange` para profecías, ambar `--warning` para pendientes. Tipografías: JetBrains Mono (`.mono`) e inter. El timeline alterna tarjetas a ambos lados de la línea central en desktop y colapsa a una columna bajo 760px.

## Límites duros

- No añadir dependencias, build ni framework: el valor del proyecto es que son 3 archivos vanilla sin tooling.
- No añadir una cita sin verificarla y enlazar su `source`real. Nada inventado.
- No reordenar el código de render: si cambia el orden visual, se reodena el array `MILESTONES`.
- No subir `.DS_Store` ni `.claude/` (ya en `.gitignore`).
