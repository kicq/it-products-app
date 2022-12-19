import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  size?: 'small' | 'medium'
  color?: 'secondary' | 'red' | 'gray' | 'green' | 'primary'
  href?: string
}