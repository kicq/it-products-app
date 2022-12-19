import { ParagraphProps } from './Tag.props';
import styles from './Tag.module.css'
import cn from 'classnames'

export const Tag = ({ size = 'small', color = 'secondary', href, children, className, ...props}: ParagraphProps) => {
  return (
    <p
      className={cn(styles.tag, {
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.secondary]: color === 'secondary',
        [styles.gray]: color === 'gray',
        [styles.green]: color === 'green',
        [styles.red]: color === 'red',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      { 
        href 
          ? <a href={href}>{children}</a> 
          : <>{children}</>}
    </p>
  )
}