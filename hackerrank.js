function beautifulDays(i, j, k) {
    let days = [];
    let bdays = [];
    for (let a = i; a <= j; a++) {
        let num1 = a.toString();
        let conv1 = num1.split("");
        let n1 = conv1.reverse();
        let joint = n1.join("");

        days.push(n1);
        if(Math.abs(joint - a) % k === 0) {
            bdays.push(a)
        }
    }
    console.log(bdays.length)
}

beautifulDays(49860, 205494, 155635764)