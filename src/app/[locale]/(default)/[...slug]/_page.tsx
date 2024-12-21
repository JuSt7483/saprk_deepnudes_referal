import Heading from '@/components/UI/primitives/Heading/Heading'
import React from 'react'

const PrivacyPage = () => {
    return (
        <div className="privacy-page">
            {/* <Heading breadcrump={["Privacy Policy"]}>Privacy Policy</Heading> */}
            <div className="privacy-page__content">
                <div className="privacy-page__textblock">
                    <div className="privacy-page__textblock-paragraph">
                        <p>
                            At Dockee Technologies, Inc. (dba Frame), we are committed to safeguarding your privacy and securing your information across all our platforms. This Privacy Policy governs the use of our website at frame.so, and all related services, tools, and applications we provide (&quot;Services&quot;).
                        </p>
                    </div>
                </div>
                <div className="privacy-page__textblock">
                    <h6 className='privacy-page__textblock-heading'>
                        1. Data Protection for Sensitive Data
                    </h6>
                    <div className="privacy-page__textblock-paragraph">
                        <p>
                            We take stringent measures to protect sensitive data including personal and financial information:
                        </p>
                    </div>
                    <ul className="privacy-page__textblock-list">
                        <li className="privacy-page__textblock-list-item"><b>Encryption</b>: All sensitive data is encrypted both in transit and at rest using industry-standard encryption protocols.</li>
                        <li className="privacy-page__textblock-list-item"><b>Access Controls</b>: Strict access controls are enforced to ensure that only authorized personnel have access to sensitive data.</li>
                    </ul>
                    <div className="privacy-page__textblock-paragraph">
                        <p>
                            Auditing and Monitoring: Regular audits are conducted to ensure the effectiveness of our data protection measures. We also monitor data access logs to prevent unauthorized access.
                        </p>
                    </div>
                </div>
                <div className="privacy-page__textblock">
                    <h6 className='privacy-page__textblock-heading'>
                        2. Information We Collect
                    </h6>
                    <div className="privacy-page__textblock-paragraph">
                        <p>
                            <b>a. Personal Information</b>: We collect personal information that you voluntarily provide to us when you register on our site, place an order, subscribe to our newsletter, respond to a survey, or fill out a form. This information may include your name, email address, mailing address, phone number, and financial information.
                        </p>
                    </div>
                    <div className="privacy-page__textblock-paragraph">
                        <p>
                            <b>b. Usage and Device Information</b>: When you access our Services, we may automatically collect certain information about your device and your usage of our services, including IP addresses, browser type, internet service provider, referring/exit pages, operating system, date/time stamps, and related data.
                        </p>
                    </div>
                    <div className="privacy-page__textblock-paragraph">
                        <p>
                            <b>c. Cookies and Tracking Technologies</b>: We use cookies and similar tracking technologies to track activity on our Services and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                        </p>
                    </div>
                </div>
                <div className="privacy-page__textblock">
                    <h6 className='privacy-page__textblock-heading'>
                        3. Google Workspace APIs
                    </h6>
                    <div className="privacy-page__textblock-paragraph">
                        <p>
                            We use Google Workspace APIs for integration with Google services. We do not use Google Workspace APIs to develop, improve, or train generalized AI and/or ML models.
                        </p>
                    </div>
                    <div className="privacy-page__textblock-paragraph">
                        <p>
                        <b>Retention and Deletion of Google User Data</b> <br/>
                        In our use of Google Workspace APIs and other Google services, we are meticulous about handling Google user data with the highest standard of privacy:
                        </p>
                    </div>
                    <ul className="privacy-page__textblock-list">
                        <li className="privacy-page__textblock-list-item">
                            <b>Data Retention Policy</b>: We retain Google user data only as long as necessary to provide you with our Services, or as required by law. Our retention periods are based on the necessity of data for operational and compliance needs.
                        </li>
                    </ul>
                    <div className="privacy-page__textblock-paragraph">
                        <p>
                            Data Deletion Protocol: Upon termination of a user&apos;s account or at a user&apos;s request, we promptly delete all associated Google user data from our systems, unless retention is mandated by legal or regulatory requirements. Users can request data deletion by contacting our support team at info@frame.so.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPage