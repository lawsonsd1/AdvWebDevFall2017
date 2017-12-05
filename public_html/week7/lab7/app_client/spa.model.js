class Model extends BaseModel {

    constructor() {
        super()        
    }
    
     toggleOn(evt){
        evt.target.classList.toggle('on')
        this.dataBindModel.isOn = !this.dataBindModel.isOn
        return Promise.resolve()
    }
    
    get isOn(){
        return this.dataBindModel.isOn
    }

}