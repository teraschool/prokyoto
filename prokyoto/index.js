(() => {
    // レジュメダウンロード
    const select = document.querySelector('select.files');
    const dlButton = document.querySelector('button.download');
    select.addEventListener('change', () => {
        dlButton.disabled = !select.value;
    });
    dlButton.addEventListener('click', () => {
        const id = select.value;
        if (!id) {
            return;
        }
        location.href = `https://docs.google.com/document/d/${id}/export?format=pdf`;
    });

    // スライドショー
    const el = document.getElementById('slideshow');
    slideshow(el);
    
    function slideshow(el) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                el.innerHTML = xhr.response;

                // innerHTMLでは<script>タグが実行されないため、
                // <script>タグが実行されるように追加する
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js';
                el.insertBefore(script, el.firstChild);
            }
        }
        xhr.open('GET', 'slideshow.html');
        xhr.send();
    }
})();
