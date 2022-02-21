import { Collapse, Spacer } from "@nextui-org/react";
import { Section, Title } from "../../components/UI";
import Beginnings from "./Beginnings";
import Learning from "./Learning";
import { collapseGroupStyle, collapseStyle } from "./styles";

const MyHistory = () => (
    <>
        <Spacer id="history" />
        <Section>
            <Title>
                Historia
            </Title>
            <Collapse.Group splitted css={collapseGroupStyle}>
                <Collapse css={collapseStyle} title="Comienzos" subtitle="Descubre como inicié en el mundo del desarrollo">
                    <Beginnings />
                </Collapse>
                <Collapse css={collapseStyle} title="Aprendizaje" subtitle="¿Qué he aprendido estos últimos años?">
                    <Learning />
                </Collapse>
            </Collapse.Group>
        </Section>
    </>
)

export default MyHistory