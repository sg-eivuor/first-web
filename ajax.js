function fetchPage(name){
    fetch(name).then(function (response) {
        response.text().then(function (text) {
            document.querySelector('article').innerHTML = text;
        })
    });
}
if (location.hash) {
    fetchPage(location.hash.substr(2));
} else {
    fetchPage('welcome');
}
fetch('list').then(function (response) {
    response.text().then(function (text) {
        var items = text.split(',');
        var i = 0;
        var tags = '';
        while (i < items.length) {
            var item = items[i].trim()
            var tag = '<li><a href="#!'+item+'" onclick="fetchPage(\''+item+'\')">'+item+'</a></li>'
            tags = tags + tag;
            i++
        }
        document.querySelector('#nav').innerHTML = tags;
    })
})