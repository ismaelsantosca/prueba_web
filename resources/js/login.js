$(document).ready(function (){
   var $form = $("#formLogin");

   $form.validate({
      rules: {
         name: {
            required: true,
            maxlength: 10
         },
         surname: {
            required: true,
            maxlength: 20
         },
         email: {
            required: true,
            email: true
         },
         phone: {
            number: true
         }
      },
      messages : {
         name: {
            required: "Nombre requerido",
            maxlength: "El nombre no puede contener más de 10 caracteres",
         },
         surname: {
            required: "Apellidos requeridos",
            maxlength: "Los apellidos no pueden contener más de 20 caracteres",
          },
         email: {
            required: "Email requerido",
            email: "Email con formato incorrecto"
         },
         phone: {
            number: "Teléfono tiene que tener formato numérico"
         }
      }
   });

   $("#submitForm").click(function (){
      if($form.valid()){
         alert("Guardado");
      }
   });
});
