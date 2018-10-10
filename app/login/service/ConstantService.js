class ConstantService {
    constructor(constant){
        this.constant = constant;
    }

    getConstant(){
        return this.constant;
    }

    setConstant(value){
        this.constant =  value;
    }

    static serviceFactory(){
        ConstantService.instance = new ConstantService();
        return ConstantService.instance;
    }
}

export default ConstantService.serviceFactory;