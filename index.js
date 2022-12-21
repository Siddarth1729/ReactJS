import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
const Book1={
    source:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61ItRb1o7nL._AC_UY327_FMwebp_QL65_.jpg",title:"MASTERING BITCOIN 2/ED PROGRAMMING THE OPEN BLOCKCHAIN",author:"Andreas M. Antonopoulos ",children:""
}
const Book2={
    source:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91XcioGqNaL._AC_UY327_FMwebp_QL65_.jpg",title:"Blockchain Technology: The Future of Cryptocurrency, Metaverse, NFT, Defi & Web 3.0",author:"Deepak Gupta",children:""
}
const Book3={
    source:"https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61wnkjZPjyL._AC_UY327_FMwebp_QL65_.jpg",title:"Blockchain for the Book Industry: Exploring the Benefits and Opportunities for Publishers, Authors, and Readers",author:"Adam Smith",children:""
}
function Books(){
    return(
        <div>
            <Book source={Book1.source}
            title={Book1.title}
            author={Book1.author}></Book>
            <Book source={Book2.source}
            title={Book2.title}
            author={Book2.author}></Book>
            <Book source={Book3.source}
            title={Book3.title}
            author={Book3.author}></Book>
        </div>
    );        
}
function Book({source,title,author,children}){
    return(<div className='books'>
        <img src={source} alt=""></img>
        <h2>{title}</h2>
        <h4>{author}</h4>
        <h1>{children}</h1>
    </div>)
}
ReactDOM.render(<Books/>,document.getElementById("root"));