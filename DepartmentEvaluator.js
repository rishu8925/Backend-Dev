const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let i = 0; i < departments.length; i++) {
    let [dept, score] = departments[i];
    let performance;

    if (score >= 90) performance = "Excellent";
    else if (score >= 75) performance = "Good";
    else if (score >= 60) performance = "Average";
    else performance = "Needs Improvement";

    console.log(`${dept}: ${score} → ${performance}`);
}
