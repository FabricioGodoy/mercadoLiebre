function validarFormulario(){
    const password = document.forms['loginForm']['pass'].value;
        if (password === ""){
            alert("Debes ingresar una contraseña");
            return false;
        }
}