class ConstantService {
    constructor(constant){
        this.constant = constant;
    }

    getConstant(){
        return this.constant;
    }

    static serviceFactory(constant){
        ConstantService.instance = new ConstantService(constant);
        return ConstantService.instance;
    }
}

ConstantService.serviceFactory.$inject = ['MY_CONSTANT'];
export default ConstantService.serviceFactory;