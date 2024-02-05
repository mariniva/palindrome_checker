const button = document.getElementById("check-btn");
const check = () =>{
  const textInput = document.getElementById("text-input").value;
  if (textInput===''){
    return alert('Please input a value');
  }
  const regex=/[a-z0-9]/;
  let textArray = textInput.toLowerCase().split('').filter((el)=>regex.test(el));
  const partFirst = textArray.slice(0,Math.ceil(textArray.length/2)).join('');
  let partSecond='';
  if (textArray.length%2===0){
     partSecond = textArray.slice(Math.ceil(textArray.length/2),textArray.length).reverse().join('');
  } else {
     partSecond = textArray.slice(Math.ceil(textArray.length/2)-1,textArray.length).reverse().join('');
  }
  const answer = partFirst===partSecond?'is a palindrome':'is not a palindrome';
  const result = document.getElementById("result");
  result.innerText = textInput+" "+answer;
  console.log("partFirst: "+partFirst+" partSecond: "+partSecond,answer);
}
button.onclick = check;