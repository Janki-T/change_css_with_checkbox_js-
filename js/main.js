
function convert_form() {
    console.log("function called")
    document.querySelector('.form_input').style =
        " font-size: 20px; margin-bottom: 20px; width: 300px; margin: 0 auto;";
    document.querySelector('.form').style =
        "margin: 60px auto;";
    document.querySelector('.mg-center').style =
        " margin: 0 auto; background-color: #008080; padding: 20px; border-radius:20px;";

    let nodelist_1 = document.querySelectorAll("input");
    for (let i = 0; i < nodelist_1.length; i++) {
        nodelist_1[i].style = 
        "background-color:#FF7F50; border-radius:5px; border: 2px solid black;";
    }

    let nodelist_2 = document.querySelectorAll(".Label");
    for (let x = 0; x < nodelist_2.length; x++) {
        nodelist_2[x].style.color = "yellow";
    }
    console.log(document.querySelectorAll(".Label"));
}
