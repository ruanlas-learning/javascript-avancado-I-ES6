class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValue = $('#valor');
    }
    
    adiciona(event){
        event.preventDefault();

        // console.log(typeof(this._inputData.value));
        // console.log(this._inputData.value);

        // let data = new Date(this._inputData.value.split('-'));  ////////primeira opção

        // let data = new Date(...this._inputData.value  ///opção verbosa
        //     .split('-')
        //     .map(function(item, indice){
        //         if(indice == 1){
        //             return item - 1;
        //         }
        //         return item;
        //     })
        // );

        let data = new Date(...this._inputData.value //utilizando arrow function
            .split('-')
            .map((item, indice)=> item - indice % 2)
        );

        console.log(data);
        
        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValue.value
        );
        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValue.value
        // );

        console.log(negociacao);
        //adicionar a negociação em uma lista
    }
}