import { Collapse, Spacer } from "@nextui-org/react";
import { Section, Title } from "../../components/UI";
import useUpdateHashOnIntersect from "../../hooks/useUpdateHashOnIntersect";
import { useTranslations } from 'next-intl';
import Beginnings from "./Beginnings";
import Learning from "./Learning";
import { collapseGroupStyle, collapseStyle } from "./styles";

const MyHistory = () => {
    const t = useTranslations('history')
    const [elementRef] = useUpdateHashOnIntersect({ hash: 'history'})

    return (
        <>
            <Spacer id="history" />
            <Section ref={elementRef}>
                <Title>
                    {t('title')}
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
}

export default MyHistory