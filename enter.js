function Login(){
    User_name=document.getElementById("InputUserName").value
    localStorage.setItem("UN",User_name)
    window.location="blog.html"
    }
    