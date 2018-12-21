function detectanav() {
    document.getElementById("tittle").addEventListener("click", function () {
        if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
            alert("El navegador que se está utilizando es Chrome");
        }
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            alert("El navegador que se está utilizando es Firefox");
        }
        if (navigator.userAgent.indexOf("MSIE") > -1) {
            alert("El navegador que se está utilizando es Internet Explorer");
        }
    });
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            footer = document.getElementById("footer");

            contenedor = document.createElement("div");
            contenedor.setAttribute("id", "empresa");
            footer.appendChild(contenedor);

            empresa = JSON.parse(xmlhttp.responseText);

            nombre = document.createElement("p");
            nombre.setAttribute("class", "empresa");
            nombre.appendChild(document.createTextNode(empresa.nombre));
            contenedor.appendChild(nombre);

            direccion = document.createElement("p");
            direccion.setAttribute("class", "empresa");
            direccion.appendChild(document.createTextNode(empresa.direccion));
            contenedor.appendChild(direccion);

            email = document.createElement("p");
            email.setAttribute("class", "empresa");
            email.appendChild(document.createTextNode("Email: "));
            email.appendChild(document.createTextNode(empresa.email));
            email.appendChild(document.createTextNode(" Telefono: "));
            email.appendChild(document.createTextNode(empresa.telefono));
            contenedor.appendChild(email);
        }
    }
    xmlhttp.open("GET", "php/getempresa.php", true);
    xmlhttp.send();

    inicio();
}
function inicio() {
    //Eliminamos si el padre esta creado
    if (document.getElementById('article')) {
        document.getElementById('article').parentNode.removeChild(document.getElementById('article'));
    }
    //Creamos el article que contendrá el formulario.
    var article = document.createElement('article');
    article.setAttribute('id', 'article');
    //Creamos los elementos del article.

    var h20 = document.createElement("h2");
    h20.appendChild(document.createTextNode("Objetivos en nuestra academia."));
    article.appendChild(h20);

    var p0 = document.createElement("p");
    p0.setAttribute("class", "psection");
    p0.appendChild(document.createTextNode("La educación on-line, es una modalidad de la educación a distancia, que utiliza Internet con todas sus herramientas tecnológicas de la información y la comunicación para realizar el proceso de enseñanza-aprendizaje. En nuestra a academia pondremos a tu disposicion diversos cursos y actividades, para un aprendizaje y completo de tu campo."));
    article.appendChild(p0);

    var h21 = document.createElement("h2");
    h21.appendChild(document.createTextNode("Cursos."));
    article.appendChild(h21);

    var divcurso = document.createElement("div");
    divcurso.setAttribute("id", "divcurso");
    article.appendChild(divcurso);
    cargarcursos();

    var h22 = document.createElement("h2");
    h22.appendChild(document.createTextNode("Actividades."));
    article.appendChild(h22);

    var divactividades = document.createElement("div");
    divactividades.setAttribute("id", "divactividades");
    article.appendChild(divactividades);
    cargaractividades();

    document.getElementById('section').appendChild(article);
}
function cargarcursos() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            arraycursos = JSON.parse(xmlhttp.responseText);
            contenedor = document.getElementById("divcurso");
            if (contenedor) {
                contenedor.innerHTML = "";
            }
            for (var posicion in arraycursos) {
                var span0 = document.createElement("span");
                span0.setAttribute("class", "pinicio");
                span0.setAttribute("onclick", "cargardatos(" + arraycursos[posicion].idcurso + ")");
                span0.setAttribute("ondblclick", "volverainicio(" + arraycursos[posicion].idcurso + ")");

                var p1 = document.createElement("p");
                p1.setAttribute("class", "pcurso");
                p1.setAttribute("id", arraycursos[posicion].nombre);
                p1.appendChild(document.createTextNode("Curso de "));
                p1.appendChild(document.createTextNode(arraycursos[posicion].nombre));
                p1.appendChild(document.createTextNode(", que ofrecerá una amplia gama de posibilidades en el mercado laboral, gracias a nuestro certificado oficial."));
                span0.appendChild(p1);

                var img = document.createElement("img");
                img.setAttribute("class", "pimg");
                img.setAttribute("src", arraycursos[posicion].img);
                img.setAttribute("alt", arraycursos[posicion].nombre);
                img.setAttribute("height", "125");
                img.setAttribute("width", "150");
                span0.appendChild(img);

                contenedor.appendChild(span0);
            }
        }
    }
    xmlhttp.open("GET", "php/getcursos.php", true);
    xmlhttp.send();
}
function cargaractividades() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            arrayactividades = JSON.parse(xmlhttp.responseText);
            contenedor = document.getElementById("divactividades");
            if (contenedor) {
                contenedor.innerHTML = "";
            }
            for (var posicion in arrayactividades) {
                var span0 = document.createElement("span");
                span0.setAttribute("class", "pinicio");

                var p1 = document.createElement("p");
                p1.setAttribute("class", "pcurso");
                p1.appendChild(document.createTextNode("Actividad que nos permitira a asistencia a una "));
                p1.appendChild(document.createTextNode(arrayactividades[posicion].nombre));
                p1.appendChild(document.createTextNode(", siendo el dia "));
                p1.appendChild(document.createTextNode(arrayactividades[posicion].fecha));
                p1.appendChild(document.createTextNode(" y con una duracion aproximadad de "));
                p1.appendChild(document.createTextNode(arrayactividades[posicion].duracion));
                p1.appendChild(document.createTextNode(" horas. Con un precio aproximado de "));
                p1.appendChild(document.createTextNode(arrayactividades[posicion].precio));
                p1.appendChild(document.createTextNode("€."));
                span0.appendChild(p1);

                var img = document.createElement("img");
                img.setAttribute("class", "pimg");
                img.setAttribute("src", arrayactividades[posicion].img);
                img.setAttribute("alt", arrayactividades[posicion].nombre);
                img.setAttribute("height", "125");
                img.setAttribute("width", "150");
                span0.appendChild(img);

                contenedor.appendChild(span0);
            }
        }
    }
    xmlhttp.open("GET", "php/getactividades.php", true);
    xmlhttp.send();
}
function cargardatos(idcurso) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            arraycursos = JSON.parse(xmlhttp.responseText);
            for (var posicion in arraycursos) {
                var contenedor = document.getElementById(arraycursos[posicion].nombre);
                if (contenedor) {
                    contenedor.innerHTML = "";
                }
                contenedor.appendChild(document.createTextNode("El nombre del curso es: "));
                contenedor.appendChild(document.createTextNode(arraycursos[posicion].nombre));
                contenedor.appendChild(document.createTextNode(", cuenta con una duración de "));
                contenedor.appendChild(document.createTextNode(arraycursos[posicion].duracion));
                contenedor.appendChild(document.createTextNode(" horas. Este cuenta con "));
                contenedor.appendChild(document.createTextNode(arraycursos[posicion].ntemas));
                contenedor.appendChild(document.createTextNode(" temas y cuatro unidades cada uno. El precio total del curso es de "));
                contenedor.appendChild(document.createTextNode(arraycursos[posicion].precio));
                contenedor.appendChild(document.createTextNode(" Euros."));

                var ira = document.createElement("h4");
                ira.setAttribute("onclick", "suscripciones()");
                ira.appendChild(document.createTextNode("Ir a suscripciones."));
                contenedor.appendChild(ira);
            }
        }
    }
    xmlhttp.open("GET", "php/getdatos.php?idcurso=" + idcurso, true);
    xmlhttp.send();
}
function volverainicio(idcurso) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            arraycursos = JSON.parse(xmlhttp.responseText);
            for (var posicion in arraycursos) {
                contenedor = document.getElementById(arraycursos[posicion].nombre);
                if (contenedor) {
                    contenedor.innerHTML = "";
                }
                for (var posicion in arraycursos) {
                    contenedor.appendChild(document.createTextNode("Curso de "));
                    contenedor.appendChild(document.createTextNode(arraycursos[posicion].nombre));
                    contenedor.appendChild(document.createTextNode(", que ofrecerá una amplia gama de posibilidades en el mercado laboral, gracias a nuestro certificado oficial."));
                }
            }
        }
    }
    xmlhttp.open("GET", "php/getdatos.php?idcurso=" + idcurso, true);
    xmlhttp.send();
}
function iniciarsesion() {
    if (document.getElementById('Usuario').value === "" || document.getElementById('Clavei').value === "") {
        alert("Escribe el usuario y la contraseña en el inicio de sesión.");
        return;
    } else {
        var respuesta;
        var user = {
            usuario: document.getElementById('Usuario').value,
            clave: document.getElementById('Clavei').value
        };
        var userjson = JSON.stringify(user);
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                respuesta = xmlhttp.responseText;
                if (respuesta === 'Error en la contraseña o el usuario en el inicio de sesión.') {
                    alert(respuesta);
                } else {
                    alert(respuesta);
                    delcookie();
                    document.cookie = "Usuario=" + user.usuario + ";expires=Thu, 31 Dec 2020 23:59:59 GMT";
                    document.cookie = "Clave=" + user.clave + ";expires=Thu, 31 Dec 2020 23:59:59 GMT";
                    suscripciones();
                }
            }
        };
        xmlhttp.open("GET", "PHP/inisesion.php?user=" + userjson, true);
        xmlhttp.send();
    }
}
function iniciarsesioncursos() {
    if (document.getElementById('Usuario').value === "" || document.getElementById('Clavei').value === "") {
        alert("Escribe el usuario y la contraseña en el inicio de sesión.");
        return;
    } else {

        var respuesta;
        var user = {
            usuario: document.getElementById('Usuario').value,
            clave: document.getElementById('Clavei').value
        };
        var userjson = JSON.stringify(user);
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                respuesta = xmlhttp.responseText;
                if (respuesta === 'Error en la contraseña o el usuario en el inicio de sesion.') {
                    alert(respuesta);
                } else {
                    alert(respuesta);
                    delcookie();
                    document.cookie = "Usuario=" + user.usuario + ";expires=Thu, 31 Dec 2020 23:59:59 GMT";
                    document.cookie = "Clave=" + user.clave + ";expires=Thu, 31 Dec 2020 23:59:59 GMT";
                    vermiscursos();
                }
            }
        };
        xmlhttp.open("GET", "PHP/inisesion.php?user=" + userjson, true);
        xmlhttp.send();
    }
}
function registrar() {
    if (document.getElementById('Nombrer').value === "" || document.getElementById('Apellidos').value === "" || document.getElementById('Clave').value === "" || document.getElementById('email').value === "" || document.getElementById('dni').value === "" || document.getElementById('localidad').value === "") {
        alert("Completa todos los elementos en el registro.");
        return;
    } else {
        var respuesta;
        var user = {
            usuario: document.getElementById('Nombrer').value,
            apellidos: document.getElementById('Apellidos').value,
            clave: document.getElementById('Clave').value,
            email: document.getElementById('email').value,
            dni: document.getElementById('dni').value,
            localidad: document.getElementById('localidad').value
        };
        var userjson = JSON.stringify(user);
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                respuesta = xmlhttp.responseText;
                if (respuesta === 'Error en el registro del usuario, por duplicacion de nombre y apellidos.') {
                    alert(respuesta);
                } else {
                    alert(respuesta);
                    suscripciones();
                }
            }
        };
        xmlhttp.open("GET", "PHP/registrarusuario.php?user=" + userjson, true);
        xmlhttp.send();
    }
}
function delcookie() {
    document.cookie = "Usuario=;";
    document.cookie = "Clave=;";
    inicio();
}
function suscripciones() {
    //Eliminamos si el padre esta creado
    if (document.getElementById('article')) {
        document.getElementById('article').parentNode.removeChild(document.getElementById('article'));
    }
    //Creamos el article que contendrá el formulario.
    var article = document.createElement('article');
    article.setAttribute('id', 'article');
    //Creamos los elementos del article.
    var h20 = document.createElement("h2");
    h20.appendChild(document.createTextNode("Suscripciones disponibles de nuestra Academia:"));
    article.appendChild(h20);

    var p0 = document.createElement("p");
    p0.setAttribute("class", "psection");
    p0.appendChild(document.createTextNode("En esta seccion usted podrá realizar la suscripción a nuestros diversos cursos que otorgaran grandes capacidades laborales en el mercado."));
    article.appendChild(p0);

    var divcurso = document.createElement("div");
    divcurso.setAttribute("id", "divcurso");
    article.appendChild(divcurso);

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            arraycursos = JSON.parse(xmlhttp.responseText);
            contenedor = document.getElementById("divcurso");
            if (contenedor) {
                contenedor.innerHTML = "";
            }
            for (var posicion in arraycursos) {
                var span0 = document.createElement("span");
                span0.setAttribute("class", "pinicio");

                var p1 = document.createElement("p");
                p1.setAttribute("class", "pcurso");
                p1.setAttribute("id", arraycursos[posicion].nombre + "1");
                p1.appendChild(document.createTextNode("Aqui podrás inscribirse al "));
                p1.appendChild(document.createTextNode(arraycursos[posicion].nombre));
                span0.appendChild(p1);

                var ira = document.createElement("p");
                ira.setAttribute("class", "buttonsus");
                ira.setAttribute("onclick", "login(" + arraycursos[posicion].idcurso + ")");
                ira.appendChild(document.createTextNode("Suscribete aquí."));
                p1.appendChild(ira);

                var img = document.createElement("img");
                img.setAttribute("class", "pimg");
                img.setAttribute("src", arraycursos[posicion].img);
                img.setAttribute("alt", arraycursos[posicion].nombre);
                img.setAttribute("height", "125");
                img.setAttribute("width", "150");
                span0.appendChild(img);

                contenedor.appendChild(span0);
            }
        }
    }
    xmlhttp.open("GET", "php/getcursos.php", true);
    xmlhttp.send();
    document.getElementById('section').appendChild(article);
}
function login(idcurso) {
    //Eliminamos si el padre esta creado
    if (document.getElementById('article')) {
        document.getElementById('article').parentNode.removeChild(document.getElementById('article'));
    }
    //Si no tenemmos usuario en nuestras cookies mostraremos un inicio de sesion.

    if (document.cookie == "Usuario=; Clave=" || document.cookie == "") {
        //Creamos el article que contendrá el formulario.
        var article = document.createElement('article');
        article.setAttribute('id', 'article');
        //Creamos los elementos del article.
        var h20 = document.createElement("h2");
        h20.appendChild(document.createTextNode("Inicio de sesión."));
        article.appendChild(h20);

        var p0 = document.createElement("p");
        p0.setAttribute("class", "psection");
        p0.appendChild(document.createTextNode("En esta seccion ofreceremos la capacidad de suscribirse a nuestros diversos cursos. Para ello todos los interesados deberan registrarse o iniciar sesión en nuestra base de datos."));
        article.appendChild(p0);

        var divinicios = document.createElement("div");
        divinicios.setAttribute("id", "divinicios");
        article.appendChild(divinicios);

        var table0 = document.createElement("table");
        table0.setAttribute("class", "table1");

        var tr0 = document.createElement("tr");
        table0.appendChild(tr0);

        var td0 = document.createElement("td");
        td0.setAttribute("class", "td");
        tr0.appendChild(td0);

        var input0 = document.createElement("input");
        input0.setAttribute("id", "Usuario");
        input0.setAttribute("placeholder", "Usuario");
        input0.setAttribute("type", "text");
        td0.appendChild(input0);

        var tr1 = document.createElement("tr");
        table0.appendChild(tr1);

        var td1 = document.createElement("td");
        td1.setAttribute("class", "td");
        tr1.appendChild(td1);

        var input1 = document.createElement("input");
        input1.setAttribute("id", "Clavei");
        input1.setAttribute("placeholder", "Clave");
        input1.setAttribute("type", "password");
        td1.appendChild(input1);

        var tr2 = document.createElement("tr");
        table0.appendChild(tr2);

        var td2 = document.createElement("td");
        td2.setAttribute("class", "td");
        tr2.appendChild(td2);

        var button0 = document.createElement("button");
        button0.setAttribute("class", "botoniniciar");
        button0.setAttribute("onclick", "iniciarsesion()");
        button0.appendChild(document.createTextNode("Iniciar Sesión."));
        td2.appendChild(button0);

        divinicios.appendChild(table0);
        //////
        var table1 = document.createElement("table");
        table1.setAttribute("class", "table2");

        var tr4 = document.createElement("tr");
        table1.appendChild(tr4);

        var td5 = document.createElement("td");
        td5.setAttribute("class", "td");
        tr4.appendChild(td5);

        var input4 = document.createElement("input");
        input4.setAttribute("id", "Nombrer");
        input4.setAttribute("placeholder", "Nombre");
        input4.setAttribute("type", "text");
        td5.appendChild(input4);

        var tr11 = document.createElement("tr");
        table1.appendChild(tr11);

        var td11 = document.createElement("td");
        td11.setAttribute("class", "td");
        tr11.appendChild(td11);

        var input11 = document.createElement("input");
        input11.setAttribute("id", "Apellidos");
        input11.setAttribute("placeholder", "Apellidos");
        input11.setAttribute("type", "text");
        td11.appendChild(input11);

        var tr5 = document.createElement("tr");
        table1.appendChild(tr5);

        var td6 = document.createElement("td");
        td6.setAttribute("class", "td");
        tr5.appendChild(td6);

        var input1 = document.createElement("input");
        input1.setAttribute("id", "Clave");
        input1.setAttribute("placeholder", "Clave");
        input1.setAttribute("type", "password");
        td6.appendChild(input1);
        //
        var tr6 = document.createElement("tr");
        table1.appendChild(tr6);

        var td7 = document.createElement("td");
        td7.setAttribute("class", "td");
        tr6.appendChild(td7);

        var input2 = document.createElement("input");
        input2.setAttribute("id", "email");
        input2.setAttribute("placeholder", "E-mail");
        input2.setAttribute("type", "email");
        td7.appendChild(input2);

        var tr22 = document.createElement("tr");
        table1.appendChild(tr22);

        var td22 = document.createElement("td");
        td22.setAttribute("class", "td");
        tr22.appendChild(td22);

        var input22 = document.createElement("input");
        input22.setAttribute("id", "dni");
        input22.setAttribute("placeholder", "D.N.I.");
        input22.setAttribute("type", "text");
        td22.appendChild(input22);

        var tr33 = document.createElement("tr");
        table1.appendChild(tr33);

        var td33 = document.createElement("td");
        td33.setAttribute("class", "td");
        tr33.appendChild(td33);

        var input33 = document.createElement("input");
        input33.setAttribute("id", "localidad");
        input33.setAttribute("placeholder", "Localidad");
        input33.setAttribute("type", "text");
        td33.appendChild(input33);

        var tr44 = document.createElement("tr");
        table1.appendChild(tr44);

        var td44 = document.createElement("td");
        td44.setAttribute("class", "td");
        tr44.appendChild(td44);

        var button5 = document.createElement("button");
        button5.setAttribute("class", "botoniniciar");
        button5.setAttribute("onclick", "registrar()");
        button5.appendChild(document.createTextNode("Registrar."));
        td44.appendChild(button5);

        divinicios.appendChild(table1);

        document.getElementById('section').appendChild(article);
    } else {
        suscribir(idcurso);
    }

}
function suscribir(idcurso) {
    //Eliminamos si el padre esta creado
    if (document.getElementById('article')) {
        document.getElementById('article').parentNode.removeChild(document.getElementById('article'));
    }
    //Creamos el article que contendrá el formulario.
    var article = document.createElement('article');
    article.setAttribute('id', 'article');

    //Creamos los elementos del article.
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            arraycursos = JSON.parse(xmlhttp.responseText);
            contenedor = document.createElement("div");
            if (contenedor) {
                contenedor.innerHTML = "";
            }
            for (var posicion in arraycursos) {
                var h20 = document.createElement("h2");
                h20.appendChild(document.createTextNode("Suscripcion a " + arraycursos[posicion].nombre + ": "));
                article.appendChild(h20);

                var span0 = document.createElement("p");
                span0.setAttribute("class", "psus");
                span0.setAttribute("id", arraycursos[posicion].nombre);
                span0.appendChild(document.createTextNode("Aqui podrás inscribirse al curso de "));
                span0.appendChild(document.createTextNode(arraycursos[posicion].nombre));
                span0.appendChild(document.createTextNode(". Donde podras formarte en la en esre campo, durante las "));
                span0.appendChild(document.createTextNode(arraycursos[posicion].duracion));
                span0.appendChild(document.createTextNode(" horas de las que consta la programación."));
                span0.appendChild(document.createTextNode("La cantidad de temas que se veran en este curso será de "));
                span0.appendChild(document.createTextNode(arraycursos[posicion].ntemas));
                span0.appendChild(document.createTextNode(" durante los cuales le daremos toda la formación posible de mano de nuestros expertos profesores en el campo. "));
                span0.appendChild(document.createTextNode("Finalmente este curso tiene un valor de "));
                span0.appendChild(document.createTextNode(arraycursos[posicion].precio));
                span0.appendChild(document.createTextNode("€."));
                contenedor.appendChild(span0);

                var button1 = document.createElement("button");
                button1.setAttribute("class", "logout");
                button1.setAttribute("onclick", "inscribir(" + arraycursos[posicion].idcurso + ")");
                button1.appendChild(document.createTextNode("Suscribete."));
                contenedor.appendChild(button1);

                var button = document.createElement("button");
                button.setAttribute("class", "logout");
                button.setAttribute("onclick", "suscripciones()");
                button.appendChild(document.createTextNode("Volver a suscripciones."));
                contenedor.appendChild(button);

                document.getElementById('article').appendChild(contenedor);
            }
        }
    }
    xmlhttp.open("GET", "php/getcursosus.php?curso=" + idcurso, true);
    xmlhttp.send();

    document.getElementById('section').appendChild(article);
}
function inscribir(idcurso) {
    var aCookies = document.cookie.split(";");
    var usuario = aCookies[0].split("=");
    var nombre = usuario[1];
    var pass = aCookies[1].split("=");
    var clave = pass[1];

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            respuestaincrip = xmlhttp.responseText;
            alert(respuestaincrip);
            suscripciones();
        }
    }
    xmlhttp.open("GET", "php/inscribir.php?curso=" + idcurso + "&usuario=" + nombre + "&clave=" + clave, true);
    xmlhttp.send();
}
function miscursos() {
    //Eliminamos si el padre esta creado
    if (document.getElementById('article')) {
        document.getElementById('article').parentNode.removeChild(document.getElementById('article'));
    }
    //Si no tenemmos usuario en nuestras cookies mostraremos un inicio de sesion.
    if (document.cookie == "Usuario=; Clave=" || document.cookie == "") {
        //Creamos el article que contendrá el formulario.
        var article = document.createElement('article');
        article.setAttribute('id', 'article');
        //Creamos los elementos del article.
        var h20 = document.createElement("h2");
        h20.appendChild(document.createTextNode("Inicio de sesión."));
        article.appendChild(h20);

        var p0 = document.createElement("p");
        p0.setAttribute("class", "psection");
        p0.appendChild(document.createTextNode("En esta seccion ofreceremos la capacidad de ver los distintos cursos en los que los usuarios estan inscritos. Para ello debera iniciar sesión en nuestra base de datos."));
        article.appendChild(p0);

        var divinicios = document.createElement("div");
        divinicios.setAttribute("id", "divinicios");
        article.appendChild(divinicios);

        var table0 = document.createElement("table");
        table0.setAttribute("class", "table1");

        var tr0 = document.createElement("tr");
        table0.appendChild(tr0);

        var td0 = document.createElement("td");
        td0.setAttribute("class", "td");
        tr0.appendChild(td0);

        var input0 = document.createElement("input");
        input0.setAttribute("id", "Usuario");
        input0.setAttribute("placeholder", "Usuario");
        input0.setAttribute("type", "text");
        td0.appendChild(input0);

        var tr1 = document.createElement("tr");
        table0.appendChild(tr1);

        var td1 = document.createElement("td");
        td1.setAttribute("class", "td");
        tr1.appendChild(td1);

        var input1 = document.createElement("input");
        input1.setAttribute("id", "Clavei");
        input1.setAttribute("placeholder", "Clave");
        input1.setAttribute("type", "password");
        td1.appendChild(input1);

        var tr2 = document.createElement("tr");
        table0.appendChild(tr2);

        var td2 = document.createElement("td");
        td2.setAttribute("class", "td");
        tr2.appendChild(td2);

        var button0 = document.createElement("button");
        button0.setAttribute("class", "botoniniciar");
        button0.setAttribute("onclick", "iniciarsesioncursos()");
        button0.appendChild(document.createTextNode("Iniciar Sesión."));
        td2.appendChild(button0);

        divinicios.appendChild(table0);

        document.getElementById('section').appendChild(article);
    } else {
        vermiscursos();
    }
}
function vermiscursos() {
    //Eliminamos si el padre esta creado
    if (document.getElementById('article')) {
        document.getElementById('article').parentNode.removeChild(document.getElementById('article'));
    }
    //Creamos el article que contendrá el formulario.
    var article = document.createElement('article');
    article.setAttribute('id', 'article');
    //Creamos los elementos del article.
    var h20 = document.createElement("h2");
    h20.appendChild(document.createTextNode("Suscripciones a mis cursos:"));
    article.appendChild(h20);

    var p0 = document.createElement("p");
    p0.setAttribute("class", "psection");
    p0.appendChild(document.createTextNode("En esta seccion usted podrá consultar las distintas suscripciones de las que tu usario cuenta en este momento. Una vez que haga clic en uno de los cursos, la web le mostrará el contenido del curso dividido por temas, y a su vez por unidades."));
    article.appendChild(p0);

    var divcurso = document.createElement("div");
    divcurso.setAttribute("id", "divcurso");
    article.appendChild(divcurso);

    var aCookies = document.cookie.split(";");
    var usuario = aCookies[0].split("=");
    var nombre = usuario[1];
    var pass = aCookies[1].split("=");
    var clave = pass[1];

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            contenedor = document.getElementById("divcurso");
            if (contenedor) {
                contenedor.innerHTML = "";
            }
            if (JSON.parse(xmlhttp.responseText) === "Usted no esta suscrito a ningun curso.") {
                var p = document.createElement("p");
                p.setAttribute("class", "pcurso");
                p.appendChild(document.createTextNode("Usted no esta suscrito a ningun curso en estos momentos, para la suscripcion de algún curso deberá inscribirse en nuestro a apartado de suscripciones."));
            } else {
                arraycursosuscritos = JSON.parse(xmlhttp.responseText);
                for (var posicion in arraycursosuscritos) {
                    var span0 = document.createElement("span");
                    span0.setAttribute("class", "pinicio");

                    var p1 = document.createElement("p");
                    p1.setAttribute("class", "pcurso");
                    p1.setAttribute("id", arraycursosuscritos[posicion].nombre + "2");
                    p1.setAttribute("onclick", "vertemas('" + arraycursosuscritos[posicion].nombre + "'," + arraycursosuscritos[posicion].idcurso + ")");
                    p1.appendChild(document.createTextNode(arraycursosuscritos[posicion].nombre));
                    span0.appendChild(p1);


                    var img = document.createElement("img");
                    img.setAttribute("class", "pimg");
                    img.setAttribute("src", arraycursosuscritos[posicion].img);
                    img.setAttribute("alt", arraycursosuscritos[posicion].nombre);
                    img.setAttribute("height", "125");
                    img.setAttribute("width", "150");
                    span0.appendChild(img);

                    contenedor.appendChild(span0);
                }
            }
        }
    }
    ;
    xmlhttp.open("GET", "php/getmiscursos.php?usuario=" + nombre + "&clave=" + clave, true);
    xmlhttp.send();
    document.getElementById('section').appendChild(article);
}
function vertemas(nombre, idcurso) {
    //Eliminamos si el padre esta creado
    if (document.getElementById('article')) {
        document.getElementById('article').parentNode.removeChild(document.getElementById('article'));
    }
    //Creamos el article que contendrá el formulario.
    var article = document.createElement('article');
    article.setAttribute('id', 'article');
    //Creamos los elementos del article.
    var h20 = document.createElement("h2");
    h20.appendChild(document.createTextNode(nombre));
    article.appendChild(h20);

    var divtodo = document.createElement("div");
    divtodo.setAttribute("id", "divtodo");
    divtodo.setAttribute("class", "divtodo");
    article.appendChild(divtodo);

    var divtemas = document.createElement("div");
    divtemas.setAttribute("id", "divtemas");
    divtemas.setAttribute("class", "divtemas");
    divtodo.appendChild(divtemas);
    var titulot = document.createElement("h5");
    titulot.appendChild(document.createTextNode("Temas: "));
    divtemas.appendChild(titulot);

    var divunidades = document.createElement("div");
    divunidades.setAttribute("id", "divunidades");
    divunidades.setAttribute("class", "divunidades");
    divtodo.appendChild(divunidades);
    var titulou = document.createElement("h5");
    titulou.appendChild(document.createTextNode("Unidades: "));
    divunidades.appendChild(titulou);

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            contenedor = document.getElementById("divtemas");
            resultado = JSON.parse(xmlhttp.responseText);
            if (resultado === "Este curso no tiene temas.") {
                alert(resultado);
                vermiscursos();
            } else {
                for (var posicion in resultado) {
                    var p = document.createElement("p");
                    p.setAttribute("id", resultado[posicion].idtema);
                    p.setAttribute("class", "temas");
                    p.setAttribute("onclick", "verunidades(" + resultado[posicion].idtema + ",'" + nombre + "' )");
                    p.appendChild(document.createTextNode(resultado[posicion].textotema));

                    contenedor.appendChild(p);
                }
            }
        }
    };
    xmlhttp.open("GET", "php/gettemas.php?idcurso=" + idcurso, true);
    xmlhttp.send();

    //Añadimos el article a la section principal.
    document.getElementById('section').appendChild(article);
}
function verunidades(idtema, nombre) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            contenedor = document.getElementById("divunidades");
            resultado = JSON.parse(xmlhttp.responseText);
            if (contenedor) {
                contenedor.innerHTML = "";
            }
            var divtitulo = document.createElement("div");
            contenedor.appendChild(divtitulo);

            var titulou = document.createElement("h5");
            titulou.appendChild(document.createTextNode("Unidades: "));
            divtitulo.appendChild(titulou);

            var botonpdf = document.createElement("button");
            botonpdf.setAttribute("class", "botonimprimir");
            botonpdf.setAttribute("onclick", "imprimir('" + nombre + "')");
            divtitulo.appendChild(botonpdf);

            if (resultado === "No hay unidades sobre ese tema en la base de datos.") {
                alert(resultado);
                vermiscursos();
            } else {
                for (var posicion in resultado) {
                    var ptitulo = document.createElement("p");
                    ptitulo.setAttribute("class", "temas");
                    ptitulo.appendChild(document.createTextNode(resultado[posicion].nombreunidad));

                    var p = document.createElement("p");
                    p.setAttribute("class", "unidades");
                    p.appendChild(document.createTextNode(resultado[posicion].textounidad));

                    contenedor.appendChild(ptitulo);
                    contenedor.appendChild(p);
                }
            }
        }
    };
    xmlhttp.open("GET", "php/getunidades.php?idtema=" + idtema, true);
    xmlhttp.send();
}
function imprimir(nombre) {
    var pdf = new jsPDF('p', 'pt', 'letter');
    source = $('#divunidades')[0];

    specialElementHandlers = {
        '#bypassme': function (element, renderer) {
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 80,
        left: 50,
        width: 500
    };

    pdf.fromHTML(
            source,
            margins.left, // x coord
            margins.top, {// y coord
                'width': margins.width,
                'elementHandlers': specialElementHandlers
            },
            function (dispose) {
                pdf.save(nombre + '.pdf');
            }, margins
            );
}
function evaluacion() {
    //Eliminamos si el padre esta creado
    if (document.getElementById('article')) {
        document.getElementById('article').parentNode.removeChild(document.getElementById('article'));
    }
    //Creamos el article que contendrá el formulario.
    var article = document.createElement('article');
    article.setAttribute('id', 'article');
    document.getElementById('section').appendChild(article);
    //Creamos los elementos del article.
    var h20 = document.createElement("h2");
    h20.appendChild(document.createTextNode("Evaluación de cursos:"));
    article.appendChild(h20);

    var p0 = document.createElement("p");
    p0.setAttribute("class", "psection");
    p0.appendChild(document.createTextNode("En esta seccion, usted podrá realizar unas actividades de evaluación, que le permitirá conseguir el título del curso que usted desee, mediante una serie de preguntas de tipo test. Cada usuario cuenta con tres oportunidades de aprobar cada curso, si aun  asi no es capaz de aprobar el test, deberá ponerse en contacto con nosotros mediante email. "));
    p0.appendChild(document.createTextNode("Una vez que usted haya finalizado el curso podrá recibir un diploma acreditativo."));
    article.appendChild(p0);

    var contenedor = document.createElement("div");
    contenedor.setAttribute("id", "divcursos");

    if (document.cookie == "Usuario=; Clave=" || document.cookie == "") {
        var p = document.createElement("p");
        p.setAttribute("class", "pcurso");
        p.appendChild(document.createTextNode("Usted no ha iniciado sesion, por favor, acceda a través de Mis Cursos."));
        contenedor.appendChild(p);

    } else {
        var aCookies = document.cookie.split(";");
        var usuario = aCookies[0].split("=");
        var nombre = usuario[1];
        var pass = aCookies[1].split("=");
        var clave = pass[1];

        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                if (contenedor) {
                    contenedor.innerHTML = "";
                }
                if (JSON.parse(xmlhttp.responseText) === "Usted no esta suscrito a ningun curso.") {
                    var p = document.createElement("p");
                    p.setAttribute("class", "pcurso");
                    p.appendChild(document.createTextNode("Usted no esta suscrito a ningun curso, para la suscripcion de algún curso deberá inscribirse en nuestro a apartado de suscripciones."));
                    contenedor.appendChild(p);
                } else {
                    arraycursosuscritos = JSON.parse(xmlhttp.responseText);
                    for (var posicion in arraycursosuscritos) {
                        var span0 = document.createElement("span");
                        span0.setAttribute("class", "pinicio");

                        var p1 = document.createElement("p");
                        p1.setAttribute("class", "pcurso");
                        p1.setAttribute("id", arraycursosuscritos[posicion].nombre + "3");
                        p1.setAttribute("onclick", "vermas('" + arraycursosuscritos[posicion].nombre + "'," + arraycursosuscritos[posicion].idcurso + ")");
                        p1.appendChild(document.createTextNode(arraycursosuscritos[posicion].nombre));
                        span0.appendChild(p1);


                        var img = document.createElement("img");
                        img.setAttribute("class", "pimg");
                        img.setAttribute("src", arraycursosuscritos[posicion].img);
                        img.setAttribute("alt", arraycursosuscritos[posicion].nombre);
                        img.setAttribute("height", "125");
                        img.setAttribute("width", "150");
                        span0.appendChild(img);

                        contenedor.appendChild(span0);
                    }
                }
            }
        }
        xmlhttp.open("GET", "php/getmiscursos.php?usuario=" + nombre + "&clave=" + clave, true);
        xmlhttp.send();
    }
    article.appendChild(contenedor);
}
function vermas(nombrecurso, idcurso) {
    //Eliminamos si el padre esta creado
    if (document.getElementById('article')) {
        document.getElementById('article').parentNode.removeChild(document.getElementById('article'));
    }

    //Creamos el article que contendrá el formulario.
    var article = document.createElement('article');
    article.setAttribute('id', 'article');
    document.getElementById('section').appendChild(article);

    //Guardamos el usuario y contraseña del usuario actual.
    var aCookies = document.cookie.split(";");
    var usuario = aCookies[0].split("=");
    var nombre = usuario[1];
    var pass = aCookies[1].split("=");
    var clave = pass[1];

    //Creamos el titulo.
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(nombrecurso));
    article.appendChild(h2);

    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            usuariocurso = JSON.parse(xmlhttp.responseText);
            if (usuariocurso.aprobado === 'Y') {
                var contenedor = document.createElement("div");
                contenedor.setAttribute("class", "diveval");

                var p1 = document.createElement("p");
                p1.setAttribute("class", "psection");
                p1.appendChild(document.createTextNode("Nos complace comunicarle que ha aprobado el curso de "));
                p1.appendChild(document.createTextNode(nombrecurso));
                p1.appendChild(document.createTextNode(", por ese motivo se le hará entrega de un diploma que acredita el curso realizado. Podrá descargar el diploma en esta Web siempre que lo necesite."));
                contenedor.appendChild(p1);

                var p2 = document.createElement("p");
                p2.setAttribute("class", "psection");
                p2.appendChild(document.createTextNode("También nos complace comunicarle que el número de intentos ha sido: "));
                p2.appendChild(document.createTextNode(usuariocurso.oportunidades));
                p2.appendChild(document.createTextNode(", con una nota de "));
                p2.appendChild(document.createTextNode(usuariocurso.nota));
                p2.appendChild(document.createTextNode(", siendo esta la ultima nota registrada."));
                contenedor.appendChild(p2);

                var button = document.createElement("button");
                button.setAttribute("class", "butdiploma");
                button.appendChild(document.createTextNode("Obtener diploma"));
                button.setAttribute("onclick", "diploma('" + nombrecurso + "', " + usuariocurso.nota + ",'" + nombre + "'," + clave + ")");
                contenedor.appendChild(button);

                article.appendChild(contenedor);

            } else if (usuariocurso.aprobado === 'N' && usuariocurso.oportunidades >= 3) {
                var contenedor = document.createElement("div");
                contenedor.setAttribute("class", "divsus");

                var p1 = document.createElement("p");
                p1.setAttribute("class", "psection");
                p1.appendChild(document.createTextNode("Sentimos comunicarte de que usted ha superado el número máximo de intentos para aprobar el curso "));
                p1.appendChild(document.createTextNode(nombrecurso));
                p1.appendChild(document.createTextNode(", por ese motivo le recomendamos que renueve la suscripción del curso. Mucha suerte la próxima vez."));
                contenedor.appendChild(p1);

                var button = document.createElement("button");
                button.setAttribute("class", "butdiploma");
                button.appendChild(document.createTextNode("Volver a Evaluación"));
                button.addEventListener("click", evaluacion);
                contenedor.appendChild(button);


                article.appendChild(contenedor);

            } else if (usuariocurso.aprobado === 'N' && usuariocurso.oportunidades <= 2) {
                var contenedor = document.createElement("div");
                contenedor.setAttribute("class", "divexamen");

                var p1 = document.createElement("p");
                p1.setAttribute("class", "psection");
                p1.appendChild(document.createTextNode("Usted ha utilizado "));
                p1.appendChild(document.createTextNode(usuariocurso.oportunidades));
                p1.appendChild(document.createTextNode(" oportunidades de las 3 que se le ofrecen para examinarse. "));
                contenedor.appendChild(p1);

                var p2 = document.createElement("p");
                p2.setAttribute("class", "psection");
                p2.appendChild(document.createTextNode("Si desea examinarse del curso "));
                p2.appendChild(document.createTextNode(nombrecurso));
                p2.appendChild(document.createTextNode(", pulse el siguente botón. "));
                p2.appendChild(document.createTextNode("Tenga en cuenta que ultilizará una de las oportunidades disponibles."));
                contenedor.appendChild(p2);

                var button = document.createElement("button");
                button.setAttribute("class", "butdiploma");
                button.setAttribute("onclick", "examen('" + nombrecurso + "'," + usuariocurso.idcurso + " )");
                button.appendChild(document.createTextNode("Examinar"));
                contenedor.appendChild(button);

                article.appendChild(contenedor);
            }
        }
    }
    xmlhttp.open("GET", "php/getaprobados.php?idcurso=" + idcurso + "&usuario=" + nombre + "&clave=" + clave, true);
    xmlhttp.send();
}
function examen(nombrecurso, idcurso) {
    //Eliminamos si el padre esta creado
    if (document.getElementById('article')) {
        document.getElementById('article').parentNode.removeChild(document.getElementById('article'));
    }

    //Creamos el article que contendrá el formulario.
    var article = document.createElement('article');
    article.setAttribute('id', 'article');
    document.getElementById('section').appendChild(article);

    //Guardamos el usuario y contraseña del usuario actual.
    var aCookies = document.cookie.split(";");
    var usuario = aCookies[0].split("=");
    var nombre = usuario[1];
    var pass = aCookies[1].split("=");
    var clave = pass[1];

    //Creamos el titulo.
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Examen de "));
    h2.appendChild(document.createTextNode(nombrecurso));
    article.appendChild(h2);

    //Creamos el div
    var contenedor = document.createElement("div");
    contenedor.setAttribute("class", "divexamen");
    article.appendChild(contenedor);

    //Ajax
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var respuesta = JSON.parse(xmlhttp.responseText);
            if (respuesta === "No hay preguntas sobre ese curso.") {
                var p1 = document.createElement("p");
                p1.setAttribute("class", "psection");
                p1.appendChild(document.createTextNode("No hay preguntas disponibles para este curso en estos momentos"));
                contenedor.appendChild(p1);

                var button = document.createElement("button");
                button.setAttribute("class", "butdiploma");
                button.appendChild(document.createTextNode("Volver a Evaluación"));
                button.setAttribute("onclick", "evaluacion()");
                contenedor.appendChild(button);
            } else {
                var tabla = document.createElement("table");
                tabla.setAttribute("class", "tabla3");
                contenedor.appendChild(tabla);

                var tr = document.createElement("tr");
                tabla.appendChild(tr);

                var td1 = document.createElement("td");
                td1.setAttribute("class", "td3");
                td1.appendChild(document.createTextNode("Preguntas examen: "));
                tr.appendChild(td1);

                var td2 = document.createElement("td");
                td2.setAttribute("class", "td3");
                td2.appendChild(document.createTextNode("Verdadero"));
                tr.appendChild(td2);

                var td3 = document.createElement("td");
                td3.setAttribute("class", "td3");
                td3.appendChild(document.createTextNode("Falso"));
                tr.appendChild(td3);
                for (var posicion in respuesta) {

                    var tr = document.createElement("tr");
                    tabla.appendChild(tr);

                    var td1 = document.createElement("td");
                    td1.setAttribute("class", "td3");
                    td1.appendChild(document.createTextNode(respuesta[posicion].pregunta));
                    tr.appendChild(td1);

                    var td2 = document.createElement("td");
                    td2.setAttribute("class", "td3");
                    tr.appendChild(td2);
                    var input0 = document.createElement("input");
                    input0.setAttribute("type", "radio");
                    input0.setAttribute("name", "pregunta_" + respuesta[posicion].idpregunta);
                    input0.setAttribute("value", "0");
                    td2.appendChild(input0);

                    var td3 = document.createElement("td");
                    td3.setAttribute("class", "td3");
                    tr.appendChild(td3);
                    var input1 = document.createElement("input");
                    input1.setAttribute("type", "radio");
                    input1.setAttribute("name", "pregunta_" + respuesta[posicion].idpregunta);
                    input1.setAttribute("value", "1");
                    td3.appendChild(input1);
                }
                //Comprobar!!!!!!
                var boton = document.createElement("button");
                boton.setAttribute("class", "butcomprobar");
                boton.addEventListener("click", function () {
                    var acierto = 0;
                    var resp;
                    for (var i = 0; i < respuesta.length; i++) {
                        var verdaderofalso = document.getElementsByName("pregunta_" + respuesta[i].idpregunta);
                        if (verdaderofalso[0].checked) {
                            resp = "V";
                        } else if (verdaderofalso[1].checked) {
                            resp = "F";
                        }
                        if (respuesta[i].respuesta == resp) {
                            acierto++;
                        }
                    }
                    var nota = acierto * 2;
                    alert("Usted ha conseguido una nota de " + nota);

                    var aCookies = document.cookie.split(";");
                    var usuario = aCookies[0].split("=");
                    var nombre = usuario[1];
                    var pass = aCookies[1].split("=");
                    var clave = pass[1];


                    var eval = new Object();
                    eval.nota = nota;
                    eval.curso = idcurso;
                    eval.usuario = nombre;
                    eval.clave = clave;


                    var evaljson = JSON.stringify(eval);

                    var xmlhttp;
                    if (window.XMLHttpRequest) {
                        xmlhttp = new XMLHttpRequest();
                    } else {
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                    xmlhttp.onreadystatechange = function () {
                        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                            if (xmlhttp.responseText == "Enhorabuena!! Puedes recoger el diploma de este curso.") {
                                alert(xmlhttp.responseText);
                                evaluacion();
                            } else if (xmlhttp.responseText == "Lo sentimos, vuelve a intentarlo otra vez.") {
                                alert(xmlhttp.responseText);
                                evaluacion();
                            } else {
                                alert("Fallo en el proceso actualizacion de la base de datos.");
                            }
                        }
                    }
                    xmlhttp.open("GET", "php/evaluacion.php?evaluacion=" + evaljson, true);
                    xmlhttp.send();
                });

                boton.appendChild(document.createTextNode("Entregar."));
                contenedor.appendChild(boton);
            }
        }
    }
    xmlhttp.open("GET", "php/getpreguntas.php?idcurso=" + idcurso + "&usuario=" + nombre + "&clave=" + clave, true);
    xmlhttp.send();

}
function diploma(nombrecurso, notacurso, nombre, clave) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            alumno = JSON.parse(xmlhttp.responseText);
            var pdf = new jsPDF('p', 'pt', 'letter');
            source = "<h2>Nos complace otrorgar a:</h2>" + "<h1>" + alumno.nombre + " " + alumno.apellidos + ",</h1>" + "<h2> el titulo de " + nombrecurso + " que ha conseguido con nuestro reconocimiento personal, con una nota final de " + notacurso + "</h2>";

            specialElementHandlers = {
                '#bypassme': function (element, renderer) {
                    return true
                }
            };
            margins = {
                top: 80,
                bottom: 80,
                left: 50,
                width: 500
            };

            pdf.fromHTML(
                    source,
                    margins.left, // x coord
                    margins.top, {// y coord
                        'width': margins.width,
                        'elementHandlers': specialElementHandlers
                    },
                    function (dispose) {
                        pdf.save("Diploma de " + nombrecurso + '.pdf');
                    }, margins
                    );
        }
    };
    xmlhttp.open("GET", "php/getusuario.php?nombre=" + nombre + "&clave=" + clave, true);
    xmlhttp.send();
}