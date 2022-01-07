import React from 'react'
import { Box } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'

const ConfirmText = () => {
    return (
        <>
            <Box p="12px 0">
                <Header align="center" as="h1" type="heading-3" mb="8px">
                    {localize('Thanks for subscribing to Deriv Academy')}
                </Header>
                <Header align="center" as="p" type="subtitle-2" weight="regular" mb="8px">
                    {localize(
                        'Thank you for confirming your email address, you will receive a confirmation email shortly.',
                    )}
                </Header>
            </Box>
        </>
    )
}

export default ConfirmText
