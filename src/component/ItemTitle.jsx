import { Typography, Box } from '@mui/material'

const itemTitle = ({title,subtitle}) => {
  return (
    <Box textAlign='center' m={4}>
      <Typography variant='h3' component='h3'><strong>{title}</strong></Typography>
      <Typography variant='body1'>{subtitle}</Typography>
    </Box>
  )
}

export default itemTitle