const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Maria', 'USER');
userRoles.set('Lucas', 'ADMIN');
userRoles.set('Brenda', 'ADMIN');
userRoles.set('Bianca', 'USER');
userRoles.set('Miguel', 'USER');

console.log(getAdmins(userRoles));



