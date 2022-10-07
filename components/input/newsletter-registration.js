import { useRef } from 'react';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const inputEl = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    const value = inputEl.current.value;

    fetch('/api/newsletter', {
      method: "POST",
      body: JSON.stringify({
        email: value,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => response.json()).then((data) => {
      console.log(data)
    })
    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={inputEl}
            type='email'
            id='email'
            placeholder='Your email'
            aria-label='Your email'
          />
          <button onClick={registrationHandler}>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;