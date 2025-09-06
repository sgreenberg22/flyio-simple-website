const facts = [
"Fly.io runs your apps close to your users.",
"This site is served by NGINX in a tiny container.",
"GitHub Actions can deploy on every push to main.",
"Static sites are fast, cheap, and reliable.",
"You can scale to zero or add regions with a command."
];
function pick() { return facts[Math.floor(Math.random() * facts.length)]; }
function update() { document.getElementById('fun-fact').textContent = pick(); }
document.getElementById('new-fact').addEventListener('click', update);
update();
