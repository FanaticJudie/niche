function validate(){
    //checking required length of user_id
    var userId = document.myform.userId.value.length;
    if(userId == "" || userId < 5|| userId > 12){
        document.getElementById("user_id").innerHTML="Required and must be of length 5 to 12";
        return false;
    }
    //checking for required length of password
    var password = document.myform.password.value.length;
    if( password == "" || password < 7 || password > 12){
        document.getElementById("pass").innerHTML="Required and must be of length 7 to 12";
        return false;
    }
    //checking for the required name 
    var name = document.myform.name.value;
    if( name == "" || !name.match(/^[a-zA-Z]+$/)) {
        document.getElementById("name").innerHTML="Required and alphabates only";
        return false;

    }
    //checking to see that a country is selected
    var country = document.myform.country.value;
    if( country == "Default"){
        document.getElementById( "country").innerHTML="Required and must select a country";
        return false;
    }
    //checking to see that the required zip code is inputted
    var zip_code = document.myform.zip.value;
    if( zip_code == "" || isNaN(zip_code)){
        document.getElementById("zip").innerHTML="Required and must be numeric only";
        return false;
    }
    //checking to see that valid email is inputted
    var email = document.myform.email.value;
    if( email == "" || email.test(/^[^]\s@]+@[^\s@]+\.[^\s@]+$/)){
        document.getElementById("email").innerHTML="Required and must be valid email";
        return false;
    }
    //checking to see that the required gender is inputted
    var sex = document.myform.sex.value;
    if( sex == ""){
        document.getElementById("gender").innerHTML="Required";
        return false;
    }
    //checking to see that required language is inputted
    var language = document.myform;
    if( !language.english.checked && !language.non_english.checked){
        document.getElementById("language").innerHTML="Required";
        return false;
    }




    else{
        return true;
    }
}