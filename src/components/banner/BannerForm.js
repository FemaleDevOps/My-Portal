import React from 'react';
import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './BannerForm.module.css';

import { IconContext } from "react-icons";
import { AiOutlineSend } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'



const BannerForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();
  const imageInputRef = useRef();
  const alignInputRef = useRef();


  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAlignt = alignInputRef.current.value;
   

    props.onAddQuote({ author: enteredAuthor, text: enteredText , image: enteredImage, align: enteredAlignt});
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
     
            <Form.Control  type="text" placeholder="Title" id='title' ref={authorInputRef}  />
          </div>
          <div className={classes.control}>
           
            <FloatingLabel controlId="floatingTextarea" label="Intro" className="">
              <Form.Control as="textarea" placeholder="Leave a comment here" id='text' ref={textInputRef}
                as="textarea" />
            </FloatingLabel>
         
          </div>
          <div className={classes.control}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file" id='image' ref={imageInputRef}  />
          </Form.Group>
        
          
          </div>
          <div className={classes.control}>
            <Form.Select id='align' ref={alignInputRef} >
              <option value="">Alignment</option>
              <option value="Captionleft">Left</option>
              <option value="Captionright">Right</option>
              <option value="Captioncenter">Center</option>
            </Form.Select>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>
            <IconContext.Provider value={{ color: "#00def8", size: "2.8em", className: "global-class-name" }}>
              <AiOutlineSend />
            </IconContext.Provider>
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default BannerForm;
