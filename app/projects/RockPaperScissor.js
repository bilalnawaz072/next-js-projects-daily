"use client";

import React, { useState } from "react";

export default function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  const [gamePlayed, setGamePlayed] = useState(false);
  const [difficulty, setDifficulty] = useState("Medium");
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const choices = ["Rock", "Paper", "Scissors"];

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setDraws(draws + 1);
      return "Draw!";
    }
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Scissors" && computer === "Paper") ||
      (player === "Paper" && computer === "Rock")
    ) {
      setWins(wins + 1);
      return "You Win!";
    } else {
      setLosses(losses + 1);
      return "You Lose!";
    }
  };

  const handlePlay = () => {
    let randomChoice;
    if (difficulty === "Easy") {
      const WinningChoices = {
        Rock: "Scissors",
        Scissors: "Paper",
        Paper: "Rock",
      };
      randomChoice = WinningChoices[playerChoice];
    } else if (difficulty === "Medium") {
      randomChoice = choices[Math.floor(Math.random() * 3)];
    } else {
      const losingChoices = {
        Rock: "Paper",
        Paper: "Scissors",
        Scissors: "Rock",
      };
      randomChoice = losingChoices[playerChoice];
    }

    const gameResult = determineWinner(playerChoice, randomChoice);
    setGameHistory([...gameHistory, gameResult]);

    setComputerChoice(randomChoice);
    setResult(determineWinner(playerChoice, randomChoice));
    setGamePlayed(true);
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-green-500 h-screen flex justify-center items-center">
      <div className="bg-blue-800 p-8 rounded-xl border-2 border-yellow-300 shadow-2xl">
        <div>
          <label className="text-yellow-300  p-8">Difficulty Level:</label>
          <select
            className="bg-yellow-300 p-1 rounded-xl"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            disabled={false}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <h1
          className={`text-2xl text-yellow-300 mb-8 text-center mt-4 transition-all duration-500 ease-in-out ${
            result
              ? "opacity-100 transform translate-y-0"
              : "opacity-100 transform translate-y-0"
          }`}
        >
          {result || "Choose Your Weapon!"}
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {choices.map((choice) => (
            <button
              key={choice}
              className={`${
                playerChoice === choice
                  ? "bg-green-300 bg-blue-800 p-4 rounded-xl"
                  : "bg-yellow-300 p-4 rounded-xl"
              }`}
              onClick={() => setPlayerChoice(choice)}
            >
              <div className="text-center mb-2">
                <span className="block text-xl">
                  {choice === "Rock" ? "✊" : choice === "Paper" ? "✋" : "✌️"}
                </span>
              </div>
              {choice}
            </button>
          ))}
        </div>

        <div
          className={`transition-all duration-500 ease-in-out flex flex-col items-center mt-8 ${
            gamePlayed
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <p className="text-yellow-300 mb-2">Opponent Move:</p>
          <div className="inline-block bg-yellow-300 p-4 rounded-xl">
            <div className="text-center mb-2">
              <span className="block text-xl">
                {computerChoice === "Rock"
                  ? "✊"
                  : computerChoice === "Paper"
                  ? "✋"
                  : "✌️"}
              </span>
            </div>
            {computerChoice}
          </div>
        </div>

        <div className="mt-8 flex justify-between flex-col">
          <button
            className="bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg text-white"
            onClick={handlePlay}
            disabled={!playerChoice}
          >
            Play
          </button>
          <div className="mt-8 space-y-2 flex flex-col items-center bg-blue-600 p-4 rounded-lg">
            <h3 className="text-yellow-500 text-lg font-bold">Score</h3>
            <div className="grid grid-cols-3 space-x-2 ">
              <p className="text-yellow-300 text-sm">Wins: {wins}</p>
              <p className="text-yellow-300 text-sm ">Losses: {losses}</p>
              <p className="text-yellow-300 text-sm">Draws: {draws}</p>
            </div>
          </div>
          <div className="mt-4 space-y-2 flex flex-col items-center bg-blue-600 p-4 rounded-lg">
            <h3 className="text-yellow-500 text-lg font-bold">Game History</h3>
            <div className="overflow-y-auto h-20">
              <div className="flex flex-col-reverse h-full">
                {gameHistory.slice(-4).map((result, index) => (
                  <p key={index} className="text-yellow-300 text-sm">
                    {result}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
