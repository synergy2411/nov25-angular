// function longRunningOperation(reqId) {
//   setTimeout(() => {
//     console.log("Running the operation for ID : ", reqId);
//   }, 1500);
// }

// function webRequest(req) {
//   console.log("Request Started");
//   longRunningOperation(req.id);
//   console.log("Request Ended");
// }

// webRequest({ id: 101 });
// webRequest({ id: 102 });

// // PROMISES

// Promise Builder
function buildPromise(ms) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ message: "success" }), ms);
    // reject(new Error("Something went wrong!"));
  });
  return promise;
}

// Promise Consumer
// - then().catch()
// - Async...await

async function consumePromiseUsingAsyncAndAwait() {
  try {
    const responseOne = await buildPromise(2000);
    console.log("RESPONSE ONE: ", responseOne);
    const responseTwo = await buildPromise(1000);
    console.log("RESPONSE Two: ", responseTwo);
  } catch (err) {
    console.error(err);
  }
}

console.log("Start");
consumePromiseUsingAsyncAndAwait();
console.log("End");

// function consumePromiseUsingThenAndCatch() {
//   console.log("Program Started");
//   buildPromise()
//     .then((response) => {
//       console.log("FIRST THEN :", response);
//       return response.message;
//     })
//     .then((message) => {
//       console.log("SECOND THEN :", message.toUpperCase());
//     })
//     .catch((err) => console.error(err));

//   console.log("Program Ended");
// }

// consumePromiseUsingThenAndCatch();
