import { Link } from "@nextui-org/react";
import { Text } from "../../components/UI";
import { boldTextStyle } from "./styles";

const Learning = () => <>
    <Text>
        Continuando con la linea de la historia, en mi primer trabajo tuve la oportunidad de aprender <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://angularjs.org/" rel="noreferrer noopener" target="_blank">
            AngularJS
        </Link> y <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://angular.io/" rel="noreferrer noopener" target="_blank">
            Angular 2
        </Link> con ambas tecnologías participé en el desarrollo de una <Text css={boldTextStyle}>aplicación de telecomunicaciones trabajando con manejo de datos en tiempo real,</Text> mostrando datos historicos y demás. También participé en un proyecto de <Text css={boldTextStyle}>Elearning.</Text>
    </Text>
    <Text>
        Al cabo de 1 año aproximadamente tuve que dejar mi país para llegar a Argentina, en donde tuve la oportunidad de trabajar con Angular 5 en un proyecto para un <Text css={boldTextStyle}>call center.</Text> Luego de 2 años, cambié de proyecto a uno destinado a la parte de atención al cliente por chat el cual fue desarrollado en el Frontend con <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://en.reactjs.org/" rel="noreferrer noopener" target="_blank">
            React.
        </Link> En esta etapa una de las cosas que aprendí fue el concepto de <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://micro-frontends.org/" rel="noreferrer noopener" target="_blank">
            micro frontends,
        </Link> gracias a esta arquitectura pudimos <Text css={boldTextStyle}>incrustar el chat dentro de una aplicación monolitica construida en AngularJS. </Text> También pudimos hacerlo dentro de las aplicaciones móviles con código nátivo, esta vez utilizando <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://developer.android.com/reference/android/webkit/WebView/" rel="noreferrer noopener" target="_blank">
                Web Views.
        </Link>
    </Text>
    <Text>
        Lo que más me encantó de esto, fue como <Text css={boldTextStyle}>hacer coexistir varias aplicaciones dentro de una sola</Text>, sin importar las tecnologías en las que éstas estén hechas, así como también tener la posibilidad de estar en un equipo totalmente aislado al de la aplicación principal y gozar de total libertad e independencia en el desarrollo y despliegue de nuevas versiones.
    </Text>
    <Text>
        Paralelamente a mi trabajo, estoy trabajando en mi propio blog el cual está hecho con <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://svelte.dev/" rel="noreferrer noopener" target="_blank">
            Svelte
        </Link> (el cual debes haber visto en mis <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="#projects">
            proyectos destacados
        </Link>) y aunque al momento de escribir esto, el backend en el que estoy trabajando no está conectado a él, estoy utilizando <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://nestjs.com/" rel="noreferrer noopener" target="_blank">
            NestJS
        </Link> para crear las sesiones y la posiblidad crear contenido directamente desde el blog.
    </Text>
    <Text>
        Además también tengo bastante tiempo trabajando como freelance en <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} color icon href="https://www.workana.com/freelancer/b4aebd5f18465eb956a6404f3f3d5995" rel="noreferrer noopener" target="_blank">
            Workana
        </Link>, desde que empecé siempre estuve en el area móvil, esta vez utilizando  <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://ionicframework.com/" rel="noreferrer noopener" target="_blank">
            Ionic 3
        </Link> y <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://reactnative.dev/" rel="noreferrer noopener" target="_blank">
            React Native
        </Link> para desarrollar las aplicaciones.
    </Text>
    <Text>
        Por último al día de hoy, en mi empleo actual estoy trabajando con <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://vuejs.org/" rel="noreferrer noopener" target="_blank">
            VueJS
        </Link> en un proyecto de ecommerce.
    </Text>
</>

export default Learning