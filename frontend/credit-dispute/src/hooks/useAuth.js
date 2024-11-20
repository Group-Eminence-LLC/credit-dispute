import {useEffect} from 'react';

const SigninwithgoogleButton = () =>{
const clientId=process.env.CLIENT_ID

function handleCallbackResponse(response){
console.log("Encoded JWT ID"+response.credentials)
}

    useEffect(() => {
        /* global google */
        if(window.google)
         {
          google.accounts.id.initialize({
            client_id: clientId,
            callback: handleCallbackResponse,
          });
          google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
          );
        }
      }, [clientId]);
    
      return (
        <div id="signInDiv"></div> // Ensure the div is rendered by the component
      );
    };
export default SigninwithgoogleButton;
