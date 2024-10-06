window.onload = function() {
    setTimeout(function() {
        showSubscriptionModal();
    }, 3000);
};

function showSubscriptionModal() {
    const modal = document.createElement('div');
    modal.id = 'subscription-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span id="close-modal">&times;</span>
            <h2>Подпишитесь на наши новости</h2>
            <p>Будьте в курсе последних событий и обновлений.</p>
            <input type="email" placeholder="Ваш email" />
            <button>Подписаться</button>
        </div>
    `;
    document.body.appendChild(modal);

    document.getElementById('close-modal').onclick = function() {
        modal.remove();
    };
}

document.getElementById('join-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();

    if(name && email) {
        alert('Спасибо за регистрацию, ' + name + '!');
        this.reset();
    } else {
        alert('Пожалуйста, заполните все поля формы.');
    }
});