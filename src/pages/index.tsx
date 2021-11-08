import Head from 'next/head'
import Logo from '../assets/lbc-logo.webp'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import React,{ useEffect, FC } from "react"
import { GetServerSideProps } from "next"
import { getLoggedUserId } from '../utils/getLoggedUserId'
import {ConversationsListView} from '../containers/ConversationsListView/ConversationsListView'
import FetchMessageFromConversationId from '../services/messages'
import { ALL_CONVERSATIONS_FROM_USER_ID } from '../utils/urlsUtils'
import { Conversation } from '../types/conversation'
export interface fnProps {
  conversations: Conversation[];
}

const Home: FC<fnProps> = ({ conversations }) => {
  const year = new Date().getFullYear()
    

    const displayConvs = conversations.map((conv, index) =>{
      return <ConversationsListView {...conv} key={index} />
    }) 
    useEffect(()=>{
    }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
      </Head>
      <nav id={styles.navbar}>
        <li className={styles.logo}>
          <Image src={Logo} alt="Leboncoin's logo" width={400} height={125} />
        </li>
      </nav>
        <div className={styles.convDisplay}>
          <h1>Conversations</h1>
          { displayConvs }
        </div>
      {/* <footer className={styles.footer}>
        &copy; leboncoin - {year}
      </footer> */}
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const conversations = await FetchMessageFromConversationId(ALL_CONVERSATIONS_FROM_USER_ID,getLoggedUserId())
  
  return {
    props: { conversations }
  }
}

export default Home