const getColor = () => {
    /*
    - use math.random to get a random numeber.
    - multiply by 1677215 because we need a number which can be converted to hexadecimal code
    - not use math.floor to get only number 
    */
    const randomNumber = Math.floor(Math.random() * 1677215);

    /*
    - now converting random numbers into hex code
    - # is used before hex code
    - noe convert random number to string : 16 used because we need hexadecimal number
    */
    const randomCode = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').innerText = randomCode

    // to copy the hex code in clipboard
    navigator.clipboard.writeText(randomCode)
}

document.getElementById('btn').addEventListener('click', getColor)

// initial call
getColor()

