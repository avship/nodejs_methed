setTimeout(() => {
  console.log("Был диван,");
  process.nextTick(() => {
    console.log("На диване");
  });
}, 13);
process.nextTick(() => {
  console.log("Чемодан,");
});
setImmediate(() => {
  console.log("В чемодане");
});

setTimeout(() => {
  console.log("Ехал слон.");
  setImmediate(() => {
    console.log("Кто не верит –");
  });
  setImmediate(() => {
    console.log("Выйди вон!");
  });
}, 14);

console.log("Плыл по морю");
/*
Плыл по морю
Чемодан,
В чемодане
Был диван,
На диване
Ехал слон.
Кто не верит –
Выйди вон!
*/
