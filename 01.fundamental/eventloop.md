<!-- 
----------- Event loop ------------------------
Es quien decide el orden de la ejecucion 

Que pasa si dos Timeouts terminan al mismo tiempo?
Que pasa si una promesa termina al  mismo tiempo que otro call back?

Evento Loop sigue ciertas reglas:
1. Callbacks en el microtask se ejecutan primero
2. Todos los callbacks dentro del timer que se ejecutan
3. Callbacks en el microtask queue (si hay) se ejecutan despues de los callbacks timers, primero tareas en el nextTick queue y luego tareas en el primise queue.
4. Callbacks de l / 0 se ejecutan
5. Callbacks en el microtask queue se ejecutan  (si hay) y luego primise queue (si hay)
6. Todos los callbacks en el check queue se ejecutan.
7. Callbacks en el microtask se ejecutan despues de cada callback en el check queue (Siguiendo el mismo orden anterior, netxTick y luego promise)
8. Todos los callbacks en el close queue son ejecutados
9. Por una ultima vez en el mismo ciclo, los microtask queues son ejecutados de la misma forma, nextTick y luego promise queue

Node espera a que la pila de llamadas este vacia antes de ejecutar un callback o interrumpe el flujo normal de ejecucion para ejecutar el callback?
- El flujo normal de ejecucion no se interrumpira para ejecutar una funcion de devolucion de llamada

Si dos tareas asincronas como setTimeOut y ReadFile se completan al mismo tiempo, como decide Node que callback ejecutar primero en la pila de llamadas? Uno tiene prioridad sobre otro?
- Los callbacks de temporizador se ejecutan antes que las devolcuiones de llamada de I / O incluso si ambas estan listas exactamente al mismo tiempo
-->