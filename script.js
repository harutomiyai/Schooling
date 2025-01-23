// ローカルストレージに登録情報を保存
function saveToLocalStorage() {
    const email = document.getElementById('email').value;
    const studentId = document.getElementById('studentId').value;
    const name = document.getElementById('name').value;

    if (!email.endsWith('@nnn.ed.jp')) {
        alert('学園のメールアドレスで登録してください。');
        return;
    }

    localStorage.setItem('email', email);
    localStorage.setItem('studentId', studentId);
    localStorage.setItem('name', name);

    window.location.href = "submit.html"; // 提出ページにリダイレクト
}

// Googleフォームにデータを送信
function submitForm() {
    const email = localStorage.getItem('email');
    const studentId = localStorage.getItem('studentId');
    const name = localStorage.getItem('name');
    const passphrase = document.getElementById('passphrase').value;

    if (!email || !studentId || !name) {
        alert('登録情報が見つかりません。まずは登録ページで情報を登録してください。');
        return;
    }

    if (!passphrase) {
        alert('合言葉を入力してください。');
        return;
    }

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScAbyRjrO5wqmeOJ9mMaMVrFjWg_3WliP5cDh2uLGrxoe_mOA/formResponse";
    const form = document.createElement('form');
    form.action = formUrl;
    form.method = 'POST';
    form.target = '_blank';

    form.innerHTML = `
        <input type="hidden" name="emailAddress" value="${email}">
        <input type="hidden" name="entry.767733995" value="${studentId}">
        <input type="hidden" name="entry.1019239709" value="${name}">
        <input type="hidden" name="entry.688309591" value="${passphrase}">
    `;

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
}

// ローカルストレージに登録情報があるかを確認
function checkLocalStorage() {
    const email = localStorage.getItem('email');
    const studentId = localStorage.getItem('studentId');
    const name = localStorage.getItem('name');
    return email && studentId && name;
}


// ...existing code...

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// モーダルウィンドウの外側をクリックしたときに閉じる
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// ...existing code...