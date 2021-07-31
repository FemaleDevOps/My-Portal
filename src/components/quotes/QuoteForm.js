import { useRef, useState } from 'react';
import { Prompt, useHistory } from 'react-router-dom';


import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

import { IconContext } from "react-icons";
import { AiOutlineSend } from "react-icons/ai";

import { Container } from 'react-bootstrap';

import {  AiOutlineBackward , AiOutlinePlus} from "react-icons/ai";
const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  let history = useHistory();

  return (
    <Container>

      <div className={classes.topHeader}>
       
        <button onClick={() => history.goBack()}>
       <IconContext.Provider value={{ color: "#fff", size: "1.5em", className: "global-class-name" }}>
                  <AiOutlineBackward />
                </IconContext.Provider>
       </button>
       <h1>
       <IconContext.Provider value={{ color: "#13767C", size: "1.5em", className: classes.iconHeading  }}>
            <AiOutlinePlus />
        </IconContext.Provider>
          QUOTE</h1>
        </div>
      <Prompt
        when={isEntering}
        message={(location) =>
          'Are you sure you want to leave? All your entered data will be lost!'
        }
      />
      <div className={classes.custCard}>
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
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className='btn'>
            <IconContext.Provider value={{ color: "#00def8", size: "2.8em", className: "global-class-name" }}>
              <AiOutlineSend />
            </IconContext.Provider>
            </button>
          </div>
        </form>
      </div>
      </Container>
  );
};

export default QuoteForm;
