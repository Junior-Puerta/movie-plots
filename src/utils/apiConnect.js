export async function fetchMovie(movieName) {
  const URL = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&t=${movieName}&plot=full`;

  try {
    const res = await fetch(URL);
    if (!res.ok) {
      throw new Error(`Falha: ${res.status}`);
    }
    return res.json();
  } catch (error) {
    return error;
  }
}

export async function fetchTranslate(plot) {
  const URL = "http://localhost:5000/translate"; //rota para fazer a chamada da API local(no pc)

  const res = await fetch(URL, {
    //no 2° parametro do fetch neste caso é um objeto, dados a mais que a nossa requisição precisa ter para ser mandada com sucesso, conforme documentação.
    method: "POST",
    body: JSON.stringify({
      q: plot,
      source: "en",
      target: "pt",
      format: "text",
    }),
    headers: { "Content-Type": "application/json" },
  });

  const translatedobject = await res.json();
  return translatedobject;
}
