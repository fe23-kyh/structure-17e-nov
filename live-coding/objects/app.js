let fruits = [
  { name: "Apple", color: "Red" },
  { name: "Pinapple", color: "Yellow"},
  { name: "Orange", color: "Orange"},
  { name: "Pear", color: "Green"} 
];

console.log(fruits);

/*for(let i = 0; i < fruits.length; i++) {
  console.log(`${fruits[i].name} has the color ${fruits[i].color}`);
}*/

for(let fruit of fruits) {
  console.log(`${fruit.name} has the color ${fruit.color}`);
}



const profileCard = document.querySelector(".profile-card");

const facebookProfile = {
  images: {
    path: "assets/awesome.png",
    timeTaken: "2023-11-17"
  },
  username: "I am awesome",
  email: "awesome@awesome.awesome",
  loggedIn: true,
  followers: 2000,
  status: "Chuck Norris",
  friends: [
    { name: "Greta" },
    { name: "Bertil" },
    { name: "Yves" }
  ]
};


function setProfileCardContent(profileContent) {
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const h3 = document.createElement('h3');
  const friendList = document.createElement('ul');

  h2.textContent = profileContent.username;
  p.textContent = "Followers: " + profileContent.followers;
  h3.textContent = "Friend list";

  for(let friend of profileContent.friends) {
    const li = document.createElement('li');
    li.textContent = friend.name;

    friendList.append(li);
  }

  profileCard.append(h2, p, h3, friendList);
}

setProfileCardContent(facebookProfile);