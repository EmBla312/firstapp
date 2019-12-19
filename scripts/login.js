function check_password(password) {
    var reqs = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    if(password.value.match(reqs)) return false;
    else return true;
}