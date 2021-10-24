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
                <Text color="white" size="1.1rem" margin={20}>
                    Antes de iniciar en este mundo del desarrollo web, me dedicaba a hacer videos en youtube de videojuegos en esos momentos aprendí a editar videos para ello solía usar varias herramientas como <Text b>Adobe After Effects, Sony Vegas Pro, Camtasia,</Text> además para crear las miniaturas de los videos aprendí un poco a usar <Text b>Adobe Photoshop.</Text>
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                    Seguramente te estarás preguntando, como fue la transición del mundo de YouTube a desarrollador, pues verás, yo soy una persona inconforme siempre quiero aprender o crear cosas nuevas por lo cual debido a esto se me ocurrió la idea de crear una página web para mi canal en el que yo pueda publicar mi propio contenido, puede tener control sobre ella y mejor aún anexar mis videos de youtube y que se actualicen automaticamente. 
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                    Para lograr esto, empece a buscar videos de YouTube de como crear tu propia página web, así que fui iniciando con <Link color icon href="https://www.wix.com/" rel="noreferrer noopener" target="_blank"><Text b>Wix</Text></Link>. Yo estaba muy emocionado, porque estaba creando algo propio con mis propias manos era básicamente como mi pequeña marca personal pero del canal. A medida que iba pasando el tiempo yo sentía la necesidad de agregar más y más cosas, hasta el punto en el que Wix no me permitía hacer, lo que quería hacer (no recuerdo puntualmente que era, pero estaba relacionado con los videos de YouTube) y tampoco encontraba videos que me ayudaran hacer lo que quería.
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                    Así que continué buscando en Internet como hacerlo, y me di cuenta que lo yo quería hacer se podía pero con código (creo que en ese momento no sabía lo que estaba viendo), entonces intenté usar ese código en Wix y me lleve la sorpresa de que esta plataforma no te da tanta libertad para hacer esto. Desde ese momento empezó todo, comencé a hacer la página que había creado con Wix pero con HTML y CSS puro (todo con ayuda de internet) hasta que llegué al mismo punto que con la página hecha con Wix, y experimenté usando el código que había encontrado.
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                    Ahí comenzó mi interés por el desarrollo web, poco a poco me fui empapando a tal punto de conseguir la suficiente experienca para conseguir mi primer trabajo en mi país natal Venezuela (previo a esto ya estaba un poco familiarizado con HTML, CSS y jQuery).
                </Text>
            </Grid>
        </Row>
        <Spacer y={2} />
        <Text h3 align="center" color="white" id="projects">
            ¿Qué he aprendido estos últimos años?
        </Text>
        <Spacer y={2} />
        <Row justify="center">
            <Grid sm={12} md={8} direction="column">
                <Text color="white" size="1.1rem" margin={20}>
                   Continuando con la linea de la historia, en mi primer trabajo tuve la oportunidad de aprender <Text color="warning" b>AngularJS</Text> y <Text color="warning" b>Angular 2</Text> con ambas tecnologías participé en el desarrollo de una aplicación de telecomunicaciones trabajando con manejo de datos en tiempo real, mostrando datos historicos y demás. También participé en un proyecto de Elearning.
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                   Al cabo de 1 año aproximadamente tuve que dejar mi país para llegar a Argentina, en donde tuve la oportunidad de trabajar con <Text color="warning" b>Angular 5</Text> en un proyecto para un callcenter. Luego de 2 años, cambié de proyecto a uno destinado a la parte de atención al cliente por chat el cual fue desarrollado en el Frontend con <Link color="warning" icon href="https://en.reactjs.org/" rel="noreferrer noopener" target="_blank"><Text b>React.</Text></Link> En esta etapa una de las cosas que he aprendí fue el concepto de <Link color="warning" icon href="https://micro-frontends.org/" rel="noreferrer noopener" target="_blank"><Text b>micro frontends,</Text></Link> la apicación de chat que les mencioné anteriormente vivía dentro de una aplicación de AngularJS además también podía ser incrustrada en una aplicación móvil nativa utilizando <Text color="warning" b>WebViews.</Text>
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                    Lo que más me encantó de esto, fue como hacer coexistir varias aplicaciones dentro de una misma sin importar las tecnologías en las que estén hechas, así como también la posibilidad de tener un equipo de desarrollado totalmente aislado al de la aplicación contenedora, por lo cual pudimos encargarnos de nuestros propios tiempos de despligue sin depender de nadie.
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                   Paralelamente a mi trabajo, estoy trabajando en el blog propio hecho con <Link color="warning" icon href="https://svelte.dev/" rel="noreferrer noopener" target="_blank"><Text b>Svelte</Text></Link> (el cual debes haber visto en mis <Link color icon href="#projects">proyectos destacados</Link>) y aunque al momento de escribir esto, el backend en el que estoy trabajando no está conectado al Blog, estoy utilizando <Link color="warning" icon href="https://nestjs.com/" rel="noreferrer noopener" target="_blank"><Text b>NestJS</Text></Link> para conocerlo un poco y porque me trae recuerdos de Angular por su arquitectura.
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                    Además también tengo bastante tiempo trabajando como freelance en <Link color icon href="https://workana.com/" rel="noreferrer noopener" target="_blank">Workana</Link>, en este oportunidad fue el area móvil utilizando <Link color="warning" icon href="https://ionicframework.com/" rel="noreferrer noopener" target="_blank"><Text b>Ionic 3</Text></Link> y <Link color="warning" icon href="https://reactnative.dev/" rel="noreferrer noopener" target="_blank"><Text b>React Native</Text></Link> para desarrollar aplicaciones móviles.
                </Text>
                <Text color="white" size="1.1rem" margin={20}>
                   Por último al día de hoy, en mi empleo actual estoy trabajando con <Link color="warning" icon href="https://vuejs.org/" rel="noreferrer noopener" target="_blank"><Text b>VueJS</Text></Link> en un proyecto de ecommerce.
                </Text>
            </Grid>
        </Row>
        
        
    </>
)

export default MyBeginnings