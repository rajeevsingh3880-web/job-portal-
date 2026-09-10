import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import Homepage from './pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const theme = createTheme({
    colors: {
      'bright-sun': [
        '#fffbeb',
        '#fff3c6',
        '#ffe588',
        '#ffd149',
        '#ffbd20',
        '#f99b07',
        '#dd7302',
        '#b74f06',
        '#943d0c',
        '#7a320d',
      ],
    },
  });

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<Homepage/>} />
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;