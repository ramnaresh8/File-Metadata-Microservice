# File Metadata Microservice

This project is part of the freeCodeCamp API projects. It allows users to upload a file using a form and receives information about the uploaded file in JSON format.

## User Stories

1. **File Upload Form**: Users can submit a form that includes a file upload field.

2. **Form Input Field**: The file input field in the form must have the `name` attribute set to "upfile" to ensure compatibility with testing.

3. **File Information**: Upon submission, users receive the name and size of the uploaded file in bytes within the JSON response.

## Usage

1. Visit the main page of the application.

2. Use the provided form to upload a file.

3. Receive information about the uploaded file in JSON format.

## Hint

To handle file uploading, the project uses the `multer` npm package.
