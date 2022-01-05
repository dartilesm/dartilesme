import { Collapse, Link, Spacer, Tooltip } from "@nextui-org/react";
import { Section, Subtitle, Text, Timeline, Title } from "../UI";
import styles from './index.module.css';

const MyBeginnings = () => {
    const BOLD_TEXT_CSS = {
        display: 'inline',
        color: '#d7d7d7', 
        paddingBottom: 0,
        fontSize: 'inherit',
        fontWeight: 600,
        '@smMax': {
            paddingBottom: 0,
        },
        '@mdMax': {
            paddingBottom: 0
        }
    }

    const experiences = [
        ['2021', [
            {
                title: <Text size={22} color="#fff" css={{paddingBottom: 0}}>Coco</Text>,
                content: <>
                    <Text size={18} color="#c5c5c5" css={{ lineHeight: 1.5 }}>Frontend Developer</Text>
                    <Text size={16} color="#818181" css={{ lineHeight: 1.5 }}>Aquí estoy participando en el desarrollo de una tienda virtual, la cual está construida en Vue, junto a otra aplicación que está construida en React.</Text>
                </>
            }
        ]],
        ['2019', [
            {
                title: <Text size={22} color="#fff" css={{paddingBottom: 0}}>Workana</Text>,
                content: <>
                    <Text size={18} color="#c5c5c5" css={{ lineHeight: 1.5 }}>Frontend/Mobile Developer</Text>
                    <Text size={16} color="#818181" css={{ lineHeight: 1.5 }}>En esta plataforma tuve la oportunidad de realizar aplicaciones móviles y webs con Ionic y Angular respectivamente. Entre ellas están:
                    <Text size={16} color="#818181" css={{marginLeft: 20}}>
                        • Una aplicación móvil similar a Uber, consiste en pedir remises para pasajeros que van del Aeropuerto de Ezeiza hacia Capital Federal.
                    </Text>
                    <Text size={16} color="#818181" css={{marginLeft: 20}}>
                        • Aplicación para gestionar el levantamiento de información de los estados de Plantas, Sistemas, Equipos y más, y realizar otro tipos de actividades de una Industria. 
                    </Text>
                </Text>
                </>
            },
            {
                title: <Text size={22} color="#fff" css={{paddingBottom: 0}}>Santander Tecnología</Text>,
                content: <>
                    <Text size={18} color="#c5c5c5" css={{ lineHeight: 1.5 }}>Frontend Developer</Text>
                    <Text size={16} color="#818181" css={{ lineHeight: 1.5 }}>Continué trabajando con Angular 5 en un proyecto bancario para un call center, posteriormente participé en la unificación del chat de Santander el cual a nivel de Frontend fue realizado en React. Aquí aprendí el concepto de microfrontend y sus principales beneficios.</Text>
                </>
            }
        ]],
        ['2018', [
            {
                title: <Text size={22} color="#fff" css={{paddingBottom: 0}}>Lagash</Text>,
                content: <>
                    <Text size={18} color="#c5c5c5" css={{ lineHeight: 1.5 }}>Frontend Developer</Text>
                    <Text size={16} color="#818181" css={{ lineHeight: 1.5 }}>De haber hecho un E-learning y una app de telecomunicaciones, llego al lado bancario en el que continué enfrentándome a retos interesante, esta vez con Angular 5.</Text>
                </>
            }
            
        ]],
        ['2017', [
            {
                title: <Text size={22} color="#fff" css={{paddingBottom: 0}}>Grupo Nepuntobiz</Text>,
                content: <>
                    <Text size={18} color="#c5c5c5" css={{ lineHeight: 1.5 }}>Frontend Developer</Text>
                    <Text size={16} color="#818181" css={{ lineHeight: 1.5 }}>Aquí fue donde reforcé mis conocimientos con AngularJS la versión de ese entonces, y aprendí un poco de la versión 2. Desarrollamos aplicaciones interesantes con esta tecnología.</Text>
                </>
            },
            {
                title: <Text size={22} color="#fff" css={{paddingBottom: 0}}>Kinetics Solutions</Text>,
                content: <>
                    <Text size={18} color="#c5c5c5" css={{ lineHeight: 1.5 }}>Frontend Developer</Text>
                    <Text size={16} color="#818181" css={{ lineHeight: 1.5 }}>Compañía socia de la anterior, me enfrenté a mi primer reto de desarrollador una aplicación de E-learning y otra aplicación de Telecomunicaciones.</Text>
                </>
            }
        ]]
    ]
    return  <>
        <Spacer id="history" />
        <Section>
            <Title>
                Historia y experiencia
            </Title>
            <Subtitle>Historia</Subtitle>
            <Collapse.Group shadow >
                <Collapse title="Comienzos" subtitle="Descubre como inicié en el mundo del desarrollo">
                    <Text size={20}>
                        Antes de iniciar en este mundo del desarrollo web, me dedicaba a hacer videos en youtube sobre videojuegos, en esos momentos aprendí a editar videos, para ello solía usar varias herramientas como <Text css={BOLD_TEXT_CSS}>Adobe After Effects, Sony Vegas Pro, Camtasia,</Text> además para crear las miniaturas de los videos aprendí un poco a usar <Text css={BOLD_TEXT_CSS}>Adobe Photoshop.</Text>
                    </Text>
                    <Text size={20}>
                        Seguramente te estarás preguntando, como fue la transición del mundo de YouTube a desarrollador, pues verás, yo soy una persona inconforme, siempre quiero aprender o crear cosas nuevas, por lo cual quise crear una página web para mi canal en el que yo pueda publicar mi propio contenido, pueda tener control sobre ella y mejor aún, anexar mis videos de youtube y que se actualicen automaticamente. 
                    </Text>
                    <Text size={20}>
                        Si bien esa era mi idea inicial, no tenía idea de como hacerlo así que empece a buscar videos en YouTube de como crear tu propia página web, hasta que encontré una página para crear páginas web llamada <Link color icon href="https://www.wix.com/" rel="noreferrer noopener" target="_blank">
                            <Text css={{...BOLD_TEXT_CSS, color: '$primary'}}>Wix</Text>
                        </Link>. 

                        Yo estaba muy emocionado porque estaba creando algo propio con mis propias manos, era básicamente como mi "pequeña marca personal". A medida que iba pasando el tiempo yo sentía la necesidad de agregar más y más cosas, hasta el punto en el que Wix &nbsp;
                        
                        <Tooltip className={styles.tooltip} content="No recuerdo puntualmente que era, pero estaba relacionado con los videos de YouTube." color="primary">
                            <Text css={{ textDecoration: 'underline', ...BOLD_TEXT_CSS }}>
                                no me permitía hacer lo que quería hacer
                            </Text>
                        </Tooltip> y tampoco encontraba videos que me ayudaran con eso.
                    </Text>
                    <Text size={20}>
                        Así que continué buscando en Internet como hacerlo, y me di cuenta que lo que yo quería hacer se podía pero con código y por desgracia no me daba tanta libertad como para utilizar código. Así que no desistí, y empece a buscar una solución, y la que encontré fue haciendo la página que había creado con Wix pero con HTML y CSS puro. Una vez que obtuve el mismo resultado visual de la página de WIX con la que realice desde cero, experimenté usando el código que había encontrado.
                    </Text>
                    <Text size={20}>
                        A partir de ahí empece a tener curiosidad por crear páginas web, poco a poco me fui empapando a tal punto de conseguir la suficiente experienca para conseguir <Tooltip className={styles.tooltip} content="Para este momento tenía conocimientos básicos en HTML, CSS y jQuery" color="primary">
                            <Text css={{ textDecoration: 'underline', ...BOLD_TEXT_CSS }}>mi primer trabajo en mi país natal Venezuela.</Text>
                        </Tooltip>
                    </Text>
                </Collapse>
                <Collapse title="Aprendizaje" subtitle="¿Qué he aprendido estos últimos años?">
                    <Text size={20}>
                        Continuando con la linea de la historia, en mi primer trabajo tuve la oportunidad de aprender <Link color="warning" icon href="https://angularjs.org/" rel="noreferrer noopener" target="_blank">
                            <Text css={{...BOLD_TEXT_CSS, color: '$warning'}}>AngularJS</Text>
                        </Link> y <Link color="warning" icon href="https://angular.io/" rel="noreferrer noopener" target="_blank">
                            <Text css={{...BOLD_TEXT_CSS, color: '$warning'}}>Angular 2</Text>
                        </Link> con ambas tecnologías participé en el desarrollo de una aplicación de telecomunicaciones trabajando con manejo de datos en tiempo real, mostrando datos historicos y demás. También participé en un proyecto de Elearning.
                    </Text>
                    <Text size={20}>
                        Al cabo de 1 año aproximadamente tuve que dejar mi país para llegar a Argentina, en donde tuve la oportunidad de trabajar con Angular 5 en un proyecto para un call center. Luego de 2 años, cambié de proyecto a uno destinado a la parte de atención al cliente por chat el cual fue desarrollado en el Frontend con <Link color="warning" icon href="https://en.reactjs.org/" rel="noreferrer noopener" target="_blank">
                            <Text css={{...BOLD_TEXT_CSS, color: '$warning'}}>
                                React.
                            </Text>
                        </Link> En esta etapa una de las cosas que aprendí fue el concepto de <Link color="warning" icon href="https://micro-frontends.org/" rel="noreferrer noopener" target="_blank">
                            <Text css={{...BOLD_TEXT_CSS, color: '$warning'}}>micro frontends,</Text>
                        </Link> gracias a esta arquitectura pudimos incrustar el chat dentro de una aplicación monolitica construida en AngularJS. También pudimos hacerlo dentro de las aplicaciones móviles con código nátivo, esta vez utilizando <Link color="warning" icon href="https://developer.android.com/reference/android/webkit/WebView/" rel="noreferrer noopener" target="_blank">
                            <Text css={{...BOLD_TEXT_CSS, color: '$warning'}}>Web Views</Text>
                        </Link>.
                    </Text>
                    <Text size={20} blockquote margin={20} color="primary" className={styles.blockquote}>
                        Lo que más me encantó de esto, fue como <Text css={{fontWeight: 'bold', display: 'inline', color: 'inherit', fontSize: 'inherit'}}>hacer coexistir varias aplicaciones dentro de una sola</Text>, sin importar las tecnologías en las que éstas estén hechas, así como también tener la posibilidad de estar en un equipo totalmente aislado al de la aplicación principal y gozar de total libertad e independencia en el desarrollo y despliegue de nuevas versiones.
                    </Text>
                    <Text size={20}>
                        Paralelamente a mi trabajo, estoy trabajando en mi propio blog el cual está hecho con <Link color="warning" icon href="https://svelte.dev/" rel="noreferrer noopener" target="_blank">
                            <Text css={{...BOLD_TEXT_CSS, color: '$warning'}}>Svelte</Text>
                        </Link> (el cual debes haber visto en mis <Link color icon href="#projects">proyectos destacados</Link>) y aunque al momento de escribir esto, el backend en el que estoy trabajando no está conectado a él, estoy utilizando <Link color="warning" icon href="https://nestjs.com/" rel="noreferrer noopener" target="_blank">
                            <Text css={{...BOLD_TEXT_CSS, color: '$warning'}}>NestJS</Text>
                        </Link> para crear las sesiones y la posiblidad crear contenido directamente desde el blog.
                    </Text>
                    <Text size={20}>
                        Además también tengo bastante tiempo trabajando como freelance en <Link color icon href="https://www.workana.com/freelancer/b4aebd5f18465eb956a6404f3f3d5995" rel="noreferrer noopener" target="_blank">Workana</Link>, 
                        
                        desde que empecé siempre estuve en el area móvil, esta vez utilizando  <Link color="warning" icon href="https://ionicframework.com/" rel="noreferrer noopener" target="_blank">
                            <Text css={{...BOLD_TEXT_CSS, color: '$warning'}}>Ionic 3</Text>
                        </Link> y <Link color="warning" icon href="https://reactnative.dev/" rel="noreferrer noopener" target="_blank">
                            <Text css={{...BOLD_TEXT_CSS, color: '$warning'}}>React Native</Text>
                        </Link> para desarrollar las aplicaciones.
                    </Text>
                    <Text size={20}>
                        Por último al día de hoy, en mi empleo actual estoy trabajando con <Link color="warning" icon href="https://vuejs.org/" rel="noreferrer noopener" target="_blank">
                            <Text css={{...BOLD_TEXT_CSS, color: '$warning'}}>VueJS</Text>
                        </Link> en un proyecto de ecommerce.
                    </Text>
                </Collapse>
            </Collapse.Group>
            <Spacer y={2} />
            <Subtitle>Experiencia laboral</Subtitle>
            <Timeline items={experiences}/>
        </Section>
    </>
}

export default MyBeginnings