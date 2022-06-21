import { styled } from '@stitches/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Link } from '../src/components/Link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jakzaizzat</title>
        <meta
          name="description"
          content="Freelance Frontend Developer from Malaysia"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Title>Jakz</Title>
        <p>Freelance Frontend Developer from Malaysia 🇲🇾</p>

        <h2>Work</h2>
        <ul>
          <li>
            <Link
              href="https://gallery.so/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="https://summerscan.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Summerscan
            </Link>
          </li>
          <li>
            <Link
              href="https://www.chibinouns.wtf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chibinouns
            </Link>
          </li>
          <li>
            <Link
              href="https://www.bettertradeoff.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              BTO
            </Link>
          </li>
          <li>
            <Link
              href="https://taiger.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Taiger
            </Link>
          </li>
        </ul>

        <Link>📨 Contact through email</Link>

        <p>[ This website still in progress ]</p>
      </Container>
    </div>
  )
}

export default Home

const Container = styled('main', {
  maxWidth: '960px',
  margin: '0 auto',
  padding: 20,
})

const Title = styled('h1', {
  margin: '0',
  fontWeight: 'bold',
})
