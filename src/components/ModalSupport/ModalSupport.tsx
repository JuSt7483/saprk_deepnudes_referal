import React, { useState } from 'react'
import "./ModalSupport.scss"
import ModalLayout from '../UI/primitives/Modal/ModalLayout'
import { Input, Upload, message } from 'antd'
import { RcFile, UploadProps } from 'antd/es/upload';
import { upload } from '@vercel/blob/client';
import { useFormState, useFormStatus } from 'react-dom';
import { createQuestion } from '@/shared/actions/createQuestion';
import Button from '../UI/primitives/Button/Button';
import { CopyIcon, WarningIcon } from '../UI/svg';
import SocialsList from '../SocialsList/SocialsList';


const ModalSupport = () => {
    const [fileList, setFileList] = useState<string[]>([]);
    const [state, formAction] = useFormState(createQuestion, {
        message: '',
    });
    const { pending } = useFormStatus();

    const props: UploadProps = {
        name: 'file',
        className: "modalsupport-form__upload",
        accept: "image/*",
        maxCount: 3,
        beforeUpload: () => {
            return false;
          },
        action: async (file) => {
            try {
                const blob = await upload(file.name, file, {
                    access: 'public',
                    handleUploadUrl: '/api/upload',
                });
                if(blob)
                    setFileList((prev) => [...prev, blob.url])
            } catch(e) {
                console.error(e)
            }

            return ""
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        }
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "Deepnudeart@gmail.com")
        message.success(`Copied email to clipboard!`);
    }
    
    return (
        <ModalLayout variant='corner'>
            <div className="modalsupport">
                <form action={formAction} className="modalsupport-form">
                    <div className="modalsupport__heading">
                        Fill out the form
                    </div>
                    <div className="modalsupport-form__row">
                        <input type="text" className='modalsupport-form__input' name="name" placeholder='Your name' required/>
                        <input type="email" className='modalsupport-form__input' name="email" placeholder='Your e-mail' required/>
                    </div>
                    <div className="modalsupport-form__row">
                        <Upload {...props}>
                            <button className='modalsupport-form__button' >Add photos</button>
                        </Upload>       
                    </div>
                    <div className="modalsupport-form__row">
                        <textarea name="text" className='modalsupport-form__input modalsupport-form__textarea' required placeholder='Your question'></textarea>
                    </div>
                    <div className="modalsupport-form__row modalsupport-form__accept">
                        <input type="checkbox" id="rules" name="rules" required />
                        <label htmlFor="rules">Accept the Privacy Police</label>
                    </div>
                    <div className="modalsupport-form__row">
                        <Button type='submit'>Submit</Button>
                    </div>
                    {fileList && <input hidden value={fileList} name='attachments'></input> }
                    {state?.message && 
                        <div className={`modalsupport-form__row modalsupport-form__message ${state?.message != "success" ? "modalsupport-form__message--error" : ""}`}>
                            <p>
                                {state?.message === "success" ? "Your message has been sent!" : "Error"}
                            </p>
                        </div>
                    }
                </form>
                <div className="modalsupport-blocks">
                    <div className="modalsupport-blocks__item modalsupport-email" onClick={handleCopyToClipboard}>
                        <div className="modalsupport__heading">
                            Or email us
                        </div>
                        <div className="modalsupport-email__content">
                            Deepnudeart@gmail.com
                            <div className="icon">
                                <CopyIcon />
                            </div>
                        </div>
                    </div>
                    <div className="modalsupport-blocks__item modalsupport-info">
                        <div className="icon">
                            <WarningIcon />
                        </div>
                        <p>
                            We will answer your questions <br></br> as soon as possible.
                        </p>
                    </div>
                    <div className="modalsupport-blocks__item modalsupport-socials">
                        <SocialsList />
                    </div>
                </div>
            </div>
        </ModalLayout>
    )
}

export default ModalSupport