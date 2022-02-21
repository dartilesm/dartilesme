import { Link } from "@nextui-org/react";
import { Text } from "../../components/UI";
import { boldTextStyle, defaultTextStyle } from "./styles";

const Learning = () => <>
    <Text css={defaultTextStyle}>
        Continuando con la linea de la historia, en mi primer trabajo tuve la oportunidad de aprender <Link color="warning" icon href="https://angularjs.org/" rel="noreferrer noopener" target="_blank">
            <Text css={boldTextStyle}>AngularJS</Text>
        </Link> y <Link color="warning" icon href="https://angular.io/" rel="noreferrer noopener" target="_blank">
            <Text css={boldTextStyle}>Angular 2</Text>
        </Link> con ambas tecnologías participé en el desarrollo de una <Text css={boldTextStyle}>aplicación de telecomunicaciones trabajando con manejo de datos en tiempo real,</Text> mostrando datos historicos y demás. También participé en un proyecto de <Text css={boldTextStyle}>Elearning.</Text>
    </Text>
    <Text css={defaultTextStyle}>
        Al cabo de 1 año aproximadamente tuve que dejar mi país para llegar a Argentina, en donde tuve la oportunidad de trabajar con Angular 5 en un proyecto para un <Text css={boldTextStyle}>call center.</Text> Luego de 2 años, cambié de proyecto a uno destinado a la parte de atención al cliente por chat el cual fue desarrollado en el Frontend con <Link color="warning" icon href="https://en.reactjs.org/" rel="noreferrer noopener" target="_blank">
            <Text css={boldTextStyle}>
                React.
            </Text>
        </Link> En esta etapa una de las cosas que aprendí fue el concepto de <Link color="warning" icon href="https://micro-frontends.org/" rel="noreferrer noopener" target="_blank">
            <Text css={boldTextStyle}>micro frontends,</Text>
        </Link> gracias a esta arquitectura pudimos <Text css={boldTextStyle}>incrustar el chat dentro de una aplicación monolitica construida en AngularJS.</Text> También pudimos hacerlo dentro de las aplicaciones móviles con código nátivo, esta vez utilizando <Link color="warning" icon href="https://developer.android.com/reference/android/webkit/WebView/" rel="noreferrer noopener" target="_blank">
            <Text css={boldTextStyle}>Web Views</Text>
        </Link>.
    </Text>
    <Text blockquote css={{ margin: '10px 0 25px 0',  ...defaultTextStyle }}>
        Lo que más me encantó de esto, fue como <Text css={{fontWeight: 'bold', display: 'inline', color: '$warning', fontSize: 'inherit', lineHeight: 'inherit'}}>hacer coexistir varias aplicaciones dentro de una sola</Text>, sin importar las tecnologías en las que éstas estén hechas, así como también tener la posibilidad de estar en un equipo totalmente aislado al de la aplicación principal y gozar de total libertad e independencia en el desarrollo y despliegue de nuevas versiones.
    </Text>
    <Text css={defaultTextStyle}>
        Paralelamente a mi trabajo, estoy trabajando en mi propio blog el cual está hecho con <Link color="warning" icon href="https://svelte.dev/" rel="noreferrer noopener" target="_blank">
            <Text css={boldTextStyle}>Svelte</Text>
        </Link> (el cual debes haber visto en mis <Link color icon href="#projects">proyectos destacados</Link>) y aunque al momento de escribir esto, el backend en el que estoy trabajando no está conectado a él, estoy utilizando <Link color="warning" icon href="https://nestjs.com/" rel="noreferrer noopener" target="_blank">
            <Text css={boldTextStyle}>NestJS</Text>
        </Link> para crear las sesiones y la posiblidad crear contenido directamente desde el blog.
    </Text>
    <Text css={defaultTextStyle}>
        Además también tengo bastante tiempo trabajando como freelance en <Link color icon href="https://www.workana.com/freelancer/b4aebd5f18465eb956a6404f3f3d5995" rel="noreferrer noopener" target="_blank">Workana</Link>, 
        
        desde que empecé siempre estuve en el area móvil, esta vez utilizando  <Link color="warning" icon href="https://ionicframework.com/" rel="noreferrer noopener" target="_blank">
            <Text css={boldTextStyle}>Ionic 3</Text>
        </Link> y <Link color="warning" icon href="https://reactnative.dev/" rel="noreferrer noopener" target="_blank">
            <Text css={boldTextStyle}>React Native</Text>
        </Link> para desarrollar las aplicaciones.
    </Text>
    <Text css={defaultTextStyle}>
        Por último al día de hoy, en mi empleo actual estoy trabajando con <Link color="warning" icon href="https://vuejs.org/" rel="noreferrer noopener" target="_blank">
            <Text css={boldTextStyle}>VueJS</Text>
        </Link> en un proyecto de ecommerce.
    </Text>
</>

export default Learning