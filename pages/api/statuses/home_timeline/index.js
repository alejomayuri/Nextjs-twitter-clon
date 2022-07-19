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
  {
    id: 4,
    username: "@johndoe",
    name: "John Doe",
    avatar: "https://picsum.photos/200/300",
    message: "Hello, how are you?",
  },
  {
    id: 5,
    username: "@alejo",
    name: "Alejo",
    avatar: "https://picsum.photos/200/300",
    message: "I am fine, thank you!",
  },
  {
    id: 6,
    username: "@diego",
    name: "Diego",
    avatar: "https://picsum.photos/200/300",
    message: "Chacoooo!",
  },
  {
    id: 7,
    username: "@johndoe",
    name: "John Doe",
    avatar: "https://picsum.photos/200/300",
    message: "Hello, how are you?",
  },
  {
    id: 8,
    username: "@alejo",
    name: "Alejo",
    avatar: "https://picsum.photos/200/300",
    message: "I am fine, thank you!",
  },
  {
    id: 9,
    username: "@diego",
    name: "Diego",
    avatar: "https://picsum.photos/200/300",
    message: "Chacoooo!",
  },
  {
    id: 10,
    username: "@johndoe",
    name: "John Doe",
    avatar: "https://picsum.photos/200/300",
    message: "Hello, how are you?",
  },
  {
    id: 11,
    username: "@alejo",
    name: "Alejo",
    avatar: "https://picsum.photos/200/300",
    message: "I am fine, thank you!",
  },
  {
    id: 12,
    username: "@diego",
    name: "Diego",
    avatar: "https://picsum.photos/200/300",
    message: "Chacoooo!",
  },
  {
    id: 13,
    username: "@johndoe",
    name: "John Doe",
    avatar: "https://picsum.photos/200/300",
    message: "Hello, how are you?",
  },
  {
    id: 14,
    username: "@alejo",
    name: "Alejo",
    avatar: "https://picsum.photos/200/300",
    message: "I am fine, thank you!",
  },
  {
    id: 15,
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
