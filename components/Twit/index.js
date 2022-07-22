import Avatar from "components/Avatar"
import useTimeAgo from "hooks/useTimeAgo"
import useDateTimeFormat from "hooks/useDateTimeFormat"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Twit({
  avatar,
  userName,
  content,
  createdAt,
  img,
  id,
}) {
  const createdAtFormatted = useDateTimeFormat(createdAt)
  const router = useRouter()
  const timeago = useTimeAgo(createdAt)

  const [timeClient, setTimeClient] = useState(null)
  const [createdAtFormattedClient, setCreatedAtFormattedClient] = useState(null)

  useEffect(() => {
    setTimeClient(timeago)
    setCreatedAtFormattedClient(createdAtFormatted)
  }, [createdAt])

  const handleArticleClick = (e) => {
    e.preventDefault()
    router.push(`/status/${id}`)
  }

  return (
    <>
      <article onClick={handleArticleClick}>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> &middot; </span>
            <Link href={`/status/${id}`}>
              <a>
                <time title={createdAtFormattedClient}>{timeClient}</time>
              </a>
            </Link>
          </header>
          <p>{content}</p>
          {img && <img src={img} alt={content} />}
        </section>
      </article>

      <style jsx>{`
        article {
          border-bottom: 2px solid #eee;
          display: flex;
          padding: 10px 15px;
        }

        article:hover {
          background-color: #f5f8fa;
          cursor: pointer;
        }

        img {
          border-radius: 10px;
          height: auto;
          margin-top: 10px;
          width: 100%;
        }

        div {
          padding-right: 10px;
        }

        p {
          line-height: 1.3125;
          margin: 0;
        }

        a {
          color: #555;
          font-size: 16px;
          padding-left: 5px;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
