const login = (req, res, next) => {
  //login คิอ file
   res.render("login", {
    //data คือ object
     data: {
       pageName: "Login",
       message: "กรุณาล็อกอินเข้าสู่ระบบ",
       class: "alert alert-primary",
       loginStatus: false
     } 
   });
};
module.exports.login = login;
//{ data: { pageName:"Login",message:""}}