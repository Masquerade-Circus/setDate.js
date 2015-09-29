setDate.js
=================

Small 1kb jQuery plugin to display formatted dates.

## Demo
http://masquerade-circus.net/myPlugins/setDate/

##How to use:
Call the plugin on the set of elements to show the formated date. 
				
##Options:
```javascript
	$(selector).setDate(options);
	$('elem').setDate({
		date: String||Array||Miliseconds||DateObject,
		format: string,
		months: array,
		days: array						
	});
```

Sets the date in the set of elements.
```javascript
	$.formatDate(options);
```
Returns the formated date. Options are the same as above.

##Format Parameters:
All parameters must be preceded by a plus sign to avoid confusion with their respective chars.

This parameters are:

* **+Y:** A full numeric representation of a year, 4 digits.
* **+y:** A two digit representation of a year.
* **+F:** A full textual representation of a month.
* **+M:** A short textual representation of a month, three letters.
* **+m:** Numeric representation of a month, with leading zeros.
* **+n:** Numeric representation of a month, without leading zeros.
* **+l:** (Lowercase 'L') A full textual representation of the day of the week.
* **+D:** A textual representation of a day, three letters.
* **+d:** Day of the month, 2 digits with leading zeros.
* **+j:** Day of the month without leading zeros.
* **+G:** 24-hour format of an hour without leading zeros.
* **+g:** 12-hour format of an hour without leading zeros.
* **+H:** 24-hour format of an hour with leading zeros.
* **+h:** 12-hour format of an hour with leading zeros.
* **+i:** Minutes without leading zeros.
* **+ii:** Minutes with leading zeros.
* **+s:** Seconds without leading zeros.
* **+ss:** Seconds with leading zeros.
* **+a:** Lowercase 'am' or 'pm'.
* **+A:** Uppercase 'AM' or 'PM'.

# Legal
Author & copyright (c) 2013: [Masquerade Circus](http://masquerade-circus.net)
Dual [MIT](http://opensource.org/licenses/MIT) & [GPLv2](http://opensource.org/licenses/GPL-2.0) license
