import Avatar from "components/Avatar"

export default function Twit({ createdAt, id, userName, avatar, content }) {
  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> . </span>
            <date>{createdAt}</date>
          </header>
          <p>{content}</p>
        </section>
      </article>

      <style jsx>{`
        article {
          border-bottom: 2px solid #eee;
          display: flex;
          padding: 10px 15px;
        }

        div {
          padding-right: 10px;
        }

        p {
          line-height: 1.3125;
          margin: 0;
        }

        date {
          color: #555;
          fotn-size: 14px;
        }
      `}</style>
    </>
  )
}
