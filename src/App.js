import { styled, Typography } from '@material-ui/core';
import './App.css';
import Ride from './components/Ride';

function App() {
  return (
    <Wrapper>
      <Typography
        variant='h3'
        style={{ textAlign: 'center', marginBottom: '2rem' }}
      >
        Ride sharing
      </Typography>
      <Ride />
      <Ride />
      <Ride />
    </Wrapper>
  );
}
const Wrapper = styled('div')({
  background: '#fafafa',
  paddingTop: '2rem',
  height: '100vh',
});
export default App;
