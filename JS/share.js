document.getElementById('facebook-share').addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
});

document.getElementById('twitter-share').addEventListener('click', function() {
    window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(window.location.href));
});

document.getElementById('linkedin-share').addEventListener('click', function() {
    window.open('https://www.linkedin.com/shareArticle?url=' + encodeURIComponent(window.location.href));
});
