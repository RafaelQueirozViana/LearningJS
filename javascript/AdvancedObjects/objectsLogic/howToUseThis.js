// This is a versatile property in javascript used to reference the current object or thing that you are working;

// The thing that "This" will return depends of where you are using.

// If you use "this" inside in a object or class, it will reference the Object

 
//  Here is the table that what this return in different cases:

// | Situação                      | O que `this` representa                                              |
// | ----------------------------- | -------------------------------------------------------------------- |
// | **Em um método de objeto**    | O próprio **objeto**                                                 |
// | **Em uma função comum**       | No modo _strict_, é `undefined`; fora dele, é o `window` (ou global) |
// | **Em uma arrow function**     | **Herda** o `this` do **escopo onde foi criada**                     |
// | **Em classes (usando `new`)** | A **instância da classe**                                            |
// | **Em eventos DOM**            | O **elemento HTML** que disparou o evento                            |