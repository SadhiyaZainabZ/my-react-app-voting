import React, { useState } from "react";

export default function VotingApp() {
 
  const [votes, setVotes] = useState({
    Alice: 0,
    Bob: 0,
    Charlie: 0,
  });

 
  const handleVote = (candidate) => {
    setVotes({ ...votes, [candidate]: votes[candidate] + 1 });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-5">
      <h1 className="text-3xl font-bold mb-6">Simple Voting Application</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(votes).map((candidate) => (
          <div
            key={candidate}
            className="bg-white shadow-md p-6 rounded-2xl text-center"
          >
            <h2 className="text-xl font-semibold mb-2">{candidate}</h2>
            <p className="text-lg mb-4">Votes: {votes[candidate]}</p>
            <button
              onClick={() => handleVote(candidate)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Vote
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-white shadow rounded-xl">
        <h3 className="text-xl font-semibold mb-2">Total Votes</h3>
        <p className="text-lg">
          {Object.values(votes).reduce((a, b) => a + b, 0)}
        </p>
      </div>
    </div>
  );
}
