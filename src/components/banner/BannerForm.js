import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './BannerForm.module.css';

import { IconContext } from "react-icons";
import { AiOutlineSend } from "react-icons/ai";

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
    // optional: Could validate here

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
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Caption</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor='title'>Image Name</label>
            <input type='text' id='image' ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='title'>Caption Alignment</label>
            <input type='text' id='align' ref={alignInputRef} />
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
