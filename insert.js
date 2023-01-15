
var Settlement = [];
Settlement.empty = function(mixed_var)
{
	var undef, key, i, len;
	var emptyValues = [undef, null, false, 0, '', '0'];
	for (i = 0, len = emptyValues.length; i < len; i++)
	{
		if (mixed_var === emptyValues[i])
		{
			return true;
		}
	}
	if (typeof mixed_var === 'object')
	{
		for (key in mixed_var)
		{
			return false;
		}
		return true;
	}
	return false;
}

username = _POST['username'];
email = _POST['email'];
phone = _POST['phone'];
message = _POST['message'];
if (!Settlement.empty(username) || !Settlement.empty(email) || !Settlement.empty(phone) || !Settlement.empty(message)) {
    host = "localhost";
    dbUsername = "root";
    dbPassword = "";
    dbname = "contactus";
    conn = new mysqli(host, dbUsername, dbPassword, dbname);
    if (mysqli_connect_error()) {
        die('Connect Error('+mysqli_connect_error()+')'+mysqli_connect_error());
    } else {
        sql = "INSERT INTO register(username,email,phone,message)\n\t\tvalues('{username}','{email}','{phone}','{message}')";
        if (conn.query(sql)) {
            message = "new message is send sucessfully";
            console.log("<script type='text/javascript'>alert('{message}');</script>");
        } else {
            console.log("Error"+sql+"<br>"+conn.error);
        }
        conn.close();
    }
}