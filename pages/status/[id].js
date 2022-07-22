import Twit from "components/Twit"

export default function TweetPage(props) {
  console.log(props.createdAt)
  return (
    <>
      <Twit
        avatar={props.avatar}
        userName={props.userName}
        content={props.content}
        createdAt={props.createdAt}
        img={props.img}
        id={props.id}
      />
      <style jsx>{``}</style>
    </>
  )
}

export async function getServerSideProps(context) {
  const { params, res } = context
  const { id } = params

  const apiResponse = await fetch(`http://localhost:3000/api/tweets/${id}`)
  if (apiResponse.ok) {
    const props = await apiResponse.json()
    return { props }
  }
  if (res) {
    res.writeHead(301, { location: "/home" }).end()
  }
}
