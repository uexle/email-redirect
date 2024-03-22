window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get('email');
    const subject = urlParams.get('subject');
    const body = urlParams.get('body');

    if (email && subject && body) {
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    } else {
        console.error('Missing parameters: email, subject, or body.');
    }
}