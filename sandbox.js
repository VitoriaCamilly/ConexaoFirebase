const crud = require("./crud");

async function buscarDadosPorId(){
    const dados = await crud.getById("pessoas", "PM9N2hBau4VJGsB5TfOe");
    console.log(dados);
}
    
buscarDadosPorId();