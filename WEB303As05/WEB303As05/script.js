/*
    Assignment 05
*/
$(document).ready(function () {
    class ContentItem {
        id = 0;
        name ="name";
        description = "description";
        genre = "genre";
    constructor(id, name, description, genre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.genre = genre;
    }
    get id(){
        return this.id;
    }
    set id(value){
        this.id = value;
    }
    get name(){
        return this.name;
    }
    set name(value){
        this.name = value;
    }
    get description(){
        return this.description;
    }
    set description(value){
        this.description = value;
    }
    get genre(){
        return this.genre;
    }
    set genre(value){
        this.genre = value;
    }
    updateContent(name, description, genre) {
        if(name != null && description != null && genre != null){
            this.name = name;
            this.description = description;
            this.genre = genre;
        }
    }
    toString(){
        return `<div id="content-${this.id}">
            <h2>${this.name}</h2>
            <p>${this.description}</p>
            <div>${this.genre}</div>
        </div>`;
    }
}

let videogames = [
    [0, 'Team Foretress 2', 'Pick from 9 different classes with multiple playstyles and win the objective', 'First-Person Shooter/Online Multiplayer'],
    [1, 'Left-4-Dead 2', 'Survive the zombie hoards using all you can in the multiplayer FPS ', 'First-Person Shooter/Multiplayer'],
    [2, 'Hollow Knight', 'Explore dugneons to uncover secrets and fight bosses that lead to more areas and loot', 'Platformer/Adventre'],
    [3, 'Alice Madness Returns', 'Go through this new take on Alice in Woderland and slash your way through enimes and bosses', 'Hack-n-Slash'],
    [4, 'Quake', 'hoot up alien craetures and traverse your way through alien landscapes', 'First-Person Shooter']
];

videogames.forEach(videogames =>
    {
        let vg = new ContentCard(videogames[0], videogames[1], videogames[2], videogames[3], videogames[4]);
        $("#content-item-list").append(vg.toString());
    });
});


