import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Thumb = (props) => {
    
    const [ loading, isLoading ] = useState(false);
    const [ file, uploadFile ] = useState();

    useEffect(() => {
        if (!props.file) { return; }
        
        isLoading(true);
        let reader = new FileReader();
        reader.onloadend = () => {
            isLoading(false);
            uploadFile(reader.result);
          };
        
        reader.readAsDataURL(props.file)
    },[props.file])

    return( 
    <React.Fragment>
      {
      !file ?  <p>No Image Uploaded</p> : loading ? <Spinner animation="grow" variant="info" /> : <img src={file}
        alt={file.name}
        className="img-thumbnail"
        height={200}
        width={200} />
                    }
    </React.Fragment>
    )
  }

export default Thumb;