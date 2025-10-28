Plantilla de Respuesta â€” Prueba Frontend (1h Â· Nivel Mid)

## Datos

Nombre: \_Javier Gascón
Fecha: 28/10/25
OpciÃ³n prÃ¡ctica elegida: (A )

1. Respuestas cortas (elige 2 de 4)
   Para iniciar arracar el poryecto pnpm run dev y para iniciar el test pnpm exec playwright test

Pregunta seleccionada 1: ****\*\*****\*\*****\*\*****¿Qué aporta TypeScript en frontend?****\*\*****\*\*****\*\*****
Respuesta (5â€“8 lÃ­neas):TypeScript añade tipos a JavaScript, ayudándote a detectar errores antes de ejecutar el código.
1: menos fallos por confundir tipos, por ejemplo sumar número con texto o cuando da undefined no tiene un valora asignado.
2: autocompletado en editores, hace el código más fácil de escribir y entender.
Limitación: hay que aprender su sintaxis y compilarlo a JavaScript, lo que añade un paso extra.
let edad: number = 25;
let nombre:string= "Mariano"
(boolean,any,unknown,void, null, undefined) tipos basicos

Pregunta seleccionada 2: ****\*\*****\*\*****\*\*****SSR vs CSR en Next.js para una lista filtrable: ¿qué elegirías y por qué? Considera SEO, latencia y coste.****\*\*****\*\*****\*\*****
Respuesta (5â€“8 lÃ­neas):SSR: la página se crea en el servidor, bueno para Google, pero cada filtro hace esperar.
CSR: todo se hace en el navegador, filtros rápidos, pero Google ve menos contenido.
Mejor opción: mezcla de los dos: la lista sale del servidor y luego los filtros funcionan rápido en el navegador.

2. PrÃ¡ctico (A )

Enfoque elegido y por quÃ© (tradeâ€‘offs: SSR/CSR, datos, simplicidad):

Los datos iniciales vienen del servidor usando un mock en lib/mock-data, así la página carga rápido y es indexable por Google.
Luego, el filtrado y la interacción se hacen en el cliente usando un fetch desde lib/data.ts, lo que hace la UI rápida y sin recargar la página.
Trade‑offs: combina lo mejor de SSR (SEO, carga inicial) y CSR (interacción rápida), y además es simple de implementar porque solo usas mocks y un fetch local.
Decisiones clave (estado, estilos, accesibilidad, seguridad):

Estado: useState para filtros y transacciones, hace la UI reactiva.
Estilos: usé TailwindCSS porque ya lo conocía y permite aplicar colores, sombras y estilos rápido sin crear archivos CSS separados, es fácil de mantener, consistente y rápido para prototipos. No utilicé CSS Modules porque no estaba familiarizado con ellos.
Accesibilidad: con aria-labels solo en el componente del ejercicio.
Seguridad: datos simulados, filtrado en cliente; con datos reales habría que validar inputs.

Tests realizados (quÃ© cubren y por quÃ© aportan valor):

Compruebo que la página carga y se ve el título “Movimientos bancarios”. Esto asegura que el componente aparece correctamente.
Intenté probar que el filtrado por categoría funciona (por ejemplo, ver solo “Income”), lo que sería útil para garantizar que los filtros muestran los datos correctos.
Actualmente este test no funciona, probablemente porque los datos se cargan en el cliente y Playwright intenta leerlos antes de que aparezcan. Aun así, la idea del test es correcta o eso creo yo jejeje y muestra qué queremos comprobar.

Resultados y limitaciones (quÃ© falta y prÃ³ximos pasos):
Filtro E2E estable con datos seed
Añadir i18n y gráficas estadísticas
Mejorar tests unitarios y de integración

3. Tiempo invertido (aprox.)
   Estuve jugando un poco con los estilos y aproveché para añadir un Navbar y una ruta nueva para mostrar el ejercicio. Ahora se navega mejor y se ve todo más ordenado.

ImplementaciÃ³n: 120 parox min · Tests: 120 min · README: 30 min
