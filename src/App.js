import { Button, Box, Container, Typography, Stack, Card, CardMedia, Grid, Paper } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Line from './component/Line'
import { BoxGradiatStyle } from './style/MockTest'
import Navbar from "./component/Navbar"
import ItemTitle from "./component/ItemTitle"


function App() {
  return (
    <Container maxWidth='md' sx={{ color: '#18243C', bgcolor: '#F2EDE7' }}>
      <Navbar />
      <Grid container mt={{ xs: 0, sm: 10 }}>
        <Grid item xs={12} sm={7} md={5}>
          <Box>
            <Typography mt={13} variant='h4' sx={{ fontSize: { xs: '2.25rem', sm: '3.75rem' }, whiteSpace: 'nowrap' }} component='div' gutterBottom mb={3} >
              A <Line><strong>super solution</strong></Line>
              <span style={{ position: 'relative' }}><br /> for your <strong>business.</strong></span>
            </Typography>
          </Box>
          <Typography variant='subtitle1' component='div' gutterBottom mb={3} sx={{ color: 'GrayText', fontSize: { sm: '1.15rem' } }}>
            <span>Our marketing and sales automations help</span><br />
            <span>you scale your outreach to get more leads</span><br />
            for your company.
          </Typography>
          <Button variant='contained' size="large" sx={{ fontSize: { sm: '1.15rem' }, color: 'white', bgcolor: '#18243C', textTransform: 'none', paddingY: 2, paddingX: 5 }}><strong>Request Beta Access</strong></Button>
        </Grid>
        <Grid item sm={5} md={4}>
          <BoxGradiatStyle mt={{ xs: 5, sm: 0 }}>
            <img src='http://pngimg.com/uploads/mario/mario_PNG125.png' alt="mario" width='100%' height='55%' />
          </BoxGradiatStyle>
        </Grid>
        <Grid item xs={12} mt={5} md={2}>
          <Stack direction={{ xs: 'column', sm: 'row', md: 'column', }} display='flex' justifyContent='center'>
            <ItemTitle title='2K+' subtitle='COMPANIES' />
            <ItemTitle title='8' subtitle='LANGUAGES' />
            <ItemTitle title='1.2M' subtitle='LEADS' />
          </Stack>
        </Grid>
        <Grid item xs={12} mt={20} sx={{bgcolor:'#18243C',height:{xs:500,md:500},borderRadius:5}}>
          <Grid container height='100%'>
            <Grid height={{xs:'20%',md:'100%'}} width="100%" item xs={12} md={6} display='flex' justifyContent='center' alignItems='center'>
              <Box width={150} sx={{top:{xs:'-40%',md:0},position:'relative'}}>
                <img src='https://pngimg.com/uploads/mario/mario_PNG1.png' alt="mario2" width='100%' />
              </Box>
            </Grid>
            <Grid item xs={12} md={5} mt={{xs:5,md:0}} display='flex' flexDirection='column' justifyContent={{xs:'start',md:'center'}} alignItems='center'>
                <Typography variant='h4' align='center' sx={{color:'white'}}>
                  it just <strong>works.</strong>
                </Typography>
                <Typography variant='body1' align='center' mt={3} mx={{ xs: 3, sm: 15, md: 0 }} color='GrayText'>
                  "I really like how it is an all-in-one solution that handle many of the tasks that you would normally need separate tools to do the same job. This thing is a miracle worker."
                </Typography>
                <Typography variant='body1' align='center' mt={3}>
                  <strong>JEREMY ROBINSON</strong>
                </Typography>
                <Typography variant='body2' align='center' color='GrayText'>
                  CMO, FYLO
                </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item width='100%'>
        <Box height='300px' sx={{ marginTop: -5, zIndex: '52', width: '100%', height: '300px' }} display='flex' flexDirection={{ xs: 'column', sm: 'row' }} justifyContent={{ xs: 'center', sm: 'space-between' }} alignItems='center' >
          <Typography variant='h4' align='center' >
            <strong>suite</strong>
          </Typography>
          <Typography variant='body1' align='center' color="GrayText" my={3}>
            Copyright - Suite
          </Typography>
          <Stack direction='row' justifyContent='center' sx={{ color: '#18243C' }}>
            <FacebookIcon />
            <Box mx={3}>
              <TwitterIcon />
            </Box>
            <InstagramIcon />
          </Stack>
        </Box>
      </Grid>
    </Grid>
    </Container >
  );
}

export default App;
