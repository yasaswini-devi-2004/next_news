//Function used to show the loading image while the form is being submitted
//It works in client side as we want the loading button when the user clicks on submit button
'use client';
import { useFormStatus } from "react-dom";

export default function FormSubmit(){
    const status = useFormStatus(); //we can use this inside a form tag only

    if(status.pending){
        return <p>Creating Post....</p>
    }

    return(
        <>
          <button type="reset">Reset</button>
          <button>Create Post</button>
        </>
    );
}