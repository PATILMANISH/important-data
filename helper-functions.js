// Get the URL as a string
export function getURLParams(name, url) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//Load script and remove script in ReactDOM  
const shouldLoadScript = page === "/auth";
  useEffect(() => {
    if (shouldLoadScript) {
      // Load the reCAPTCHA script only if the path matches "/auth"
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      document.head.appendChild(script);
      // Cleanup function to remove the reCAPTCHA element and the script when unmounting
      return () => {
        document.querySelector('.grecaptcha-badge')?.remove()
        document.head.removeChild(script);
      };
    }
  }, [shouldLoadScript]);

const isEightOrMoreCharacters = (password) => password.length >= 8;
const containsLetters = (password) => /[A-Za-z]/.test(password);
const containsNumber = (password) => /[0-9]/.test(password);
const containsSpecialCharacter = (password) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);


//Focus and Unfocus Input for Password Field
const [focused, setFocused] = React.useState(false)
const onFocus = () => setFocused(true)
const onBlur = () => setFocused(false)
<input onFocus={onFocus} onBlur={onBlur} type={showPassword ? "text" : "password"} id="txtPassword" className={getInputStyle(validationMessages.password)} name="password" value={formData.password} onChange={handleChange} />
