import promptSync from "prompt-sync";
const prompt = promptSync();

const move: Array<string> = ["Stone", "Paper", "Scissor"];

// for user move input
const handleInput = (promptMessage: string): void => {
  const randomNumber: number = Math.floor(Math.random() * 3);
  const userPromptString: string = prompt(promptMessage);
  const userPrompt: number = parseInt(userPromptString);

  if (userPrompt > 2 || userPrompt < 0 || isNaN(userPrompt)) {
    console.log("Invalid Value! Please enter a valid number between 0-2");
    handleInput(
      'For "Stone" type "0", For "Paper" type "1", For "Scissors" type "2"'
    );
  } else {
    const userMove: string = move[userPrompt];
    const aiMove: string = move[randomNumber];
    performAction(userMove, aiMove);
  }
};

// to check you wons
const performAction = (user: string, ai: string): void => {
  // player wins
  if (user === "Paper" && ai === "Stone") {
    won(user, ai);
  } else if (user === "Scissor" && ai === "Paper") {
    won(user, ai);
  } else if (user === "Stone" && ai === "Scissor") {
    won(user, ai);
  }

  // ai wins
  if (user === "Stone" && ai === "Paper") {
    lose(user, ai);
  } else if (user === "Paper" && ai === "Scissor") {
    lose(user, ai);
  } else if (user === "Scissor" && ai === "Stone") {
    lose(user, ai);
  }

  // A tie
  if (user === "Stone" && ai === "Stone") {
    tie(user, ai);
  } else if (user === "Scissor" && ai === "Scissor") {
    tie(user, ai);
  } else if (user === "Paper" && ai === "Paper") {
    tie(user, ai);
  }
};

// user won
const won = (user: string, ai: string): void => {
  console.log(`You ${user} and ai ${ai}`);
  console.log("Congrats you won");
  wanaPlayAgain();
};

// user lose
const lose = (user: string, ai: string): void => {
  console.log(`You ${user} and ai ${ai}`);
  console.log("Boo! You lose");
  wanaPlayAgain();
};

// tie
const tie = (user: string, ai: string): void => {
  console.log(`You ${user} and ai ${ai}`);
  console.log("Its a tie");
  wanaPlayAgain();
};

// if user wants to play again
const wanaPlayAgain = (): void => {
  const playAgain: string = prompt(
    'Wanna play again: For "Yes" type "y", For "Yes" type "n"'
  );

  if (playAgain === "y") {
    handleInput(
      'For "Stone" type "0", For "Paper" type "1", For "Scissors" type "2"'
    );
  } else if (playAgain === "n") {
    console.log("OK. I think this game is not interesting 🥹🥹🥹");
  } else {
    console.log("Invalid value! please choose either yes or no");
    wanaPlayAgain();
  }
};

handleInput(
  'For "Stone" type "0", For "Paper" type "1", For "Scissors" type "2"'
);
