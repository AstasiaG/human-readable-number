module.exports = function toReadable (number) {
  const a = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  const b = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const c = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  const d = ['hundred', 'thousand'];

  numberArray = Array.from(number.toString());

  //однозначное
  if(numberArray.length === 1) {  
    return `${a[(+numberArray[0])]}`;

    //двузначное
  } else if(numberArray.length === 2){
    if(number > 10 && number < 20) {
        let n = number % 10;
        return `${b[n - 1]}`;

    } else {
        let n = number % 10;
        let numD = Math.trunc(number / 10);
        if( n === 0 ) {
            return `${c[(numD - 1)]}`;
        } else {
            return `${c[(numD - 1)]} ${a[n]}`;
        }
    }

    //трехзначное
  } else if(numberArray.length === 3) {
    let h = Math.trunc(number / 100);
    let numD = number % 100;

    if(numD === 0) {
        return `${a[h]} ${d[0]}`

    } else if(numD > 10 && numD < 20) {
        let n = numD % 10;
        return `${a[h]} ${d[0]} ${b[(n - 1)]}`;

    } else {
        let n = numD % 10;
        let u = Math.trunc(numD / 10);
        if (n === 0) {
            return `${a[h]} ${d[0]} ${c[(u - 1)]}`;
        } else if(u === 0) {
            return `${a[h]} ${d[0]} ${a[n]}`;
        } else {
            return `${a[h]} ${d[0]} ${c[(u - 1)]} ${a[n]}`;
        }
    }
  }
}
