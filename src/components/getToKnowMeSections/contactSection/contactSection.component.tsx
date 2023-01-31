import { H4 } from '../../../global.styles';
import { ProjectsVariant } from '../../../utils/framer-motion/variants.utils';
import { ContactSectionContainer } from './contactSection.styles';
import { WaysToContact } from './waysToContact/waysToContact.component';
import { motion } from 'framer-motion';

export const ContactSection = () => {
  return (
  <motion.div
    variants={ProjectsVariant}
    initial='enter'
    whileInView='visible' >
    <ContactSectionContainer>
      <H4>Let's keep in touch !</H4>

      <WaysToContact />
      <H4>Have any questions? Send me a message!</H4>
    </ContactSectionContainer>
  </motion.div>
  );
};
