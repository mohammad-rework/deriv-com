import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {
    ButtonWrapper,
    ContentContainer,
    FollowUsContainer,
    IconWrapper,
    ImageWrapper,
    Link,
    FooterSection,
    TextContainer,
    TextWrapper,
    Title,
} from './style/footer'
import { besquare_signup_url } from 'common/constants'
import { Header } from 'components/elements'
import { Localize, LocalizedLink } from 'components/localization'
import Linkedin from 'images/svg/be-square/linkedin.svg'
import Twitter from 'images/svg/be-square/twitter.svg'
import Facebook from 'images/svg/be-square/facebook.svg'
import useRegion from 'components/hooks/use-region'

const query = graphql`
    query {
        footer_image: file(relativePath: { eq: "be-square/footer-image.png" }) {
            ...fadeIn
        }
    }
`

const BeSquareFooter = () => {
    const social_media_content = [
        {
            src: Linkedin,
            alt: 'Linkedin',
            link_to: 'https://www.linkedin.com/showcase/besquarebyderiv',
        },
        {
            src: Facebook,
            alt: 'Facebook',
            link_to: 'https://www.facebook.com/BeSquareByDeriv',
        },
        {
            src: Twitter,
            alt: 'Twitter',
            link_to: 'https://twitter.com/besquarebyderiv',
        },
    ]

    const data = useStaticQuery(query)
    const { is_eu } = useRegion()
    return (
        <React.Fragment>
            <FooterSection color="black" is_eu={is_eu}>
                <ContentContainer>
                    <ImageWrapper
                        data={data['footer_image']}
                        alt="Fresh graduates discussing with their laptops"
                    />
                    <TextContainer>
                        <Title as="h3">Next intake: 6 March 2023</Title>
                        <TextWrapper
                            max_width_array={['510px', '328px']}
                            font_size={['20px', '16px']}
                            line_height={['30px', '24px']}
                            margin="-24px 49px 0 0"
                        >
                            <Header weight="normal" color="white" size="2rem">
                                Submit your application before 24 February 2023
                            </Header>

                            <Localize
                                translate_text="_t_<1>If you have any questions, email us at </1><2>info@besquare.my</2>_t_"
                                components={[
                                    <br key={0} />,
                                    <TextWrapper
                                        key={1}
                                        max_width_array={['510px', '328px']}
                                        font_size={['16px', '12px']}
                                        display={'inline'}
                                        line_height={['24px', '18px']}
                                    />,
                                    <Link
                                        font_size={['16px', '12px']}
                                        line_height={['24px', '18px']}
                                        href="mailto:info@besquare.my"
                                        key={2}
                                    />,
                                ]}
                            />
                        </TextWrapper>
                        <div>
                            <ButtonWrapper
                                secondary
                                to={besquare_signup_url}
                                external
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Localize translate_text="_t_Apply now_t_" />
                            </ButtonWrapper>
                        </div>
                        <FollowUsContainer>
                            <TextWrapper
                                max_width_array={['68px']}
                                font_size={['16px']}
                                line_height={['24px']}
                                grid_area="follow-us"
                                padding="15px 0 0"
                            >
                                <Localize translate_text="_t_Follow us_t_" />
                            </TextWrapper>
                            {social_media_content.map(({ alt, link_to, src }) => (
                                <LocalizedLink
                                    key={alt}
                                    external
                                    to={link_to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <IconWrapper
                                        src={src}
                                        alt={`${alt} icon`}
                                        width="26.67"
                                        height="26.67"
                                    />
                                </LocalizedLink>
                            ))}
                        </FollowUsContainer>
                    </TextContainer>
                </ContentContainer>
            </FooterSection>
        </React.Fragment>
    )
}

export default BeSquareFooter
