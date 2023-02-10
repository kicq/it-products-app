import { SideBarProps } from './SideBar.props'
import styles from './SideBar.module.css'
import cn from 'classnames'
import { Menu } from './../Menu/Menu';

export const SideBar = ({ ...props }: SideBarProps) => {
  return (
    <div {...props}>
      <Menu />
    </div>
  )
}
