const request = require("supertest");

describe("Rick and Morty Characters API", () => {
  it("/get a valid character", async () => {
    const response = await request("https://rickandmortyapi.com/api").get(`/character/1`);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Rick Sanchez");
    expect(response.body.status).toBe("Alive");
    expect(response.body.species).toBe("Human");
    expect(response.body.type).toBe("");
    expect(response.body.gender).toBe("Male");
    expect(response.body.origin.name).toBe("Earth (C-137)");
    expect(response.body.location.name).toBe("Citadel of Ricks");
    expect(response.body.image).toBe("https://rickandmortyapi.com/api/character/avatar/1.jpeg");
    expect(response.body.episode).toContain("https://rickandmortyapi.com/api/episode/1"); //Vale destacar que essa linha de código verifica apenas um dos episódios no qual o personagem está presente. Portanto, qualquer ep que conte com a aparição do character em questão pode ser testado aqui.
    expect(response.body.url).toBe("https://rickandmortyapi.com/api/character/1");
  });

  it("/get an invalid character", async () => {
    const response = await request("https://rickandmortyapi.com/api").get(
      `/character/9999`
    );
 //Serve para identificar personagens inválidos
    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({});
  });
});
describe("Rick and Morty Locations API", () => {
  it("/get a valid location", async () => {
    const response = await request("https://rickandmortyapi.com/api").get(`/location/1`);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Earth (C-137)");
    expect(response.body.type).toBe("Planet");
    expect(response.body.dimension).toBe("Dimension C-137");
    expect(response.body.created).toBe("2017-11-10T12:42:04.162Z");
    expect(response.body.residents).toContain("https://rickandmortyapi.com/api/character/38"); //Essa linha de código serve para verificar se determinador morador vive em determinada localização.
    expect(response.body.url).toBe("https://rickandmortyapi.com/api/location/1");
  });
  it("/get an invalid location", async () => {
    const response = await request("https://rickandmortyapi.com/api").get(
      `/location/9999`
    );
 //Serve para identificar localizações inválidos
    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({});
  });
});
describe("Rick and Morty Episodes API", () => {
  it("/get a valid episode", async () => {
    const response = await request("https://rickandmortyapi.com/api").get(`/episode/1`);
    expect(response.status).toBe(200);
    expect(response.body.name).toBe("Pilot");
    expect(response.body.air_date).toBe("December 2, 2013");
    expect(response.body.episode).toBe("S01E01");
    expect(response.body.created).toBe("2017-11-10T12:56:33.798Z");
    expect(response.body.characters).toContain("https://rickandmortyapi.com/api/character/2"); //Assim como nos outros exemplos, essa linha de código verifica se um determinado personagem passou pelo episódio em questão.
    expect(response.body.url).toBe("https://rickandmortyapi.com/api/episode/1");
  });
  it("/get an invalid location", async () => {
    const response = await request("https://rickandmortyapi.com/api").get(
      `/episode/9999`
    );
 //Serve para identificar episódios inválidos
    expect(response.status).toBe(404);
    expect(response.body).toMatchObject({});
  });
});
