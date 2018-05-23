class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValue = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
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

        // let data = new Date(...this._inputData.value //utilizando arrow function
        //     .split('-')
        //     .map((item, indice)=> item - indice % 2)
        // );
        // let helper = new DateHelper();

        // let data = helper.textoParaData(this._inputData.value);
        // console.log(data);
        
        let negociacao = this._criaNegociacao();

        this._listaNegociacoes.adiciona(negociacao);
        this._limpaFormulario();


        console.log(this._listaNegociacoes.negociacoes);
        // let negociacao = new Negociacao(
        //     this._inputData.value,
        //     this._inputQuantidade.value,
        //     this._inputValue.value
        // );

//       console.log(negociacao.data);
//       console.log(negociacao);

        //adicionar a negociação em uma lista

//       console.log(DateHelper.dataParaTexto(negociacao.data))

        // let diaMesAno = negociacao.data.getDate() + '/' + (negociacao.data.getMonth() + 1) + '/' + negociacao.data.getFullYear();
        // console.log(diaMesAno);
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValue.value
        );
    }

    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValue.value = 0.0;
        
        this._inputData.focus();
    }
}