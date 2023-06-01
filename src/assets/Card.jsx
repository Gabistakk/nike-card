import React from 'react'
import { NextUIProvider, Button, createTheme, Text, Image } from '@nextui-org/react';
import {Buy, Discount} from 'react-iconly';

export default function Card({nome, descricao, preco, desconto, imagem}) {
  return (
    <div className='h-60 w-max bg-font rounded-3xl card-box flex items-center gap-5 pr-3 1/2'>
      <div className='bg-gradient-to-br from-grey to-black h-full flex items-center rounded-3xl'>
      <Image showSkeleton className='saturate-0' src={imagem} objectFit='cover' height={150}>
      </Image>
      </div>
      <div className='h-full flex flex-col justify-center gap-2'>
    <Text css={{color: '$white', fontFamily: 'Rajdhani, sans-serif'}} size={30}>{nome}</Text>
    <Text css={{color: '$gray800', fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05rem'}} size={17}>
        {descricao}
    </Text>
<div className='flex gap-5'>
<Text css={{textGradient: "45deg, $purple600 -20%, $pink600 100%",}} size={20}>R$ {preco} 
</Text>
<Text del css={{color: '$gray800', marginTop: '$2'}} size={20}>R$ {desconto}
</Text>
</div>
<div className='flex gap-5'>
    <Button className='button' shadow 
    color={'secondary'} auto animated 
    css={{ background: '$white', color: '$font', fontWeight: 'bold', width: 'min-content'}} 
    size={'sm'}
    iconRight={<Discount set="light" primaryColor="blueviolet"/>}>
      Buy now
      </Button>
    <Button className='button'shadow auto ghost 
    color={'secondary'} css={{ color: '$accents5', fontWeight: 'bold', width: 'min-content'}} 
    size={'sm'}
    iconRight={<Buy set="light" primaryColor="blueviolet"/>}
    >
      Add to Cart
      </Button>

    </div>
    </div>
    </div>
  )
}
