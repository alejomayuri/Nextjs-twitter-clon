import Avatar from "components/Avatar"
import useTimeAgo from "hooks/useTimeAgo"

export default function Twit({
  avatar,
  userName,
  content,
  createdAt,
  img,
  id,
}) {
  const timeago = useTimeAgo(createdAt)

  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <time>{timeago}</time>
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

        time {
          color: #555;
          fotn-size: 14px;
          padding-left: 5px;
        }
      `}</style>
    </>
  )
}
