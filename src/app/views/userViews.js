module.exports = {
    renderUser(user, token){
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}