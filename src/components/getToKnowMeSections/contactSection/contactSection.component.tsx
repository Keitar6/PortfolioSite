import { H4, H5 } from '../../../global.styles';
import { ContactSectionContainer } from './contactSection.styles';
import { WaysToContact } from './waysToContact/waysToContact.component';

export const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <H5>Let's keep in touch !</H5>

      <WaysToContact />
      <H4>Have any questions? Send me a message!</H4>
    </ContactSectionContainer>
  );
};
