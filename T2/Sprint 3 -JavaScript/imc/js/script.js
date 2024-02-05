//lista global
const listaPessoas = [];//lista vazia

function calcular(e) {
    e.preventDefault()//captura/para o submit do form/página
    let nome = document.getElementById("nome").value.trim();//limpa a string
    let altura = parseFloat(document.getElementById("altura").value);//NaN
    let peso = parseFloat(document.getElementById("peso").value);

    //verifica se há algum campo sem preencher
    if (isNaN(altura) || isNaN(peso) || nome.lenght < 2) {
        alert("É necessario preencher todos os campos")
        return;
    }

    const imc = calcularImc(peso, altura);
    const txtSituacao = geraSituacao(imc);

    // console.log(nome);
    // console.log(altura);
    // console.log(peso);
    // console.log(imc);
    // console.log(situacao);

    const pessoa = {
        //PROPRIEDADE / VALOR
        nome,
        altura,
        peso: peso,
        imc: imc,
        situacao: txtSituacao
    }

    //insere uma pessoa no array
    listaPessoas.push(pessoa);

    //exibir os dados
    exibirDados();

}//fim da função calcular

function limparFormulario() {
    document.getElementById("nome").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("peso").value = ""
};

function calcularImc(peso, altura) {
    return peso / (altura * altura);
    //return peso / Math.pow(altura, 2); //outro exemplo

}

function geraSituacao(imc) {
    if (imc < 18.5) {
        return "Magreza severa";
    }
    else if (imc <= 24.99) {
        return "Peso normal";
    }
    else if (imc <= 29.99) {
        return "Acima do peso";
    }
    else if (imc <= 34.99) {
        return "Obsidade I";
    }
    else if (imc <= 39.99) {
        return "Obsidade II";
    } else {
        return "Cuidado!!!"
    }
}//fim da função geraSituação

function exibirDados() {
    console.log(listaPessoas);

    let linhas = "";
    listaPessoas.forEach(function (oPessoa) {
        //linhas de tabela
        linhas +=
            `<tr>
                <td>${oPessoa.nome}</td>
                <td>${oPessoa.altura}</td>
                <td>${oPessoa.peso}</td>
                <td>${oPessoa.imc}</td>
                <td>${oPessoa.situacao}</td>
            </tr>`;
    });
    
    //inserir as linhas de tabela no HTML
    document.getElementById('cadastro').innerHTML = linhas;
}



//escopo de variável => abrângencia/visibilidade
//let x = 10;
//let xpto = "Eduardo";
//if(x >= 10) {
//   console.log(xpto);
//}
//xpto = "Carlos";
//console.log(x);
//console.log(xpto);