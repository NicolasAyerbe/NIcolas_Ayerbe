var user_BD = "jdcal";
var pass_BD = 1234;
var user_input = "jdcal";
var pass_input = 1234;
if (user_BD === user_input && pass_BD === pass_input)
{
    console.log("Bienvenido!!");
}

var forma_pago  = "T_Credito";
if (forma_pago === "T_Debito" || forma_pago === "T_Credito")
{
    console.log("Transaccion aprobada!");
}

var estado_usuario = false;
if (!estado_usuario)
{
    console.log("El usuario se encuentra inactivo");
}

benef_sisben = true;
benef_jovenes_accion = true;
if (benef_sisben == true ^ benef_jovenes_accion === true)
{
    console.log("Puede accer al beneficio adicional");
}
else
{
    console.log("no puede acceder al beneficio adicional");
}

var valor1 = 0;
console.log(!!valor1);
valor1 = 1;
console.log(!!valor1);
valor1 = null;
console.log(!!valor1);
valor1 = undefined;
console.log(!!valor1);
valor1 = false;
console.log(!!valor1);
valor1 = true;
console.log(!!valor1);
valor1 = "prueba";
console.log(!!valor1);
valor1 = "";
console.log(!!valor1);
