function preset(url) {
  let formattedURL = url.startsWith("http") ? url : "https://" + url;
  window.open(formattedURL + '?' + 'i'.repeat(16380), '_blank');
}

function openURL() {
  let url = document.getElementById("URL").value.trim();
  if (url) {
    preset(url);
    addPreset(url);
  }
}

function addPreset(url) {
  let presets = JSON.parse(localStorage.getItem("presets")) || [];
  if (!presets.includes(url)) {
    presets.push(url);
    localStorage.setItem("presets", JSON.stringify(presets));
    loadPresets();
  }
}

function loadPresets() {
  let presets = JSON.parse(localStorage.getItem("presets")) || [];
  let list = document.getElementById("presetList");
  list.innerHTML = "";
  presets.forEach(url => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.href = "#";
    a.textContent = url;
    a.onclick = () => preset(url);
    li.appendChild(a);
    list.appendChild(li);
  });
}

function clearPresets() {
  localStorage.clear();
}
