module.exports = (req, res) => {
    if (!req.session.views) {
        req.session.views = 1;

        return res.end('Welcome to the file session demo. Refresh page!');
    }

    // else:
    let html = `<h1 style="font-family: sans-serif; color: darkgrey; font-size: 50px; text-aign: center;">views: ${req.session.views++}<p>`;
    res.setHeader('Content-Type', 'text/html');
    res.write(html);

    return res.end();
};