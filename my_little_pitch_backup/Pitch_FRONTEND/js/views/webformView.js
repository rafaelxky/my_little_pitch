export function webformView() {
  return `
    <h2>Submeter Projeto</h2>
    <form class="webform">
      <label for="name">Nome do Cliente:</label>
      <input type="text" id="name" required />

      <label for="company">Nome da Empresa:</label>
      <input type="text" id="company" required />

      <label for="sector">Setor de Atividade:</label>
      <select id="sector">
        <option value="agribusiness">Agronegócio</option>
        <option value="industry">Indústria</option>
        <option value="construction">Construção</option>
        <option value="commerce">Comércio</option>
        <option value="financial">Serviços Financeiros</option>
        <option value="technology">TI</option>
        <option value="education">Educação</option>
        <option value="health">Saúde</option>
        <option value="transportation">Transportes</option>
        <option value="professional">Serviços Profissionais</option>
      </select>

      <label for="role">Cargo:</label>
      <input type="text" id="role" required />

      <label for="summary">Resumo do Projeto:</label>
      <textarea id="summary" rows="4" required></textarea>

      <label for="file">Upload do Ficheiro:</label>
      <input type="file" id="file" />

      <button type="submit">Submeter</button>
    </form>
  `;
}

