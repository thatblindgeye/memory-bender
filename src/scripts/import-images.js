const importImages = (context) => {
  return context.keys().map(context);
};

const importedImages = importImages(
  require.context('../assets/images/cards/', false, /\.jpe?g$/)
);

export default importedImages;
