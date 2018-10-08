class LoginController {
    constructor(myConstant){
        this.message = "Login Page edited";
        this.constant = myConstant;
    }
}
LoginController.$inject = ['MY_CONSTANT'];
export default LoginController;