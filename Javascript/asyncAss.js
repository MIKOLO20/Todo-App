const fetchPosts = async (param) => {

    let src = [
     "image/AAAABaW57jWqw0Gs9gqgmW816THwyNfPqphIiruQRFy9KXtt9PTPJpB4kzDKriPcpNjPKCj0itu1Yfjl-CR8rGEokBHPKE4O9lZQHXHRRpUHEelwoKk8lOf4gqlws-HnR2iZeSk4.webp",
     "image/AAAABdEfeGjdvj452jc5bMXrD39y7zGRRkslUj0lFAzdMty0VGAuq0kSihpwIXxAafyUUReZb4dCOau4ey8bvT0dvArTl82isrtN0i4.webp",
     "image/AAAABeHe_OVl4W4DQgkehewW4FGi9I-nuXzGKPPY5XEWYrRcsavKtEh5kvz_zvLWO8mxDqsQJaSeDV-GFCzFwLIhjv2UFXoBz_13LSY.webp",
     "image/AAAABSwia_DCBlxiLBh8Q-HBGoecP0_G6Imr4DMAWRl2OSVrrMh-7dh69mzuKu0GSASyfA6Nq-78J9i8SkYFYPPOphAk8hb9lGfrzyQ.webp",
     "image/AAAABWjX2yXHjHWL7hDMzZNQf3ysBAso7Zqm4F1x3lxCxY6sRwCc1OpWmEE7hGyNZThrx2m8eDEj8ILKkItdqXJB--9Bo1g-5lks8Idled7PI3ks-idUcnGcF33yl5tA-_IcqIM5.webp"
    ];
if (param == 2){
    page = 2
    document.getElementById("pg2").disabled = true
    document.getElementById("pg1").disabled = false
    document.getElementById("prev").disabled = false
    document.getElementById("pg3").disabled = false
}else if (param == 3){
    page = 3
    document.getElementById("pg3").disabled = true
    document.getElementById("pg1").disabled = false
    document.getElementById("prev").disabled = false
    document.getElementById("pg2").disabled = false
} else if (param == 'next'){
    page = eval(page + 1)
}else if(param == 'prev'){
    page = eval(page - 1 || page == 1)
}
else{
    page = 1
    document.getElementById("pg1").disabled = true
    document.getElementById("prev").disabled = true
    document.getElementById("pg2").disabled = false
    document.getElementById("pg3").disabled = false
}
 try {
    let data = await fetch (`https://jsonplaceholder.typicode.com/users/${page}/posts`);
 console.log(data)
let post = await data.json()
console.log(post)
let show = "";
 post.map((user)=>{
let imgSrc = Math.floor(Math.random() * src.length);
show += `
<div class="child">
<img src=${src[imgSrc]} alt=""/>
<p>Id: ${user.id} </p>
<p>Title: ${user.title} </p>
<p> ${user.body}</p>
</div>`;
 });
 document.getElementById("display").innerHTML = show;
} catch(error){
    console.log(error);
    alert("Metwork error, please try again");
}

};
