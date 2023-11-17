

export const validationUserData=(values)=>{
    let errors={};

    if(values.name.trim()==""){
        errors.name="username is required"
    }else if(values.name.trim().length<3){
   errors.name="username must be at least 3 characters"
    }
    if(values.email.trim()==""){
        errors.email="useremail is required"
    }else if(values.email.trim().length<9){
   errors.email="useremail must be at least 9 characters"
    }
    if(values.password.trim()==""){
        errors.password="userpassword is required"
    }else if(values.password.trim().length<3){
   errors.password="userpassword must be at least 3 characters"
    }

    return errors;
}