import { useEffect, useState } from "react"

import AppLayout from "components/AppLayout"
import Twit from "components/Twit"
import useUser from "hooks/useUser"
import { fetchLatestTwitts } from "../../firebase/client"
import Link from "next/link"
import Create from "components/Icons/Create"
import Home from "components/Icons/Home"
import Search from "components/Icons/Search"
import { colors } from "styles/theme"
import Head from "next/head"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  const user = useUser()

  useEffect(() => {
    user && fetchLatestTwitts().then((twitts) => setTimeline(twitts))
  }, [user])

  return (
    <>
      <AppLayout>
        <Head>
          <title>Inicio</title>
        </Head>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(
            ({ createdAt, img, id, userName, avatar, content, userId }) => {
              return (
                <Twit
                  avatar={avatar}
                  createdAt={createdAt}
                  id={id}
                  img={img}
                  key={id}
                  content={content}
                  userName={userName}
                  userId={userId}
                />
              )
            }
          )}
        </section>
        <nav>
          <Link href="/home">
            <a>
              <Home width={32} height={32} stroke="#09f" />
            </a>
          </Link>
          <Link href="/search">
            <a>
              <Search width={32} height={32} stroke="#09f" />
            </a>
          </Link>
          <Link href="/compose/tweet">
            <a>
              <Create width={32} height={32} stroke="#09f" />
            </a>
          </Link>
        </nav>
      </AppLayout>

      <style jsx>{`
        header {
          align-items: center;
          background-color: #ffffff;
          border-bottom: 1px solid #eee;
          display: flex;
          height: 49px;
          position: sticky;
          top: 0;
          width: 100%;
        }

        section {
          flex: 1;
        }

        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }

        nav {
          background-color: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          display: flex;
          height: 49px;
          position: sticky;
          width: 100%;
        }

        nav a {
          align-items: center;
          display: flex;
          flex: 1 1 auto;
          flex: 100%;
          justify-content: center;
        }

        nav a:hover {
          background: radial-gradient(#0099ff22 15%, transparent 16%);
          background-size: 180px 180px;
          background-position: center;
        }

        nav a:hover > :global(svg) {
          stroke: ${colors.primary};
        }
      `}</style>
    </>
  )
}
