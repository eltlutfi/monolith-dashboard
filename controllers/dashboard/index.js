module.exports = {
    home: (req, res) => {
        const locals = {
            data: [ {Post: 10, Visitor: 100, Render: 10} ],
            contentName: 'Statistic',
            layouts: 'layouts/dashboard'
        }
        res.render('pages/dashboard/home', locals)
    },
    post: require('./post')
}