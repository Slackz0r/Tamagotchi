class Pet {
  constructor(name, animalType) {
    this.name = name;
    this.animalType = animalType;
    this.happiness = 50;
    this.tiredness = 50;
    this.hunger = 50;
    this.loneliness = 50;
  }

  nap() {
    this.tiredness -= 40;
    this.happiness -= 10;
    this.hunger += 10;
    this.loneliness += 10;

    alert(`${this.name} took a nap!`);
  }
  play() {
    if (this.tiredness < 70) {
      this.happiness += 30;
      this.hunger += 20;
      this.tiredness += 20;
      this.loneliness -= 10;

      alert(`You play with ${this.name}!`);
    } else {
      alert(`${this.name} is too tired to play`);
    }
  }
  feed() {
    this.hunger -= 60;
    this.tiredness += 10;

    alert(`You feed ${this.name}`);
  }
}

const acquireButton = document.querySelector("#acquire-button");
const petList = document.querySelector("#pet-list");

acquireButton.addEventListener("click", () => {
  let petName = document.querySelector("#name-input").value;
  let petType = document.querySelector("#type-input").value;

  if (!petName) {
    alert("Your pet must have a name");
  }
  if (!petType) {
    alert("Your pet must have a type");
  }

  let pet = new Pet(petName, petType);

  let petImage = new Image(200);
  petImage.classList.add("petImage");
  if (petType === "Cat") {
    petImage.src =
      "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg";
  } else if (petType === "Dog") {
    petImage.src =
      "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e";
  } else if (petType === "Fish") {
    petImage.src =
      "https://png.pngtree.com/png-clipart/20211116/original/pngtree-rohu-carp-fish-png-png-image_6940208.png";
  }

  let petHappiness = document.createElement("progress");
  petHappiness.value = pet.happiness;
  petHappiness.max = 100;

  let petTiredness = document.createElement("progress");
  petTiredness.value = pet.tiredness;
  petTiredness.max = 100;

  let petHunger = document.createElement("progress");
  petHunger.value = pet.hunger;
  petHunger.max = 100;

  let petLoneliness = document.createElement("progress");
  petLoneliness.value = pet.loneliness;
  petLoneliness.max = 100;

  let petContainer = document.createElement("div");
  petContainer.classList.add("pet-container");
  let buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  let napButton = document.createElement("button");
  let playButton = document.createElement("button");
  let feedButton = document.createElement("button");
  let petInfo = document.createElement("p");
  let li = document.createElement("li");
  napButton.innerText = `Take a nap`;
  playButton.innerText = `Play`;
  feedButton.innerText = `Feed pet`;
  petInfo.innerText = `Name: ${pet.name}
  Type: ${pet.animalType}
  `;

  buttonContainer.append(napButton, playButton, feedButton);
  petContainer.append(petInfo);
  petContainer.append("Happiness: ", petHappiness);
  petContainer.append("Tiredness: ", petTiredness);
  petContainer.append("Hunger: ", petHunger);
  petContainer.append("Loneliness: ", petLoneliness);
  petContainer.append(buttonContainer);
  li.append(petContainer);
  li.append(petImage);
  petList.append(li);

  napButton.addEventListener("click", () => {
    pet.nap();
    petHappiness.value = pet.happiness;
    petTiredness.value = pet.tiredness;
    petHunger.value = pet.hunger;
    petLoneliness.value = pet.loneliness;
  });

  playButton.addEventListener("click", () => {
    pet.play();
    petHappiness.value = pet.happiness;
    petTiredness.value = pet.tiredness;
    petHunger.value = pet.hunger;
    petLoneliness.value = pet.loneliness;
  });

  feedButton.addEventListener("click", () => {
    pet.feed();
    petTiredness.value = pet.tiredness;
    petHunger.value = pet.hunger;
    console.log(pet);
  });

  setInterval(function () {
    petHappiness.value -= 1;
    petTiredness.value += 1;
    petHunger.value += 1;
    petLoneliness.value += 1;
  }, 1000);

  setInterval(function () {}, 10);
});
