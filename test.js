function calculateAge() {
    let birthyEar = 1996
    let currentYear = 2022
    let realAge = currentYear - birthyEar
    let ageDisplay = `You are ${realAge} years old.`
    return ageDisplay
}

console.log(calculateAge())