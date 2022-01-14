 
    const mostrarSenha = () => {
        var elemento = document.getElementById("Senha");
        var olhoImage= document.getElementById("Olho");

        if(elemento.getAttribute('type') == "password"){
            elemento.setAttribute('type','text');
            olhoImage.setAttribute('src','images/vision.png')
            
    }else{
        elemento.setAttribute('type', 'password');
        olhoImage.setAttribute('src','images/visionclosed.png')
        }

    }

    const cadastro = () =>{
        window.location.href="";
    }
    const recuperarSenha = () =>{
        window.location.href="";
    }