
import './App.css';
import { MantineProvider, Slider, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import Homepage from './pages/Homepage';

function App() {
  return (
    <MantineProvider>
       <Homepage/>
    </MantineProvider>
  );
}

export default App;
