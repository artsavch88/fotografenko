function handleFormSubmit(event) {
    event.preventDefault(); // Запобігаємо надсиланню форми

    const form = document.getElementById("orderForm");
    if (form.checkValidity()) { // Перевіряємо, чи всі поля заповнені
        const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
        thankYouModal.show(); // Виводимо модальне вікно
    } else {
        form.classList.add('was-validated'); // Показуємо повідомлення про обов’язкові поля
    }
}