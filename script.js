function salvarTXT() {
    // Pega o conteúdo digitado
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let sexo = document.querySelector('input[name="sexo"]:checked').value;
    let obs = document.getElementById("obs").value;
    let data = new Date().toLocaleDateString();
    let hora = new Date().toLocaleTimeString();

    // Cria um objeto Blob (como se fosse o arquivo em memória)
    let texto = `Nome: ${nome}\nIdade: ${idade}\nPeso: ${peso} kg\nAltura: ${altura} cm\nSexo: ${sexo}\nObservações: ${obs}`;
    let blob = new Blob([texto], { type: "text/plain" });
    
    // Cria um link temporário para download
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${nome}_${data}_${hora}.txt`; // nome do arquivo
    link.click();
    
    // Libera memória
    URL.revokeObjectURL(link.href);
}

function limparCampos() {
    document.getElementById("formulario").reset();
}