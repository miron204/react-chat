import Bubble from '@/components/Bubble';
import Input, { InputProps } from '@/components/Input';
import { createControlled } from '@/utils/controls';

import { ButtonContainer, Container } from './styled';

export interface ChatInputProps extends InputProps {
  onSend?: VoidFunction;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend, ...props }) => (
  <Container>
    <Input
      onKeyPress={(event) => {
        if (event.key !== 'Enter') return;

        event.preventDefault();
        onSend?.();
      }}
      {...props}
    />
    <ButtonContainer>{!!props.value && <Bubble size="small" svg="arrowUp" onClick={onSend} />}</ButtonContainer>
  </Container>
);

export default Object.assign(ChatInput, {
  Controlled: createControlled(ChatInput, {
    defaultValue: '',
    enrichProps: (props, [, setValue]) => ({
      ...props,
      onSend: () => {
        setValue('');
        props.onSend?.();
      },
    }),
  }),
  Container,
  ButtonContainer,
});