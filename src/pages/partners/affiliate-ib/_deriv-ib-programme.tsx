import React from 'react'
import styled from 'styled-components'
import DERIVIBDMT5Cards from './_dmt5-cards'
import { CardWrapper } from './_partner-card'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements/typography'
import { LiveChatLinkText } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'

type AssetsType = {
    title: React.ReactElement
    list: React.ReactElement[]
}[]

type DescType = {
    firstText: React.ReactElement
    secondText?: React.ReactElement
}

type TypeForType = {
    title: React.ReactElement
    headerHeight: string
    assets: AssetsType
    class_name: string
}[]

type NoteType = {
    title: React.ReactElement
    desc: DescType
}[]

type ListType = {
    details?: React.ReactElement
    icon?: string
    iconAlt?: React.ReactElement
    notes?: NoteType
    second_desc?: React.ReactElement
}[]

type CountDetailsType = {
    title: React.ReactElement
    list: ListType
    notes: NoteType
}[]

type DMT5Type = {
    name: React.ReactElement
    description: React.ReactElement
    type: TypeForType
    countDetails: CountDetailsType
}

type StyledSectionProps = {
    align?: string
}

export type DMT5Props = { data: DMT5Type }

const TitleWrapper = styled.div`
    max-width: 104.5rem;
    margin: 0 auto;
`

const StyledCardWrapper = styled(CardWrapper)`
    flex-wrap: wrap;

    @media ${device.tabletL} {
        align-items: center;
    }
`

const StyledSection = styled(SectionContainer)<StyledSectionProps>`
    padding-bottom: 0;
    text-align: ${(props) => props.align || 'left'};

    @media ${device.tabletL} {
        padding: 40px 0 0;
    }
`

const DecideSection = styled(StyledSection)`
    padding-top: 40px;
    @media ${device.tabletL} {
        padding: 24px 0 0;
    }
`

const IBSectionContainer = styled(SectionContainer)`
    padding-bottom: 80px;
    @media ${device.tabletL} {
        padding: 24px 0 0;
    }
    @media ${device.mobileM} {
        width: unset;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
        font-size: 16px;
    }
`

const StyledHeaderCommission = styled(StyledHeader)`
    @media ${device.laptopM} {
        text-align: center;
    }
    @media ${device.tabletL} {
        text-align: center;
    }
`
const StyledHeaderDerivx = styled(Header)`
    text-align: start;
    margin-left: 40.8rem;

    @media ${device.tabletL} {
        margin-left: 0;
        text-align: center;
    }
`

const StyledTitleHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 24px;
    }
`

const SubtitleHeader = styled(Header)`
    line-height: 36px;

    @media ${device.laptopL} {
        width: 100%;
    }
    @media ${device.tabletL} {
        line-height: 24px;
        font-size: 16px !important;
        max-width: 305px;
    }
`

const DerivIBProgramme = () => {
    const { is_row } = useRegion()
    return (
        <StyledSection id="deriv-ib">
            <Container direction="column">
                <TitleWrapper>
                    <StyledTitleHeader as="h2" mb="1.2rem" type="page-title" align="center">
                        {localize('Deriv IB Programme')}
                    </StyledTitleHeader>
                    <SubtitleHeader as="h4" type="sub-section-title" align="center" weight="normal">
                        {localize(
                            'Our introducing broker programme is available to all Deriv affiliates.',
                        )}
                    </SubtitleHeader>
                    <SubtitleHeader as="h4" type="sub-section-title" align="center" weight="normal">
                        {is_row
                            ? localize(
                                  'Earn commission from your clients’ trades on Deriv MT5 and Deriv X.',
                              )
                            : localize('Earn commission from your clients’ trades on Deriv MT5.')}
                    </SubtitleHeader>
                    <Header as="h2" mb="2rem" type="page-title" mt="4rem" align="center">
                        {localize('Deriv MT5')}
                    </Header>
                </TitleWrapper>
                <IBSectionContainer padding="4rem 0 9.6rem 0">
                    <StyledHeaderCommission as="h4" type="main-paragraph" mb="1.6rem">
                        {localize('Choose a commission plan:')}
                    </StyledHeaderCommission>
                    <StyledCardWrapper>
                        <DERIVIBDMT5Cards data={ib_dmt5_synthetic} />
                        <DERIVIBDMT5Cards data={ib_dmt5_financial} />
                        <DERIVIBDMT5Cards data={ib_dmt5_financialSTP} />
                        {is_row && (
                            <>
                                <Header
                                    as="h2"
                                    mb="2rem"
                                    type="page-title"
                                    mt="4rem"
                                    align="center"
                                >
                                    {localize('Deriv X')}
                                </Header>
                                <StyledHeaderDerivx as="h4" type="main-paragraph" mb="1.6rem">
                                    {localize("Here's your commission plan:")}
                                </StyledHeaderDerivx>
                                <DERIVIBDMT5Cards data={ib_derivx} />
                            </>
                        )}
                    </StyledCardWrapper>
                    <DecideSection align="center">
                        <StyledHeader
                            id="dm-affiliate-contact-us"
                            as="h4"
                            type="sub-section-title"
                            align="center"
                            weight="medium"
                            mb="24px"
                        >
                            {localize('Can’t decide which programme or commission plan suits you?')}
                        </StyledHeader>
                        <LiveChatLinkText text="_t_Contact us via live chat_t_" weight="bold" />
                    </DecideSection>
                </IBSectionContainer>
            </Container>
        </StyledSection>
    )
}

const ib_dmt5_synthetic: DMT5Type = {
    name: <Localize translate_text="Deriv MT5 Derived" />,
    description: (
        <Localize translate_text="Earn when your clients trade on an MT5 Derived account." />
    ),
    type: [
        {
            title: <Localize translate_text="Crash/Boom" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Crash 300 Index" />,
                        <Localize key={2} translate_text="Crash 500 Index" />,
                        <Localize key={3} translate_text="Crash 1000 Index" />,
                        <Localize key={4} translate_text="Boom 300 Index" />,
                        <Localize key={5} translate_text="Boom 500 Index" />,
                        <Localize key={6} translate_text="Boom 1000 Index" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="1" />,
                        <Localize key={2} translate_text="0.35" />,
                        <Localize key={3} translate_text="0.25" />,
                        <Localize key={4} translate_text="1" />,
                        <Localize key={5} translate_text="0.35" />,
                        <Localize key={6} translate_text="0.25" />,
                    ],
                },
            ],
            class_name: 'crash-boom',
        },
        {
            title: <Localize translate_text="Volatility indices" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Volatility 10 Index " />,
                        <Localize key={2} translate_text="Volatility 10 (1s) Index" />,
                        <Localize key={3} translate_text="Volatility 25 Index" />,
                        <Localize key={4} translate_text="Volatility 25 (1s) Index" />,
                        <Localize key={5} translate_text="Volatility 50 Index" />,
                        <Localize key={6} translate_text="Volatility 50 (1s) Index" />,
                        <Localize key={7} translate_text="Volatility 75 Index " />,
                        <Localize key={8} translate_text="Volatility 75 (1s) Index" />,
                        <Localize key={9} translate_text="Volatility 100 Index" />,
                        <Localize key={10} translate_text="Volatility 100 (1s) Index" />,
                        <Localize key={11} translate_text="Volatility 150 (1s) Index" />,
                        <Localize key={12} translate_text="Volatility 200 (1s) Index" />,
                        <Localize key={13} translate_text="Volatility 250 (1s) Index" />,
                        <Localize key={14} translate_text="Volatility 300 (1s) Index" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="0.75" />,
                        <Localize key={2} translate_text="0.75" />,
                        <Localize key={3} translate_text="1.75" />,
                        <Localize key={4} translate_text="1.75" />,
                        <Localize key={5} translate_text="3.75" />,
                        <Localize key={6} translate_text="3.75" />,
                        <Localize key={7} translate_text="5" />,
                        <Localize key={8} translate_text="5" />,
                        <Localize key={9} translate_text="7.5" />,
                        <Localize key={10} translate_text="7.5" />,
                        <Localize key={11} translate_text="7.5" />,
                        <Localize key={12} translate_text="10" />,
                        <Localize key={12} translate_text="12.5" />,
                        <Localize key={14} translate_text="15" />,
                    ],
                },
            ],
            class_name: 'volatility-indices',
        },
        {
            title: <Localize translate_text="Step index" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [<Localize key={1} translate_text="Step index" />],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [<Localize key={1} translate_text="0.10" />],
                },
            ],
            class_name: 'step-index',
        },
        {
            title: <Localize translate_text="Jump indices" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Jump 10 Index" />,
                        <Localize key={2} translate_text="Jump 25 Index" />,
                        <Localize key={3} translate_text="Jump 50 Index" />,
                        <Localize key={4} translate_text="Jump 75 Index" />,
                        <Localize key={5} translate_text="Jump 100 Index" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="0.50" />,
                        <Localize key={2} translate_text="1.25" />,
                        <Localize key={3} translate_text="2.50" />,
                        <Localize key={4} translate_text="3.75" />,
                        <Localize key={5} translate_text="5" />,
                    ],
                },
            ],
            class_name: 'jump-index',
        },
    ],
    countDetails: [
        {
            title: <Localize translate_text="How it’s calculated" />,
            list: [
                {
                    details: (
                        <Localize translate_text="A deal for 1 lot of the Volatility 75 Index for a price of USD 500,000 will pay out USD 25 in commission based on the following formula:" />
                    ),
                    icon: 'dmt5_synthetic_calculator',
                    iconAlt: <Localize translate_text="DMT5 synthetic calculated" />,
                },
            ],
            notes: [
                {
                    title: <Localize translate_text="Please note:" />,
                    desc: {
                        firstText: (
                            <Localize translate_text="Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate." />
                        ),
                    },
                },
            ],
        },
    ],
}

const ib_dmt5_financial: DMT5Type = {
    name: <Localize translate_text="Deriv MT5 Financial" />,
    description: (
        <Localize translate_text="Earn when your clients trade on an MT5 Financial account." />
    ),
    type: [
        {
            title: <Localize translate_text="Forex and metals" />,
            headerHeight: '8.0rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Forex" />,
                        <Localize key={2} translate_text="Metals" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per lot" />,
                    list: [
                        <Localize key={1} translate_text="USD 2" />,
                        <Localize key={2} translate_text="USD 4" />,
                    ],
                },
            ],
            class_name: 'forex-and-metals',
        },
        {
            title: <Localize translate_text="Stock indices" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Stock indices" />,
                        <Localize key={2} translate_text="Stocks" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="USD 1" />,
                        <Localize key={2} translate_text="USD 10" />,
                    ],
                },
            ],
            class_name: 'stock-indices',
        },
        {
            title: <Localize translate_text="Cryptocurrencies" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [<Localize key={1} translate_text="Cryptocurrencies" />],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [<Localize key={1} translate_text="10" />],
                },
            ],
            class_name: 'cryptocurrencies-financial',
        },
    ],
    countDetails: [
        {
            title: <Localize translate_text="How it’s calculated" />,
            list: [
                {
                    details: (
                        <Localize translate_text="For forex, there is a fixed commission of USD 2 per lot (only applicable for standard lots). A deal for 1 lot of EUR/USD will pay out USD 2 in commission based on the following formula:" />
                    ),
                    icon: 'dmt5_financial_calculator_one',
                    iconAlt: <Localize translate_text="DMT5 Financial calculated first" />,
                },
                {
                    details: (
                        <Localize translate_text="For metals, there is a fixed commission of USD 4 per lot. A deal for 1 lot of XAU/USD will pay out USD 4 in commission based on the following formula:" />
                    ),
                    icon: 'dmt5_financial_calculator_two',
                    iconAlt: <Localize translate_text="DMT5 Financial calculated second" />,
                },
                {
                    details: (
                        <Localize translate_text="For cryptocurrency assets, a deal for 1 lot of BTC/USD (with a BTC to USD exchange rate of USD 50,000) will pay out USD 5 in commission based on the following formula:" />
                    ),
                    icon: 'dmt5_financial_calculator_three',
                    iconAlt: <Localize translate_text="DMT5 Financial calculated thirth" />,
                },
            ],
            notes: [
                {
                    title: <Localize translate_text="Please note:" />,
                    desc: {
                        firstText: (
                            <Localize translate_text="Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate." />
                        ),
                    },
                },
            ],
        },
    ],
}
const ib_dmt5_financialSTP: DMT5Type = {
    name: <Localize translate_text="Deriv MT5 Financial STP" />,
    description: (
        <Localize translate_text="Earn when your clients trade on an MT5 Financial STP account." />
    ),
    type: [
        {
            title: <Localize translate_text="Forex" />,
            headerHeight: '8.0rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [<Localize key={1} translate_text="Forex" />],
                },
                {
                    title: (
                        <Localize
                            key={0}
                            translate_text="Commission per lot (1 standard lot is 100k units)"
                        />
                    ),
                    list: [<Localize key={1} translate_text="2.5" />],
                },
            ],
        },
        {
            title: <Localize translate_text="Cryptocurrencies" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [<Localize key={1} translate_text="Cryptocurrencies" />],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [<Localize key={1} translate_text="10" />],
                },
            ],
        },
    ],
    countDetails: [
        {
            title: <Localize translate_text="How it’s calculated" />,
            list: [
                {
                    details: (
                        <Localize translate_text="For forex, a deal for 1 lot of EUR/USD will pay out EUR 2.5 in commission based on the following formula:" />
                    ),
                    icon: 'dmt5_financial_stp_calculator_one',
                    iconAlt: <Localize translate_text="DMT5 Financial STP calculated first" />,
                },
                {
                    details: (
                        <Localize translate_text="For cryptocurrency assets, a deal for 1 lot of BTC/USD (with a BTC to USD exchange rate of USD 50,000) will pay out USD 5 in commission based on the following formula:" />
                    ),
                    icon: 'dmt5_financial_stp_calculator_two',
                    iconAlt: <Localize translate_text="DMT5 Financial STP calculated second" />,
                },
            ],
            notes: [
                {
                    title: <Localize translate_text="Please note:" />,
                    desc: {
                        firstText: (
                            <Localize translate_text="For forex, your commission is represented in the base currency (EUR in the above example)." />
                        ),
                        secondText: (
                            <Localize translate_text="Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate." />
                        ),
                    },
                },
            ],
        },
    ],
}

const ib_derivx: DMT5Type = {
    name: <Localize translate_text="Deriv X" />,
    description: <Localize translate_text="Earn when your clients trade on a Deriv X account." />,
    type: [
        {
            title: <Localize translate_text="Forex" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Forex (Majors)" />,
                        <Localize key={1} translate_text="Forex (Minors)" />,
                        <Localize key={1} translate_text="Forex (Micros)" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="USD 2" />,
                        <Localize key={1} translate_text="USD 2" />,
                        <Localize key={1} translate_text="USD 2" />,
                    ],
                },
            ],
        },
        {
            title: <Localize translate_text="Cryptocurrencies" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [<Localize key={1} translate_text="Cryptocurrencies" />],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [<Localize key={1} translate_text="10" />],
                },
            ],
        },
        {
            title: <Localize translate_text="Commodities" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Metals" />,
                        <Localize key={1} translate_text="Energy (Oil)" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="USD 1.50" />,
                        <Localize key={1} translate_text="USD 5" />,
                    ],
                },
            ],
        },
        {
            title: <Localize translate_text="Basket indices" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="AUD Basket" />,
                        <Localize key={1} translate_text="EUR Basket" />,
                        <Localize key={1} translate_text="GBP Basket" />,
                        <Localize key={1} translate_text="USD Basket" />,
                        <Localize key={1} translate_text="Gold Basket" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="USD 1.50" />,
                        <Localize key={1} translate_text="USD 1.50" />,
                        <Localize key={1} translate_text="USD 1.50" />,
                        <Localize key={1} translate_text="USD 1.50" />,
                        <Localize key={1} translate_text="USD 7" />,
                    ],
                },
            ],
        },
        {
            title: <Localize translate_text="Crash/Boom" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Crash 300 Index" />,
                        <Localize key={1} translate_text="Crash 500 Index" />,
                        <Localize key={1} translate_text="Crash 1000 Index" />,
                        <Localize key={1} translate_text="Boom 300 Index" />,
                        <Localize key={1} translate_text="Boom 500 Index" />,
                        <Localize key={1} translate_text="Boom 1000 Index" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="1" />,
                        <Localize key={1} translate_text="0.35" />,
                        <Localize key={1} translate_text="0.25" />,
                        <Localize key={1} translate_text="1" />,
                        <Localize key={1} translate_text="0.35" />,
                        <Localize key={1} translate_text="0.25" />,
                    ],
                },
            ],
        },
        {
            title: <Localize translate_text="Volatility indices" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Volatility 10 Index " />,
                        <Localize key={2} translate_text="Volatility 10 (1s) Index" />,
                        <Localize key={3} translate_text="Volatility 25 Index" />,
                        <Localize key={4} translate_text="Volatility 25 (1s) Index" />,
                        <Localize key={5} translate_text="Volatility 50 Index" />,
                        <Localize key={6} translate_text="Volatility 50 (1s) Index" />,
                        <Localize key={7} translate_text="Volatility 75 Index " />,
                        <Localize key={8} translate_text="Volatility 75 (1s) Index" />,
                        <Localize key={9} translate_text="Volatility 100 Index" />,
                        <Localize key={10} translate_text="Volatility 100 (1s) Index" />,
                        <Localize key={11} translate_text="Volatility 150 (1s) Index" />,
                        <Localize key={12} translate_text="Volatility 200 (1s) Index" />,
                        <Localize key={13} translate_text="Volatility 250 (1s) Index" />,
                        <Localize key={14} translate_text="Volatility 300 (1s) Index" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="0.75" />,
                        <Localize key={2} translate_text="0.75" />,
                        <Localize key={3} translate_text="1.75" />,
                        <Localize key={4} translate_text="1.75" />,
                        <Localize key={5} translate_text="3.75" />,
                        <Localize key={6} translate_text="3.75" />,
                        <Localize key={7} translate_text="5" />,
                        <Localize key={8} translate_text="5" />,
                        <Localize key={9} translate_text="7.5" />,
                        <Localize key={10} translate_text="7.5" />,
                        <Localize key={11} translate_text="7.5" />,
                        <Localize key={12} translate_text="10" />,
                        <Localize key={13} translate_text="10" />,
                        <Localize key={14} translate_text="15" />,
                    ],
                },
            ],
        },
        {
            title: <Localize translate_text="Step index" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [<Localize key={1} translate_text="Step index" />],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [<Localize key={1} translate_text="0.10" />],
                },
            ],
        },
        {
            title: <Localize translate_text="Jump indices" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Jump 10 Index" />,
                        <Localize key={2} translate_text="Jump 25 Index" />,
                        <Localize key={3} translate_text="Jump 50 Index" />,
                        <Localize key={4} translate_text="Jump 75 Index" />,
                        <Localize key={5} translate_text="Jump 100 Index" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="0.50" />,
                        <Localize key={2} translate_text="1.25" />,
                        <Localize key={3} translate_text="2.50" />,
                        <Localize key={4} translate_text="3.75" />,
                        <Localize key={5} translate_text="5" />,
                    ],
                },
            ],
        },
        {
            title: <Localize translate_text="Range break indices" />,
            headerHeight: '6.4rem',
            assets: [
                {
                    title: <Localize key={0} translate_text="Asset" />,
                    list: [
                        <Localize key={1} translate_text="Range Break 100 Index" />,
                        <Localize key={1} translate_text="Range Break 200 Index" />,
                    ],
                },
                {
                    title: <Localize key={0} translate_text="Commission per USD 100k turnover" />,
                    list: [
                        <Localize key={1} translate_text="USD 0.50" />,
                        <Localize key={1} translate_text="USD 0.25" />,
                    ],
                },
            ],
        },
    ],
    countDetails: [
        {
            title: <Localize translate_text="How it’s calculated" />,
            list: [
                {
                    details: (
                        <Localize
                            translate_text="For <0>forex majors</0>, a deal for 1 lot of <0>EUR/JPY</0> will pay out USD 1.97 in commission based on the following formula:"
                            components={[<strong key={0} />]}
                        />
                    ),
                    icon: 'deriv_x_one',
                    iconAlt: (
                        <Localize translate_text="Deriv X commission rate calculation for forex major" />
                    ),
                },
                {
                    details: (
                        <Localize
                            translate_text="If the latest exchange rate is quoted as JPY/USD = 0.00699, then you would get a commission of <0>USD 1.97</0> commission."
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    details: (
                        <Localize
                            translate_text="This formula also applies to <0>forex minors</0> and <0>forex micros</0>. Contract sizes and deal prices depend on the individual asset."
                            components={[<strong key={0} />]}
                        />
                    ),
                },

                {
                    details: (
                        <Localize
                            translate_text="For <0>cryptocurrencies,</0> a deal for 1 lot of <0>BTC/USD</0> will pay out USD 20 in commission based on the following formula:"
                            components={[<strong key={0} />]}
                        />
                    ),
                    icon: 'deriv_x_two',
                    iconAlt: (
                        <Localize translate_text="Deriv X commission rate calculation for cryptocurrency" />
                    ),
                },
                {
                    details: (
                        <Localize
                            translate_text="For <0>commodities,</0> a deal for 1 lot of <0>BRN</0> will pay out USD 0.0048 in commission based on the following formula:"
                            components={[<strong key={0} />]}
                        />
                    ),
                    icon: 'deriv_x_three',
                    iconAlt: (
                        <Localize translate_text="Deriv X commission rate calculation for commodities" />
                    ),
                },
                {
                    second_desc: (
                        <Localize
                            translate_text="This formula also applies to <0>basket indices</0>. Contract sizes and deal prices depend on the individual asset."
                            components={[<strong key={0} />]}
                        />
                    ),
                },
                {
                    notes: [
                        {
                            title: <Localize translate_text="Please note:" />,
                            desc: {
                                firstText: (
                                    <Localize translate_text="Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate." />
                                ),
                            },
                        },
                    ],
                },
                {
                    details: (
                        <Localize
                            translate_text="A deal for 1 lot of the <0>Volatility 50 (1s) Index</0> for a price of USD 600,000 will pay out USD 22.50 in commission based on the following formula:"
                            components={[<strong key={0} />]}
                        />
                    ),
                    icon: 'deriv_x_four',
                    iconAlt: (
                        <Localize translate_text="Deriv X commission rate calculation for volatility 50 (1s) index" />
                    ),
                },
                {
                    details: (
                        <Localize
                            translate_text="The same formula applies to all synthetics except <0>Step Index</0>, which has the following formula:"
                            components={[<strong key={0} />]}
                        />
                    ),
                    icon: 'deriv_x_five',
                    iconAlt: (
                        <Localize translate_text="Deriv X commission rate calculation for step index" />
                    ),
                },
            ],
            notes: [
                {
                    title: <Localize translate_text="Please note:" />,
                    desc: {
                        firstText: (
                            <Localize translate_text="Commission payout for all assets will be converted to your deposit currency based on the latest exchange rate." />
                        ),
                    },
                },
            ],
        },
    ],
}

export default DerivIBProgramme
