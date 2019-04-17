import React from 'react'
import randomColor from 'randomcolor'

const BookSVG = ({book}) => {
  const backgroundColor = randomColor({
    lumosity: 'light',
    hue: 'random'
  })
  const topColor = randomColor({
    lumosity: 'dark',
    hue: backgroundColor
  })
  return (
    <svg width="100%" height="100%" viewBox="970 790 3000 450" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <g>
        <path d="M1503.26,789.27l-0.406,448.705l1928.6,1.747l0.406,-448.705l-1928.6,-1.747Z"/>
        <path d="M1503.25,795.305l-0.395,436l1928.6,1.747l0.395,-436l-1928.6,-1.747Z" fill={backgroundColor} />
        <path d="M1503.23,823.212l-0.345,380.953l1928.6,1.747l0.345,-380.953l-1928.6,-1.747Z"  fill={topColor} />
        <path d="M1605.87,825.355l-0.345,380.953l53.573,0.049l0.345,-380.953l-53.573,-0.049Z" fill="url(#_Linear2)"/>
        <path d="M1706.87,825.447l-0.345,380.952l53.573,0.049l0.345,-380.953l-53.573,-0.048Z" fill="url(#_Linear2)"/>
        <text x="1816px" y="895.574px" font-size='6em'>Title: {book.title}</text>
        <path d="M3181.01,824.66l-0.345,380.953l53.572,0.048l0.345,-380.952l-53.572,-0.049Z" fill="url(#_Linear2)"/>
        <path d="M3282.01,824.752l-0.345,380.952l53.572,0.049l0.345,-380.953l-53.572,-0.048Z" fill="url(#_Linear2)"/>
      </g>
      <defs>
        <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-272.495,-0.246659,0.246659,-272.495,3340.93,1207.83)">
          <stop offset="0" stop-color="#00602c" stop-opacity="1"/>
          <stop offset="1" stop-color="#40a629" stop-opacit="1"/>
        </linearGradient>
        <linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.0113714,-12.5589,12.5589,0.0113714,1603.86,837.916)">
          <stop offset="0" stop-color="#665e10" stop-opacity="1"/>
          <stop offset="1" stop-color="#d3c29b" stop-opacity="1"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default BookSVG
