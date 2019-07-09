let startGame = confirm('Do you want to play a game?');
let multiplierPrize = 2,
    attempts = 3,
    plusRange = 4,
    defaultAttempts = 3,
    defaultPrize = 100,
    defaultRange = 8,
    newPrize = defaultPrize,
    userPrize = 0;

if (!startGame) {
    alert('You did not become a billionaire, but can.');
} else {
    do {
        for (defaultAttempts = attempts; defaultAttempts > 0; defaultAttempts--) {
            let random = Math.floor(Math.random() * defaultRange);
            let user = prompt(
`Enter the number between 0 and ${defaultRange}
Attempts left: ${defaultAttempts}
Total prize: ${userPrize}$
Possible prize on current attempt: ${defaultPrize}$`, '');
            if (user === random) {
                userPrize += newPrize;
                newPrize *= multiplierPrize;
                random = Math.floor(Math.random() * defaultRange);
                startGame = confirm(
`Congratulation, you won! Your prize is: ${userPrize}$. Do you want to continue?`);
                if (!startGame) {
                    break;
                } else {
                    defaultRange += plusRange;
                    defaultAttempts = attempts;
                    defaultPrize *= multiplierPrize;
                    newPrize = defaultPrize;
                }
            } else {
                newPrize /= multiplierPrize;
            }
        }
        alert(
`Thank you for your participation. Your prize is: ${userPrize}$`);
        startGame = confirm('Do you want to play again?');
    } while (startGame);
}