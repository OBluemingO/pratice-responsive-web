import { Box } from '@mui/material'

const line = () => {
  return (
    <Box sx={{
      position: 'relative',
      paddingTop: 2,
      '&::before': {
        content: '" "',
        width: { xs: 150, sm: 250 },
        height: 100,
        border: 'solid 3px #18243C',
        borderColor: '#18243C transparent transparent transparent',
        borderRadius: '100%/100px 100px 0 0',
        position: 'absolute',
        top: '-20%',
        right: 0,
      }
    }} component='span' ><strong>super solution</strong></Box>
  )
}

export default line