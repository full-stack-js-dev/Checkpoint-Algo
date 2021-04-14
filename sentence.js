function test() {
     let words = sentence();
     let numberOfword = 1;
    for (let i = 0; i < words.length; i++) {
        if (words[i]=== " ") {
          numberOfword ++ ;
          
        }
        
    }
    console.log(numberOfword);
}
test();
function sentence() {
  var paragraph = window.prompt("Enter a sentence: ");
  let lastChar = paragraph.length - 1;
  for (let i = 0; i < paragraph.length; i++) {
    if (paragraph[lastChar] === ".") {
    } else {
      paragraph = window.prompt("your sentence must end with point : ");
      
    }
  }
  return paragraph;
}


