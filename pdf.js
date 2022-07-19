window.onload = () => {
    document.getElementsByClassName('btn_download')
        .addEventListener('click', () => {
            const invoice = document.getElementsByClassName('invoicing');
            console.log(invoice);
        })
}