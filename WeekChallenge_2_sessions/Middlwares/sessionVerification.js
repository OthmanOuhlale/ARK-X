exports.verifySession = (req, res, next) => {
    const id_session = req.sessionID;
    console.log(id_session);
    console.log(req.cookies);
    const id_cookie = req.cookies['connect.sid']?.split(':')[1].split('.')[0];
    console.log(id_cookie);
    if (id_session !== id_cookie || !req.session.idUser) {
        res.status(401).json({ error: 'Invalid session' });
    } else {
        next();
    }
}