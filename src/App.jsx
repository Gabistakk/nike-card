import * as React from 'react';
import './App.css'
import Card from './assets/Card'

import { NextUIProvider, Button, createTheme, Text, Image } from '@nextui-org/react';


const darkElegantTheme = createTheme({
  type: 'dark',
  className: 'dark-elegant',
  theme: {
    colors: {
      black: '#000000',
      darkGrey: '#0D0E0E',
      lightGrey: '#1D2020',
      grey: '#252525',
      textGrey: '#EBEBEB',
      white: '#EAEBEB',
      font: '#141414'
    },
    radii: {
      md: '4px'
    }
  }
});


function App() {
  // 2. Use at the root of your app
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-grey'>
    <NextUIProvider theme={darkElegantTheme}>
    <Card nome={'Nike Adapt BB 2.0'}
    descricao={'Consistent, customized fit, game-changing.'}
    preco={279}
    desconto={350}
    imagem={'https://nextui.org/images/shoes-1.png'}
    />
    </NextUIProvider>
    </div>
  );
}
export default App;