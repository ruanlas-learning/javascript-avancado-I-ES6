class Negociacao{

    constructor(data, quantidade, valor){

        // o _<nomedocampo> é uma convenção para definição de campos privados
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        //congela o estado do objeto e torna as propiedades imutáveis
        Object.freeze(this);
    }

    get volume(){

        return this._quantidade * this._valor;
    }
    
    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}