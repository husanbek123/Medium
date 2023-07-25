import React from 'react'
import styles from './index.module.scss'
import Image from 'next/image'

type Props = {

}

export default function Logo({}: Props) {
  return (
    <div className={styles.logo}>
        <Image src={"/logo.svg"} alt='' width={100} height={60} />
        <h2>Medium</h2>
    </div>
  )
}