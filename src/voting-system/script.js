// 1. Initialize the poll variable
const poll = new Map();

// 2 & 3. Define addOption function
function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  // Use a Set to track unique voter IDs for this option
  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// 4 & 5. Define vote function
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// 8. Define displayResults function
function displayResults() {
  let results = "Poll Results:";

  for (let [option, voters] of poll) {
    results += `\n${option}: ${voters.size} votes`;
  }

  return results;
}

// 6 & 7. Initialize with at least 3 options and 3 votes
addOption("Turkey");
addOption("Morocco");
addOption("Malaysia");

vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");
