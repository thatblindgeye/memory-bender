const formatName = (imageURL) => {
  const splitURL = imageURL.split('/');
  const imageFileName = splitURL[splitURL.length - 1];
  const formattedName = imageFileName
    // copy character name up to the first dot of the hashed file name
    .slice(0, imageFileName.indexOf('.'))
    .replace('-', ' ');

  return formattedName;
};

export default formatName;
