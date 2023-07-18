function Footer () {
  const contactNumber = '09*********';
  const email = 'wanda@example.com';
  const linkedIn ='http://example.com';
  const company = 'Sample Company';
  const address = 'sample address';
  const regNumber = '12312321';
  const termsOfService = 'Example Terms of Service';
  const faceBook = 'facebook.com';
  const twitter = 'http://twitter.com';
  const instagram = 'http://instagram.com';
  const gitHub = 'https://github.com';
  const disclaimer = 'sample disclaimer';
  const webName = 'sample web name';
  const webLink = 'http://www.example.com'; 
    return (
      <>
      <footer className="m-3">
        
        <div className="container-fluid d-flex row m-auto bg-success">
        <h1 className="text-center">Footer</h1>
      <div className="container-fluid d-flex row">
        <div className="col-lg-1"></div>
        <div className="col-lg-2">
          <dt>Contact Information:</dt>
          <dd> Phone: {contactNumber}</dd>
          <dd>Email: {email}</dd>
          <dd>LinkedIn: {linkedIn}</dd>
        </div>

        <div className="col-lg-2">
          <dt>Legal Information:</dt>
          <dd>Company Name: {company}</dd>
          <dd>Company Address: {address}</dd>
          <dd>Company Registration Number: {regNumber}</dd>
        </div>

        <div className="col-lg-2">
          <dt>Terms of Service:</dt>
          <dd>Terms of Service:{termsOfService}</dd>
        </div>

        <div className="col-lg-2">
          <dt>Social Media Links:</dt>
          <dd>Facebook:{faceBook}</dd>
          <dd>Twitter:{twitter}</dd>
          <dd>Instagram:{instagram}</dd>
          <dd>GitHub:{gitHub}</dd>
        </div>

        <div className="col-lg-2">
          <dt>Disclaimer:</dt>
          <dd>Disclaimer:{disclaimer}</dd>
        </div>        
        <br/><br/><br/>
      </div>
      
      <div className="container-fluid d-flex row">
        <div className="col-lg-1"></div>
        <div className="col-lg-2">
      <dt>Website Information:</dt>
      <dd>Website Name: {webName}</dd>
      <dd>Website URL:{webLink}</dd>
        </div>
        <div className="col-lg-2">
      <dt>Privacy Policy:</dt>
      <dd>Privacy Policy: privPolicy</dd>
        </div>

        <div className="col-lg-2">
      <dt>Copyright Information:</dt>
      <dd>Copyright © 2023 Rapid {company}. All rights reserved.</dd>
        </div>

        <div className="col-lg-2">
      <dt>Accessibility:</dt>
      <dd>Accessibility Statement: {webLink}</dd>
        </div>
      </div>
      </div>
      </footer>
      </>
    )
  }
      
  export default Footer