export function applicant(user) {

	var lab = user.label;
	return `${lab}`;
}
return `
	<input type="text" name="firstname">${user.label}<br>
  	<input type="text" name="lastname">${user.label}<br>
  	<input type="text" name="website">${user.label}<br>
  	`;


  	// <input type="text" name="email" placeholder="Email address"><br>
  	// <input type="text" name="website" placeholder="Current website url"><br>
  	// <input type="text" name="language" value="Select language...">
export function phone(user) {

	var lab = user.label;
	return `${lab}`;
	}
	return`
		<input type="tel" name="mobile">${user.label}<br>
	  	<input type="tel" name="home">${user.label}<br>
	`;


export function comment(user) {
	var lab = user.label;
	return `${lab}`;
	}
	return`
		<input type="textarea" name="comment">${user.label}<br>
	`;


export function language(user) {

	var lang = user.label;

	var langHtml = lang.map(function(lan) {
		return `<option>${lan}</option>`;
	});

	langHtml = langHtml.join('');

	return `
	<input type="text" name="language">${user.label}<br>
  		<select>	
  			<option value="EN">English</option>
  			<option value="FR">French</option>
  			<option value="SP">Spanish</option>
  			<option value="CH">Chinese</option>
  			<option value="JP">Japanese</option>
  			
  		</select><br>

  		`;
	}
	

export function email(user) {
	return `
	<input type="email" name="email">${user.label}<br>
	`;
	}






