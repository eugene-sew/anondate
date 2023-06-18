const conversation = [
  {
    id: "1",
    createdAt: "2023-06-16T10:00:00Z",
    participants: ["1", "2"],
    messages: [
      {
        id: "1",
        content: "Hello!",
        createdAt: "2023-06-16T10:00:00Z",
        senderId: "1",
        receiverId: "2",
        conversationId: "1",
      },
      {
        id: "2",
        content: "How are you?",
        createdAt: "2023-06-16T10:05:00Z",
        senderId: "2",
        receiverId: "1",
        conversationId: "1",
      },
    ],
  },
  {
    id: "2",
    createdAt: "2023-06-16T11:00:00Z",
    participants: ["3", "4"],
    messages: [
      {
        id: "3",
        content: "I'm good, thanks!",
        createdAt: "2023-06-16T10:10:00Z",
        senderId: "1",
        receiverId: "2",
        conversationId: "2",
      },
      {
        id: "4",
        content: "What have you been up to?",
        createdAt: "2023-06-16T10:15:00Z",
        senderId: "2",
        receiverId: "1",
        conversationId: "2",
      },
    ],
  },
  {
    id: "3",
    createdAt: "2023-06-16T12:00:00Z",
    participants: ["1", "3"],
    messages: [
      {
        id: "6",
        content: "That sounds interesting!",
        createdAt: "2023-06-16T10:25:00Z",
        senderId: "3",
        receiverId: "1",
        conversationId: "3",
      },
      {
        id: "5",
        content: "Not much, just working on a project.",
        createdAt: "2023-06-16T10:20:00Z",
        senderId: "1",
        receiverId: "3",
        conversationId: "3",
      },
    ],
  },
  {
    id: "4",
    createdAt: "2023-06-16T13:00:00Z",
    participants: ["1", "4"],
    messages: [
      {
        id: "7",
        content: "Yes, it's quite challenging but rewarding.",
        createdAt: "2023-06-16T10:30:00Z",
        senderId: "1",
        receiverId: "4",
        conversationId: "4",
      },
      {
        id: "8",
        content: "I'm glad to hear that. Best of luck with your project!",
        createdAt: "2023-06-16T10:35:00Z",
        senderId: "4",
        receiverId: "1",
        conversationId: "4",
      },
    ],
  },
  {
    id: "5",
    createdAt: "2023-06-16T14:00:00Z",
    participants: ["3", "1"],
    messages: [
      {
        id: "9",
        content: "Thank you! How about you? How's your day going?",
        createdAt: "2023-06-16T10:40:00Z",
        senderId: "1",
        receiverId: "3",
        conversationId: "5",
      },
      {
        id: "10",
        content: "It's been a busy day, but I'm managing. Thanks for asking!",
        createdAt: "2023-06-16T10:45:00Z",
        senderId: "3",
        receiverId: "1",
        conversationId: "5",
      },
    ],
  },
];

export default conversation;
