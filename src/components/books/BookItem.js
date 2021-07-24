import React from 'react';
import {Row, Col} from 'react-bootstrap';

import { IconContext } from "react-icons";
import { AiOutlineCaretRight } from "react-icons/ai";

const BookItem = ({ article }) => {

    let background = article.multimedia?.[0]?.url ?
    `https://nytimes.com/${article.multimedia[0].url}` :
    'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg';
    return (

        
      <>
    
      <div className="articleBlock" >
      <>
          {article && (
               <a href={article.web_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
      <div  id={article._id} className="fullW" >

         
         
         <div className="row d-flex align-items-center">
         <Col lg="2" >
                <div className="ArticleImageBlock" style={{ backgroundImage: `url(${background})` }}></div>
         
        </Col>
        <Col lg="9" >
     
        <div className="articleHeading">{article.headline.main} </div>
         <div className="articleAuth">{article.byline.original} </div>
         <div className="articleIntro">{article.snippet} </div>
       
        </Col>
        <div  className="col col-1 text-center" >
        <IconContext.Provider value={{ color: "#fff", size: "1.5em", className: "global-class-name" }}>
            <AiOutlineCaretRight />
          </IconContext.Provider>
         
        </div>
      </div>

          

          
      </div>
      </a>
          )}
          </>
      </div>
      </>
    );
};



export default BookItem;
