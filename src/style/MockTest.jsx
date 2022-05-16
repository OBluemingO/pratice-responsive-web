import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BoxGradiatStyle = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(90deg, rgba(249,211,104,1) 0%, rgba(249,113,88,1) 50%, rgba(180,73,241,1) 100%)',
  borderRadius: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  // mobile
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  // talet
  [theme.breakpoints.up('sm')]: {
    width: '100%',
    height:'100%',
  },
  // labtop
  [theme.breakpoints.up('md')]: {
    width: '100%',
    height:'100%',
  },
}));
