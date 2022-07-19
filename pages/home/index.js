import { useEffect, useState } from "react"

import AppLayout from "components/AppLayout"
import Twit from "components/Twit"
import useUser from "hooks/useUser"
import { fetchLatestTwitts } from "../../firebase/client"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  const user = useUser()

  useEffect(() => {
    user && fetchLatestTwitts().then((twitts) => setTimeline(twitts))
  }, [user])

  return (
    <>
      <AppLayout>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(
            ({ createdAt, id, userName, avatar, content, userId }) => {
              return (
                <Twit
                  avatar={avatar}
                  createdAt={createdAt}
                  id={id}
                  key={id}
                  content={content}
                  userName={userName}
                  userId={userId}
                />
              )
            }
          )}
        </section>
        <nav></nav>
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

        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }

        nav {
          background-color: #fff;
          bottom: 0;
          border-top: 1px solid #eee;
          height: 49px;
          position: sticky;
          width: 100%;
        }
      `}</style>
    </>
  )
}
