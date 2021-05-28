import React from 'react';
import { Box, Button, Grid, styled, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MdDirectionsRun } from 'react-icons/md';
import manimage from '../images/man2.png';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    flexWrap: 'wrap',
    gap: '2rem',
    '@media (max-width: 500px)': {
      justifyContent: 'space-around',
    },
  },

  time: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',

    '& p': {
      fontWeight: 900,
      color: '#144355',
      fontSize: '18px',
    },
  },
  line: {
    height: 55,
    width: '4px',
    backgroundColor: '#1B4D53',
    margin: '1.25rem .7rem 0 .8rem',
    position: 'relative',
    '&::before': {
      position: 'absolute',
      top: -8,
      left: -3,
      content: '""',
      width: 6,
      height: 6,

      borderRadius: '50%',
      border: '2px solid #222',
    },
    '&::after': {
      position: 'absolute',
      bottom: -8,
      left: -3,
      content: '""',
      width: 6,
      height: 6,
      borderRadius: '50%',
      border: '2px solid #222',
    },
  },

  location: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  iconContainer: {
    display: 'flex',
    gap: '0 .3rem',
    marginTop: 2,
    '& svg': {
      background: '#EDEDED',
      borderRadius: '50%',
      padding: 1,
      color: '#fff',
      fontSize: 20,
    },
  },
  green: {
    '& svg': {
      background: '#62BE73',
    },
  },
  middle: {
    gap: '3rem',
  },
  middleDesc: {
    gap: 20,
  },
  right: {
    gap: '2.5rem',
  },
  button: {
    color: '#807D97',
    borderColor: '#807D97',
    padding: '.2rem .4rem',
  },
}));

const Ride = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Grid className={classes.container}>
        <Box display='flex' flexDirection='row'>
          <Box className={classes.time}>
            <Typography>08:00</Typography>
            <Typography>08:00</Typography>
          </Box>
          <Box className={classes.line}></Box>
          <Box className={classes.location}>
            <Box>
              <Typography variant='h4'>agra</Typography>
              <Box className={classes.iconContainer}>
                <MdDirectionsRun style={{ background: '#62BE73' }} />
                <MdDirectionsRun />
                <MdDirectionsRun />
              </Box>
            </Box>
            <Box>
              <Typography variant='h4'>agra</Typography>
              <Box className={classes.iconContainer}>
                <MdDirectionsRun />
                <MdDirectionsRun style={{ background: '#FDC918' }} />
                <MdDirectionsRun />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box display='flex' flexDirection='column' className={classes.middle}>
            <Button variant='outlined' className={classes.button}>
              weather info
            </Button>
            <Box
              display='flex'
              alignItems='center'
              className={classes.middleDesc}
            >
              <Box>
                <img src={manimage} alt='' />
              </Box>
              <Typography variant='h5'>Kenu</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box display='flex' flexDirection='column' className={classes.right}>
            <Typography variant='h5'>Rs. 15,000</Typography>
            <Button variant='outlined' className={classes.button}>
              contact
            </Button>
          </Box>
        </Box>
      </Grid>
    </Wrapper>
  );
};
const Wrapper = styled('div')({
  width: '95vw',
  maxWidth: '650px',
  margin: '0 auto',
  borderRadius: 15,
  padding: '1rem',
  background: 'white',
  marginBottom: 12,
  'box-shadow': ' 0px 0px 5px -1px rgba(0,0,0,0.75)',
});
export default Ride;
