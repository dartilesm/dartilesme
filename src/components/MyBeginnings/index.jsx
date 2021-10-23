import { Grid, Link, Row, Spacer, Text } from "@nextui-org/react"


const MyBeginnings = () => (
    <>
        <Spacer id="history" />
        <Spacer y={4} />
        <Text h2 align="center" color="white" >
            Un poco de historia...
        </Text>
        <Spacer y={2} />
        <Row justify="center">
            <Grid sm={12} md={8} direction="column">
                <Text color="white" size="1.1rem">
                    Antes de iniciar en este mundo del desarrollo web, me dedicaba a hacer videos en youtube de videojuegos en esos momentos aprendí a editar videos para ello solía usar varias herramientas como Adobe After Effects, Sony Vegas Pro, Camtasia, además para crear las miniaturas de los videos aprendí un poco a usar Adobe Photoshop.
                </Text>
                <Text color="white" size="1.1rem">
                    Seguramente te estarás preguntando, como fue la transición del mundo de YouTube a desarrollador, pues verás, yo soy una persona inconforme siempre quiero aprender o crear cosas nuevas por lo cual debido a esto se me ocurrió la idea de crear una página web para mi canal en el que yo pueda publicar mi propio contenido, puede tener control sobre ella y mejor aún anexar mis videos de youtube y que se actualicen automaticamente. 
                </Text>
                <Text color="white" size="1.1rem">
                    Para lograr esto, empece a buscar videos de YouTube de como crear tu propia página web, así que fui iniciando con WIX (una página para crear otras páginas webs). Yo estaba muy emocionado, porque estaba creando algo propio con mis propias manos era básicamente como mi pequeña marca personal pero del canal. A medida que iba pasando el tiempo yo sentía la necesidad de agregar más y más cosas, hasta el punto en el que WIX no me permitía hacer, lo que quería hacer (no recuerdo puntualmente que era, pero estaba relacionado con los videos de YouTube) y tampoco encontraba videos que me ayudaran hacer lo que quería.
                </Text>
                <Text color="white" size="1.1rem">
                    Así que continué buscando en Internet como hacerlo, y me di cuenta que lo yo quería hacer se podía pero con código (creo que en ese momento no sabía lo que estaba viendo), entonces intenté usar ese código en WIX y me lleve la sorpresa de que esta plataforma no te da tanta libertad para hacer esto. Desde ese momento empezó todo, comencé a hacer la página que había creado con WIX pero con HTML y CSS puro (todo con ayuda de internet) hasta que llegué al mismo punto que con la página hecha con WIX, y experimenté usando el código que había encontrado.
                </Text>
                <Text color="white" size="1.1rem">
                    Ahí comenzó mi interés por el desarrollo web, poco a poco me fui empapando a tal punto de conseguir la suficiente experienca para conseguir mi primer trabajo en mi país natal Venezuela (previo a esto ya estaba un poco familiarizado con HTML, CSS y jQuery).
                </Text>
            </Grid>
        </Row>
        <Text h3 align="center" color="white" id="projects">
            ¿Qué he aprendido estos últimos años?
        </Text>
        <Row justify="center">
            <Grid sm={12} md={8} direction="column">
                <Text color="white" size="1.1rem">
                   Continuando con la linea de la historia, en mi primer trabajo tuve la oportunidad de aprender <Text color="warning" b>AngularJS</Text> y <Text color="warning" b>Angular 2</Text> con ambas tecnologías participé en el desarrollo de una aplicación de telecomunicaciones trabajando con manejo de datos en tiempo real, mostrando datos historicos y demás. También participé en un proyecto de Elearning.
                </Text>
                <Text color="white" size="1.1rem">
                   Al cabo de 1 año aproximadamente tuve que dejar mi país para llegar a Argentina, en donde tuve la oportunidad de trabajar con <Text color="warning" b>Angular 5</Text> en un proyecto para un callcenter. Luego de 2 años, cambié de proyecto a uno destinado a la parte de atención al cliente por chat el cual fue desarrollado en el Frontend con <Text color="warning" b>React.</Text> En esta etapa una de las cosas que he aprendí fue el concepto de <Text color="warning" b>microfrontends,</Text> la apicación de chat que les mencioné anteriormente vivía dentro de una aplicación de AngularJS además también podía ser incrustrada en una aplicación móvil nativa utilizando <Text color="warning" b>WebViews.</Text>
                </Text>
                <Text color="white" size="1.1rem">
                    Lo que más me encantó de esto, fue como hacer coexistir varias aplicaciones dentro de una misma sin importar las tecnologías en las que estén hechas, así como también la posibilidad de tener un equipo de desarrollado totalmente aislado al de la aplicación contenedora, por lo cual pudimos encargarnos de nuestros propios tiempos de despligue sin depender de nadie.
                </Text>
                <Text color="white" size="1.1rem">
                   Paralelamente a mi trabajo, estoy trabajando en el blog propio hecho con <Text color="warning" b>Svelte</Text> (el cual debes haber visto en mis <Link color icon href="#projects">proyectos destacados</Link>) y aunque al momento de escribir esto, el backend en el que estoy trabajando no está conectado al Blog, estoy utilizando <Text color="warning" b>NestJS</Text> para conocerlo un poco y porque me trae recuerdos de Angular por su arquitectura.
                </Text>
                <Text color="white" size="1.1rem">
                   Por último al día de hoy, en mi empleo actual estoy trabajando con <Text color="warning" b>VueJS</Text> en un proyecto de ecommerce.
                </Text>
            </Grid>
        </Row>
        
        
    </>
)

export default MyBeginnings