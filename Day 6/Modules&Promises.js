// Promises :
const myPromise = new Promise(function (resolve, reject) {
    const alright = true;
        setTimeout(function () { 
            if (alright) resolve("Everything went well");
            else reject("Encountered an error");
        }, 2000)
    }); 
    console.log("1");
    myPromise
      .then(function (value) {
        console.log(value);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("Promise completed");
      });
    console.log("2");

// --------------------
let age=28;
const agePromise = new Promise(function (resolve, reject){
  if(age >= 21 && age <= 35) resolve("Age accepted");
  else reject("Age rejected"); 
});
agePromise.then(()=> console.log(response)).catch(function (error){console.log(error);})

// --------------------
let question = "Capital for Morocco is ?";
let answer = "Rabat";

const checkQuestion = new Promise((resolve, reject) => {
  if(answer == "Rabat") resolve();
  else reject();
});

checkQuestion.then(()=>{console.log("true")}).catch(function (){console.log("false");});

// ----------------------------------------------------------------------

try {
    console.log("BEGIN");
    const res = divide(1, 0);
    console.log("Result = " + res);
} catch(error) {
    console.log("An error has occured: " + error.message);
} finally {
    console.log("END");
}