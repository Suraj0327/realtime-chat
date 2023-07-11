const users = [
    {
      id: 1,
      username: 'JohnDoe',
      name: 'John Doe',
      avatar: 'https://example.com/avatar1.png'
    },
    {
      id: 2,
      username: 'JaneSmith',
      name: 'Jane Smith',
      avatar: 'https://example.com/avatar2.png'
    },
    {
      id: 3,
      username: 'AlexBrown',
      name: 'Alex Brown',
      avatar: 'https://example.com/avatar3.png'
    }
  ];
  
  const messages = [
    {
      id: 1,
      senderId: 1,
      receiverId: 2,
      text: 'Hey Jane, how are you?',
      timestamp: Date.now() - 3600000 // 1 hour ago
    },
    {
      id: 2,
      senderId: 2,
      receiverId: 1,
      text: 'Hi John! I\'m doing well, thanks for asking.',
      timestamp: Date.now() - 3000000 // 50 minutes ago
    },
    {
      id: 3,
      senderId: 3,
      receiverId: 1,
      text: 'Hello John, long time no see!',
      timestamp: Date.now() - 6000000 // 1 hour and 40 minutes ago
    },
    {
      id: 4,
      senderId: 1,
      receiverId: 3,
      text: 'Hey Alex! Yeah, it has been a while. How have you been?',
      timestamp: Date.now() - 9000000 // 2 hours and 30 minutes ago
    }
  ];
  
  module.exports = users;

  