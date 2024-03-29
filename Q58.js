"use strict";
// Q58: Average score calculator:Write a simple program that can take lots of scores and find their average.
// This program calculates the average of all scores
function averageScore(...scores) {
    // Adds all nscores together and divides by the number scores
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
// examples: finding the average of six scores
console.log(averageScore(80, 90, 34, 56, 67, 78));
