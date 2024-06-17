import testImageSlides from "../assets/pexels-o-neil-gonzales-66734279-14047776.jpg";

export default function ImageSlidesShow() {
  return (
    <div
      className="h-[35rem] bg-[center_top_-8.5rem] bg-no-repeat bg-black mb-6"
      style={{ backgroundImage: `url(${testImageSlides})` }}
    ></div>
  );
}
