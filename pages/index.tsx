import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button, Htag, Paragraph, Rating, Tag } from '../components'

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(1)
  
  return (
    <>
      <Htag tag="h2">{'counter'}</Htag>
      <Button appearance="primary" className="okey" arrow="right">
        Кнопка
      </Button>
      <Button appearance="secondary" arrow="down">
        Кнопка
      </Button>
      <Paragraph size="small">Small</Paragraph>
      <Paragraph>Medium</Paragraph>
      <Paragraph size="large">Large</Paragraph>
      <Tag size="small" color="red">
        Red
      </Tag>
      <Tag>Default</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="gray">Gray</Tag>
      <Rating rating={rating} setRating={setRating} isEditable />
    </>
  )
}
