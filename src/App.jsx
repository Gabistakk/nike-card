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
  return (
    <NextUIProvider theme={darkElegantTheme}>
    <div className='h-full w-screen bg-grey flex flex-col justify-center'>
      <div className='flex flex-row bg-white w-2/3'>
    <Card nome={'Nike Adapt BB 2.0'}
    descricao={'Consistent, customized fit, game-changing.'}
    preco={279}
    desconto={350}
    imagem={'https://nextui.org/images/shoes-1.png'}
    />
    <Card nome={'Nike Adapt BB 2.0'}
    descricao={'Consistent, customized fit, game-changing.'}
    preco={279}
    desconto={350}
    imagem={'https://nextui.org/images/shoes-1.png'}
    />
    </div>

    <div className='flex flex-row bg-white'>

    <Card nome={'Nike Adapt BB 2.0'}
    descricao={'Consistent, customized fit, game-changing.'}
    preco={279}
    desconto={350}
    imagem={'https://nextui.org/images/shoes-1.png'}
    />
    <Card nome={'Nike Adapt BB 2.0'}
    descricao={'Consistent, customized fit, game-changing.'}
    preco={279}
    desconto={350}
    imagem={'https://nextui.org/images/shoes-1.png'}
    />
</div>
<div className='flex flex-row bg-white'>

    <Card nome={'Nike Adapt BB 2.0'}
    descricao={'Consistent, customized fit, game-changing.'}
    preco={279}
    desconto={350}
    imagem={'https://nextui.org/images/shoes-1.png'}
    />
    <Card nome={'Nike Adapt BB 2.0'}
    descricao={'Consistent, customized fit, game-changing.'}
    preco={279}
    desconto={350}
    imagem={'https://nextui.org/images/shoes-1.png'}
    />
</div>
<div className='flex flex-row bg-white'>

    <Card nome={'Nike Adapt BB 2.0'}
    descricao={'Consistent, customized fit, game-changing.'}
    preco={279}
    desconto={350}
    imagem={'https://nextui.org/images/shoes-1.png'}
    />
    </div>
    </div>
    </NextUIProvider>
  );
}
export default App;