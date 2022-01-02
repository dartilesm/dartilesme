import { Card, Collapse, Link, Spacer, Tooltip } from "@nextui-org/react"
import { Text, Title, Section, Subtitle, Carousel } from "../UI"
import styles from './index.module.css'

const MyBeginnings = () => {
    const BOLD_TEXT_CSS = {
        color: 'inherit', 
        paddingBottom: 0,
        marginLeft: '10px',
        fontSize: 'inherit',
        '@smMax': {
            paddingBottom: 0,
        },
        '@mdMax': {
            paddingBottom: 0
        }
    }

    const experienceTimeline = [
        <Card shadow css={{width: '300px'}}>
            <Subtitle className={styles.jobYear}>2021</Subtitle>
            <Text size={16}>Lorem ipsum dolor sit amet.</Text>
        </Card>,
        <Card shadow css={{width: '300px'}}>
            <Subtitle className={styles.jobYear}>2020</Subtitle>
            <Text size={16}>Lorem ipsum dolor sit amet.</Text>
        </Card>,
        <Card shadow css={{width: '300px'}}>
            <Subtitle className={styles.jobYear}>2019</Subtitle>
            <Text size={16}>Lorem ipsum dolor sit amet.</Text>
        </Card>,
        <Card shadow css={{width: '300px'}}>
            <Subtitle className={styles.jobYear}>2018</Subtitle>
            <Text size={16}>Lorem ipsum dolor sit amet.</Text>
        </Card>,
        <Card shadow css={{width: '300px'}}>
            <Subtitle className={styles.jobYear}>2017</Subtitle>
            <Text size={16}>Lorem ipsum dolor sit amet.</Text>
        </Card>,
        <Card shadow css={{width: '300px'}}>
            <Subtitle className={styles.jobYear}>2016</Subtitle>
            <Text size={16}>Lorem ipsum dolor sit amet.</Text>
        </Card>
    ]
    return  <>
        <Spacer id="history" />
        <Section>
            <Title>
                Historia y experiencia
            </Title>
            <Subtitle>Historia</Subtitle>
            <Collapse.Group shadow >
                <Collapse title="Comienzos" subtitle="Descubre como inicio en el mundo del desarrollo">
                    <Text>
                        Antes de iniciar en este mundo del desarrollo web, me dedicaba a hacer videos en youtube sobre videojuegos, en esos momentos aprendí a editar videos, para ello solía usar varias herramientas como <Text b>Adobe After Effects, Sony Vegas Pro, Camtasia,</Text> además para crear las miniaturas de los videos aprendí un poco a usar <Text b>Adobe Photoshop.</Text>
                    </Text>
                    <Text>
                        Seguramente te estarás preguntando, como fue la transición del mundo de YouTube a desarrollador, pues verás, yo soy una persona inconforme, siempre quiero aprender o crear cosas nuevas, por lo cual quise crear una página web para mi canal en el que yo pueda publicar mi propio contenido, pueda tener control sobre ella y mejor aún, anexar mis videos de youtube y que se actualicen automaticamente. 
                    </Text>
                    <Text>
                        Si bien esa era mi idea inicial, no tenía idea de como hacerlo así que empece a buscar videos en YouTube de como crear tu propia página web, hasta que encontré una página para crear páginas web llamada 

                        <Link color icon href="https://www.wix.com/" rel="noreferrer noopener" target="_blank">
                            <Text b css={BOLD_TEXT_CSS}>Wix</Text>
                        </Link>. 

                        Yo estaba muy emocionado porque estaba creando algo propio con mis propias manos, era básicamente como mi "pequeña marca personal". A medida que iba pasando el tiempo yo sentía la necesidad de agregar más y más cosas, hasta el punto en el que Wix &nbsp;
                        
                        <Tooltip className={styles.tooltip} content="No recuerdo puntualmente que era, pero estaba relacionado con los videos de YouTube." color="primary">
                            <Text b css={{ textDecoration: 'underline', color: 'inherit', paddingBottom: 0 }}>
                                no me permitía hacer lo que quería hacer
                            </Text>
                        </Tooltip> 
                        y tampoco encontraba videos que me ayudaran con eso.
                    </Text>
                    <Text>
                        Así que continué buscando en Internet como hacerlo, y me di cuenta que lo que yo quería hacer se podía pero con código y por desgracia no me daba tanta libertad como para utilizar código. Así que no desistí, y empece a buscar una solución, y la que encontré fue haciendo la página que había creado con Wix pero con HTML y CSS puro. Una vez que obtuve el mismo resultado visual de la página de WIX con la que realice desde cero, experimenté usando el código que había encontrado.
                    </Text>
                    <Text>
                        A partir de ahí empece a tener curiosidad por crear páginas web, poco a poco me fui empapando a tal punto de conseguir la suficiente experienca para conseguir 
                        <Tooltip className={styles.tooltip} content="Para este momento tenía conocimientos básicos en HTML, CSS y jQuery" color="primary">
                            <Text b css={{ textDecoration: 'underline' }}>mi primer trabajo en mi país natal Venezuela.</Text>
                        </Tooltip>
                    </Text>
                </Collapse>
                <Collapse title="Aprendizaje" subtitle="¿Qué he aprendido estos últimos años?">
                    <Text>
                        Continuando con la linea de la historia, en mi primer trabajo tuve la oportunidad de aprender 
                        
                        <Link color="warning" icon href="https://angularjs.org/" rel="noreferrer noopener" target="_blank">
                            <Text b css={BOLD_TEXT_CSS}>AngularJS</Text>
                        </Link> y 
                        <Link color="warning" icon href="https://angular.io/" rel="noreferrer noopener" target="_blank">
                            <Text b css={BOLD_TEXT_CSS}>Angular 2</Text>
                        </Link> con ambas tecnologías participé en el desarrollo de una aplicación de telecomunicaciones trabajando con manejo de datos en tiempo real, mostrando datos historicos y demás. También participé en un proyecto de Elearning.
                    </Text>
                    <Text>
                        Al cabo de 1 año aproximadamente tuve que dejar mi país para llegar a Argentina, en donde tuve la oportunidad de trabajar con Angular 5 en un proyecto para un call center. Luego de 2 años, cambié de proyecto a uno destinado a la parte de atención al cliente por chat el cual fue desarrollado en el Frontend con 
                        
                        <Link color="warning" icon href="https://en.reactjs.org/" rel="noreferrer noopener" target="_blank">
                            <Text b css={BOLD_TEXT_CSS}>
                                React.
                            </Text>
                        </Link> En esta etapa una de las cosas que aprendí fue el concepto de 
                        <Link color="warning" icon href="https://micro-frontends.org/" rel="noreferrer noopener" target="_blank">
                            <Text b css={BOLD_TEXT_CSS}>micro frontends,</Text>
                        </Link> gracias a esta arquitectura pudimos incrustar el chat dentro de una aplicación monolitica construida en AngularJS. También pudimos hacerlo dentro de las aplicaciones móviles con código nátivo, esta vez utilizando 
                        
                        <Link color="warning" icon href="https://developer.android.com/reference/android/webkit/WebView/" rel="noreferrer noopener" target="_blank">
                            <Text b css={BOLD_TEXT_CSS}>Web Views</Text>
                        </Link>.
                    </Text>
                    <Text blockquote margin={20} color="primary" className={styles.blockquote}>
                        Lo que más me encantó de esto, fue como <Text css={{fontWeight: 'bold', display: 'inline', color: 'inherit'}}>hacer coexistir varias aplicaciones dentro de una misma</Text>, sin importar las tecnologías en las que éstas estén hechas, así como también tener la posibilidad de estar en un equipo totalmente aislado al de la aplicación principal y gozar de total libertad e independencia en el desarrollo y despliegue de nuevas versiones.
                    </Text>
                    <Text>
                        Paralelamente a mi trabajo, estoy trabajando en mi propio blog el cual está hecho con 
                        <Link color="warning" icon href="https://svelte.dev/" rel="noreferrer noopener" target="_blank">
                            <Text b css={BOLD_TEXT_CSS}>Svelte</Text>
                        </Link> (el cual debes haber visto en mis <Link color icon href="#projects">proyectos destacados</Link>) y aunque al momento de escribir esto, el backend en el que estoy trabajando no está conectado a él, estoy utilizando 
                        
                        <Link color="warning" icon href="https://nestjs.com/" rel="noreferrer noopener" target="_blank">
                            <Text b css={BOLD_TEXT_CSS}>NestJS</Text>
                        </Link> para crear las sesiones y la posiblidad crear contenido desde el blog.
                    </Text>
                    <Text>
                        Además también tengo bastante tiempo trabajando como freelance en 
                        
                        <Link color icon href="https://www.workana.com/freelancer/b4aebd5f18465eb956a6404f3f3d5995" rel="noreferrer noopener" target="_blank">Workana</Link>, 
                        
                        desde que empecé siempre estuve en el area móvil, esta vez utilizando 
                        
                        <Link color="warning" icon href="https://ionicframework.com/" rel="noreferrer noopener" target="_blank">
                            <Text b css={BOLD_TEXT_CSS}>Ionic 3</Text>
                        </Link> y 
                        <Link color="warning" icon href="https://reactnative.dev/" rel="noreferrer noopener" target="_blank">
                            <Text b css={BOLD_TEXT_CSS}>React Native</Text>
                        </Link> para desarrollar las aplicaciones.
                    </Text>
                    <Text>
                        Por último al día de hoy, en mi empleo actual estoy trabajando con 
                        <Link color="warning" icon href="https://vuejs.org/" rel="noreferrer noopener" target="_blank">
                            <Text b css={BOLD_TEXT_CSS}>VueJS</Text>
                        </Link> en un proyecto de ecommerce.
                    </Text>
                </Collapse>
            </Collapse.Group>
            <Spacer y={2} />
            <Subtitle>Experiencia</Subtitle>
            <Carousel items={experienceTimeline} />
        </Section>
    </>
}

export default MyBeginnings