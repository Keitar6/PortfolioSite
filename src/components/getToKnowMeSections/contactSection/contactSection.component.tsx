import { H4, H3 } from '../../../global.styles';
import { ContactSectionContainer } from './contactSection.styles';
import { WaysToContact } from './waysToContact/waysToContact.component';

export const ContactSection = () => {
  return (
    <ContactSectionContainer>
      <H4>Here are some ways in which you can contact me directly</H4>

      <WaysToContact />
      <H3>Feel free to contact me as soon as you have any questions!</H3>
    </ContactSectionContainer>
  );
};
