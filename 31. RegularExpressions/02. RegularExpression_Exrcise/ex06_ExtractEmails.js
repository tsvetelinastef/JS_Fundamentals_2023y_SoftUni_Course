function extractEmails(text){
    let pattern = /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]*)@[a-z]+\-?[a-z]+(\.[a-z]+)+/gm;
    let emails = text.match(pattern); 

    for(let email of emails){
        console.log(email);
    }

}

extractEmails("Please contact us at: support@github.com.");
//extractEmails()