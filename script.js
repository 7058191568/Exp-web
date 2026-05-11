 <script>

       
        function showMessage(){
            alert("Welcome to Precision Tools Inc!");
        }

        

        document.getElementById("contactForm").addEventListener("submit", function(event){

            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let msg = document.getElementById("msg").value;

            let message = document.getElementById("message");

            if(name === "" || email === "" || phone === "" || msg === ""){

                message.style.color = "red";
                message.innerHTML = "Please fill all fields.";

            }
            else{

                message.style.color = "green";
                message.innerHTML = "Form submitted successfully!";

                document.getElementById("contactForm").reset();
            }

        });

    </script>
