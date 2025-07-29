class User {
    constructor(name, email, role = 'user') {
        this.name = name;
        this.email = email;
        this.role = role;
        this.isActive = true;
        this.createdAt = new Date();
        this.lastLogin = null;
    }
    
    updateProfile(newData) {
        Object.assign(this, newData);
        console.log(`Profile updated for ${this.name}`);
    }
    
    changePassword(newPassword) {
        // In real app, hash the password
        this.password = newPassword;
        console.log('Password changed successfully');
    }
    
    hasPermission(action) {
        const permissions = {
            'admin': ['read', 'write', 'delete', 'manage_users'],
            'moderator': ['read', 'write', 'moderate'],
            'user': ['read', 'write']
        };
        return permissions[this.role]?.includes(action) || false;
    }
    
    login() {
        this.lastLogin = new Date();
        console.log(`${this.name} logged in at ${this.lastLogin}`);
    }
    
    logout() {
        console.log(`${this.name} logged out`);
    }
    
    deactivate() {
        this.isActive = false;
        console.log(`User ${this.name} deactivated`);
    }
    
    activate() {
        this.isActive = true;
        console.log(`User ${this.name} activated`);
    }
}

// Usage
const admin = new User('John Admin', 'admin@example.com', 'admin');
const user = new User('Jane User', 'jane@example.com', 'user');

admin.login();
console.log(admin.hasPermission('manage_users')); // true
console.log(user.hasPermission('manage_users')); // false