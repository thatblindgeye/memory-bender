const importImages = (context) => {
  return context.keys().map(context);
};

const importedImageArray = importImages(
  require.context('../assets/images/cards/', false, /\.jpe?g$/)
);

export default importedImageArray;
