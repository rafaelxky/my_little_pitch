console.log("responseApiService")
export class RfpApiService {
  constructor() {
    this.baseUrl = 'http://127.0.0.1:8080/api/rfp'; // URL estática
  }

  // Listar todos os RFPs
  async list() {
    console.log("api response list")
    try {
      const res = await fetch(this.baseUrl);
      if (!res.ok) throw new Error('Failed to fetch RFPs');
      let resJson = await res.json();
      console.log("res.json: ", resJson)
      return resJson;
    } catch (err) {
      console.error('List RFP Error:', err);
      return [];
    }
  }

  // Obter um RFP por ID.
  async get(id) {
    console.log("api response get")
    try {
      const res = await fetch(`${this.baseUrl}/${id}`);
      if (!res.ok) throw new Error(`RFP ${id} not found`);
      return await res.json();
    } catch (err) {
      console.error(`Get RFP Error (${id}):`, err);
      return null;
    }
  }

  // Criar novo RFP
  async add(rfp) {
    console.log("api response add")
    console.log("rfp api add: ", rfp)
    try {
      const res = await fetch(`${this.baseUrl}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rfp),
      });

      if (!res.ok) throw new Error('Failed to add RFP');
      return await res.json();
    } catch (err) {
      console.error('Add RFP Error:', err);
      return null;
    }
  }

  // Atualizar RFP existente
  async update(id, rfp) {
    console.log("updating from responseApiService: ", rfp)
    rfp.id = id
    try {
      const res = await fetch(`${this.baseUrl}/${rfp.id}/update`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rfp),
      });

      if (!res.ok) throw new Error('Failed to update RFP');
      return await res.json();
    } catch (err) {
      console.error('Update RFP Error:', err);
      return null;
    }
  }
}
