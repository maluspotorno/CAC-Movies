
    // -Scroll Up
    let scrollbutton = document.getElementById("scrollbutton");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollbutton.style.display = "block";
        } else {
            scrollbutton.style.display = "none";
        }
    }

    function topfunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    // -Scroll Up

    // -Imagenes
    // let showFunction = document.getElementById("TextoShow");
    
    // showFunction.onmouseover = function() {
    //     document.getElementById("Texto").style.display = "block";
    // }
    // showFunction.onmouseout = function() {
    //     document.getElementById("Texto").style.display = "none";
    // }

    // -Imagenes

    // -ModalLogin
    $('#ButtonSession').on('click', function(){
        $('#ModalSession').modal('show');
    });
    // -ModalLogin 

    // -ModalRegister
    $('#ButtonRegister').on('click', function(){
        $('#ModalRegistrarse').modal('show');
    });
    // -ModalRegister

    // -script switcher registro/login
    $(function(){
        $('#switchR').on('click',function(){
                $('#ModalRegistrarse').modal('hide');
                $('#ModalSession').modal('show');
        });
    });

    $(function(){
        $('#switchL').on('click',function(){
                $('#ModalSession').modal('hide');
                $('#ModalRegistrarse').modal('show');
        });
    }); 
    // -script switcher registro/login

    // -Validaciones con jquery

    $(function(){
        $('#formRegister').validate({
            rules: {
                user: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    password: true,
                    minlength: 5
                },
                fecha: {
                    required: true,
                },
                confirm_password:{
                    required: true,
                    equalTo: "#password"
                }
            },
            messages: {
                user: {
                    required: 'Ingrese usuario',
                    minlength: 'Minimo 5 caracteres'
                },
                email: {
                    required: 'Ingrese email',
                    email: 'Ingrese un email valido'
                },
                password: {
                    required: 'Ingrese una contraseña',
                    minlength: 'Minimo 5 caracteres'
                },
                fecha: {
                    required: 'Ingrese fecha de nacimiento'
                },
                confirm_password:{
                    required: 'Reingrese la contraseña',
                    equalTo: 'Las contraseñas no coinciden'
                }
            }       
        });
    });

    $(function(){
        $('#formLogin').validate({
            rules: {
                email_login: {
                    required: true,
                    minlength: 5
                },
                password_login: {
                    password: true,
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                email_login: {
                    required: 'Ingrese email',
                    minlength: 'Minimo 5 caracteres'
                },
                password_login: {
                    required: 'Ingrese una contraseña',
                    minlength: 'Minimo 5 caracteres'
                }
            }
        });
   });
    // -Validaciones
