import { Link } from "@nextui-org/react";
import { Text } from "../../components/UI";
import { useTranslations } from 'next-intl';
import { boldTextStyle } from "./styles";

const Learning = () => {
    const t = useTranslations('history.learning')

    return <Text css={{ padding: 0 }}>
        <Text>
            {
                t.rich('paragraph1', {
                    linkAngularJs: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://angularjs.org/" rel="noreferrer noopener" target="_blank">{children}</Link>,
                    linkAngular2: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://angular.io/" rel="noreferrer noopener" target="_blank">{children}</Link>,
                    highlight: children => <Text css={boldTextStyle}>{children}</Text>
                })
            }
        </Text>
        <Text>
            {
                t.rich('paragraph2', {
                    linkReact: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://en.reactjs.org/" rel="noreferrer noopener" target="_blank">{children}</Link>,
                    linkMicroFrontend: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://micro-frontends.org/" rel="noreferrer noopener" target="_blank">{children}</Link>,
                    linkWebView: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://developer.android.com/reference/android/webkit/WebView/" rel="noreferrer noopener" target="_blank">{children}</Link>,
                    highlight: children => <Text css={boldTextStyle}>{children}</Text>
                })
            }
        </Text>
        <Text>
            {
                t.rich('paragraph3', {
                    highlight: children => <Text css={boldTextStyle}>{children}</Text>
                })
            }
        </Text>
        <Text>
            {
                t.rich('paragraph4', {
                    linkSvelte: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://svelte.dev/" rel="noreferrer noopener" target="_blank">{children}</Link>,
                    linkProjects: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="#projects">{children}</Link>,
                    linkNestJs: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://nestjs.com/" rel="noreferrer noopener" target="_blank">{children}</Link>
                })
            }
        </Text>
        <Text>
            {
                t.rich('paragraph5', {
                    linkWorkana: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} color icon href="https://www.workana.com/freelancer/b4aebd5f18465eb956a6404f3f3d5995" rel="noreferrer noopener" target="_blank">{children}</Link>,
                    linkIonic: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://ionicframework.com/" rel="noreferrer noopener" target="_blank">{children}</Link>,
                    linkReactNative: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://reactnative.dev/" rel="noreferrer noopener" target="_blank">{children}</Link>
                })
            }
        </Text>
        <Text css={{ padding: 0 }}>
            {
                t.rich('paragraph6', {
                    linkVueJs: children => <Link css={{ ...boldTextStyle, display: 'inline', color: "$primary" }} icon href="https://vuejs.org/" rel="noreferrer noopener" target="_blank">{children}</Link>
                })
            }
        </Text>
    </Text>
}

export default Learning