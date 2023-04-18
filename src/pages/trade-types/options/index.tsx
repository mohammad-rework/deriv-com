import React from 'react'
import Loadable from '@loadable/component'
import { SmallContainer, Hero } from '../components/_style'
import PageNotFound from '../../404'
import WhatAreTheOptions from './_what-are-options'
import { SEO } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import useRegion from 'components/hooks/use-region'
const HowOptionsWorks = Loadable(() => import('./_how-options-works'))
const OptionsToTrade = Loadable(() => import('./_options-to-trade'))
const StartTrading = Loadable(() => import('./_start-trading'))
const MarketsAvailable = Loadable(() => import('./_markets-available'))

const meta_attributes = {
    og_title: localize('Options trading | Trading types | Deriv'),
    og_description: localize(
        'Learn about options trading on Deriv. Earn payouts by correctly predicting price movements without needing to buy the underlying assets.',
    ),
}

const Options = () => {
    const { is_row } = useRegion()

    if (is_row) {
        return (
            <Layout>
                <SEO
                    title={localize('Options trading | Trade digital options on Deriv')}
                    description={localize(
                        'Explore what are options on Deriv. Learn how to start trading options with forex, synthetics, stocks & indices, and basket indices.',
                    )}
                    meta_attributes={meta_attributes}
                />
                <Hero jc="cneter" ai="center">
                    <SmallContainer>
                        <Header as="h1" type="display-title" color="white" align="center">
                            {localize('Options')}
                        </Header>
                    </SmallContainer>
                </Hero>
                <WhatAreTheOptions />
                <HowOptionsWorks />
                <OptionsToTrade />
                <StartTrading />
                <MarketsAvailable />
            </Layout>
        )
    }

    return <PageNotFound />
}

export default WithIntl()(Options)
