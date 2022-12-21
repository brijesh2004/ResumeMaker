
function deatils(){

    // pulling the data from the user
    const username = document.getElementById("username").value;
    const collegenameofuser = document.getElementById("collegenameofuser").value;
    const mobile = document.getElementById("mobile").value;
    const domain = document.getElementById("domain").value;
    const email = document.getElementById("email").value;
    const linkedin = document.getElementById("linkedin").value;
    const plink = document.getElementById("plink").value;
    const enterabout = document.getElementById("enterabout").value;
    const enterexprence = document.getElementById("enterexprence").value;
    // console.log(enterabout);
    // console.log(enterexprence);
    const project1 = document.getElementById("project1").value;
    const project2 = document.getElementById("project2").value;
    const project3 = document.getElementById("project3").value;
    const project4 = document.getElementById("project4").value;
    const project5 = document.getElementById("project5").value;
  const skills1=  document.getElementById("skill1").value;
  const skills2=  document.getElementById("skill2").value;
  const skills3=  document.getElementById("skill3").value;
  const skills4=  document.getElementById("skill4").value;
  const skills5=  document.getElementById("skill5").value;

   



// push the data into resume  

    const name = document.getElementById("name1").innerText = username;

    const domain1 = document.getElementById("domain1").innerText = domain;
    const mobile1 = document.getElementById("mobile1").innerText = mobile;
    const email1 = document.getElementById("email1").innerText = email;
    const linkedinid= document.getElementById("linkedinid").innerText = linkedin;
    const portfoliolink = document.getElementById("portfoliolink").innerText = plink;
    document.getElementById("aboutelement").innerText=enterabout;
    document.getElementById("yourexprence").innerText=enterexprence;
    document.getElementById("yproject1").innerText=project1;
    document.getElementById("yproject2").innerText=project2;
    document.getElementById("yproject3").innerText=project3;
    document.getElementById("yproject4").innerText=project4;
    document.getElementById("yproject5").innerText=project5;
     document.getElementById("userskill1").innerText=skills1;
     document.getElementById("userskill2").innerText=skills2;
     document.getElementById("userskill3").innerText=skills3;
     document.getElementById("userskill4").innerText=skills4;
     document.getElementById("userskill5").innerText=skills5;
     document.getElementById("CollegeName").innerText=collegenameofuser;

    // console.log(username+ domain1 + mobile1 ); 

   document.getElementById("enterdetails").style.display="none";
   document.getElementById("sometextaboutuser").style.display="none";
   document.getElementById("pdf").style.display="block";
   document.getElementById("buttonPrint").style.display="block";


}


