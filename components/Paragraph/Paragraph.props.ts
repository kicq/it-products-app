import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';


export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
}