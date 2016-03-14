export function applicant(user) {

	var lab = user.label;
	return `${lab}`;
}
return `
	<input type="text" name="firstname">${user.label}<br>
  	<input type="text" name="lastname">${user.label}<br>
  	<input type="text" name="comment">${user.label}<br>
  	`;

  	// <input type="text" name="email" placeholder="Email address"><br>
  	// <input type="text" name="website" placeholder="Current website url"><br>
  	// <input type="text" name="language" value="Select language...">
export function phone(user) {

	var lab = user.label;
	return `${lab}`;
}
return`
	<input type="text" name="mobile">${user.label}<br>
  	<input type="text" name="home" placeholder="Home number"><br>
	`;