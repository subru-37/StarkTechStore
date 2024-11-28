const useImageDimensions = () => {
  const getImageDimensions = (url: string) => {
    const myImage = new Image();
    myImage.src = url;
    let height = 0;
    let width = 0;
    myImage.onload = () => {
      if (myImage.height && myImage.width) {
        height = myImage.height;
        width = myImage.width;
      }
    };
    return { height: height, width: width };
  };
  return { getImageDimensions };
};

export default useImageDimensions;
