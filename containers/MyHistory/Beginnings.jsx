import { Link } from "@nextui-org/react";
import { Text } from "../../components/UI";
import { boldTextStyle } from "./styles";

const Beginnings = () => <>
    <Text>
        Antes de iniciar en este mundo del desarrollo web, me dedicaba a hacer videos en youtube sobre videojuegos, en esos momentos aprendí a editar videos, para ello solía usar varias herramientas como <Text css={boldTextStyle}>Adobe After Effects, Sony Vegas Pro, Camtasia,</Text> además para crear las miniaturas de los videos aprendí un poco a usar <Text css={boldTextStyle}>Adobe Photoshop.</Text>
    </Text>
    <Text>
        Seguramente te estarás preguntando, como fue la transición del mundo de YouTube a desarrollador, pues verás, yo <Text css={boldTextStyle}>soy una persona inconforme, siempre quiero aprender o crear cosas nuevas,</Text> por lo cual quise crear una página web para mi canal en el que yo pueda publicar mi propio contenido, pueda tener control sobre ella y mejor aún, anexar mis videos de youtube y que se actualicen automaticamente.
    </Text>
    <Text>
        Si bien esa era mi idea inicial, no tenía idea de como hacerlo así que empece a buscar videos en YouTube de como crear tu propia página web, hasta que encontré una página para crear páginas web llamada <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} href="https://www.wix.com/" rel="noreferrer noopener" target="_blank">
                Wix
        </Link>.
        Yo estaba muy emocionado porque estaba creando algo propio con mis propias manos, era básicamente como mi <Text css={boldTextStyle}>"pequeña marca personal".</Text> A medida que iba pasando el tiempo yo sentía la necesidad de agregar más y más cosas, hasta el punto en el que Wix no me permitía hacer lo que quería hacer y tampoco encontraba videos que me ayudaran con eso.
    </Text>

    <Text>
        Así que continué buscando en Internet como hacerlo, y me di cuenta que lo que yo quería hacer se podía pero con código y por desgracia no me daba tanta libertad como para utilizar código. Así que <Text css={boldTextStyle}>no desistí,</Text> y empece a buscar una solución, y la que encontré fue haciendo la página que había creado con Wix pero con HTML y CSS puro. Una vez que obtuve el mismo resultado visual de la página de WIX con la que realice desde cero, experimenté usando el código que había encontrado.
    </Text>
    
    <Text>
        A partir de ahí empece a tener curiosidad por crear páginas web, poco a poco me fui empapando a tal punto de conseguir la suficiente experienca para conseguir <Text css={boldTextStyle}>mi primer trabajo en mi país natal Venezuela.</Text>
    </Text>
</>

export default Beginnings