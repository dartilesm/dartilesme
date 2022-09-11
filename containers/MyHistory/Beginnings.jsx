import { Link } from "@nextui-org/react";
import { Text } from "../../components/UI";
import { useTranslations } from 'next-intl';
import { boldTextStyle } from "./styles";

const Beginnings = () => {
    const t = useTranslations('history.beginnings')
    
    return <Text css={{ padding: 0 }}>
    <Text>
        { 
            t.rich('paragraph1', {
                highlight: children => <Text css={boldTextStyle}>{children}</Text>
            }) 
        }
    </Text>
    
    <Text>
        { 
            t.rich('paragraph2', {
                highlight: children => <Text css={boldTextStyle}>{children}</Text>
            }) 
        }
    </Text>
    <Text>
        { 
            t.rich('paragraph3', {
                link: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} href="https://www.wix.com/" rel="noreferrer noopener" target="_blank">{children}</Link>,
                highlight: children => <Text css={boldTextStyle}>{children}</Text>
            }) 
        }
    </Text>

    <Text>
        { 
            t.rich('paragraph4', {
                highlight: children => <Text css={boldTextStyle}>{children}</Text>
            }) 
        }
    </Text>
    
    <Text css={{ padding: 0 }}>
        { 
            t.rich('paragraph5', {
                highlight: children => <Text css={boldTextStyle}>{children}</Text>
            }) 
        }
    </Text>
</Text>
}

export default Beginnings