import React from 'react'
import { NextUIProvider, Button, createTheme, Text, Image } from '@nextui-org/react';
import { Buy, Discount } from 'react-iconly';

export default function Card({ nome = 'Não encontrado.', descricao = 'Descrição não encontrada.', preco = 'Indisponivel', desconto, imagem }) {
  return (
    <div className='h-64 w-full bg-font rounded-3xl card-box flex items-center gap-5 pr-5'>
      <div className='bg-gradient-to-br from-grey to-black h-full flex items-center rounded-3xl w-1/2'>
        {imagem && <Image showSkeleton className='saturate-0' src={imagem} objectFit='cover' height={'max'}>
        </Image>}
        {imagem == undefined &&<Text css={{ color: '$white', fontFamily: 'Rajdhani, sans-serif', textAlign: 'center'}} size={40}>Imagem não encontrada</Text>}
      </div>
      <div className='h-full flex flex-col justify-center gap-2 overflow-hidden text-ellipsis p-3'>
        <Text css={{ color: '$white', fontFamily: 'Rajdhani, sans-serif', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }} size={40}>{nome}</Text>
        <Text css={{ color: '$gray800', fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05rem' }} size={17}>
          {descricao}
        </Text>
        <div className='flex gap-5 w-max'>
          <Text css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%", }} size={30}>R$ {preco}
          </Text>
          {desconto && <Text del css={{ color: '$gray800', marginTop: '$2' }} size={30}>R$ {desconto}
          </Text>}
        </div>
        <div className='flex gap-5 w-max mr-9'>
          <Button className='button' shadow
            color={'secondary'} auto animated
            css={{ background: '$white', color: '$font', fontWeight: 'bold', width: 'min-content' }}
            size={'md'}
            iconRight={<Discount set="light" primaryColor="blueviolet" />}>
            Buy now
          </Button>
          <Button className='button' shadow auto ghost
            color={'secondary'} css={{ color: '$accents5', fontWeight: 'bold', width: 'min-content' }}
            size={'md'}
            iconRight={<Buy set="light" primaryColor="blueviolet" />}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
