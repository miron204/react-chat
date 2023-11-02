import Avatar from '@/components/Avatar';
import TypingIndicator from '@/components/TypingIndicator';

import { IndicatorContainer } from './styled';

import { VF_ICON } from '@/fixtures';

export interface IndicatorProps {
  avatar: string;
}

const Indicator: React.FC<IndicatorProps> = ({ avatar }) => (
  <IndicatorContainer withImage center>
    {/* <Avatar avatar={avatar} /> */}
    <Avatar size="small" avatar={VF_ICON} />
    <TypingIndicator />
  </IndicatorContainer>
);

export default Indicator;
