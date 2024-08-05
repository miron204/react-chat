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

  height: '$xxl',
  width: '$xxl',
  border: 'none',
  //border: '1px solid $shadow4',
  //boxShadow: '0 1px 6px $shadow6, 0 2px 24px $shadow8',

  '&:focus': {
    outline: 0,
  },
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'transparent', //'$darkPrimary',
  },

  '& > img': {
    width: '$xxl',
    height: '$xxl',
    filter: 'grayscale(40%)',
  },
  '& > img:hover': {
    filter: 'grayscale(0%)',
  },

  padding: 0,
  margin: 0,

  '&::before, &::after': {
    display: 'none',
    position: 'absolute',
    content: '',
  },
  '&:hover::before, &:hover::after': {
    display: 'block',
  },
  '&::before': {
    content: 'Howdy!👋✨',
    bottom: 'calc(100% + 10px)',
    right: 0,
    width: '70px',
    padding: '5px',
    paddingLeft: '1rem',
    fontSize: '12px',
    fontFamily: 'Open Sans, sans-serif !important',
    borderRadius: '50px',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))',
  },
  '&::after': {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '10px 10px 0',
    borderColor: '#FFFFFF transparent transparent transparent',
    bottom: 'calc(100% + 10px)',
    right: '30px',
    transform: 'translate(50%, 100%)',
    //filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))',
  },
});
