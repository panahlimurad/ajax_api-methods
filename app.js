$(document).ready(function () {
    


  function showUpdateData() {
    
    $.ajax({
      url: "https://blog-api-t6u0.onrender.com/posts",
      method: "GET",
      success: function (data) {
        showAllData(data)
        console.log(data);
      },
      error: function () {
        console.log("Not info");
      },
    });
    
  }
  
  function showAllData(item) {
    const cardsHTML = item.reverse().map(function (item) {
       return `
        <div class="form-group">
                        <textarea class="form-control border-primary" id="exampleFormControlTextarea1" rows="3">${item.title}</textarea>
                        <button class="button-delete" value="${item.id}"><i class="fa-solid fa-trash text-danger mt-3"></i></button>
                    </div>`;
      
    }).join("")

      $("#main").html(cardsHTML);
  }
  
  
  $(document).on("click", ".button-delete", function () {
    let id = $(this).val();
    deleteItem(id);
    showUpdateData();
    console.log("id", id);
  });
  
  
  function deleteItem(id) {
    $.ajax({
      url: `https://blog-api-t6u0.onrender.com/posts/${id}`,
      method: "DELETE",
      ContentType: "application/json",
      success: function (data) {
        console.log(data);
      },
      error: function (error) {
        console.log(error);
      },
    });
    
  }
  
  function postData(title) {
    

            $.ajax({
              url: "https://blog-api-t6u0.onrender.com/posts",
              method: "POST",
              data: { title : title},
              ContentType: "application/json",
              success: function (data) {
                showUpdateData()
                console.log(data);
              },
              error: function (error) {
                console.log(error);
              },
            });
  }
  

  $(document).on("click", "#buttonAdd", function () {
    let title = $("#text").val()
    postData(title)
    $("#text").val("");
  });
  showUpdateData()
  

             
    








})