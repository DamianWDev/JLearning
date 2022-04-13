import { styled } from "@mui/system";
import { createRef, useState } from "react";
import Dropzone, { DropzoneRef } from "react-dropzone";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Overlap } from "../Overlap";

export function UploadImage() {
    const [img, setImg] = useState("");

    const dropzoneRef: React.RefObject<DropzoneRef> = createRef();
    const openDialog = () => {
        if (dropzoneRef.current) {
            dropzoneRef.current.open()
        }
    };

    return (
        <Overlap base={
            <div
                style={{
                    height: '226.5px',
                    width: '226.5px',
                    border: '2px solid red',
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Dropzone ref={dropzoneRef} noClick noKeyboard>
                    {({ getRootProps, getInputProps, acceptedFiles }) => {
                        return (

                            <div className="container" style={{
                                display: 'flex',
                            }}>
                                <div {...getRootProps({ className: 'dropzone' })}>
                                    <input {...getInputProps()} />
                                    {!acceptedFiles[0] && (<button
                                        type="button"
                                        onClick={openDialog}
                                        style={{
                                            backgroundColor: "orange",
                                            color: "wheat",
                                            borderRadius: '50%',
                                            border: 'none',
                                            cursor: 'pointer',
                                            height: '80px',
                                            width: '80px',
                                        }}>
                                        <CloudUploadIcon
                                            fontSize="large"
                                            htmlColor="white" />
                                    </button>)}
                                </div>
                                {acceptedFiles[0] && (
                                    <img src={URL.createObjectURL(acceptedFiles[0])} {...getRootProps({ className: 'dropzone' })}
                                        height="226.5px"
                                        width="226.5px"
                                        style={{
                                            //center
                                            borderRadius: '5px',
                                            position: 'relative',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    />
                                )}
                            </div>
                        );
                    }}
                </Dropzone>
            </div>}
            overlay={
                <h1 style={{
                    color:"red",
                    textAlign:"center",
                }}>Kurwić disa prondem</h1>
            }
        />
    );
}
