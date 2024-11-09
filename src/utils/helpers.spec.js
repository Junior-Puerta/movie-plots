//enviar um objeto, e retornar um objeto com as propriedades title e plot iguais aos enviados.
  import {formatMovieObject} from "./helpers"

// const { formatMovieObject } = require("./helpers.js");

const objetoteste = {
  Title: "O Senhor dos Anéis.",
  Year: "2001",
  Plot: "Em busca da destruição do anel.",
};

describe("O filme tem várias propriedades dentre elas:", () => {
  test("Retorna o title do filme", () => {
    expect(formatMovieObject(objetoteste).title).toBe("O Senhor dos Anéis.");
  });

  test("Retorna a sinopse do filme", () => {
    expect(formatMovieObject(objetoteste).plot).toBe("Em busca da destruição do anel.");
  });

  test("Após os 1° e 2° testes, testa se o objeto não possui mais propriedades.", () => {
    expect(Object.entries(formatMovieObject(objetoteste)).length).toBe(2);
  });

  test("Retorna ERRO UNDEFINED", () => {
    expect(() => formatMovieObject(null)).toThrow();
  });

  test("Retorna ERRO NULL", () => {
    expect(() => formatMovieObject(undefined)).toThrow();
  });
});

//testar se o 3 nao existe
//cenarios de falha de teste
