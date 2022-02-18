import styles from './index.module.css'
import cn from 'classnames'
import React from 'react';

type AlertType = 'success' | 'error';

export default function Alert({ children, type }: { children: React.ReactNode; type: AlertType; }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}