import { Box, Typography, Button, Stack } from '@mui/material'
import { styled } from '@mui/system';

const ButtonStyle = styled(Button)(({theme}) =>({
  color: "#2B2D39",
  border: "1px #2B2D39 solid",
  textTransform:'none',
  '&:focus': {
    border: '1px solid pink',
  },
  [theme.breakpoints.up('sm')]: {
    width: '45%',
    fontSize: '1.5rem',
    fontWeight: 800
  },
}))

const Navbar = () => {
  return (
      <Stack direction='row'>
        <Box sx={{flexGrow:1}}>
          <Typography component='div' variant='h4' sx={{color:'#18243C' ,fontSize: { xs: '2.25rem', sm: '3.75rem' }}}>suite</Typography>
        </Box>
        <ButtonStyle variant='outlined'><strong>Request Beta Access</strong></ButtonStyle>
      </Stack>
  )
}

export default Navbar