//1. Declare Variables. Variable "const" is used instead of "let" or "var" because these variables will not be changing in value or datatype at all.
const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


/*2. Declare DOM methods which are elements that has ID attributes of a specific value that manipulates an element on the document. 
The purpose of document.getElementId is that RETURNS and CONNECTS an element object that is associated with the HTML string. 
For example: the HTML element with the id "p-length" is connected by the DOM document document.getelementbyId to the variable labeled "const pLength". 
This logic was repeated with constant variable Uppercase, Lowercase, number, symbol, submit button.*/

const pLength = document.getElementById("p-length");
const upperCase = document.getElementById("p-uppercase");
const lowerCase = document.getElementById("p-lowercase");
const pNumber = document.getElementById("p-number");
const pSymbol = document.getElementById("p-symbol");
const submit = document.getElementById("submit");
const password = document.getElementById("password");


//3. Added Checkbox functionality for Uppercase, Lowercase, number, and symbol
submit.addEventListener("click" , () => {
  let initialPassword = "empty"; 
  (upperCase.checked) ? initialPassword += uCase : "";
  (lowerCase.checked) ? initialPassword += lCase : "";
  (pNumber.checked) ? initialPassword += number : "";
  (pSymbol.checked) ? initialPassword += symbol : "";

    /*Explanation of the code:
    When the webpage initially loads, We want the password display box to be empty so when we enter our password criteria specifications THEN hit "generate password" we can see result!
    (upperCase.checked) ? initialPassword += uCase : ""; IF uppercase checkbox is checked THEN use uppercase letters found in uCase string. If it not checked, then keep the initial password to be empty.*/
  
  
  
  password.value= generatePassword(pLength.value, initialPassword)
  /*This means that variable password.value will be represented by the "generatePassword" function which will use the parameters password length "pLength" and "initialPassword". At this moment, "generatePassword" returns a console error because generatePassword function is not defined (and doesnt exist and needs to be created). To resolve, a function generatePassword that uses the parameters of password length and initialPassword needs to be created.*/

});

//4. Defined "generatePassword" as a "For" loop. The purpose of this "for" loop makes the function "generatePassword" using the parameter of password length "lengthPassword" and initial password.
function generatePassword(lengthPassword, initialPassword) {
    let pass = "";
    for (let i = 0; i < lengthPassword; i++) {             
      pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
    }
    return (pass);
    
}

/*Explanation of function "generatePassword":
"pass" variable was defined. 
Then "for" loop was selected because "for" loops executes a block of code number of times.

Statement 1=> i = 0 means that the "generatePassword" function is executed ONE TIME in the "for" loop function.
Statement 2=> defines the condition of executing the function more than once. 
  ie: In "i < lengthPassword", as long as i is less than the desired password length "lengthPassword", keep adding strings of more characters that satisfies the upper,lower,number,symbol criteria and generate a password value to desired password length.
statement 3=> of i++ means execute this function everytime.

In the conditional curly bracket of "generatePassword" function:
In the initial pass variable "", the function will ADD ONTO characters TO "initialPassword" as desired AT RANDOM INTERGERS AND RETURN pass result.*/
