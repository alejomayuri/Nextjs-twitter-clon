const timeline = [
  {
    id: 1,
    username: "@johndoe",
    name: "John Doe",
    avatar: "https://picsum.photos/200/300",
    message: "Hello, how are you?",
  },
  {
    id: 2,
    username: "@alejo",
    name: "Alejo",
    avatar: "https://picsum.photos/200/300",
    message: "I am fine, thank you!",
  },
  {
    id: 3,
    username: "@diego",
    name: "Diego",
    avatar: "https://picsum.photos/200/300",
    message: "Chacoooo!",
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(timeline))
}
