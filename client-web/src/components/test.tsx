import React, { createRef } from 'react';
import Dropzone, { DropzoneRef } from 'react-dropzone';

const dropzoneRef : React.RefObject<DropzoneRef>= createRef();
const openDialog = () => {
  // Note that the ref is set async,
  // so it might be null at some point 
  if (dropzoneRef.current) {
    dropzoneRef.current.open()
  }
};

export function Test() {
  return (
    // Disable click and keydown behavior on the <Dropzone>
    <Dropzone ref={dropzoneRef} noClick noKeyboard>
      {({ getRootProps, getInputProps, acceptedFiles }) => {
        return (
          <div className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here</p>
              <button
                style={{
                  backgroundColor: '#00bcd4',
                  color: 'white',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  height: '100px',
                  width: '100px',
                }}
                type="button"
                onClick={openDialog}
              >
                Open File Dialog
              </button>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>
                {acceptedFiles.map(file => (
                  <img src={URL.createObjectURL(file)} height="100px" width="100px" />
                ))}
              </ul>
            </aside>
          </div>
        );
      }}
    </Dropzone>)
}