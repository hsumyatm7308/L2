const getemail = document.getElementById("emails");
const gettextarea = document.querySelector("textarea");
const getbtn = document.querySelector(".btn");
const getcontainer = document.querySelector(".email-container");

getemail.focus();

getemail.addEventListener("keyup",function(e){
    // createmaillist(e.target.value)

    // createmaillist(this);
    createmaillist(this.value)
});

function createmaillist(inputtext){
    // console.log(inputtext);

    // const eitems = inputtext.split(',');
    // console.log(eitems);

    // remove empty , empty(space)
    // const eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== '');
    // console.log(eitems)

    // remove space/empty 
    const emitems = inputtext.split(',').filter(reempty=>reempty.trim() !== '').map(reempty=>reempty.trim());
        //  console.log(emitems)

        getcontainer.innerHTML=' ';

        emitems.forEach(function(eitem) {
             console.log(eitem)

             const setnewspan = document.createElement('span');
             setnewspan.textContent = eitem;
             setnewspan.classList.add('email-item');
            //  console.log(setnewspan)
            getcontainer.appendChild(setnewspan);

        });

        getbtn.addEventListener("click",function(e){
            sendemail();
            e.preventDefault();
        });

        function sendemail(){
                // console.log("i am woik")

                const gettxtvalue = gettextarea.value;
                const getaddress = document.querySelectorAll('.email-item');
                // console.log(gettxtvalue)
                // console.log(getaddress)

                var persons = [];

                if(getaddress.length > 0 && gettxtvalue){

                    getaddress.forEach(function(getaddress){
                        persons.push({
                            email:getaddress.textContent,
                            message:gettxtvalue
                        });
                    });
                //    console.log(persons);



                }else{
                    window.alert('Enter Message');
                    gettextarea.focus();
                }

              
        }


}

// 7EB 
