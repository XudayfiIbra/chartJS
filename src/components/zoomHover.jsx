import ReactImageMagnify from "react-image-magnify";
const ZoomHover = () => {
  const labmoImg = "/assets/xamar.jpg";
  return (
    <>
      <div className="w-[500px] h-[500px]">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "muslim",
              isFluidWidth: true,
              src: labmoImg,
            },
            largeImage: {
              src: labmoImg,
              width: 1279,
              height: 755,
            },
          }}
        />
      </div>
    </>
  );
};

export default ZoomHover;
