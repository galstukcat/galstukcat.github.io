document.getElementById('join-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const reason = document.getElementById('reason').value;

    if (username && reason) {
        
        const formData = {
            username: username,
            reason: reason
        };

        
        fetch('https://67c5d90c351c081993fbab8a.mockapi.io/members/members', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('❌ Ошибка при отправке данных');
            }
        })
        .then(data => {
            alert(`Заявка подана, жди решения. Обрати внимание, что твоя личка в тг должна быть открыта для сообщений.`);
            // Очистка формы 
            document.getElementById('join-form').reset();
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('❌ Произошла ошибка при отправке данных. Попробуй ещё раз.');
        });
    } else {
        alert('❌ Заполни все поля формы.');
    }
});