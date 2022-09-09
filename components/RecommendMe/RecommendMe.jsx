import { Text, Link, Card, Button } from "@nextui-org/react";
import { FiLinkedin, FiMessageSquare } from "react-icons/fi";
import { IconContainer } from "./styles";


function RecommendMe({ css = {} }) {
    return <Card variant="flat" css={{
        backdropFilter: "saturate(180%) blur(14px)",
        background: "rgba(255, 255, 255, 0.05)",
        maxWidth: 265,
        ...css
    }}>
        <Card.Header css={{ display: 'flex', gap: '$5'}}>
            <IconContainer>
                <FiLinkedin size={20} color="#0a66c2" />
            </IconContainer>
            <Text h3 css={{ padding: 0, margin: 0, color: '#0075ff' }}>Recomiéndame</Text>
        </Card.Header>
        <Card.Body css={{ padding: "$xs $sm"}}>
            <Text h5 css={{ textAlign: "center" }}>¿Te gusta mi trabajo? ¿Has trabajado conmigo?</Text>
        </Card.Body>
        <Card.Footer css={{ display: "flex", justifyContent: "center" }}>
            <Link href="https://www.linkedin.com/in/dartiles/edit/forms/recommendation/write/" target="_blank">
                <Button color="primary" auto iconRight={<FiMessageSquare color="inherit" />}>
                    Dejame una recomendación
                </Button>
            </Link>
        </Card.Footer>
    </Card>
}

export default RecommendMe