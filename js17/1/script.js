document.getElementById('formatButton').addEventListener('click', function() {
    const jsonInput = document.getElementById('jsonInput').value;
    const resultElement = document.getElementById('result');

    try {
        const jsonObject = JSON.parse(jsonInput);
        const formattedJson = JSON.stringify(jsonObject, null, 2);
        resultElement.textContent = formattedJson;
        resultElement.classList.remove('error');
    } catch (error) {
        resultElement.textContent = 'Ошибка: введены некорректные данные. Пожалуйста, введите правильный JSON.';
        resultElement.classList.add('error');
    }
});
