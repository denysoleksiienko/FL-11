const userEmail = 'user@gmail.com',
    adminEmail = 'admin@gmail.com',
    userPass = 'UserPass',
    adminPass = 'AdminPass';

const minEmailLen = 6,
    minPassLen = 5;

let askEmail,
    askPass,
    oldPass,
    newPass,
    newPassComfirm;

askEmail = prompt('Please, enter your email', '');

if (askEmail === null || askEmail === '') {
    alert('Canceled');
} else if (askEmail.length < minEmailLen) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (askEmail !== userEmail && askEmail !== adminEmail) {
    alert('I don’t know you');
} else {
    askPass = prompt('Please, enter your password', '');
    if (askPass === null || askPass === '') {
        alert('Canceled');
    } else if (askEmail === userEmail && askPass !== userPass || askEmail === adminEmail && askPass !== adminPass) {
        alert('Wrong password');
    } else if (!confirm('Do you want to change your password?')) {
        alert('You have failed the change');
    } else {
        oldPass = prompt('Please, enter your old password', '');
        if (oldPass !== askPass) {
            alert('Wrong password');
        } else {
            newPass = prompt('Please, enter your new password', '');
            if (!newPass) {
                alert('Canceled');
            } else if (newPass.length < minPassLen) {
                alert('It’s too short password. Sorry');
            } else {
                newPassComfirm = prompt('Please, confirm your new password');
                if (newPassComfirm !== newPass) {
                    alert('You wrote the wrong password');
                } else {
                    alert('You have successfully changed your password');
                }
            }
        }
    }
}
