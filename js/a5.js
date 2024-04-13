

var bookList = [
    {
        title: "A Brief History of Time", author: "Steve Hawking", genre:
            "Nonfiction", description: 'It addresses questions like "what do we really know about the universe. " '
    },
    {
        title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling",
        genre: "fantasy", description: "Where magic goes"
    },
    { title: "Homo Deus - A Brief History of Tomorrow", author: "Yuval Noah Harari", genre: "Nonfiction", description: "It shows us where we are going." },
    { title: "Sapiens - A Brief History of Humankind", author: "Yuval Noah Harari", genre: "Nonfiction", description: "It shows us where we came from." },
    {
        title: "You Can Heal Your Life", author: "Louise Hay", genre: "Nonfiction",
        description: "The thougths we think and the words we speak create our experiences."
    },
    {
        title: "Gone With the Wind", author: "Margaret Mitchell", genre: "Drama",
        description: "It tells a romantic story during the America Civial War."
    }
];

function addBook()
{
    var title = document.bookform.title.value;
    var author = document.bookform.author.value;
    var genre = document.bookform.genre.value;
    var description = document.bookform.desc.value;

    bookList.push({title, author, genre, description});

    var addElem = document.querySelector("#bookadded");
    addElem.innerHTML = `Book "${title}" is added to my bookshelf.`

}
function displayTable() {

    var input = document.querySelector("#search").value;

    var div = document.querySelector("#searchDiv");

    var table = document.querySelector("#booktable");
    table.remove();

    table = document.createElement('table');
    table.id = "booktable";

    if(input == "")
    {
    
        var hrow = document.createElement('tr');
        var hcol1 = document.createElement('th');
        hcol1.appendChild(document.createTextNode("Book Title"));
        var hcol2 = document.createElement('th');
        hcol2.appendChild(document.createTextNode("Author Name"));
        var hcol3 = document.createElement('th');
        hcol3.appendChild(document.createTextNode("Genre"));
        var hcol4 = document.createElement('th');
        hcol4.appendChild(document.createTextNode("Description"));
    
        hrow.appendChild(hcol1);
        hrow.appendChild(hcol2);
        hrow.appendChild(hcol3);
        hrow.appendChild(hcol4);
        table.appendChild(hrow);
    
        for (var i = 0; i < bookList.length; i++) {
            var row = document.createElement('tr');
            var col1 = document.createElement('td');
            var col2 = document.createElement('td');
            var col3 = document.createElement('td');
            var col4 = document.createElement('td');
            
            var title = document.createTextNode(bookList[i].title);
            var author = document.createTextNode(bookList[i].author);
            var genre = document.createTextNode(bookList[i].genre);
            var desc = document.createTextNode(bookList[i].description);
    
            col1.appendChild(title);
            col2.appendChild(author);
            col3.appendChild(genre);
            col4.appendChild(desc);
    
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            row.appendChild(col4);
    
            table.appendChild(row);
        }
    
        div.appendChild(table);
    }
    else
    {
        var index = [];
        input = input.toLowerCase();

        for(var i = 0; i < bookList.length; i++)
        {
            var title = bookList[i].title.toLowerCase();
            var author = bookList[i].author.toLowerCase();
            var genre = bookList[i].genre.toLowerCase();
            var desc = bookList[i].description.toLowerCase();

            if(title.includes(input) || author.includes(input) || genre.includes(input) || desc.includes(input))
            {
                index.push(i);
            }
        }

        var hrow = document.createElement('tr');
        var hcol1 = document.createElement('th');
        hcol1.appendChild(document.createTextNode("Book Title"));
        var hcol2 = document.createElement('th');
        hcol2.appendChild(document.createTextNode("Author Name"));
        var hcol3 = document.createElement('th');
        hcol3.appendChild(document.createTextNode("Genre"));
        var hcol4 = document.createElement('th');
        hcol4.appendChild(document.createTextNode("Description"));

        hrow.appendChild(hcol1);
        hrow.appendChild(hcol2);
        hrow.appendChild(hcol3);
        hrow.appendChild(hcol4);
        table.appendChild(hrow);

        for(var i = 0; i < index.length; i++)
        {
            var row = document.createElement('tr');
            var col1 = document.createElement('td');
            var col2 = document.createElement('td');
            var col3 = document.createElement('td');
            var col4 = document.createElement('td');
            
            var title = document.createTextNode(bookList[index[i]].title);
            var author = document.createTextNode(bookList[index[i]].author);
            var genre = document.createTextNode(bookList[index[i]].genre);
            var desc = document.createTextNode(bookList[index[i]].description);
    
            col1.appendChild(title);
            col2.appendChild(author);
            col3.appendChild(genre);
            col4.appendChild(desc);
    
            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            row.appendChild(col4);
    
            table.appendChild(row);
        }

        div.appendChild(table);

    }
}