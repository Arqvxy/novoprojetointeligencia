const nomes = ["Alice", "Fernanda", "Maria Luiza", "Erick", "Steicy", "Mayara", "Popotão"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)