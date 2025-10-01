document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  document.querySelectorAll('a[target="_blank"]').forEach(a => a.setAttribute('rel','noopener'));
});
