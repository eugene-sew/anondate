const generateRandomProfiles = (count) => {
  const profiles = [];

  for (let i = 1; i <= count; i++) {
    const profile = {
      id: i,
      avatar: `https://example.com/avatar${i}.jpg`,
      username: `User${i}`,
      age: Math.floor(Math.random() * 20) + 20, // Random age between 20 and 39
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };

    profiles.push(profile);
  }

  return profiles;
};

const profiles = generateRandomProfiles(10);

export default profiles;
