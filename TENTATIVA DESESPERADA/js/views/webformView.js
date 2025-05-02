// Função que renderiza o formulário de submissão de projeto
export function webformView() {
  return `
    <section class="form-section">

      <form class="webform">
        <label for="name">Client Name:</label>
        <input type="text" id="name" placeholder="Enter your name" required />

        <label for="company">Company Name:</label>
        <input type="text" id="company" placeholder="Enter company name" required />

        <label for="sector">Activity Field:</label>
        <select id="sector" required>
          <option value="" disabled selected>Choose an option</option>
          <option value="agribusiness">Agribusiness</option>
          <option value="industry">Industry</option>
          <option value="construction">Construction</option>
          <option value="commerce">Commerce</option>
          <option value="financial">Financial Services</option>
          <option value="technology">IT</option>
          <option value="education">Education</option>
          <option value="health">Health</option>
          <option value="transportation">Transportation</option>
          <option value="professional">Professional Services</option>
        </select>

        <label for="role">Role:</label>
        <input type="text" id="role" placeholder="Enter your role" required />

        <label for="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" required />

        <label for="projectName">Project Name:</label>
        <input type="text" id="projectName" placeholder="Enter project name" required />

        <div class="brief-container">
          <label for="summary">Project Brief:</label>
          <textarea id="summary" rows="4" maxlength="500" placeholder="Enter a short description (max 500 characters)" required></textarea>
          <div id="char-count">500 characters remaining</div>
        </div>

        <label for="file">Upload:</label>
        <input type="file" id="file" />

        <button type="submit">Save and Submit</button>
      </form>
    </section>
  `;
}
