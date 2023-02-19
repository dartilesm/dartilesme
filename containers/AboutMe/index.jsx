import { Grid, Row, Spacer } from "@nextui-org/react";
import { useTranslations } from 'next-intl';
import RecommendMe from "../../components/RecommendMe/RecommendMe";
import { Section, Text, Title } from "../../components/UI";
import useUpdateHashOnIntersect from "../../hooks/useUpdateHashOnIntersect";
import { GradientBackground } from "./styles";

const AboutMe = () => {
    const t = useTranslations('aboutMe')
    const [elementRef] = useUpdateHashOnIntersect({ hash: 'about-me'})

    return (
        <>
            <Spacer id="about-me" />
            <Section ref={elementRef}>
                <Title>{t('title')}</Title>
                <Row justify="center">
                    <Grid sm={12} direction="column">
                        <Text>
                            {
                                t.rich('description.paragraph1', {
                                    strong: children => <strong>{children}</strong>
                                })
                            }
                        </Text>
                        <Text>
                            {
                                t.rich('description.paragraph2', {
                                    strong: children => <strong>{children}</strong>
                                })
                            }
                        </Text>
                        <Text>
                            {
                                t('description.paragraph3')
                            }
                        </Text>
                        <Text>
                            {
                                t.rich('description.paragraph4', {
                                    strong: children => <strong>{children}</strong>
                                })
                            }
                        </Text>
                    </Grid>
                </Row>
                <Spacer y={2} />
                <RecommendMe css={{ margin: "auto", zIndex: 2 }}/>
                <GradientBackground css={{ height: 150, width: "25%", position: 'absolute', bottom: 160, left: "50%", transform: "translateX(-50%)", zIndex: 1 }}/>
                <Spacer y={3} />
            </Section>
        </>
    )
}

export default AboutMe