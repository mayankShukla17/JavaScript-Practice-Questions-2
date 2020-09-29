// 3. XYZ Publishers wants to open a new division which deals with the printed book. Here is the sample data.

//     objBooks = [  
//         {  
//             book_id: 2314,  
//             title: 'My experiments with Truth',  
//             author: ‘Mahatama Gandhi',  
//             status: false  
//         },  

//         {  
//             book_id: 7864,  
//             title: 'Origin of species',  
//             author: 'Charles Darwin',  
//             status: false  
//         },  

//         {  
//             book_id: 1524,  
//                     title: 'Geetanjali',  
//             author: 'Rabindra Nath Tagore',  
//             status: true  
//         },  
//         {  
//             book_id: 0981,  
//             title: 'Le Contract Social',  
//             author: 'Jean Jacques Rousseau',  
//             status: true  
//         }];

// Perform following operations on the above data:

// a) Arrange the books in the order of book id.

// b) Arrange the book is the order of title.

// c) Remove the duplicate data.


objBooks = [
    {
        book_id: 7864,
        title: 'Origin of species',
        author: 'Charles Darwin',
        status: false
    },

    {
        book_id: 1524,
        title: 'Origin of species',
        author: 'Rabindra Nath Tagore',
        status: true
    },
    {
        book_id: 1504,
        title: 'Geetanjali',
        author: 'Rabindra Nath',
        status: false
    },
    {
        book_id: 0981,
        title: 'Le Contract Social',
        author: 'Jean Jacques Rousseau',
        status: true
    }];


function sortId(book1, book2) 
{
    if (book1.book_id < book2.book_id) 
    {
        return -1;

    } else if (book1.book_id > book2.book_id) 
    {
        return 1;

    } else 
    {
        return 0;
    }
}
function sortTitle(book1, book2)
 {

    if (book1.title < book2.title) 
    {
        return -1;

    } else if (book1.title > book2.title) 
    {
        return 1;

    } else 
    {
        return 0;
    }
}
function removeDuplicates(books) 
{
    // Declare a new array 
    let newArray = [];
    let uniqueObject = {};
    for (let i in books) 
    {
        objTitle = books[i]['title'];
        uniqueObject[objTitle] = books[i];
    }
    for (i in uniqueObject) 
    {
        newArray.push(uniqueObject[i]);
    }
    // Display the unique objects 
   return JSON.stringify(newArray);
}

// a) Arrange the books in the order of book id.
console.log(JSON.stringify(objBooks.sort(sortId)));
// b) Arrange the book is the order of title.
console.log(JSON.stringify(objBooks.sort(sortTitle)));
// c) Remove the duplicate data.
console.log(removeDuplicates(objBooks));

