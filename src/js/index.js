// Javascript Entry Point

import $ from 'jquery';

import users from './users';

import { applicant, phone, language, email, comment} from './template';

var $app = $('.app');

users.forEach(function(user) {
	var template;
	if (user.type === 'text') {
		template = applicant;
	} else if (user.type==='tel') {
		template = phone;
	} else if (user.type==='email') {
		template = email;
	} else if (user.type==='select') {
		template = language;
	} else if (user.type==='textarea') {
		template = comment;
	}
	var html = template(user);
	$app.append(html);
})