// Simulated Pipeline Data
const pipelines = [
    { name: "Uran", inlet: "12", outlet: "10", status: "Operational" },
    { name: "Chakan", inlet: "15", outlet: "12", status: "Under Maintenance" },
    { name: "Patalganga", inlet: "10", outlet: "8", status: "Operational" },
    { name: "Rasayani", inlet: "14", outlet: "11", status: "Operational" },
  ];
  
  // Populate Table with Data
  const tableBody = document.getElementById("pipeline-data");
  
  pipelines.forEach((pipeline) => {
    const row = document.createElement("tr");
  
    row.innerHTML = `
      <td>${pipeline.name}</td>
      <td>${pipeline.inlet}</td>
      <td>${pipeline.outlet}</td>
      <td class="${pipeline.status === 'Operational' ? 'status-ok' : 'status-warning'}">
        ${pipeline.status}
      </td>
    `;
  
    tableBody.appendChild(row);
  });
  