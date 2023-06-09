$(document).ready(function () {
    

    const url = "https://blog-api-t6u0.onrender.com/posts"
    
    // GET METHOD

           $.ajax({
             url: url,
             method: "GET",
             success: function (data) {
               printText(data);
               console.log(data);
             },
             error: function (error) {
               console.log(error);
             },
           });


    // POST METHOD


    // PUT METHOD

    // $.ajax({
    //   url: url+ "/75",
    //   method: "PUT",
    //   data: JSON.stringify({ data: "updated" }),
    //     ContentType: "application/json",
    //     success: function (data) {
    //       console.log(data);
    //     },
    //     error: function (error) {
    //         console.log(error);
    //     }
    // });

    // DELETE METHOD

    // $.ajax({
    //   url: url + "/85",
    //   method: "DELETE",
    //   ContentType: "application/json",
    //   success: function (data) {
    //     console.log(data);
    //   },
    //   error: function (error) {
    //     console.log(error);
    //   },
    // });



    $(document).on("click", "#buttonAdd", function () {
        
        let formData = {
            text: $("#text").val()
        }

        console.log(formData);

        

            // $.ajax({
            //   url: url,
            //   method: "POST",
            //   data: formData,
            //   ContentType: "application/json",
            //     success: function (data) {
            //         $("textarea").text(JSON.stringify(data.text));
            //         $("#main").append(printText(data.text))
            //     console.log(data);
            //   },
            //   error: function (error) {
                //     console.log(error);    
                //   },
                // });
                
                
            })    
            
            
             function printText(text) {
     
                 
     
                 return $("#main").html(`
                         <textarea class="form-control border-primary" id="exampleFormControlTextarea1" rows="3">${text}</textarea>
                         <i class="fa-solid fa-trash text-danger mt-3" style="cursor: pointer;"></i>
                         <i class="fa-solid fa-pen-to-square ml-4 text-warning" style="cursor: pointer;"></i>`);
             }            
     
             
    








})