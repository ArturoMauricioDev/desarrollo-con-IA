# 001 · Contador en vivo

**Estado:** propuesta

## Qué hace

Muestra en el hero un contador grande con los **días transcurridos desde el lanzamiento de ChatGPT** (30/11/2022, `CHATGPT_LUNCH`), acompañado de un detalle con horas, minutos y segundos que se actualiza en tiempo real. Es el gancho principal: cuantifica cuánto llevamos "a punto de desaparecer".

## Por qué

Convierte una broma ("y aqui seguimos") en un dato concreto y creciente que el visitanteve subir en vivo. Refuerza el mensaje sin necidad de leer nada más.

## Criterios de aceptación

- [ ] Al cargar, `#counter-days` muestra el nº entero de días desde 30/11/2022.
- [ ] `counter-detail` muestra `HH h : MM m : SS s` y se actualiza cada segundo.
- [ ] El número de días es coherente con la fecha real del navegador (sin desfaces por zona horaria evidentes).
- [ ] Si el JS falla o no carga, el HTML muestra valores por defecto (`0`, `00 h : 00 m : 00 s`) sin romper el layout.
- [ ] Funciona en móvil y desktop sin desbordar el `counter-card`.

## Fuera de alcance

- Persistencia o sincronización con servidor (es puro cálculo en cliente)
- Animaciones más allá del cursor parpadeante del hero.
