import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import useAuthCheck from 'components/hooks/use-auth-check'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'
import { localize, Localize } from 'components/localization'
import { Flex } from 'components/containers'
import { QueryImage, Header } from 'components/elements'
import { Button, LinkButton } from 'components/form'
import device from 'themes/device'
import useHandleSignup from 'components/hooks/use-handle-signup'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    padding-left: 120px;
    background-color: var(--color-black);

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        padding-left: 0;
    }
`
const HeroContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const StyledHeader = styled(Header)`
    color: var(--color-white);
    display: flex;
    margin-top: 0;
    font-size: 2.4rem;

    @media ${device.laptopM} {
        font-size: 24px;
    }
`
const StyledHeaderTitle = styled.div`
    color: var(--color-white);
    display: flex;
    margin-top: 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;

    @media ${device.laptopM} {
        font-size: 32px;
        line-height: 48px;
    }
`
const LinkWrapper = styled.div`
    display: flex;
    margin-top: 32px;
    @media ${device.laptopL} {
        top: 480px;
    }
    @media ${device.laptopM} {
        top: 350px;
        margin-bottom: 40px;
    }
    @media ${device.tabletL} {
        max-height: 40px;
        margin-top: 12px;
    }
`

const GoToLiveDemo = styled(LinkButton)`
    color: var(--color-white);
    border-color: var(--color-black-5);
    padding: 12px 16px;
    width: auto;

    @media ${device.mobileL} {
        max-width: 100%;
        white-space: nowrap;
        margin-left: 0;
        width: 100%;
    }

    @media (max-width: 360px) {
        white-space: nowrap;
    }
`
const DemoButton = styled(Button)`
    padding: 14px 16px;
    width: auto;
    font-size: 14px;
    margin-right: 1.6rem;
    border: unset;

    @media ${device.tabletL} {
        margin-bottom: 40px;
        width: 100%;
    }
    @media ${device.mobileL} {
        white-space: nowrap;
        margin-bottom: 1.6rem;
    }
`
const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-height: 640px;
    max-width: 860px;
    margin-left: 42px;

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
    }

    @media ${device.tabletL} {
        margin-left: 0;
    }
`
const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 562px;
    gap: 16px;

    @media ${device.laptop} {
        max-width: 390px;
    }
    @media ${device.laptopM} {
        max-width: 410px;
    }
    @media ${device.tabletL} {
        width: 46%;
        max-width: 400px;
        padding-left: 16px;
    }
    @media ${device.tablet} {
        width: 100%;
        margin-top: 22px;
    }
`

const DLogo = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 1.6rem;
`
const DHero = ({
    title,
    background_alt,
    background,
    content,
    image_name,
    join_us_for_free,
    is_live_demo,
    content_components,
    Logo,
}) => {
    const getLinkType = () => (image_name === 'dbot' ? 'dbot' : 'deriv_app')
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()

    return (
        <Wrapper>
            <InformationWrapper height="unset" direction="column">
                <StyledHeader as="h4" weight="normal">
                    <DLogo src={Logo} alt="logo" width="32" height="32" />
                    <Localize translate_text={title} />
                </StyledHeader>
                <HeroContent>
                    <StyledHeaderTitle type="display-title" color="white" mt="1.5rem">
                        <Localize translate_text={content} components={content_components} />
                    </StyledHeaderTitle>
                </HeroContent>
                <LinkWrapper>
                    {join_us_for_free &&
                        (is_logged_in ? (
                            <DemoButton onClick={handleGetTrading} secondary type="mt5">
                                <Localize translate_text="Go to Deriv MT5 dashboard" />
                            </DemoButton>
                        ) : (
                            <DemoButton onClick={handleSignup} id="dm-hero-signup" secondary>
                                <Localize translate_text="Create free demo account" />
                            </DemoButton>
                        ))}
                    {is_live_demo && (
                        <GoToLiveDemo
                            tertiary
                            external
                            type={getLinkType()}
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                        >
                            {localize('Go to live demo')}
                        </GoToLiveDemo>
                    )}
                </LinkWrapper>
            </InformationWrapper>
            <ImgWrapper>
                <QueryImage data={background} alt={background_alt} />
            </ImgWrapper>
        </Wrapper>
    )
}

DHero.propTypes = {
    background: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    background_alt: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    background_image_name: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    content_components: PropTypes.element,
    image_name: PropTypes.string,
    is_live_demo: PropTypes.bool,
    is_mobile: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    join_us_for_free: PropTypes.bool,
    Logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.string,
}

export default DHero
