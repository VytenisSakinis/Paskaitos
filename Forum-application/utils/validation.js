function validate(user) 
{
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    let testEmail = user.email;
    let isValid = emailRegex.test(testEmail);
    let userBirthDate = new Date(user.birthDate)

    if(user.username.length < 5)
    {
        return "Username must be longer than 5 characters"
    }
    else if(user.username.length > 70) {
        return "Username must be shorted than 70 characters"
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(user.password)) {
        return "Password must contain at least one capital letter, one small letter, and one number";
    }
    else if(user.password.length < 5)
    {
        return "Password must be longer than 5 characters"
    }
    else if(user.password.length > 70) {
        return "Password must be shorted than 70 characters"
    }
    if(user.password !== user.confirmPassword)
    {
        return "Passwords do not match"
    }
    if(user.email.length < 5)
    {
        return "Email must be longer than 5 characters"
    }
    else if(user.email.length > 70)
    {
        return "Email must be shorter than 70 characters"
    }
    else if(!isValid)
    {
        return "Use existing email address instead"
    }
    if ( userBirthDate > new Date() || userBirthDate < new Date("1850-01-01")) {
        return "Use a valid birth date";
    }
    if(!user.profilePicture)
    {
        return "Upload a profile picture please"
    }

    
    return "Success"
}

module.exports = validate