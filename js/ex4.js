const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98],
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100],
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100],
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85],
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98],
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90],
  },
];

function display(updatedList) {
  updatedList.forEach((student) => {
    console.log(`Full name (last, first): ${student.lastName}, ${student.firstName}`);
    console.log(`Updated scores are: ${student.scores.join(", ")}`);
  });
}

function getAvg(scores) {
  const total = scores.reduce((a, b) => a + b, 0);
  return total / scores.length;
}

const extraPoints = studentList.map((student) => {
  const added = student.scores.map((score) => (score += 5));
  return { ...student, scores: added.concat(getAvg(added)) };
});

display(extraPoints);
