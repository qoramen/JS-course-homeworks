function first(firstname, cb) {
    console.log(firstname);
    cb()
}

function second(lastname) {
    console.log(lastname);
}

first('Murodbek', function() {
    second('Tojiboyev')
})

