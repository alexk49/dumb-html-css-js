let countdown = 10;

for (let i = 0; i < countdown; i++) {
    console.log(countdown - i);
}

// alternate version
for (countdown; countdown > 0; countdown -= 1) {
    console.log(countdown);
}
