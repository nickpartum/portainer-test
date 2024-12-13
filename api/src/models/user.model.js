const Model = require("./base.model");

const USER_ROLE = {
    Admin: 'admin',
    User:'user',
}

const defaultUserData = {
    role: USER_ROLE.User,
};

class UserModel extends Model {
    static tableName = 'users';

    static async create(data) {
        return super.insert({
            ...data,
            ...defaultUserData,
        });
    }

    static findByEmail(email){
        return this.findBy({ email });
    }
}

module.exports = {Role: USER_ROLE, UserModel};
