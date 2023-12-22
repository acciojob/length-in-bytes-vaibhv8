const byteSize = (str) => {
  // Create a Blob object from the input string
  const blob = new Blob([str]);

  // Get the size of the Blob in bytes
  const sizeInBytes = blob.size;

  return sizeInBytes;
};

// Example usage:
const str = prompt("Enter some string.");
alert(byteSize(str));
