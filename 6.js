console.log("Завдання: 6 ==============================");

// Створюємо функцію task6, яка використовує setImmediate та проміси.
function task6() {
  // Створюємо новий проміс.
  const promise1 = new Promise(function (resolve, reject) {
    setImmediate(() => {
      const number = Math.random();
      if (number < 0.5) {
        resolve("Менше ніж 0.5");
      } else {
        resolve("Більше ніж 0.5");
      }
    });
  })
    .then((data) => {
      console.log(`Проміс зарезолвився з значенням: ${data}`);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => console.log("Проміс завершено"));
  // Використовуємо функцію setImmediate, щоб виконати функцію асинхронно.
  // Генеруємо випадкове число від 0 до 1
  // Якщо випадкове число менше 0.5, резолвимо проміс з рядком Більше ніж 0.5.
  // Інакше відхиляемо проміс з рядком Менше ніж 0.5 .
  // Використовуємо then для обробки зарезолвленого проміса, та виводимо `Проміс зарезолвився з значенням: ${value}`.
  // Якщо проміс відхилено, обробляємо помилку за допомогою catch, та виводимо `Проміс відхилився з помилкою: ${error}`.
  // Використовуємо finally для виконання дій після завершення проміса, незалежно від його статусу, та виводимо "Проміс завершено".
}

// Викликаємо функцію task6
task6();
