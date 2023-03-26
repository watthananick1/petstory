const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newFiles = event.target.files;
    
    if (newFiles && newFiles.length <= 6) {
      setFiles(Array.from(newFiles));
    } else {
      // show an error message or do something else
    }
  };
  