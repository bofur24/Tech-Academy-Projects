// Dictionary

function my_Dictionary() {
    var Gundams = {
        Name: "RX-78-2",
        Type: "Mobile Suit",
        Pilot: "Amuro Ray",
    }
    delete Gundams.Type; // Deletes the Type property from the Gundams object
    document.getElementById("Dictionary").innerHTML = Gundams.Pilot;
    document.getElementById("Dictionary").innerHTML = Gundams.Type; // This will return undefined because the Type property has been deleted from the Gundams object
}