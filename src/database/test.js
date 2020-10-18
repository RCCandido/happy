const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    
    // inserir dados na tabela
    /*await saveOrphanage(db, {
        lat: "-25.4329122",
        lng: "-49.2516922",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou volnerabilidade social.",
        whatsapp: "9898918",
        images: [
            "https://images.unsplash.com/photo-1601564921698-0166194c51ee?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1590033821368-7f7f469b1561?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructons: "Venha como se sentir a vontate e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })*/

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // consultar somente 1 pelo ID
    //const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    //console.log(orphanage)
    
    // deletar dads da tabela
    //console.log(await db.run('DELETE FROM orphanages WHERE id = "3"'))

})