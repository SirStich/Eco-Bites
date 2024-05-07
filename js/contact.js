document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Form submitted successfully!');
        }
    });

    form.querySelectorAll('input, select, textarea').forEach(input => {
        input.addEventListener('focusout', () => validateInput(input));
        input.addEventListener('input', () => clearError(input));
    });

    function validateForm() {
        return Array.from(form.querySelectorAll('input, select, textarea')).every(input => validateInput(input));
    }

    function validateInput(input) {
        const errorSpan = document.getElementById(`${input.id}-error`);
        const errorMessage = getErrorMessage(input);
        const isValid = input.checkValidity() && errorMessage === '';

        if (!isValid) {
            showError(input, errorMessage);
        }

        input.classList.toggle('error', !isValid);
        return isValid;
    }

    function getErrorMessage(input) {
        const value = input.value.trim();
        switch (input.id) {
            case 'name':
                if (value === '') {
                    return 'Name is required';
                } else if (!isValidName(value)) {
                    return 'Name should start with a capital letter';
                }
                break;
            case 'email':
                if (value === '') {
                    return 'Email is required';
                } else if (!isValidEmail(value)) {
                    return 'Invalid email format';
                }
                break;
            case 'phone':
                if (value !== '' && !isValidPhone(value)) {
                    return 'Phone number should contain at least 10 digits, only digits allowed';
                }
                break;
            // Добавьте дополнительные проверки для других полей по аналогии
        }
        return '';
    }

    function showError(input, errorMessage) {
        const errorSpan = document.getElementById(`${input.id}-error`);
        errorSpan.textContent = errorMessage;
        input.classList.add('error');
    }

    function clearError(input) {
        const errorSpan = document.getElementById(`${input.id}-error`);
        errorSpan.textContent = '';
        input.classList.remove('error');
    }

    function isValidName(name) {
        // Проверка, что имя начинается с заглавной буквы
        return /^[A-Z]/.test(name);
    }

    function isValidEmail(email) {
        // Проверка формата электронной почты
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        // Проверка формата номера телефона
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }
});