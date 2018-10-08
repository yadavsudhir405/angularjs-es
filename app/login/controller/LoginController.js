class LoginController {
    constructor(constantService){
        this.message = "Login Page edited";
        this.constant = constantService.getConstant();
    }
}
LoginController.$inject = ['ConstantService'];
export default LoginController;