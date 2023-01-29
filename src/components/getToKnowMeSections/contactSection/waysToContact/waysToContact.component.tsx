import { ICONS } from '../../../../utils/icons/icons.utils';
import { MY_INFOS } from '../../../../utils/myInfos/myInfos.utils';
import { ContactType } from './contactType/contactType.component';
import { WaysToContactContainer } from './waysToContact.styles';

export const WaysToContact = () => {
  return (
    <WaysToContactContainer>
      <ContactType
        icon={ICONS.phone}
        title='My phone number'
        textType={MY_INFOS.phoneNumber}
      />

      <ContactType
        icon={ICONS.emailPrivate}
        title='Email'
        textType={MY_INFOS.emailPrivate}
        whereTo={MY_INFOS.emailPrivate}
      />

      <ContactType
        icon={ICONS.linkedin}
        title='Linkedin'
        textType='/mateuszs-statkiewicz'
        whereTo={MY_INFOS.linkedin}
      />
    </WaysToContactContainer>
  );
};
