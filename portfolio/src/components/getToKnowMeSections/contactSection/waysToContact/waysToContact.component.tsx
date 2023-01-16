import { ContactType } from './contactType/contactType.component';
import { WaysToContactContainer } from './waysToContact.styles';

export const WaysToContact = () => {
  return (
    <WaysToContactContainer>
      <ContactType
        icon='material-symbols:perm-phone-msg-rounded'
        title='My phone number'
        textType='+48 662096409'
      />

      <ContactType
        icon='ic:outline-email'
        title='Email'
        textType='statkprivate@gmail.com'
      />

      <ContactType
        icon='logos:linkedin-icon'
        title='Linkedin'
        textType='/mateuszs-statkiewicz'
      />
    </WaysToContactContainer>
  );
};
