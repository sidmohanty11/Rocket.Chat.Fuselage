import { Box, Margins } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import { OnboardingLogo } from '../../common/OnboardingLogo';

const EmailConfirmedPage = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        width='100%'
        maxWidth={576}
        paddingBlock={32}
        paddingInline={16}
      >
        <Margins blockEnd={32}>
          <OnboardingLogo />

          <Box fontScale='hero'>{t('page.emailConfirmed.title')}</Box>

          <Box fontScale='p1'>{t('page.emailConfirmed.subtitle')}</Box>
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default EmailConfirmedPage;
