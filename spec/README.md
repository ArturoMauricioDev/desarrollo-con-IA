# spec/ — Spec Driven Development

Documentación viva del proyecto **Y aqui seguimos**, organizada para desarrollo dirigido por especificación: primero se escribe la spec, luego el plan luego las tareas y solo entonces se toca el codigo.

## Estructura

```
spec/
├── constitution/            ← reglas estables del proyecto
│   ├── mission.md           ← qué construimos y para quién
│   ├── tech-stack.md        ← tecnologías, convenciones y límites
│   └── roadmap.md           ← orden de las features
└── features/                ← una carpeta por feature
    ├── 001-contador-en-vivo/
    |   ├── spec.md          ← qué hace + criterios de aceptación
    |   ├── plan.md          ← cómo se implementa
    |   └── tasks.md         ← checklist de tareas
    ├── 002-timeline-de-profecias/
    ├── 003-seccion-realidad/
```

## Flujo para una feature nueva

1. Crear `features/NNN-nombre-feature/` con el siguiente número libre (`001`, `002`, …).
2. Escribir `spec.md`: qué hace, por qué y criterios de aceptación medibles.
3. Escribir `plan.md`: enfoque técnico y decisiones, respetando `constitution/tech-stack.md`.
4. Desglosar en `tasks.md` y marcar el progreso.
5. Implementar y validar (build/tests/lint o lo que defina la constitución).
6. Actualizar `constitution/roadmap.md` (mover la feature a "Hecho").

> La constitución manda: si una feature choca con `mission.md` o `tech-stack.md`, se replantea la feature, no la constitución.
