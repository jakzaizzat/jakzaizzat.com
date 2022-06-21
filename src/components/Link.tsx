import { styled } from '@stitches/react'

export const Link = styled('a', {
  color: '#4d6d9c',
  fontWeight: 'semibold',
  textDecoration: 'none',
  position: 'relative',
  cursor: 'pointer',

  '&:hover': {
    color: 'rgb(48 77 120)',
    borderBottom: '1px solid rgb(48 77 120)',
  },

  '&: after': {
    position: 'absolute',
    content: '"/"',
    marginLeft: '0.5rem',
  },
})
