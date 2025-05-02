export function webformView() {
  return `
    
    <form class="webform">
      <label for="name">Name:</label>
      <input type="text" id="name" required />

      <label for="company">Company:</label>
      <input type="text" id="company" required />

      <label for="sector">Activity Sector:</label>
      <select id="sector">
        <option value="agribusiness">Agribusiness</option>
        <option value="industry">Industry</option>
        <option value="construction">Construction</option>
        <option value="commerce">Commerce</option>
        <option value="financial">Financial</option>
        <option value="technology">TI</option>
        <option value="education">Education</option>
        <option value="health">Health</option>
        <option value="transportation">Transportation</option>
        <option value="professional">Other</option>
      </select>

      <label for="role">Role:</label>
      <input type="text" id="role" required />

      <label for="projectName">Project Name:</label>
      <input type="text" id="projectName" required />

      <label for="summary">Project Summary:</label>
      <textarea id="summary" rows="4" required></textarea>

      <label for="file">Upload File:</label>
      <input type="file" id="file" />

      <button type="submit">Submit</button>
    </form>
  `;
}

