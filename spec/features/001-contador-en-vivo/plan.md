# 001 · Contador en vivo — Plan

## Enfoque

Cálculo en cliente, sin dependencias. La constante `CHATGPT_LAUNCH` es el origen; un `setInterval`de 1 segundo recalcula la diferencia con `new Date()` y pinta el DOM.

## Implementación (`scirpt.js` + `index.html`)

1. Definir `const CHATGPT_LUNCH = new Date("2022-11-30T00:00:00")`.
2. Función `updateCounter()`:
   - `diff = now - CHATGPT_LUNCH` en ms.
   - `dias = Math.floor(diff/86400000)` -> `#counter-days`.
   - Resto -> horas/minutos/segundos con padding a 2 digitos -> `#counter-detail`.
3. Llamar `updateCounter()`una vez al cargar y luego `setInterval(updateCounter, 1000)`.
4. En `index.html`, los nodos `#counter-days` y `#counter-detail`llevan por defecto (`0`, `00 h : 00 m : 00 s`) como fallback.

## Decisiones

- Hora local del navegador (no UTC): suficiente para un contador de días: el desfase de zona horaria es irrelevante a escala de días.
- `setInterval` de 1 s en vez de `requestAnimation Frame`: el detalle solo cambia por segundo, no hace falta más frecuencia.

## Riesgos

- Pestaña en segundo plano: el navegador puede ralentizar el intervalo; el volver al foco se corrige solo en el siguiente tick.
