export default class Storage {
  // Retorna todas as submissões armazenadas no localStorage
  static getSubmissions() {
    return JSON.parse(localStorage.getItem('submissions')) || [];
  }

  // Retorna uma submissão específica a partir do seu ID
  static getSubmissionById(id) {
    return this.getSubmissions().find(sub => sub.id === id);
  }

  // Salva ou atualiza uma submissão no localStorage
  static saveSubmission(submission) {
    const submissions = this.getSubmissions();
    const index = submissions.findIndex(s => s.id === submission.id);

    if (index !== -1) {
      submissions[index] = submission; // Atualiza submissão existente
    } else {
      submissions.push(submission); // Adiciona nova submissão
    }

    // Atualiza o localStorage com as novas submissões
    localStorage.setItem('submissions', JSON.stringify(submissions));
  }

  // Atualiza o status de uma submissão existente
  static updateSubmissionStatus(id, status) {
    const submissions = this.getSubmissions();
    const submission = submissions.find(s => s.id === id);
    if (submission) {
      submission.status = status;
      // Atualiza o localStorage com o status alterado
      localStorage.setItem('submissions', JSON.stringify(submissions));
    }
  }
}
