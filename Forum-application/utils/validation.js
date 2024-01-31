function validate(user) 
{
    // switch(user)
    // {
    //     case user.username.length < 5:
    //         return "Username must be longer than 5 characters"
    //     case user.username.length > 70:
    //         return "Username must be shorted than 70 characters"
    //     default: 
    // }
    if(user.username.length < 5)
    {
        return "Username must be longer than 5 characters"
    }
    else if(user.username.length > 70) {
        return "Username must be shorted than 70 characters"
    }

    
    return "Success"
}

module.exports = validate