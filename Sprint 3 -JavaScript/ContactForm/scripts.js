function campoDeDados(dados) {

    document.getElementById("nome").value;
    document.getElementById("sobrenome").value;
    document.getElementById("email").value;
    document.getElementById("pais").value;
    document.getElementById("ddd").value;
    document.getElementById("telefone").value;
    document.getElementById("anotacoes").value;
    document.getElementById("cep").value;
    document.getElementById("rua").value;
    document.getElementById("numero").value;
    document.getElementById("complemento").value;
    document.getElementById("bairro").value;
    document.getElementById("cidade").value;
    document.getElementById("UF").value;
}

function dadosError() {
    document.getElementById("email").value = "Este campo é abrigatório!"
    document.getElementById("pais").value = "Este campo é abrigatório!"
    document.getElementById("ddd").value = "Este campo é abrigatório!"
    document.getElementById("telefone").value = "Este campo é abrigatório!"
    document.getElementById("anotacoes").value = "Este campo é abrigatório!"
    document.getElementById("cep").value = "Este campo é abrigatório!"
    document.getElementById("rua").value = "Este campo é abrigatório!"
    document.getElementById("numero").value = "Este campo é abrigatório!"
    document.getElementById("complemento").value = "Este campo é abrigatório!"
    document.getElementById("bairro").value = "Este campo é abrigatório!"
    document.getElementById("cidade").value = "Este campo é abrigatório!"
    document.getElementById("UF").value = "Este campo é abrigatório!"
}

function limparDados() {

    document.getElementById("nome").value = ""
    document.getElementById("sobrenome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("pais").value = ""
    document.getElementById("ddd").value = ""
    document.getElementById("telefone").value = ""
    document.getElementById("anotacoes").value = ""
    document.getElementById("cep").value = ""
    document.getElementById("rua").value = ""
    document.getElementById("numero").value = ""
    document.getElementById("complemento").value = ""
    document.getElementById("bairro").value = ""
    document.getElementById("cidade").value = ""
    document.getElementById("UF").value = ""
}

async function cadastrarDados(e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const pais = document.getElementById("pais").value;
    const ddd = document.getElementById("ddd").value;
    const telefone = document.getElementById("telefone").value;
    const anotacoes = document.getElementById("anotacoes").value;
    const cep = document.getElementById("cep").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const UF = document.getElementById("UF").value;

    const objDados = { cep, rua, numero, complemento, bairro, cidade, uf, nome, sobrenome, email, pais, ddd, telefone, anotacoes }

    try {
        const promise = await fetch(urlLocal, {
       
            body: JSON.stringify(objDados),
            headers: { "Content-Type": "application/json" },
            method: "post"
        });

        const retorno = promise.json();
        console.log(retorno);

    } catch (error) {
        alert("Erro... Deu Ruim!" + error)
    }
}


    async function chamarApi() {
        const cep = document.getElementById("cep").value;
        const url = `https://viacep.com.br/ws/${cep}/json/`

        try {
            const promise = await fetch(url)
            const endereco = await promise.json();
            console.log(endereco);

            exibirEndereco(endereco);
            document.getElementById("not-found").innerText = ""

        } catch (error) {
            limparEndereco();
            alert("CEP Inválido");
        }
    };