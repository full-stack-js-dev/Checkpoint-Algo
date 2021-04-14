function test() {
    sentence(); 
    for (let i = 0; i < paragraph.length; i++) {
        if (paragraph[i]=== " ") {
          let numberOfword = 0;
          numberOfword += 1 ;
          return numberOfword ;  
        }
        
    }
    console.log(numberOfword);
}
test();
function sentence() {
  var paragraph = window.prompt("Enter a sentence: ");
  let lastChar = paragraph.length - 1;
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[lastChar] === "." && paragraph[i] === " ") {
    } else {
      paragraph = window.prompt("your sentence must end with point : ");
      return paragraph;
    }
  }
}
sentence();

