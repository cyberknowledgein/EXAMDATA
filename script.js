function searchResult() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const student = studentData.find(
    s => s.name.toLowerCase() === input || s.mobile === input
  );

  const box = document.getElementById("resultBox");
  const nf = document.getElementById("notFound");

  if (!student) {
    box.classList.add("hidden");
    nf.classList.remove("hidden");
    return;
  }

  document.getElementById("rName").innerText = student.name;
  document.getElementById("rMobile").innerText = student.mobile;
  document.getElementById("rClass").innerText = student.class;
  document.getElementById("rGrade").innerText = student.grade;

  const statusEl = document.getElementById("rStatus");
  statusEl.innerText = student.status;
  statusEl.className = `status ${student.status}`;

  document.getElementById("rRemarks").innerText = student.remarks;

  box.classList.remove("hidden");
  nf.classList.add("hidden");
}
