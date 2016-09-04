import Promise from 'bluebird';

export async function crmLogin(username, password) {
    // simulate an asynchronous operation
    return Promise
        .delay(1000)
        .then(()=> {
            return {"token": "xxxx"}
        });
}

export async function crmLogout() {
    // simulate an asynchronous operation
    return Promise
        .delay(1000)
        .then(()=> {
            return true
        });
}
