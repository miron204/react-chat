import { ClassName } from '@/constants';
import { tagFactory } from '@/hocs';
import { styled } from '@/styles';

const tag = tagFactory(ClassName.LAUNCHER);

export const Button = styled(tag('button'), {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$round',
  backgroundColor: 'transparent', //'$primary',
  trans: ['background-color', 'box-shadow'],

  height: '$xxl', //'$xl',
  width: '$xxl', //'$xl',
  border: '1px solid $shadow4',
  boxShadow: '0 1px 6px $shadow6, 0 2px 24px $shadow8',

  '&:focus': {
    outline: 0,
  },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'transparent', //'$darkPrimary',
  },

  '& > img': {
    width: '$xxl', //'$sm',
    height: '$xxl', //'$sm',
    filter: 'grayscale(0%)',
  },

  '& > img:hover': {
    top: '-0.16em',
    //filter: 'grayscale(40%)',
  },

  padding: 0,
  margin: 0,
});
