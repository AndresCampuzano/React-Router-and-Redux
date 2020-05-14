import md5 from 'md5';

const gravatar = (email) => {
	const base = 'https://gravatar.com/avatar/';
	const formatEmail = email.trim().toLowerCase();
	const hash = md5(formatEmail, { encoding: 'binary' });
	return `${base}${hash}`;
};
