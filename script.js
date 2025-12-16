<script>
// Mobile nav toggle
function toggleMenu() {
document.getElementById('navLinks').classList.toggle('active');
}


// Scroll progress bar
window.addEventListener('scroll', () => {
const scrollTop = document.documentElement.scrollTop;
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const progress = (scrollTop / scrollHeight) * 100;
document.getElementById('progress-bar').style.width = progress + '%';
});
</script>
