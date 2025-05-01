export class RfpApiService {
  constructor() {
    this.baseUrl = 'http://ec2-13-53-174-58.eu-north-1.compute.amazonaws.com:8080/tldr/api/rfp'; // URL estática
  }

  // Listar todos os RFPs
  async list() {
    try {
      const res = await fetch(this.baseUrl);
      if (!res.ok) throw new Error('Failed to fetch RFPs');
      return await res.json();
    } catch (err) {
      console.error('List RFP Error:', err);
      return [];
    }
  }

  // Obter um RFP por ID
  async get(id) {
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
  async update(rfp) {
    try {
      const res = await fetch(`${this.baseUrl}/update`, {
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
